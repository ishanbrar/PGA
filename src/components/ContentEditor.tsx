import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, X, Check } from 'lucide-react';
import firebaseService from '../services/firebaseService';

interface ContentEditorProps {
  contentId: string;
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ 
  contentId, 
  children, 
  className = '',
  tag = 'div'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [content, setContent] = useState<string>('');

  // Load content from Firebase when component mounts
  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const contentData = await firebaseService.getContent(contentId);
        if (contentData) {
          setContent(contentData.content);
        } else {
          setContent(children as string);
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(children as string);
      }
    };
    loadContent();
  }, [contentId, children]);

  const handleEdit = () => {
    setEditValue(content);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await firebaseService.updateContent(contentId, editValue);
      setContent(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue('');
  };

  // Content is already loaded in state

  if (isEditing) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative ${className}`}
      >
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full p-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          rows={3}
          autoFocus
        />
        <div className="absolute -top-2 -right-2 flex space-x-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md"
          >
            <Check className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCancel}
            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md"
          >
            <X className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const Element = tag as any;
  
  return (
    <div className={`relative group ${className}`}>
      <Element>{content}</Element>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEdit}
        className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <Edit3 className="w-4 h-4 text-white" />
      </motion.button>
    </div>
  );
};

export default ContentEditor;
