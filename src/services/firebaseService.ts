import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject
} from 'firebase/storage';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { db, storage, auth } from '../config/firebase';

// Types
export interface ContentSection {
  id?: string;
  contentId: string;
  title: string;
  content: string;
  page: string;
  section: string;
  language?: string;
  isPublished?: boolean;
  version?: number;
  lastModifiedBy?: string;
  lastModifiedAt?: Timestamp;
  createdAt?: Timestamp;
}

export interface ImageItem {
  id?: string;
  imageId: string;
  originalName: string;
  filename: string;
  url: string;
  alt: string;
  category: string;
  page: string;
  size?: {
    width: number;
    height: number;
  };
  fileSize: number;
  mimeType: string;
  isPublished?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  uploadedBy?: string;
  lastModifiedBy?: string;
  lastModifiedAt?: Timestamp;
  createdAt?: Timestamp;
}

export interface UserProfile {
  uid: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'editor' | 'viewer';
  permissions: {
    canEditContent: boolean;
    canUploadImages: boolean;
    canManageUsers: boolean;
    canPublish: boolean;
  };
  isActive: boolean;
  profileImage?: string;
  phone?: string;
  department?: string;
  notes?: string;
  createdAt: Timestamp;
  lastLogin?: Timestamp;
}

class FirebaseService {
  private currentUser: User | null = null;

  constructor() {
    // Listen for auth state changes
    onAuthStateChanged(auth, (user: any) => {
      this.currentUser = user;
    });
  }

  // Authentication methods
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Content management methods
  async getContent(contentId: string): Promise<ContentSection | null> {
    try {
      const q = query(
        collection(db, 'content'),
        where('contentId', '==', contentId),
        where('isPublished', '==', true)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() } as ContentSection;
      }
      return null;
    } catch (error) {
      console.error('Error getting content:', error);
      throw error;
    }
  }

  async getAllContent(): Promise<ContentSection[]> {
    try {
      const q = query(
        collection(db, 'content'),
        where('isPublished', '==', true),
        orderBy('page'),
        orderBy('section')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as ContentSection[];
    } catch (error) {
      console.error('Error getting all content:', error);
      throw error;
    }
  }

  async updateContent(contentId: string, content: string): Promise<void> {
    try {
      const q = query(
        collection(db, 'content'),
        where('contentId', '==', contentId)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const docRef = doc(db, 'content', querySnapshot.docs[0].id);
        await updateDoc(docRef, {
          content,
          lastModifiedAt: serverTimestamp(),
          lastModifiedBy: this.currentUser?.uid
        });
      }
    } catch (error) {
      console.error('Error updating content:', error);
      throw error;
    }
  }

  async createContent(contentData: Omit<ContentSection, 'id' | 'createdAt' | 'lastModifiedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'content'), {
        ...contentData,
        createdAt: serverTimestamp(),
        lastModifiedAt: serverTimestamp(),
        lastModifiedBy: this.currentUser?.uid,
        isPublished: true,
        version: 1
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating content:', error);
      throw error;
    }
  }

  async deleteContent(contentId: string): Promise<void> {
    try {
      const q = query(
        collection(db, 'content'),
        where('contentId', '==', contentId)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const docRef = doc(db, 'content', querySnapshot.docs[0].id);
        await updateDoc(docRef, { isPublished: false });
      }
    } catch (error) {
      console.error('Error deleting content:', error);
      throw error;
    }
  }

  // Image management methods
  async getAllImages(): Promise<ImageItem[]> {
    try {
      const q = query(
        collection(db, 'images'),
        where('isPublished', '==', true),
        orderBy('category'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as ImageItem[];
    } catch (error) {
      console.error('Error getting all images:', error);
      throw error;
    }
  }

  async uploadImage(imageFile: File, metadata: Omit<ImageItem, 'id' | 'url' | 'createdAt' | 'lastModifiedAt'>): Promise<ImageItem> {
    try {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Create image document in Firestore
      const imageData = {
        ...metadata,
        url: downloadURL,
        filename: snapshot.ref.name,
        createdAt: serverTimestamp(),
        lastModifiedAt: serverTimestamp(),
        uploadedBy: this.currentUser?.uid,
        lastModifiedBy: this.currentUser?.uid,
        isPublished: true
      };

      const docRef = await addDoc(collection(db, 'images'), imageData);
      
      return {
        id: docRef.id,
        ...imageData
      } as ImageItem;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  async updateImage(imageId: string, updates: Partial<ImageItem>): Promise<void> {
    try {
      const docRef = doc(db, 'images', imageId);
      await updateDoc(docRef, {
        ...updates,
        lastModifiedAt: serverTimestamp(),
        lastModifiedBy: this.currentUser?.uid
      });
    } catch (error) {
      console.error('Error updating image:', error);
      throw error;
    }
  }

  async deleteImage(imageId: string): Promise<void> {
    try {
      const docRef = doc(db, 'images', imageId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const imageData = docSnap.data() as ImageItem;
        
        // Delete from Storage
        if (imageData.filename) {
          const storageRef = ref(storage, `images/${imageData.filename}`);
          await deleteObject(storageRef);
        }
        
        // Soft delete from Firestore
        await updateDoc(docRef, { isPublished: false });
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  }

  // User management methods
  async getUsers(): Promise<UserProfile[]> {
    try {
      const q = query(
        collection(db, 'users'),
        where('isActive', '==', true),
        orderBy('firstName')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map((doc: any) => ({
        uid: doc.id,
        ...doc.data()
      })) as UserProfile[];
    } catch (error) {
      console.error('Error getting users:', error);
      throw error;
    }
  }

  async createUser(userData: Omit<UserProfile, 'uid' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        ...userData,
        createdAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const docRef = doc(db, 'users', userId);
      await updateDoc(docRef, updates);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const docRef = doc(db, 'users', userId);
      await updateDoc(docRef, { isActive: false });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  // Utility methods
  async getPageContent(page: string): Promise<ContentSection[]> {
    try {
      const q = query(
        collection(db, 'content'),
        where('page', '==', page),
        where('isPublished', '==', true),
        orderBy('section')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as ContentSection[];
    } catch (error) {
      console.error('Error getting page content:', error);
      throw error;
    }
  }

  async getImagesByCategory(category: string, page?: string): Promise<ImageItem[]> {
    try {
      let q = query(
        collection(db, 'images'),
        where('category', '==', category),
        where('isPublished', '==', true)
      );
      
      if (page) {
        q = query(q, where('page', '==', page));
      }
      
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as ImageItem[];
    } catch (error) {
      console.error('Error getting images by category:', error);
      throw error;
    }
  }
}

const firebaseService = new FirebaseService();
export default firebaseService;
