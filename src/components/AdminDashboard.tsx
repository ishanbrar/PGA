import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit3, 
  Image, 
  FileText, 
  Users, 
  Settings, 
  Save, 
  Upload, 
  Trash2, 
  Eye,
  Plus,
  X,
  LogOut
} from 'lucide-react';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  page: string;
  section: string;
}

interface ImageItem {
  id: string;
  url: string;
  alt: string;
  category: string;
  page: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [contentSections, setContentSections] = useState<ContentSection[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadCategory, setUploadCategory] = useState('');
  const [uploadPage, setUploadPage] = useState('');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sample content sections - in a real app, this would come from a database
  useEffect(() => {
    setContentSections([
      {
        id: 'hero-title',
        title: 'Hero Section Title',
        content: 'The DFW Panjabi Golf Club',
        page: 'Home',
        section: 'Hero'
      },
      {
        id: 'hero-subtitle',
        title: 'Hero Section Subtitle',
        content: 'Connecting the Panjabi community through the love of golf',
        page: 'Home',
        section: 'Hero'
      },
      {
        id: 'about-mission',
        title: 'Mission Statement',
        content: 'To provide an exceptional golf experience while fostering a strong Panjabi community',
        page: 'About',
        section: 'Mission'
      },
      {
        id: 'about-vision',
        title: 'Vision Statement',
        content: 'To be the leading Panjabi golf club in the United States, recognized for excellence, community impact, and cultural preservation while promoting the sport of golf.',
        page: 'About',
        section: 'Vision'
      }
    ]);

    setImages([
      {
        id: 'hero-bg',
        url: '/images/hero-bg.jpg',
        alt: 'Golf course background',
        category: 'Background',
        page: 'Home'
      },
      {
        id: 'gallery-1',
        url: '/images/gallery-1.jpg',
        alt: 'Golf tournament',
        category: 'Events',
        page: 'Gallery'
      }
    ]);
  }, []);

  const handleContentSave = (id: string, newContent: string) => {
    setContentSections(prev => 
      prev.map(section => 
        section.id === id 
          ? { ...section, content: newContent }
          : section
      )
    );
    setEditingSection(null);
    
    // Save to localStorage
    const updatedSections = contentSections.map(section => 
      section.id === id 
        ? { ...section, content: newContent }
        : section
    );
    localStorage.setItem('dfw-golf-content', JSON.stringify(updatedSections));
    
    // Update last saved timestamp
    setLastSaved(new Date());
    
    // Show success message
    alert('Content saved successfully!');
  };

  const handleImageSave = (id: string, newAlt: string, newCategory: string, newPage: string) => {
    setImages(prev => {
      const updated = prev.map(img => 
        img.id === id 
          ? { ...img, alt: newAlt, category: newCategory, page: newPage }
          : img
      );
      
      // Save to localStorage
      localStorage.setItem('dfw-golf-images', JSON.stringify(updated));
      
      return updated;
    });
    setEditingImage(null);
    
    // Show success message
    alert('Image details saved successfully!');
  };

  const handleImageUpload = () => {
    if (uploadFile && uploadCategory && uploadPage) {
      // In a real app, this would upload to a server/cloud storage
      const newImage: ImageItem = {
        id: `img-${Date.now()}`,
        url: URL.createObjectURL(uploadFile),
        alt: uploadFile.name,
        category: uploadCategory,
        page: uploadPage
      };
      
      setImages(prev => {
        const updated = [...prev, newImage];
        // Save to localStorage
        localStorage.setItem('dfw-golf-images', JSON.stringify(updated));
        return updated;
      });
      
      setShowImageUpload(false);
      setUploadFile(null);
      setUploadCategory('');
      setUploadPage('');
      
      // Show success message
      alert('Image uploaded successfully!');
    }
  };

  const deleteImage = (id: string) => {
    setImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      // Save to localStorage
      localStorage.setItem('dfw-golf-images', JSON.stringify(updated));
      return updated;
    });
    
    // Show success message
    alert('Image deleted successfully!');
  };

  const tabs = [
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'images', label: 'Image Management', icon: Image },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Save all content to localStorage
                  localStorage.setItem('dfw-golf-content', JSON.stringify(contentSections));
                  localStorage.setItem('dfw-golf-images', JSON.stringify(images));
                  
                  // Update last saved timestamp
                  setLastSaved(new Date());
                  
                  // Show success message
                  alert('All changes have been published and saved!');
                }}
                className="btn-primary"
              >
                <Save className="w-4 h-4 mr-2" />
                Publish Changes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Open the main site in a new tab
                  window.open('/', '_blank');
                }}
                className="btn-secondary"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview Site
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResetConfirm(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mr-2"
              >
                Reset to Defaults
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-green-700">
                💾 Admin Dashboard - All changes are automatically saved
              </span>
              {lastSaved && (
                <span className="text-green-600">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className="text-green-600">
              Changes are saved locally and will persist between sessions
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 inline mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
              <p className="text-gray-600">Edit website text content easily</p>
            </div>

            <div className="grid gap-6">
              {contentSections.map((section) => (
                <motion.div
                  key={section.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-500">
                        Page: {section.page} | Section: {section.section}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setEditingSection(editingSection === section.id ? null : section.id)}
                      className="btn-secondary"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      {editingSection === section.id ? 'Cancel' : 'Edit'}
                    </motion.button>
                  </div>

                  {editingSection === section.id ? (
                    <div className="space-y-4">
                      <textarea
                        value={section.content}
                        onChange={(e) => {
                          setContentSections(prev => 
                            prev.map(s => 
                              s.id === section.id 
                                ? { ...s, content: e.target.value }
                                : s
                            )
                          );
                        }}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleContentSave(section.id, section.content)}
                          className="btn-primary"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Image Management Tab */}
        {activeTab === 'images' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Image Management</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowImageUpload(true)}
                className="btn-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload New Image
              </motion.button>
            </div>

            {/* Image Upload Modal */}
            {showImageUpload && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-lg p-6 w-full max-w-md"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Upload New Image</h3>
                    <button
                      onClick={() => setShowImageUpload(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={uploadCategory}
                        onChange={(e) => setUploadCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select Category</option>
                        <option value="Background">Background</option>
                        <option value="Events">Events</option>
                        <option value="Gallery">Gallery</option>
                        <option value="Team">Team</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Page
                      </label>
                      <select
                        value={uploadPage}
                        onChange={(e) => setUploadPage(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select Page</option>
                        <option value="Home">Home</option>
                        <option value="About">About</option>
                        <option value="Gallery">Gallery</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                    
                    <div className="flex space-x-3 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleImageUpload}
                        className="btn-primary flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowImageUpload(false)}
                        className="btn-secondary flex-1"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-sm border overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setEditingImage(editingImage === image.id ? null : image.id)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                      >
                        <Edit3 className="w-4 h-4 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteImage(image.id)}
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md"
                      >
                        <Trash2 className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {editingImage === image.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={image.alt}
                          onChange={(e) => {
                            setImages(prev => 
                              prev.map(img => 
                                img.id === image.id 
                                  ? { ...img, alt: e.target.value }
                                  : img
                              )
                            );
                          }}
                          placeholder="Image description"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <select
                          value={image.category}
                          onChange={(e) => {
                            setImages(prev => 
                              prev.map(img => 
                                img.id === image.id 
                                  ? { ...img, category: e.target.value }
                                  : img
                              )
                            );
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="Background">Background</option>
                          <option value="Events">Events</option>
                          <option value="Gallery">Gallery</option>
                          <option value="Team">Team</option>
                        </select>
                        <select
                          value={image.page}
                          onChange={(e) => {
                            setImages(prev => 
                              prev.map(img => 
                                img.id === image.id 
                                  ? { ...img, page: e.target.value }
                                  : img
                              )
                            );
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="Home">Home</option>
                          <option value="About">About</option>
                          <option value="Gallery">Gallery</option>
                          <option value="Events">Events</option>
                        </select>
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleImageSave(image.id, image.alt, image.category, image.page)}
                            className="btn-primary text-sm flex-1"
                          >
                            Save
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setEditingImage(null)}
                            className="btn-secondary text-sm flex-1"
                          >
                            Cancel
                          </motion.button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium text-gray-900 mb-1">{image.alt}</p>
                        <p className="text-sm text-gray-500">Category: {image.category}</p>
                        <p className="text-sm text-gray-500">Page: {image.page}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="text-gray-600">User management features coming soon...</p>
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="text-gray-600">Website settings and configuration coming soon...</p>
            </div>
          </motion.div>
        )}

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Reset to Defaults?</h3>
                <p className="text-gray-600">
                  This will reset all content and images to their original default values. 
                  This action cannot be undone.
                </p>
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      localStorage.removeItem('dfw-golf-content');
                      localStorage.removeItem('dfw-golf-images');
                      window.location.reload();
                    }}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex-1"
                  >
                    Yes, Reset Everything
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResetConfirm(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
