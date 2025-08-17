import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

interface ContentContextType {
  contentSections: ContentSection[];
  images: ImageItem[];
  updateContent: (id: string, newContent: string) => void;
  updateImage: (id: string, updates: Partial<ImageItem>) => void;
  addImage: (image: ImageItem) => void;
  deleteImage: (id: string) => void;
  getContent: (id: string) => string;
  getImage: (id: string) => ImageItem | undefined;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [contentSections, setContentSections] = useState<ContentSection[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);

  // Initialize with content from localStorage or default content
  useEffect(() => {
    const defaultContent: ContentSection[] = [
      {
        id: 'hero-title',
        title: 'Hero Section Title',
        content: 'The DFW Punjabi Golf Club',
        page: 'Home',
        section: 'Hero'
      },
      {
        id: 'hero-subtitle',
        title: 'Hero Section Subtitle',
        content: 'Connecting the Punjabi community through the love of golf',
        page: 'Home',
        section: 'Hero'
      },
      {
        id: 'hero-description',
        title: 'Hero Section Description',
        content: 'Building friendships, fostering excellence, and creating lasting memories on the green.',
        page: 'Home',
        section: 'Hero'
      },
      {
        id: 'about-mission',
        title: 'Mission Statement',
        content: 'To provide an exceptional golf experience while fostering a strong Punjabi community',
        page: 'About',
        section: 'Mission'
      },
      {
        id: 'about-vision',
        title: 'Vision Statement',
        content: 'To be the leading Punjabi golf club in the United States, recognized for excellence, community impact, and cultural preservation while promoting the sport of golf.',
        page: 'About',
        section: 'Vision'
      },
      {
        id: 'about-history',
        title: 'History Description',
        content: 'The DFW Punjabi Golf Club was established by a group of passionate golfers who wanted to create a space where the Punjabi community could enjoy their passion for golf while building meaningful connections with people who shared their cultural heritage.',
        page: 'About',
        section: 'History'
      },
      {
        id: 'contact-address',
        title: 'Contact Address',
        content: '123 Golf Club Drive, Dallas, TX 75201',
        page: 'Contact',
        section: 'Address'
      },
      {
        id: 'contact-phone',
        title: 'Contact Phone',
        content: '(555) 123-4567',
        page: 'Contact',
        section: 'Phone'
      },
      {
        id: 'contact-email',
        title: 'Contact Email',
        content: 'info@dfwpunjabigolf.com',
        page: 'Contact',
        section: 'Email'
      },
      {
        id: 'members-benefits-intro',
        title: 'Members Benefits Introduction',
        content: 'Join our exclusive community of Punjabi golf enthusiasts and experience premium golf access, cultural connection, and lasting friendships.',
        page: 'Members',
        section: 'Benefits'
      }
    ];

    const defaultImages: ImageItem[] = [
      {
        id: 'hero-bg',
        url: '/images/hero-bg.jpg',
        alt: 'Beautiful golf course background',
        category: 'Background',
        page: 'Home'
      },
      {
        id: 'gallery-1',
        url: '/images/gallery-1.jpg',
        alt: 'Golf tournament celebration',
        category: 'Events',
        page: 'Gallery'
      },
      {
        id: 'gallery-2',
        url: '/images/gallery-2.jpg',
        alt: 'Team photo on the green',
        category: 'Team',
        page: 'Gallery'
      },
      {
        id: 'about-bg',
        url: '/images/about-bg.jpg',
        alt: 'Golf course landscape',
        category: 'Background',
        page: 'About'
      }
    ];

    // Load from localStorage if available, otherwise use defaults
    const savedContent = localStorage.getItem('dfw-golf-content');
    const savedImages = localStorage.getItem('dfw-golf-images');
    
    if (savedContent) {
      try {
        setContentSections(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error parsing saved content:', error);
        setContentSections(defaultContent);
      }
    } else {
      setContentSections(defaultContent);
    }
    
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (error) {
        console.error('Error parsing saved images:', error);
        setImages(defaultImages);
      }
    } else {
      setImages(defaultImages);
    }
  }, []);

  const updateContent = (id: string, newContent: string) => {
    setContentSections(prev => {
      const updated = prev.map(section => 
        section.id === id 
          ? { ...section, content: newContent }
          : section
      );
      
      // Save to localStorage
      localStorage.setItem('dfw-golf-content', JSON.stringify(updated));
      
      return updated;
    });
  };

  const updateImage = (id: string, updates: Partial<ImageItem>) => {
    setImages(prev => 
      prev.map(img => 
        img.id === id 
          ? { ...img, ...updates }
          : img
      )
    );
  };

  const addImage = (image: ImageItem) => {
    setImages(prev => [...prev, image]);
  };

  const deleteImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const getContent = (id: string): string => {
    const section = contentSections.find(s => s.id === id);
    return section ? section.content : '';
  };

  const getImage = (id: string): ImageItem | undefined => {
    return images.find(img => img.id === id);
  };

  const value: ContentContextType = {
    contentSections,
    images,
    updateContent,
    updateImage,
    addImage,
    deleteImage,
    getContent,
    getImage
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};
