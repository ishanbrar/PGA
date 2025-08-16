// API Service for connecting to cloud backend
// This replaces localStorage with actual API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  private token: string | null = null;

  // Set authentication token
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  // Get authentication token
  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('auth_token');
    }
    return this.token;
  }

  // Clear authentication token
  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // Get headers for API requests
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = this.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  // Generic API request method
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          this.clearToken();
          throw new Error('Authentication failed. Please login again.');
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication endpoints
  async login(username: string, password: string) {
    const response = await this.request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    
    this.setToken(response.token);
    return response;
  }

  async logout() {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearToken();
    }
  }

  async getCurrentUser() {
    return this.request<any>('/auth/me');
  }

  // Content management endpoints
  async getContent(contentId: string) {
    return this.request<any>(`/content/${contentId}`);
  }

  async getAllContent() {
    return this.request<any[]>('/content');
  }

  async updateContent(contentId: string, content: string) {
    return this.request<any>(`/content/${contentId}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
    });
  }

  async createContent(contentData: any) {
    return this.request<any>('/content', {
      method: 'POST',
      body: JSON.stringify(contentData),
    });
  }

  async deleteContent(contentId: string) {
    return this.request(`/content/${contentId}`, {
      method: 'DELETE',
    });
  }

  // Image management endpoints
  async getAllImages() {
    return this.request<any[]>('/images');
  }

  async uploadImage(imageFile: File, metadata: any) {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await fetch(`${API_BASE_URL}/images/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    return response.json();
  }

  async updateImage(imageId: string, updates: any) {
    return this.request<any>(`/images/${imageId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteImage(imageId: string) {
    return this.request(`/images/${imageId}`, {
      method: 'DELETE',
    });
  }

  // Admin endpoints
  async getUsers() {
    return this.request<any[]>('/admin/users');
  }

  async createUser(userData: any) {
    return this.request<any>('/admin/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(userId: string, updates: any) {
    return this.request<any>(`/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteUser(userId: string) {
    return this.request(`/admin/users/${userId}`, {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck() {
    return this.request<{ status: string; timestamp: string }>('/health');
  }

  // Check if API is available
  async isApiAvailable(): Promise<boolean> {
    try {
      await this.healthCheck();
      return true;
    } catch (error) {
      return false;
    }
  }
}

// Create singleton instance
const apiService = new ApiService();

export default apiService;
