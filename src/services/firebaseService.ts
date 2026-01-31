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

  onAuthStateChanged(callback: (user: any) => void) {
    return auth.onAuthStateChanged(callback);
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
      // Try with orderBy first, but fallback to simple query if index doesn't exist
      let querySnapshot;
      try {
        const q = db.collection('content').where('isPublished', '==', true).orderBy('page').orderBy('section');
        querySnapshot = await q.get();
      } catch (indexError: any) {
        // If index error, try without orderBy
        if (indexError.code === 'failed-precondition' || indexError.message?.includes('index')) {
          console.warn('Firestore index not found, fetching without orderBy');
          const q = db.collection('content').where('isPublished', '==', true);
          querySnapshot = await q.get();
        } else {
          throw indexError;
        }
      }
      
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
      // Get current user synchronously to ensure we have the latest auth state
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('User not authenticated. Please log in to save content.');
      }

      const q = db.collection('content').where('contentId', '==', contentId);
      const querySnapshot = await q.get();
      
      if (!querySnapshot.empty) {
        const docRef = db.collection('content').doc(querySnapshot.docs[0].id);
        await docRef.update({
          content,
          lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastModifiedBy: currentUser.uid
        });
        console.log(`✅ Content updated successfully: ${contentId}`);
      } else {
        // Throw error if content doesn't exist so caller can create it
        throw new Error(`Content not found: ${contentId}`);
      }
    } catch (error: any) {
      console.error('Error updating content:', error);
      // Provide more helpful error messages
      if (error.code === 'permission-denied') {
        throw new Error('Permission denied. Please check Firebase security rules and ensure you are logged in.');
      } else if (error.code === 'unauthenticated') {
        throw new Error('Authentication required. Please log in to save content.');
      }
      throw error;
    }
  }

  async createContent(contentData: Omit<ContentSection, 'id' | 'createdAt' | 'lastModifiedAt'>): Promise<string> {
    try {
      // Get current user synchronously to ensure we have the latest auth state
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('User not authenticated. Please log in to create content.');
      }

      const docRef = await db.collection('content').add({
        ...contentData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastModifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastModifiedBy: currentUser.uid,
        isPublished: true,
        version: 1
      });
      console.log(`✅ Content created successfully: ${contentData.contentId} with ID: ${docRef.id}`);
      return docRef.id;
    } catch (error: any) {
      console.error('Error creating content:', error);
      // Provide more helpful error messages
      if (error.code === 'permission-denied') {
        throw new Error('Permission denied. Please check Firebase security rules and ensure you are logged in.');
      } else if (error.code === 'unauthenticated') {
        throw new Error('Authentication required. Please log in to create content.');
      }
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

  // Image Management Methods
  async uploadImage(
    file: File, 
    imageId: string, 
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${imageId}`);
      
      // Upload file with progress tracking
      const uploadTask = imageRef.put(file);
      
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) onProgress(progress);
        },
        (error) => {
          console.error('Upload error:', error);
          throw error;
        }
      );

      // Wait for upload to complete
      await uploadTask;
      
      // Get download URL
      const downloadURL = await imageRef.getDownloadURL();
      
      // Save image metadata to Firestore
      await db.collection('images').doc(imageId).set({
        id: imageId,
        url: downloadURL,
        filename: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: firebase.firestore.FieldValue.serverTimestamp(),
        uploadedBy: firebase.auth().currentUser?.uid || 'unknown'
      });

      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  async deleteImage(imageId: string): Promise<void> {
    try {
      // Delete from Storage
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${imageId}`);
      await imageRef.delete();
      
      // Delete from Firestore
      await db.collection('images').doc(imageId).delete();
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  }

  async getImage(imageId: string): Promise<string | null> {
    try {
      const doc = await db.collection('images').doc(imageId).get();
      if (doc.exists) {
        return doc.data()?.url || null;
      }
      return null;
    } catch (error) {
      console.error('Error getting image:', error);
      return null;
    }
  }

  async getAllImages(): Promise<Array<{ id: string; url: string; filename: string; uploadedAt: any }>> {
    try {
      const snapshot = await db
        .collection('images')
        .where('isPublished', '==', true)
        .orderBy('uploadedAt', 'desc')
        .get();
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Array<{ id: string; url: string; filename: string; uploadedAt: any }>;
    } catch (error) {
      console.error('Error getting all images:', error);
      return [];
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
