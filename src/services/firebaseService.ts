import firebase from 'firebase/app';
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
  lastModifiedAt?: any;
  createdAt?: any;
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
  lastModifiedAt?: any;
  createdAt?: any;
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
  createdAt: any;
  lastLogin?: any;
}

class FirebaseService {
  private currentUser: any = null;

  constructor() {
    // Listen for auth state changes
    auth.onAuthStateChanged((user: any) => {
      this.currentUser = user;
    });
  }

  // Authentication methods
  async login(email: string, password: string) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  // Content management methods
  async getContent(contentId: string): Promise<ContentSection | null> {
    try {
      const q = db.collection('content').where('contentId', '==', contentId).where('isPublished', '==', true);
      const querySnapshot = await q.get();
      
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
      const q = db.collection('content').where('isPublished', '==', true).orderBy('page').orderBy('section');
      const querySnapshot = await q.get();
      
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
      const q = db.collection('content').where('contentId', '==', contentId);
      const querySnapshot = await q.get();
      
      if (!querySnapshot.empty) {
        const docRef = db.collection('content').doc(querySnapshot.docs[0].id);
        await docRef.update({
          content,
          lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
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
      const docRef = await db.collection('content').add({
        ...contentData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
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
      const q = db.collection('content').where('contentId', '==', contentId);
      const querySnapshot = await q.get();
      
      if (!querySnapshot.empty) {
        const docRef = db.collection('content').doc(querySnapshot.docs[0].id);
        await docRef.update({ isPublished: false });
      }
    } catch (error) {
      console.error('Error deleting content:', error);
      throw error;
    }
  }

  // Image management methods
  async getAllImages(): Promise<ImageItem[]> {
    try {
      const q = db.collection('images').where('isPublished', '==', true).orderBy('category').orderBy('createdAt', 'desc');
      const querySnapshot = await q.get();
      
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
      const storageRef = storage.ref(`images/${Date.now()}_${imageFile.name}`);
      const snapshot = await storageRef.put(imageFile);
      const downloadURL = await snapshot.ref.getDownloadURL();

      // Create image document in Firestore
      const imageData = {
        ...metadata,
        url: downloadURL,
        filename: snapshot.ref.name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
        uploadedBy: this.currentUser?.uid,
        lastModifiedBy: this.currentUser?.uid,
        isPublished: true
      };

      const docRef = await db.collection('images').add(imageData);
      
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
      const docRef = db.collection('images').doc(imageId);
      await docRef.update({
        ...updates,
        lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastModifiedBy: this.currentUser?.uid
      });
    } catch (error) {
      console.error('Error updating image:', error);
      throw error;
    }
  }

  async deleteImage(imageId: string): Promise<void> {
    try {
      const docRef = db.collection('images').doc(imageId);
      const docSnap = await docRef.get();
      
      if (docSnap.exists) {
        const imageData = docSnap.data() as ImageItem;
        
        // Delete from Storage
        if (imageData.filename) {
          const storageRef = storage.ref(`images/${imageData.filename}`);
          await storageRef.delete();
        }
        
        // Soft delete from Firestore
        await docRef.update({ isPublished: false });
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  }

  // User management methods
  async getUsers(): Promise<UserProfile[]> {
    try {
      const q = db.collection('users').where('isActive', '==', true).orderBy('firstName');
      const querySnapshot = await q.get();
      
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
      const docRef = await db.collection('users').add({
        ...userData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const docRef = db.collection('users').doc(userId);
      await docRef.update(updates);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const docRef = db.collection('users').doc(userId);
      await docRef.update({ isActive: false });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  // Utility methods
  async getPageContent(page: string): Promise<ContentSection[]> {
    try {
      const q = db.collection('content').where('page', '==', page).where('isPublished', '==', true).orderBy('section');
      const querySnapshot = await q.get();
      
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
      let q = db.collection('images').where('category', '==', category).where('isPublished', '==', true);
      
      if (page) {
        q = q.where('page', '==', page);
      }
      
      const querySnapshot = await q.get();
      
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
