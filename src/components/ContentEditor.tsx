import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, X, Check } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

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
  const { getContent, updateContent } = useContent();

  const handleEdit = () => {
    setEditValue(getContent(contentId));
    setIsEditing(true);
  };

  const handleSave = () => {
    updateContent(contentId, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue('');
  };

  const content = getContent(contentId) || children;

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
