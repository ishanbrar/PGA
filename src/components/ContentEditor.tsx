import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Save, X } from 'lucide-react';
import firebaseService from '../services/firebaseService';
import { useAuth } from '../contexts/AuthContext';

interface ContentEditorProps {
  contentId: string;
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  showLabel?: boolean;
  label?: string;
  allowDirectEdit?: boolean;
  showSaveButton?: boolean;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  contentId,
  children,
  tag: Tag = 'div',
  className = '',
  showLabel = false,
  label = '',
  allowDirectEdit = false,
  showSaveButton = false
}) => {
  const { isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [originalContent, setOriginalContent] = useState('');

  useEffect(() => {
    loadContent();
  }, [contentId]);

  const loadContent = async () => {
    try {
      setIsLoading(true);
      const loadedContent = await firebaseService.getContent(contentId);
      if (loadedContent) {
        setContent(loadedContent.content);
        setOriginalContent(loadedContent.content);
      } else {
        // If no content found, use children as default
        setContent(children ? String(children) : '');
        setOriginalContent(children ? String(children) : '');
      }
    } catch (error) {
      console.error('Error loading content:', error);
      // Fallback to children
      setContent(children ? String(children) : '');
      setOriginalContent(children ? String(children) : '');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setHasChanges(newContent !== originalContent);
  };

  // Helper function to determine page and section from contentId
  const getPageAndSection = (contentId: string): { page: string; section: string } => {
    // Common patterns for page detection
    if (contentId.startsWith('home-')) return { page: 'home', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('about-')) return { page: 'about', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('members-')) return { page: 'members', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('schedule-')) return { page: 'schedule', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('contact-')) return { page: 'contact', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('events-') || contentId.includes('past-event')) return { page: 'events', section: contentId.includes('past-event') ? 'pastEvents' : 'events' };
    if (contentId.startsWith('gallery-')) return { page: 'gallery', section: contentId.split('-')[1] || 'default' };
    if (contentId.startsWith('board-')) return { page: 'board', section: contentId.split('-')[1] || 'default' };
    
    // Try to extract from contentId pattern: page-section-field
    const parts = contentId.split('-');
    if (parts.length >= 2) {
      const possiblePage = parts[0];
      const possibleSection = parts[1];
      return { page: possiblePage, section: possibleSection };
    }
    
    // Default fallback
    return { page: 'home', section: 'default' };
  };

  const handleSave = async () => {
    if (!hasChanges) return;
    
    try {
      setIsSaving(true);
      
      // Try to update first, if it fails, create new content
      try {
        await firebaseService.updateContent(contentId, content);
        console.log(`✅ Content updated: ${contentId}`);
      } catch (updateError: any) {
        console.log('Content not found, creating new content:', contentId);
        const { page, section } = getPageAndSection(contentId);
        
        const newId = await firebaseService.createContent({
          contentId,
          title: contentId.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
          content,
          page,
          section,
          language: 'en',
          isPublished: true,
          version: 1
        });
        console.log(`✅ Content created: ${contentId} with ID: ${newId}`);
      }
      
      setOriginalContent(content);
      setHasChanges(false);
      setIsEditing(false);
      
      // Show success message
      if (showSaveButton) {
        // Small delay to show success state
        setTimeout(() => {
          // Success is indicated by the button state change
        }, 100);
      }
    } catch (error: any) {
      console.error('Error saving content:', error);
      const errorMessage = error?.message || 'Failed to save content. Please try again.';
      alert(`Failed to save content: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setContent(originalContent);
    setHasChanges(false);
    setIsEditing(false);
  };

  const handleDirectEdit = () => {
    if (allowDirectEdit) {
      setIsEditing(true);
    }
  };

  if (isLoading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      {showLabel && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      {/* Content Display/Edit */}
      {isEditing ? (
        <div className="space-y-3">
          <textarea
            value={content}
            onChange={(e) => handleContentChange(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter content..."
          />
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              disabled={!hasChanges || isSaving}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {isSaving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCancel}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </motion.button>
          </div>
        </div>
      ) : (
        <div 
          className={`group ${allowDirectEdit && isAuthenticated ? 'cursor-pointer hover:bg-gray-50 hover:border-blue-300' : ''}`}
          onClick={allowDirectEdit && isAuthenticated ? handleDirectEdit : undefined}
        >
          <Tag className={`min-h-[2rem] p-2 rounded border transition-colors ${
            allowDirectEdit && isAuthenticated 
              ? 'border-transparent group-hover:border-gray-200' 
              : 'border-transparent'
          }`}>
            {content || (children ? String(children) : (isAuthenticated ? 'Click to add content...' : ''))}
          </Tag>
          
          {/* Edit Icon (only show if not allowing direct edit AND admin is authenticated) */}
          {!allowDirectEdit && isAuthenticated && (
            <div className="flex justify-end mt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
                className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                title="Edit content"
              >
                <Edit3 className="w-4 h-4" />
              </motion.button>
            </div>
          )}
          
          {/* Direct Edit Hint (only show if allowing direct edit AND admin is authenticated) */}
          {allowDirectEdit && isAuthenticated && (
            <div className="text-xs text-gray-400 mt-1 text-center">
              Click to edit
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentEditor;
