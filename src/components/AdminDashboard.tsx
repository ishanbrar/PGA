import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit3, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  RefreshCw, 
  Search,
  Image as ImageIcon,
  LogOut
} from 'lucide-react';
import firebaseService from '../services/firebaseService';
import ContentEditor from './ContentEditor';
import ImageEditor from './ImageEditor';

// Content mapping configuration - defines all editable content on the site
const CONTENT_MAPPING = {
  home: {
    hero: {
      'hero-title': 'Hero Title',
      'hero-subtitle': 'Hero Subtitle',
      'hero-description': 'Hero Description',
      'hero-logo': 'Hero Logo',
      'hero-cta-primary': 'Primary CTA Button',
      'hero-cta-secondary': 'Secondary CTA Button'
    },
    stats: {
      'stats-members': 'Members Count',
      'stats-members-label': 'Members Label',
      'stats-years': 'Years Count',
      'stats-years-label': 'Years Label',
      'stats-events': 'Events Count',
      'stats-events-label': 'Events Label',
      'stats-courses': 'Courses Count',
      'stats-courses-label': 'Courses Label'
    },
    features: {
      'feature-1-title': 'Feature 1 Title',
      'feature-1-description': 'Feature 1 Description',
      'feature-2-title': 'Feature 2 Title',
      'feature-2-description': 'Feature 2 Description',
      'feature-3-title': 'Feature 3 Title',
      'feature-3-description': 'Feature 3 Description',
      'feature-4-title': 'Feature 4 Title',
      'feature-4-description': 'Feature 4 Description'
    },
    upcoming: {
      'home-upcoming-events-title': 'Upcoming Events Title',
      'home-upcoming-events-subtitle': 'Upcoming Events Subtitle'
    },
    events: {
      'home-event-1-title': 'Event 1 Title',
      'home-event-1-date': 'Event 1 Date',
      'home-event-1-description': 'Event 1 Description',
      'home-event-2-title': 'Event 2 Title',
      'home-event-2-date': 'Event 2 Date',
      'home-event-2-description': 'Event 2 Description'
    }
  },
  about: {
    hero: {
      'about-hero-title': 'About Hero Title',
      'about-hero-subtitle': 'About Hero Subtitle'
    },
    mission: {
      'mission-vision-title': 'Mission & Vision Title',
      'mission-title': 'Mission Title',
      'mission-content': 'Mission Content',
      'vision-title': 'Vision Title',
      'vision-content': 'Vision Content'
    },
    values: {
      'values-title': 'Values Title',
      'values-subtitle': 'Values Subtitle',
      'value-1-title': 'Value 1 Title',
      'value-1-description': 'Value 1 Description',
      'value-2-title': 'Value 2 Title',
      'value-2-description': 'Value 2 Description',
      'value-3-title': 'Value 3 Title',
      'value-3-description': 'Value 3 Description',
      'value-4-title': 'Value 4 Title',
      'value-4-description': 'Value 4 Description'
    },
    stats: {
      'about-stats-title': 'About Stats Title',
      'about-stats-subtitle': 'About Stats Subtitle',
      'about-stat-1-number': 'About Stat 1 Number',
      'about-stat-1-label': 'About Stat 1 Label',
      'about-stat-2-number': 'About Stat 2 Number',
      'about-stat-2-label': 'About Stat 2 Label',
      'about-stat-3-number': 'About Stat 3 Number',
      'about-stat-3-label': 'About Stat 3 Label'
    },
    board: {
      'board-title': 'Board of Directors Title',
      'board-subtitle': 'Board of Directors Subtitle',
      'board-member-1-name': 'Board Member 1 Name',
      'board-member-1-position': 'Board Member 1 Position',
      'board-member-1-bio': 'Board Member 1 Bio',
      'board-member-2-name': 'Board Member 2 Name',
      'board-member-2-position': 'Board Member 2 Position',
      'board-member-2-bio': 'Board Member 2 Bio',
      'board-member-3-name': 'Board Member 3 Name',
      'board-member-3-position': 'Board Member 3 Position',
      'board-member-3-bio': 'Board Member 3 Bio',
      'board-member-4-name': 'Board Member 4 Name',
      'board-member-4-position': 'Board Member 4 Position',
      'board-member-4-bio': 'Board Member 4 Bio',
      'board-member-5-name': 'Board Member 5 Name',
      'board-member-5-position': 'Board Member 5 Position',
      'board-member-5-bio': 'Board Member 5 Bio',
      'board-member-6-name': 'Board Member 6 Name',
      'board-member-6-position': 'Board Member 6 Position',
      'board-member-6-bio': 'Board Member 6 Bio'
    }
  },
  members: {
    hero: {
      'members-hero-title': 'Members Hero Title',
      'members-hero-subtitle': 'Members Hero Subtitle'
    },
    membership: {
      'membership-title': 'Membership Title',
      'membership-subtitle': 'Membership Subtitle'
    },
    benefits: {
      'benefits-title': 'Benefits Title',
      'benefits-subtitle': 'Benefits Subtitle',
      'benefit-1-title': 'Benefit 1 Title',
      'benefit-1-description': 'Benefit 1 Description',
      'benefit-2-title': 'Benefit 2 Title',
      'benefit-2-description': 'Benefit 2 Description',
      'benefit-3-title': 'Benefit 3 Title',
      'benefit-3-description': 'Benefit 3 Description',
      'benefit-4-title': 'Benefit 4 Title',
      'benefit-4-description': 'Benefit 4 Description'
    }
  },
  board: {
    hero: {
      'board-hero-title': 'Board Hero Title',
      'board-hero-subtitle': 'Board Hero Subtitle'
    },
    president: {
      'board-president-name': 'President Name',
      'board-president-email': 'President Email',
      'board-president-phone': 'President Phone',
      'board-president-bio': 'President Bio'
    },
    treasurer: {
      'board-treasurer-name': 'Treasurer Name',
      'board-treasurer-email': 'Treasurer Email',
      'board-treasurer-phone': 'Treasurer Phone',
      'board-treasurer-bio': 'Treasurer Bio'
    },
    tournamentDirector: {
      'board-tournament-director-name': 'Tournament Director Name',
      'board-tournament-director-email': 'Tournament Director Email',
      'board-tournament-director-phone': 'Tournament Director Phone',
      'board-tournament-director-bio': 'Tournament Director Bio'
    }
  },
  schedule: {
    hero: {
      'schedule-hero-title': 'Schedule Hero Title',
      'schedule-hero-subtitle': 'Schedule Hero Subtitle'
    },
    calendar: {
      'calendar-title': 'Calendar Title',
      'calendar-subtitle': 'Calendar Subtitle'
    },
    upcoming: {
      'upcoming-events-title': 'Upcoming Events Title',
      'upcoming-events-subtitle': 'Upcoming Events Subtitle'
    },
    events: {
      'schedule-event-1-title': 'Schedule Event 1 Title',
      'schedule-event-1-time': 'Schedule Event 1 Time',
      'schedule-event-1-location': 'Schedule Event 1 Location',
      'schedule-event-1-description': 'Schedule Event 1 Description',
      'schedule-event-2-title': 'Schedule Event 2 Title',
      'schedule-event-2-time': 'Schedule Event 2 Time',
      'schedule-event-2-location': 'Schedule Event 2 Location',
      'schedule-event-2-description': 'Schedule Event 2 Description'
    }
  },
  contact: {
    hero: {
      'contact-hero-title': 'Contact Hero Title',
      'contact-hero-subtitle': 'Contact Hero Subtitle'
    },
    methods: {
      'how-to-reach-title': 'How to Reach Us Title',
      'how-to-reach-subtitle': 'How to Reach Us Subtitle'
    }
  },
  events: {
    hero: {
      'events-hero-title': 'Events Hero Title',
      'events-hero-subtitle': 'Events Hero Subtitle'
    },
    calendar: {
      'events-calendar-title': 'Events Calendar Title',
      'events-calendar-subtitle': 'Events Calendar Subtitle'
    },
    upcoming: {
      'events-upcoming-title': 'Events Upcoming Title',
      'events-upcoming-subtitle': 'Events Upcoming Subtitle'
    },
    events: {
      'events-event-1-title': 'Events Event 1 Title',
      'events-event-1-date': 'Events Event 1 Date',
      'events-event-1-time': 'Events Event 1 Time',
      'events-event-1-location': 'Events Event 1 Location',
      'events-event-1-description': 'Events Event 1 Description',
      'events-event-1-price': 'Events Event 1 Price',
      'events-event-2-title': 'Events Event 2 Title',
      'events-event-2-date': 'Events Event 2 Date',
      'events-event-2-time': 'Events Event 2 Time',
      'events-event-2-location': 'Events Event 2 Location',
      'events-event-2-description': 'Events Event 2 Description',
      'events-event-2-price': 'Events Event 2 Price'
    }
  },
  gallery: {
    hero: {
      'gallery-hero-title': 'Gallery Hero Title',
      'gallery-hero-subtitle': 'Gallery Hero Subtitle'
    },
    categories: {
      'gallery-categories-title': 'Gallery Categories Title',
      'gallery-categories-subtitle': 'Gallery Categories Subtitle'
    }
  }
};

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [contentSections, setContentSections] = useState<any[]>([]); // Changed to any[] to match new structure
  const [images, setImages] = useState<Array<{ id: string; url: string; filename: string }>>([]); // Changed to Array<{ id: string; url: string; filename: string }>
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadCategory, setUploadCategory] = useState('');
  const [uploadPage, setUploadPage] = useState('');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [firebaseStatus, setFirebaseStatus] = useState<'connected' | 'disconnected' | 'unknown'>('unknown');



  // Load all content from Firebase on component mount
  useEffect(() => {
    loadAllContent();
    loadImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fallback: if loading fails, create default content
  useEffect(() => {
    if (!isLoading && contentSections.length === 0) {
      console.log('No content loaded, creating default content sections');
      const fallbackContent: any[] = []; // Changed to any[]
      
      Object.entries(CONTENT_MAPPING).forEach(([page, sections]) => {
        Object.entries(sections).forEach(([sectionName, fields]) => {
          Object.entries(fields).forEach(([contentId, title]) => {
            const defaultContent = getDefaultContent(contentId, title as string, page as string, sectionName as string);
            fallbackContent.push(defaultContent);
          });
        });
      });
      
      setContentSections(fallbackContent);
      console.log('Fallback content created:', fallbackContent.length, 'items');
    }
  }, [isLoading, contentSections.length]);

  // Make the populate function available globally for debugging
  React.useEffect(() => {
    (window as any).populateBoardContent = populateBoardContent;
    (window as any).debugContentSections = () => {
      console.log('Current content sections:', contentSections);
      console.log('Board content IDs in CONTENT_MAPPING:', Object.keys(CONTENT_MAPPING.about?.board || {}));
    };
    console.log('🔧 Debug functions available:');
    console.log('  - window.populateBoardContent() - Populate board content in Firebase');
    console.log('  - window.debugContentSections() - Show current content state');
  }, [contentSections]);

  const loadAllContent = async () => {
    setIsLoading(true);
    try {
      // Try to load existing content from Firebase
      let existingContent: any[] = []; // Changed to any[]
      try {
        existingContent = await firebaseService.getAllContent();
        console.log('Successfully loaded content from Firebase:', existingContent.length, 'items');
        console.log('Sample existing content:', existingContent.slice(0, 3));
        setFirebaseStatus('connected');
      } catch (firebaseError) {
        console.warn('Firebase connection failed, using default content:', firebaseError);
        setFirebaseStatus('disconnected');
        // Continue with empty existing content - will use defaults
      }
      
            // Create comprehensive content sections based on mapping
      const allContentSections: any[] = []; // Changed to any[]
      
      console.log('🔍 Processing content mapping...');
      console.log('Existing content from Firebase:', existingContent.length, 'items');
      
      Object.entries(CONTENT_MAPPING).forEach(([page, sections]) => {
        Object.entries(sections).forEach(([sectionName, fields]) => {
          Object.entries(fields).forEach(([contentId, title]) => {
            // Check if content already exists in Firebase
            const existing = existingContent.find(c => c.contentId === contentId);
            
            if (existing) {
              console.log(`✅ Found existing content: ${contentId} (Firebase ID: ${existing.id})`);
              allContentSections.push(existing);
            } else {
              console.log(`❌ No existing content found for: ${contentId}, creating default`);
              // Create default content section with a temporary ID that's clearly not a Firebase ID
              const defaultContent = {
                id: `temp-${contentId}`,
                contentId: contentId,
                content: getDefaultContent(contentId, title as string, page as string, sectionName as string),
                page: page,
                section: sectionName,
                language: 'en',
                isPublished: true,
                version: 1
              };
              console.log(`📝 Created default content: ${contentId} with temp ID: ${defaultContent.id}`);
              allContentSections.push(defaultContent);
            }
          });
        });
      });
      
      setContentSections(allContentSections);
      console.log('Content sections loaded:', allContentSections.length, 'items');
      
      // Try to load images from Firebase
      try {
        const allImages = await firebaseService.getAllImages();
        setImages(allImages);
        console.log('Images loaded:', allImages.length, 'items');
      } catch (imageError) {
        console.warn('Failed to load images from Firebase:', imageError);
        // Set empty images array - admin can still upload new ones
        setImages([]);
      }
      
      } catch (error) {
      console.error('Error in loadAllContent:', error);
      // Don't show alert - just log the error and continue with defaults
      // The component will still work with default content
    } finally {
      setIsLoading(false);
    }
  };

  const loadImages = async () => {
    try {
      const imageList = await firebaseService.getAllImages();
      setImages(imageList);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };

  const getDefaultContent = (contentId: string, title: string, page: string, sectionName: string) => {
    const defaults: { [key: string]: string } = {
      // Home page defaults
      'hero-title': 'Welcome to DFW Punjabi Golf Club',
      'hero-subtitle': 'Building Community Through Golf',
      'hero-description': 'Join our vibrant community of golf enthusiasts and experience the perfect blend of sport, culture, and friendship.',
      'hero-logo': '/images/logo/logo-main.png',
      'hero-cta-primary': 'Join Our Club',
      'hero-cta-secondary': 'Learn More',
      'stats-members': '150+',
      'stats-members-label': 'Active Members',
      'stats-years': '5+',
      'stats-years-label': 'Years of Excellence',
      'stats-events': '25+',
      'stats-events-label': 'Annual Events',
      'stats-courses': '10+',
      'stats-courses-label': 'Partner Courses',
      'feature-1-title': 'Community First',
      'feature-1-description': 'Building lasting friendships through shared passion for golf',
      'feature-2-title': 'Cultural Heritage',
      'feature-2-description': 'Celebrating Punjabi culture while embracing golf traditions',
      'feature-3-title': 'Professional Development',
      'feature-3-description': 'Access to top-tier golf courses and professional instruction',
      'feature-4-title': 'Family Focused',
      'feature-4-description': 'Events and activities for the entire family',
      'home-upcoming-events-title': 'Upcoming Events',
      'home-upcoming-events-subtitle': 'Join us for these exciting upcoming events',
      'home-event-1-title': 'Spring Tournament',
      'home-event-1-date': 'March 15, 2024',
      'home-event-1-description': 'Annual spring championship tournament',
      'home-event-2-title': 'Family Golf Day',
      'home-event-2-date': 'April 20, 2024',
      'home-event-2-description': 'Fun day for all skill levels',

      // About page defaults
      'about-hero-title': 'About Our Club',
      'about-hero-subtitle': 'A Legacy of Excellence and Community',
      'mission-vision-title': 'Our Mission & Vision',
      'mission-title': 'Mission',
      'mission-content': 'To promote golf excellence while fostering a strong Punjabi community through sportsmanship and cultural pride.',
      'vision-title': 'Vision',
      'vision-content': 'To be the premier golf club that celebrates diversity, promotes golf excellence, and builds lasting community bonds.',
      'values-title': 'Our Core Values',
      'values-subtitle': 'The principles that guide everything we do',
      'value-1-title': 'Excellence',
      'value-1-description': 'Striving for the highest standards in everything we do',
      'value-2-title': 'Community',
      'value-2-description': 'Building strong relationships and supporting each other',
      'value-3-title': 'Heritage',
      'value-3-description': 'Honoring our cultural roots while embracing new traditions',
      'value-4-title': 'Sportsmanship',
      'value-4-description': 'Playing with integrity, respect, and fair play',
      'about-stats-title': 'Our Impact',
      'about-stats-subtitle': 'Numbers that tell our story',
      'about-stat-1-number': '150+',
      'about-stat-1-label': 'Active Members',
      'about-stat-2-number': '25+',
      'about-stat-2-label': 'Annual Events',
      'about-stat-3-number': '5+',
      'about-stat-3-label': 'Years of Excellence',
      'board-title': 'Board of Directors',
      'board-subtitle': 'Meet the dedicated leaders who steer our club towards success.',
      'board-member-1-name': 'Rajinder Singh',
      'board-member-1-position': 'President',
      'board-member-1-bio': 'Leading our club with over 15 years of golf experience and a passion for community building.',
      'board-member-2-name': 'Priya Patel',
      'board-member-2-position': 'Vice President',
      'board-member-2-bio': 'Dedicated to expanding our club\'s reach and enhancing member experiences.',
      'board-member-3-name': 'Amarjit Dhillon',
      'board-member-3-position': 'Secretary',
      'board-member-3-bio': 'Ensuring smooth communication and maintaining our club\'s official records.',
      'board-member-4-name': 'Gurpreet Kaur',
      'board-member-4-position': 'Treasurer',
      'board-member-4-bio': 'Managing our club\'s finances with transparency and fiscal responsibility.',
      'board-member-5-name': 'Harinder Singh',
      'board-member-5-position': 'Tournament Director',
      'board-member-5-bio': 'Organizing exciting tournaments and events that bring our community together.',
      'board-member-6-name': 'Manpreet Kaur',
      'board-member-6-position': 'Membership Director',
      'board-member-6-bio': 'Growing our community and ensuring every member feels valued and supported.',

      // Members page defaults
      'members-hero-title': 'Join Our Club',
      'members-hero-subtitle': 'Become Part of Something Special',
      'membership-title': 'Membership Benefits',
      'membership-subtitle': 'Discover what makes our club unique',
      'benefits-title': 'Why Choose Us',
      'benefits-subtitle': 'Exclusive benefits for our members',
      'benefit-1-title': 'Priority Event Booking',
      'benefit-1-description': 'Get first access to all club events and tournaments',
      'benefit-2-title': 'Family Events',
      'benefit-2-description': 'Special events designed for the whole family',
      'benefit-3-title': 'Easy Event Management',
      'benefit-3-description': 'Simple online booking and management system',
      'benefit-4-title': 'Professional Network',
      'benefit-4-description': 'Connect with other professionals in our community',

      // Board page defaults
      'board-hero-title': 'Our Leadership',
      'board-hero-subtitle': 'Meet the Team Behind Our Success',

      // Schedule page defaults
      'schedule-hero-title': 'Event Schedule',
      'schedule-hero-subtitle': 'Stay Updated with Our Latest Events',
      'calendar-title': 'Event Calendar',
      'calendar-subtitle': 'View all upcoming and past events',
      'upcoming-events-title': 'Upcoming Events',
      'upcoming-events-subtitle': 'Mark your calendar for these exciting events',
      'schedule-event-1-title': 'Spring Championship',
      'schedule-event-1-time': '9:00 AM - 5:00 PM',
      'schedule-event-1-location': 'PGA National Golf Club',
      'schedule-event-1-description': 'Annual spring championship tournament with prizes',
      'schedule-event-2-title': 'Family Golf Day',
      'schedule-event-2-time': '10:00 AM - 3:00 PM',
      'schedule-event-2-location': 'Local Driving Range',
      'schedule-event-2-description': 'Fun day for all skill levels and ages',

      // Contact page defaults
      'contact-hero-title': 'Get in Touch',
      'contact-hero-subtitle': 'We\'d Love to Hear from You',
      'how-to-reach-title': 'How to Reach Us',
      'how-to-reach-subtitle': 'Multiple ways to connect with our team',

      // Events page defaults
      'events-hero-title': 'Our Events',
      'events-hero-subtitle': 'Discover What\'s Happening',
      'events-calendar-title': 'Event Calendar',
      'events-calendar-subtitle': 'Stay updated with all our events',
      'events-upcoming-title': 'Upcoming Events',
      'events-upcoming-subtitle': 'Don\'t miss these exciting opportunities',
      'events-event-1-title': 'Spring Championship',
      'events-event-1-date': 'March 15, 2024',
      'events-event-1-time': '9:00 AM - 5:00 PM',
      'events-event-1-location': 'PGA National Golf Club',
      'events-event-1-description': 'Annual spring championship tournament with prizes',
      'events-event-1-price': '$75',
      'events-event-2-title': 'Family Golf Day',
      'events-event-2-date': 'April 20, 2024',
      'events-event-2-time': '10:00 AM - 3:00 PM',
      'events-event-2-location': 'Local Driving Range',
      'events-event-2-description': 'Fun day for all skill levels and ages',
      'events-event-2-price': '$25',

      // Board of Directors defaults
      'board-president-name': 'John Doe',
      'board-president-email': 'president@dfwpunjabigolf.com',
      'board-president-phone': '(555) 123-4567',
      'board-president-bio': 'Experienced golf enthusiast with 15+ years in community leadership',
      'board-treasurer-name': 'Jane Smith',
      'board-treasurer-email': 'treasurer@dfwpunjabigolf.com',
      'board-treasurer-phone': '(555) 234-5678',
      'board-treasurer-bio': 'Financial professional passionate about building sustainable golf communities',
      'board-tournament-director-name': 'Mike Johnson',
      'board-tournament-director-email': 'tournaments@dfwpunjabigolf.com',
      'board-tournament-director-phone': '(555) 345-6789',
      'board-tournament-director-bio': 'Tournament organizer with expertise in competitive golf events'
    };

    return defaults[contentId] || title;
  };

  const populateBoardContent = async () => {
    try {
      const boardContentIds = [
        'board-title', 'board-subtitle',
        'board-member-1-name', 'board-member-1-position', 'board-member-1-bio',
        'board-member-2-name', 'board-member-2-position', 'board-member-2-bio',
        'board-member-3-name', 'board-member-3-position', 'board-member-3-bio',
        'board-member-4-name', 'board-member-4-position', 'board-member-4-bio',
        'board-member-5-name', 'board-member-5-position', 'board-member-5-bio',
        'board-member-6-name', 'board-member-6-position', 'board-member-6-bio'
      ];

      for (const contentId of boardContentIds) {
        const existing = contentSections.find(c => c.contentId === contentId);
        if (!existing || existing.id.startsWith('temp-')) {
          console.log(`Creating board content: ${contentId}`);
          const defaultContent = getDefaultContent(contentId, contentId, 'about', 'board');
          const newId = await firebaseService.createContent({
            contentId: contentId,
            title: contentId.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
            content: defaultContent,
            page: 'about',
            section: 'board',
            language: 'en',
            isPublished: true,
            version: 1
          });
          
          // Update local state
          setContentSections(prev => 
            prev.map(s => 
              s.contentId === contentId 
                ? { ...s, id: newId, content: defaultContent }
                : s
            )
          );
        }
      }
      
      alert('Board content populated successfully!');
      loadAllContent(); // Reload to get fresh data
    } catch (error) {
      console.error('Error populating board content:', error);
      alert('Failed to populate board content. Please try again.');
    }
  };

  // Filter content based on search and selections
  const filteredContent = contentSections.filter(section => {
    const matchesSearch = (section.contentId && section.contentId.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (section.content && section.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (section.page && section.page.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (section.section && section.section.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPage = selectedPage === 'all' || (section.page && section.page.toLowerCase() === selectedPage.toLowerCase());
    const matchesSection = selectedSection === 'all' || (section.section && section.section.toLowerCase() === selectedSection.toLowerCase());
    
    return matchesSearch && matchesPage && matchesSection;
  });

  // Get unique pages and sections for filters
  const uniquePages = ['all', ...Array.from(new Set(contentSections.map(s => s.page)))];
  const uniqueSections = ['all', ...Array.from(new Set(contentSections.map(s => s.section)))];

  const handleContentSave = async (id: string, newContent: string) => {
    try {
      const section = contentSections.find(s => s.id === id);
      if (section) {
        console.log('Saving content:', { contentId: section.contentId, id: section.id, newContent });
        
        // Check if this content has a Firebase ID (not a temporary ID)
        if (section.id && !section.id.startsWith('temp-')) {
          // This content exists in Firebase, update it
          try {
            await firebaseService.updateContent(section.contentId, newContent);
            console.log('Content updated in Firebase successfully');
            
            // Update local state
            setContentSections(prev => 
              prev.map(s => 
                s.id === id 
                  ? { ...s, content: newContent }
                  : s
              )
            );
            
            setEditingSection(null);
            setLastSaved(new Date());
            alert('Content saved successfully!');
          } catch (firebaseError) {
            console.error('Firebase update failed:', firebaseError);
            alert('Failed to save content. Please try again.');
          }
        } else {
          // This content doesn't exist in Firebase, create it
          try {
            console.log('Creating new content in Firebase:', section.contentId);
            const newId = await firebaseService.createContent({
              contentId: section.contentId,
              title: section.contentId.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
              content: newContent,
              page: section.page,
              section: section.section,
              language: section.language,
              isPublished: section.isPublished,
              version: section.version
            });
            
            // Update local state with new Firebase ID
            setContentSections(prev => 
              prev.map(s => 
                s.id === id 
                  ? { ...s, id: newId, content: newContent }
                  : s
              )
            );
            console.log('Content created in Firebase successfully with ID:', newId);
            
            setEditingSection(null);
            setLastSaved(new Date());
            alert('Content saved successfully!');
          } catch (createError) {
            console.error('Firebase creation failed:', createError);
            alert('Failed to create content. Please try again.');
          }
        }
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    }
  };



  const tabs = [
    { id: 'content', label: 'Content Management', icon: Edit3 },
    { id: 'images', label: 'Image Management', icon: ImageIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage website content and images</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-2 rounded-full text-sm font-medium ${
                firebaseStatus === 'connected' 
                  ? 'bg-green-100 text-green-800' 
                  : firebaseStatus === 'disconnected'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {firebaseStatus === 'connected' ? '🟢 Connected' : 
                 firebaseStatus === 'disconnected' ? '🔴 Disconnected' : '🟡 Unknown'}
              </div>
              <button
                onClick={loadAllContent}
                className="btn-secondary"
              >
                Refresh Content
              </button>
              <button
                onClick={populateBoardContent}
                className="btn-primary"
              >
                Populate Board Content
              </button>
              <button
                onClick={onLogout}
                className="btn-secondary"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
          
          {firebaseStatus === 'disconnected' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                ⚠️ Firebase connection unavailable. Content changes will be saved locally but may not sync to the database.
              </p>
            </div>
          )}
          
          {/* Debug Section for Board Content */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-blue-900 font-semibold mb-2">🔧 Board Content Debug</h3>
            <p className="text-blue-800 text-sm mb-3">
              If board member content isn't saving, click the button below to populate Firebase with board content.
            </p>
            <button
              onClick={populateBoardContent}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              🚀 Populate Board Content in Firebase
            </button>
            <button
              onClick={() => {
                console.log('Content sections:', contentSections);
                console.log('Board mapping:', CONTENT_MAPPING.about?.board);
              }}
              className="ml-3 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              📊 Debug Console
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'content'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Content Management
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'images'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Image Management
          </button>
          <button
            onClick={() => setActiveTab('board')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'board'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Board of Directors
          </button>
        </div>

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Pages</option>
                  {Object.keys(CONTENT_MAPPING).map(page => (
                    <option key={page} value={page}>{page.charAt(0).toUpperCase() + page.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content Sections */}
            {Object.entries(CONTENT_MAPPING).map(([page, sections]) => {
              // Flatten the nested sections structure into an array of content items
              const contentItems = Object.entries(sections).flatMap(([sectionName, fields]) => {
                if (typeof fields === 'object' && fields !== null) {
                  return Object.entries(fields).map(([contentId, title]) => ({
                    contentId,
                    title: String(title), // Ensure title is a string
                    page,
                    section: sectionName
                  }));
                }
                return [];
              });

              return (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 capitalize">{page}</h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {contentItems.map((item) => (
                        <ContentEditor
                          key={item.contentId}
                          contentId={item.contentId}
                          tag="div"
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                          showLabel={true}
                          label={item.title}
                          allowDirectEdit={true}
                          showSaveButton={true}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Image Management Tab */}
        {activeTab === 'images' && (
          <div className="space-y-8">
            {/* Image Management Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Website Images</h2>
              <p className="text-gray-600">Manage all images used throughout the website</p>
            </div>

            {/* Logo Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Logo & Branding</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ImageEditor
                    imageId="logo-main"
                    label="Main Logo"
                    currentImageUrl={images.find(img => img.id === 'logo-main')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'logo-main' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="logo-footer"
                    label="Footer Logo"
                    currentImageUrl={images.find(img => img.id === 'logo-footer')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'logo-footer' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="favicon"
                    label="Favicon"
                    currentImageUrl={images.find(img => img.id === 'favicon')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'favicon' ? { ...img, url } : img
                      ));
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Home Page Images */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Home Page Images</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ImageEditor
                    imageId="home-hero-bg"
                    label="Hero Background"
                    currentImageUrl={images.find(img => img.id === 'home-hero-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'home-hero-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="home-stats-bg"
                    label="Stats Section Background"
                    currentImageUrl={images.find(img => img.id === 'home-stats-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'home-stats-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="home-events-bg"
                    label="Events Section Background"
                    currentImageUrl={images.find(img => img.id === 'home-events-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'home-events-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                </div>
              </div>
            </div>

            {/* About Page Images */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">About Page Images</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ImageEditor
                    imageId="about-hero-bg"
                    label="About Hero Background"
                    currentImageUrl={images.find(img => img.id === 'about-hero-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'about-hero-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="about-mission-bg"
                    label="Mission Section Background"
                    currentImageUrl={images.find(img => img.id === 'about-mission-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'about-mission-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="about-values-bg"
                    label="Values Section Background"
                    currentImageUrl={images.find(img => img.id === 'about-values-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'about-values-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Schedule/Events Images */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Schedule & Events Images</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ImageEditor
                    imageId="schedule-hero-bg"
                    label="Schedule Hero Background"
                    currentImageUrl={images.find(img => img.id === 'schedule-hero-bg')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'schedule-hero-bg' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-1-image"
                    label="Event 1 Image"
                    currentImageUrl={images.find(img => img.id === 'event-1-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-1-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-2-image"
                    label="Event 2 Image"
                    currentImageUrl={images.find(img => img.id === 'event-2-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-2-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-3-image"
                    label="Event 3 Image"
                    currentImageUrl={images.find(img => img.id === 'event-3-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-3-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-4-image"
                    label="Event 4 Image"
                    currentImageUrl={images.find(img => img.id === 'event-4-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-4-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-5-image"
                    label="Event 5 Image"
                    currentImageUrl={images.find(img => img.id === 'event-5-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-5-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                  <ImageEditor
                    imageId="event-6-image"
                    label="Event 6 Image"
                    currentImageUrl={images.find(img => img.id === 'event-6-image')?.url}
                    onImageUpdate={(url) => {
                      setImages(prev => prev.map(img => 
                        img.id === 'event-6-image' ? { ...img, url } : img
                      ));
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Gallery Images</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 12 }, (_, i) => (
                    <ImageEditor
                      key={`gallery-${i + 1}`}
                      imageId={`gallery-${i + 1}`}
                      label={`Gallery Image ${i + 1}`}
                      currentImageUrl={images.find(img => img.id === `gallery-${i + 1}`)?.url}
                      onImageUpdate={(url) => {
                        setImages(prev => prev.map(img => 
                          img.id === `gallery-${i + 1}` ? { ...img, url } : img
                        ));
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Board of Directors Tab */}
        {activeTab === 'board' && (
          <div className="space-y-6">
            {/* President */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900">President</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ContentEditor
                    contentId="board-president-name"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="President Name"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-president-email"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="President Email"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-president-phone"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="President Phone"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-president-bio"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="President Bio"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                </div>
              </div>
            </div>

            {/* Treasurer */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                <h3 className="text-lg font-semibold text-green-900">Treasurer</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ContentEditor
                    contentId="board-treasurer-name"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Treasurer Name"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-treasurer-email"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Treasurer Email"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-treasurer-phone"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Treasurer Phone"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-treasurer-bio"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Treasurer Bio"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                </div>
              </div>
            </div>

            {/* Tournament Director */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900">Tournament Director</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ContentEditor
                    contentId="board-tournament-director-name"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Tournament Director Name"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-tournament-director-email"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Tournament Director Email"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-tournament-director-phone"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Tournament Director Phone"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                  <ContentEditor
                    contentId="board-tournament-director-bio"
                    tag="div"
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    showLabel={true}
                    label="Tournament Director Bio"
                    allowDirectEdit={true}
                    showSaveButton={true}
                  />
                </div>
              </div>
            </div>
          </div>
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
                      // Note: This will only reset the local state
                      // Firebase data will remain intact
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
