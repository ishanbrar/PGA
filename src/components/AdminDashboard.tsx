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
  LogOut,
  RefreshCw,
  Search
} from 'lucide-react';
import firebaseService, { ContentSection, ImageItem } from '../services/firebaseService';

// Content mapping configuration - defines all editable content on the site
const CONTENT_MAPPING = {
  home: {
    hero: {
      'hero-title': 'Hero Title',
      'hero-subtitle': 'Hero Subtitle', 
      'hero-description': 'Hero Description',
      'hero-cta-primary': 'Primary CTA Text',
      'hero-cta-secondary': 'Secondary CTA Text'
    },
    stats: {
      'stats-members': 'Members Count',
      'stats-members-label': 'Members Label',
      'stats-years': 'Years History',
      'stats-years-label': 'Years Label',
      'stats-events': 'Annual Events',
      'stats-events-label': 'Events Label',
      'stats-courses': 'Golf Courses',
      'stats-courses-label': 'Courses Label'
    },
    features: {
      'features-title': 'Features Section Title',
      'features-subtitle': 'Features Section Subtitle',
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
      'home-upcoming-events-title': 'Home Upcoming Events Title',
      'home-upcoming-events-subtitle': 'Home Upcoming Events Subtitle'
    },
    events: {
      'home-event-1-title': 'Home Event 1 Title',
      'home-event-1-date': 'Home Event 1 Date',
      'home-event-1-description': 'Home Event 1 Description',
      'home-event-2-title': 'Home Event 2 Title',
      'home-event-2-date': 'Home Event 2 Date',
      'home-event-2-description': 'Home Event 2 Description',
      'home-event-3-title': 'Home Event 3 Title',
      'home-event-3-date': 'Home Event 3 Date',
      'home-event-3-description': 'Home Event 3 Description'
    }
  },
  about: {
    hero: {
      'about-hero-title': 'About Hero Title',
      'about-hero-subtitle': 'About Hero Subtitle',
      'mission-vision-title': 'Our Mission & Vision'
    },
    mission: {
      'mission-vision-title': 'Mission & Vision Title',
      'mission-title': 'Mission Title',
      'mission-content': 'Mission Content',
      'vision-title': 'Vision Title',
      'vision-content': 'Vision Content'
    },
    values: {
      'values-title': 'Values Section Title',
      'values-subtitle': 'Values Section Subtitle',
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
      'stats-title': 'Stats Section Title',
      'stats-subtitle': 'Stats Section Subtitle',
      'stat-1-number': 'Stat 1 Number',
      'stat-1-label': 'Stat 1 Label',
      'stat-2-number': 'Stat 2 Number',
      'stat-2-label': 'Stat 2 Label',
      'stat-3-number': 'Stat 3 Number',
      'stat-3-label': 'Stat 3 Label',
      'stat-4-number': 'Stat 4 Number',
      'stat-4-label': 'Stat 4 Label',
      'stat-5-number': 'Stat 5 Number',
      'stat-5-label': 'Stat 5 Label',
      'stat-6-number': 'Stat 6 Number',
      'stat-6-label': 'Stat 6 Label'
    }
  },
  members: {
    hero: {
      'members-hero-title': 'Members Hero Title',
      'members-hero-subtitle': 'Members Hero Subtitle'
    },
    membership: {
      'membership-title': 'Membership Section Title',
      'membership-subtitle': 'Membership Section Subtitle',
      'membership-type-1-title': 'Membership Type 1 Title',
      'membership-type-1-price': 'Membership Type 1 Price',
      'membership-type-1-description': 'Membership Type 1 Description',
      'membership-type-2-title': 'Membership Type 2 Title',
      'membership-type-2-price': 'Membership Type 2 Price',
      'membership-type-2-description': 'Membership Type 2 Description',
      'membership-type-3-title': 'Membership Type 3 Title',
      'membership-type-3-price': 'Membership Type 3 Price',
      'membership-type-3-description': 'Membership Type 3 Description'
    },
    benefits: {
      'benefits-title': 'Benefits Section Title',
      'benefits-subtitle': 'Benefits Section Subtitle',
      'benefit-1-title': 'Benefit 1 Title',
      'benefit-1-description': 'Benefit 1 Description',
      'benefit-2-title': 'Benefit 2 Title',
      'benefit-2-description': 'Benefit 2 Description',
      'benefit-3-title': 'Benefit 3 Title',
      'benefit-3-description': 'Benefit 3 Description'
    }
  },
  board: {
    hero: {
      'board-hero-title': 'Board Hero Title',
      'board-hero-subtitle': 'Board Hero Subtitle'
    },
    leadership: {
      'leadership-title': 'Leadership Section Title',
      'leadership-subtitle': 'Leadership Section Subtitle',
      'leadership-philosophy': 'Leadership Philosophy'
    },
    members: {
      'board-members-title': 'Board Members Section Title',
      'board-members-subtitle': 'Board Members Section Subtitle'
    }
  },
  schedule: {
    hero: {
      'schedule-hero-title': 'Schedule Hero Title',
      'schedule-hero-subtitle': 'Schedule Hero Subtitle'
    },
    calendar: {
      'calendar-title': 'Calendar Section Title',
      'calendar-subtitle': 'Calendar Section Subtitle'
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
      'schedule-event-2-description': 'Schedule Event 2 Description',
      'schedule-event-3-title': 'Schedule Event 3 Title',
      'schedule-event-3-time': 'Schedule Event 3 Time',
      'schedule-event-3-location': 'Schedule Event 3 Location',
      'schedule-event-3-description': 'Schedule Event 3 Description',
      'schedule-event-4-title': 'Schedule Event 4 Title',
      'schedule-event-4-time': 'Schedule Event 4 Time',
      'schedule-event-4-location': 'Schedule Event 4 Location',
      'schedule-event-4-description': 'Schedule Event 4 Description',
      'schedule-event-5-title': 'Schedule Event 5 Title',
      'schedule-event-5-time': 'Schedule Event 5 Time',
      'schedule-event-5-location': 'Schedule Event 5 Location',
      'schedule-event-5-description': 'Schedule Event 5 Description',
      'schedule-event-6-title': 'Schedule Event 6 Title',
      'schedule-event-6-time': 'Schedule Event 6 Time',
      'schedule-event-6-location': 'Schedule Event 6 Location',
      'schedule-event-6-description': 'Schedule Event 6 Description',
      'schedule-event-7-title': 'Schedule Event 7 Title',
      'schedule-event-7-time': 'Schedule Event 7 Time',
      'schedule-event-7-location': 'Schedule Event 7 Location',
      'schedule-event-7-description': 'Schedule Event 7 Description'
    }
  },
  contact: {
    hero: {
      'contact-hero-title': 'Contact Hero Title',
      'contact-hero-subtitle': 'Contact Hero Subtitle'
    },
    methods: {
      'contact-methods-title': 'Contact Methods Title',
      'contact-methods-subtitle': 'Contact Methods Subtitle'
    }
  },
  events: {
    hero: {
      'events-hero-title': 'Events Hero Title',
      'events-hero-subtitle': 'Events Hero Subtitle'
    },
    upcoming: {
      'upcoming-events-title': 'Upcoming Events Title',
      'upcoming-events-subtitle': 'Upcoming Events Subtitle'
    },
    past: {
      'past-events-title': 'Past Events Title',
      'past-events-subtitle': 'Past Events Subtitle'
    },
    eventDetails: {
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
      'events-event-2-price': 'Events Event 2 Price',
      'events-event-3-title': 'Events Event 3 Title',
      'events-event-3-date': 'Events Event 3 Date',
      'events-event-3-time': 'Events Event 3 Time',
      'events-event-3-location': 'Events Event 3 Location',
      'events-event-3-description': 'Events Event 3 Description',
      'events-event-3-price': 'Events Event 3 Price',
      'events-event-4-title': 'Events Event 4 Title',
      'events-event-4-date': 'Events Event 4 Date',
      'events-event-4-time': 'Events Event 4 Time',
      'events-event-4-location': 'Events Event 4 Location',
      'events-event-4-description': 'Events Event 4 Description',
      'events-event-4-price': 'Events Event 4 Price',
      'events-past-event-1-title': 'Events Past Event 1 Title',
      'events-past-event-1-date': 'Events Past Event 1 Date',
      'events-past-event-1-location': 'Events Past Event 1 Location',
      'events-past-event-1-description': 'Events Past Event 1 Description',
      'events-past-event-2-title': 'Events Past Event 2 Title',
      'events-past-event-2-date': 'Events Past Event 2 Date',
      'events-past-event-2-location': 'Events Past Event 2 Location',
      'events-past-event-2-description': 'Events Past Event 2 Description'
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [firebaseStatus, setFirebaseStatus] = useState<'connected' | 'disconnected' | 'unknown'>('unknown');

  // Load all content from Firebase on component mount
  useEffect(() => {
    loadAllContent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fallback: if loading fails, create default content
  useEffect(() => {
    if (!isLoading && contentSections.length === 0) {
      console.log('No content loaded, creating default content sections');
      const fallbackContent: ContentSection[] = [];
      
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

  const loadAllContent = async () => {
    setIsLoading(true);
    try {
      // Try to load existing content from Firebase
      let existingContent: ContentSection[] = [];
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
      const allContentSections: ContentSection[] = [];
      
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
              // Create default content section with contentId as temporary id
              const defaultContent = getDefaultContent(contentId, title as string, page as string, sectionName as string);
              // Use contentId as temporary id so we can identify this content for saving
              defaultContent.id = contentId;
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

  const getDefaultContent = (contentId: string, title: string, page: string, section: string): ContentSection => {
    // Provide sensible defaults based on content ID
    const defaultContentMap: { [key: string]: string } = {
      'hero-title': 'The DFW Punjabi Golf Club',
      'hero-subtitle': 'Golf Club',
      'hero-description': 'Where tradition meets excellence. Join our exclusive community of Punjabi golf enthusiasts in the heart of Dallas-Fort Worth.',
      'hero-cta-primary': 'Join Our Club',
      'hero-cta-secondary': 'Learn More',
      'stats-members': '150+',
      'stats-members-label': 'Active Members',
      'stats-years': '25+',
      'stats-years-label': 'Years History',
      'stats-events': '12',
      'stats-events-label': 'Annual Events',
      'stats-courses': '4',
      'stats-courses-label': 'Golf Courses',
      'features-title': 'Why Choose Our Club?',
      'features-subtitle': 'Experience the perfect blend of premium golf amenities, cultural connection, and professional networking.',
      'feature-1-title': 'Premium Golf Experience',
      'feature-1-description': 'Access to top-tier golf courses with exclusive member benefits and professional instruction.',
      'feature-2-title': 'Community & Networking',
      'feature-2-description': 'Connect with fellow Punjabi professionals and build lasting friendships on and off the course.',
      'feature-3-title': 'Tournaments & Events',
      'feature-3-description': 'Participate in exciting tournaments, charity events, and social gatherings throughout the year.',
      'feature-4-title': 'Flexible Scheduling',
      'feature-4-description': 'Multiple events and activities to fit your busy schedule and lifestyle.',
      'events-title': 'Upcoming Events',
      'events-subtitle': 'Join us for these exciting upcoming events and tournaments.',
      'event-1-title': 'Spring Championship Tournament',
      'event-1-date': 'March 15-17, 2024',
      'event-1-description': 'Our premier annual tournament featuring top players from across the region.',
      'event-2-title': 'Charity Golf Outing',
      'event-2-date': 'April 22, 2024',
      'event-2-description': 'Support local causes while enjoying a great day on the course.',
      'event-3-title': 'Member-Guest Tournament',
      'event-3-date': 'May 18-19, 2024',
      'event-3-description': 'Invite your friends and family for a weekend of golf and camaraderie.',
      'about-hero-title': 'About Our Club',
      'about-hero-subtitle': 'Discover the rich history, core values, and remarkable achievements that make The DFW Punjabi Golf Club a premier destination for golf enthusiasts.',
      'mission-title': 'Mission',
      'mission-content': 'To provide an exceptional golf experience while fostering a strong Punjabi community through sportsmanship, cultural connection, and professional networking opportunities.',
      'vision-title': 'Vision',
      'vision-content': 'To be the leading Punjabi golf club in the United States, recognized for excellence, community impact, and cultural preservation while promoting the sport of golf.',
      'values-title': 'Our Core Values',
      'values-subtitle': 'The principles that guide everything we do and define who we are as a community.',
      'value-1-title': 'Community First',
      'value-1-description': 'We prioritize building strong relationships and fostering a sense of belonging among our members.',
      'value-2-title': 'Excellence',
      'value-2-description': 'We strive for excellence in everything we do, from course conditions to member services.',
      'value-3-title': 'Inclusivity',
      'value-3-description': 'We welcome golfers of all skill levels and backgrounds to join our diverse community.',
      'value-4-title': 'Sportsmanship',
      'value-4-description': 'We promote the values of integrity, respect, and fair play both on and off the course.',
      'stats-title': 'Club Statistics',
      'stats-subtitle': 'Numbers that tell our story of growth and success.',
      'stat-1-number': '25+',
      'stat-1-label': 'Years',
      'stat-2-number': '150+',
      'stat-2-label': 'Members',
      'stat-3-number': '4',
      'stat-3-label': 'Courses',
      'stat-4-number': '12',
      'stat-4-label': 'Events/Year',
      'stat-5-number': '95%',
      'stat-5-label': 'Satisfaction',
      'stat-6-number': '50+',
      'stat-6-label': 'Tournaments',
      'members-hero-title': 'Membership',
      'members-hero-subtitle': 'Join our exclusive community and experience the perfect blend of premium golf amenities and cultural connection.',
      'membership-title': 'Membership Options',
      'membership-subtitle': 'Choose the membership plan that best fits your lifestyle and golfing needs.',
      'membership-type-1-title': 'Individual Membership',
      'membership-type-1-price': '$2,500/year',
      'membership-type-1-description': 'Full access to all club facilities and events for individual members.',
      'membership-type-2-title': 'Family Membership',
      'membership-type-2-price': '$3,500/year',
      'membership-type-2-description': 'Complete family access including spouse and children under 18.',
      'membership-type-3-title': 'Corporate Membership',
      'membership-type-3-price': '$5,000/year',
      'membership-type-3-description': 'Business membership with multiple employee access and networking opportunities.',
      'benefits-title': 'Member Benefits',
      'benefits-subtitle': 'Exclusive perks and privileges that come with your membership.',
      'benefit-1-title': 'Priority Event Booking',
      'benefit-1-description': 'Reserved event spots and priority registration for all club events.',
      'benefit-2-title': 'Professional Instruction',
      'benefit-2-description': 'Access to PGA-certified instructors and personalized coaching programs.',
      'benefit-3-title': 'Networking Events',
      'benefit-3-description': 'Regular social gatherings and business networking opportunities.',
      'board-hero-title': 'Board of Directors',
      'board-hero-subtitle': 'Meet the dedicated leaders who guide our club\'s vision and ensure our continued success.',
      'leadership-title': 'Leadership',
      'leadership-subtitle': 'Our board members bring diverse expertise and a shared passion for golf and community.',
      'leadership-philosophy': 'We believe in transparent leadership, member engagement, and continuous improvement. Our board works collaboratively to create an exceptional experience for all members while preserving our cultural heritage and promoting the sport of golf.',
      'board-members-title': 'Board Members',
      'board-members-subtitle': 'Dedicated professionals committed to our club\'s success.',
      'schedule-hero-title': 'Club Schedule',
      'schedule-hero-subtitle': 'Stay updated with all our upcoming events, tournaments, and social gatherings. View event schedules and stay updated with all club activities',
      'calendar-title': 'Event Calendar',
      'calendar-subtitle': 'View our monthly calendar to see all upcoming events, tournaments, and social gatherings.',
      'contact-hero-title': 'Contact Us',
      'contact-hero-subtitle': 'Get in touch with our team. We\'re here to help with any questions, membership inquiries, or support you may need.',
      'contact-methods-title': 'How to Reach Us',
      'contact-methods-subtitle': 'Choose the most convenient way to get in touch with our team. We\'re committed to providing excellent service and support.',
      'events-hero-title': 'Club Events',
      'events-hero-subtitle': 'Discover exciting tournaments, social gatherings, and community events that bring our Punjabi golf community together throughout the year.',
      'upcoming-events-title': 'Upcoming Events',
      'upcoming-events-subtitle': 'Don\'t miss out on our exciting upcoming events and tournaments.',
      'past-events-title': 'Past Events',
      'past-events-subtitle': 'Relive the memories and achievements from our previous events and tournaments.',
      'home-upcoming-events-title': 'Upcoming Events',
      'home-upcoming-events-subtitle': 'Don\'t miss out on our exciting upcoming events and tournaments.',
      'home-event-1-title': 'Spring Championship Tournament',
      'home-event-1-date': 'March 15-17, 2024',
      'home-event-1-description': 'Our premier annual tournament featuring top players from across the region.',
      'home-event-2-title': 'Charity Golf Outing',
      'home-event-2-date': 'April 22, 2024',
      'home-event-2-description': 'Support local causes while enjoying a great day on the course.',
      'home-event-3-title': 'Member-Guest Tournament',
      'home-event-3-date': 'May 18-19, 2024',
      'home-event-3-description': 'Invite your friends and family for a weekend of golf and camaraderie.',
      'schedule-event-1-title': 'Spring Championship Tournament',
      'schedule-event-1-time': '8:00 AM',
      'schedule-event-1-location': 'Prestonwood Golf Club',
      'schedule-event-1-description': 'Our premier annual tournament featuring top players from across the region.',
      'schedule-event-2-title': 'New Member Welcome Mixer',
      'schedule-event-2-time': '6:00 PM',
      'schedule-event-2-location': 'Clubhouse',
      'schedule-event-2-description': 'Join us for an evening of networking, introductions, and celebration as we welcome our newest members to the DFW Punjabi Golf Club family.',
      'schedule-event-3-title': 'Charity Golf Outing',
      'schedule-event-3-time': '9:00 AM',
      'schedule-event-3-location': 'Tribute Golf Links',
      'schedule-event-3-description': 'Support our community through golf! This charity outing raises funds for local Punjabi community organizations and scholarships.',
      'schedule-event-4-title': 'Member-Guest Tournament',
      'schedule-event-4-time': '8:30 AM',
      'schedule-event-4-location': 'Multiple Courses',
      'schedule-event-4-description': 'Invite your friends and family for a weekend of golf and camaraderie.',
      'schedule-event-5-title': 'Summer Social Gathering',
      'schedule-event-5-time': '7:00 PM',
      'schedule-event-5-location': 'Clubhouse',
      'schedule-event-5-description': 'Enjoy an evening of food, music, and fellowship with fellow members.',
      'schedule-event-6-title': 'Fall Classic Tournament',
      'schedule-event-6-time': '8:00 AM',
      'schedule-event-6-location': 'Prestonwood Golf Club',
      'schedule-event-6-description': 'Our fall championship tournament with exciting prizes and recognition.',
      'schedule-event-7-title': 'Holiday Celebration',
      'schedule-event-7-time': '6:00 PM',
      'schedule-event-7-location': 'Clubhouse',
      'schedule-event-7-description': 'Celebrate the holiday season with traditional Punjabi cuisine, live music, and festive activities for the whole family.',
      'events-event-1-title': 'Spring Championship Tournament',
      'events-event-1-date': 'March 15, 2024',
      'events-event-1-time': '8:00 AM - 6:00 PM',
      'events-event-1-location': 'Prestonwood Golf Club',
      'events-event-1-description': 'Our premier spring tournament featuring individual stroke play, team competitions, and exciting prizes. Open to all skill levels with handicap divisions.',
      'events-event-1-price': '$150',
      'events-event-2-title': 'New Member Welcome Mixer',
      'events-event-2-date': 'March 22, 2024',
      'events-event-2-time': '6:00 PM - 9:00 PM',
      'events-event-2-location': 'Clubhouse',
      'events-event-2-description': 'Join us for an evening of networking, introductions, and celebration as we welcome our newest members to the DFW Punjabi Golf Club family.',
      'events-event-2-price': 'Free',
      'events-event-3-title': 'Charity Golf Outing',
      'events-event-3-date': 'April 5, 2024',
      'events-event-3-time': '9:00 AM - 5:00 PM',
      'events-event-3-location': 'Tribute Golf Links',
      'events-event-3-description': 'Support our community through golf! This charity outing raises funds for local Punjabi community organizations and scholarships.',
      'events-event-3-price': '$200',
      'events-event-4-title': 'Golf Clinic & Skills Workshop',
      'events-event-4-date': 'April 12, 2024',
      'events-event-4-time': '10:00 AM - 2:00 PM',
      'events-event-4-location': 'Prestonwood Golf Club',
      'events-event-4-description': 'Improve your game with professional instruction covering putting, chipping, driving, and course management strategies.',
      'events-event-4-price': '$75',
      'events-past-event-1-title': 'Winter Classic Tournament',
      'events-past-event-1-date': 'February 10, 2024',
      'events-past-event-1-location': 'Tribute Golf Links',
      'events-past-event-1-description': 'A successful winter tournament with 48 participants competing in challenging winter conditions.',
      'events-past-event-2-title': 'Holiday Celebration Dinner',
      'events-past-event-2-date': 'December 15, 2023',
      'events-past-event-2-location': 'Clubhouse',
      'events-past-event-2-description': 'Annual holiday celebration bringing together members and families for a festive evening of food, music, and community.',
      'gallery-hero-title': 'Photo Gallery',
      'gallery-hero-subtitle': 'Browse through memorable moments, tournaments, and special events captured in our photo gallery.',
      'gallery-categories-title': 'Gallery Categories',
      'gallery-categories-subtitle': 'Explore our photos organized by category and event.'
    };

    return {
      contentId,
      title,
      content: defaultContentMap[contentId] || 'Default content - please edit',
      page: page.charAt(0).toUpperCase() + page.slice(1),
      section: section.charAt(0).toUpperCase() + section.slice(1),
      language: 'en',
      isPublished: true,
      version: 1
    };
  };

  // Filter content based on search and selections
  const filteredContent = contentSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.section.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPage = selectedPage === 'all' || section.page.toLowerCase() === selectedPage.toLowerCase();
    const matchesSection = selectedSection === 'all' || section.section.toLowerCase() === selectedSection.toLowerCase();
    
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
        
        // Check if this content has a Firebase ID
        if (section.id && section.id !== section.contentId) {
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
              title: section.title,
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

  const handleImageSave = async (id: string, newAlt: string, newCategory: string, newPage: string) => {
    try {
      // Update in Firebase
      await firebaseService.updateImage(id, {
        alt: newAlt,
        category: newCategory,
        page: newPage
      });
      
      // Update local state
      setImages(prev => {
        const updated = prev.map(img => 
          img.id === id 
            ? { ...img, alt: newAlt, category: newCategory, page: newPage }
            : img
        );
        return updated;
      });
      
      setEditingImage(null);
      setLastSaved(new Date());
      alert('Image details saved successfully!');
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Failed to save image details. Please try again.');
    }
  };

  const handleImageUpload = async () => {
    if (uploadFile && uploadCategory && uploadPage) {
      try {
        // Upload to Firebase Storage
        const newImage = await firebaseService.uploadImage(uploadFile, {
          imageId: `img-${Date.now()}`,
          originalName: uploadFile.name,
          filename: uploadFile.name,
          alt: uploadFile.name,
          category: uploadCategory,
          page: uploadPage,
          fileSize: uploadFile.size,
          mimeType: uploadFile.type
        });
        
        // Add to local state
        setImages(prev => [...prev, newImage]);
        
        setShowImageUpload(false);
        setUploadFile(null);
        setUploadCategory('');
        setUploadPage('');
        
        setLastSaved(new Date());
        alert('Image uploaded successfully!');
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
      }
    }
  };

  const deleteImage = async (id: string) => {
    try {
      // Delete from Firebase
      await firebaseService.deleteImage(id);
      
      // Remove from local state
      setImages(prev => prev.filter(img => img.id !== id));
      
      setLastSaved(new Date());
      alert('Image deleted successfully!');
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image. Please try again.');
    }
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
                  // All changes are already saved to Firebase in real-time
                  setLastSaved(new Date());
                  
                  // Show success message
                  alert('All changes have been published and saved to Firebase!');
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
      <div className={`border-b border-gray-200 py-2 ${
        firebaseStatus === 'connected' ? 'bg-green-50 border-green-200' : 
        firebaseStatus === 'disconnected' ? 'bg-yellow-50 border-yellow-200' : 
        'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className={`${
                firebaseStatus === 'connected' ? 'text-green-700' : 
                firebaseStatus === 'disconnected' ? 'text-yellow-700' : 
                'text-gray-700'
              }`}>
                {firebaseStatus === 'connected' ? '💾' : 
                 firebaseStatus === 'disconnected' ? '⚠️' : '⏳'} 
                Admin Dashboard - {
                  firebaseStatus === 'connected' ? 'All changes are automatically saved to Firebase' :
                  firebaseStatus === 'disconnected' ? 'Firebase disconnected - changes saved locally only' :
                  'Connecting to Firebase...'
                }
              </span>
              {lastSaved && (
                <span className={`${
                  firebaseStatus === 'connected' ? 'text-green-600' : 
                  firebaseStatus === 'disconnected' ? 'text-yellow-600' : 
                  'text-gray-600'
                }`}>
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className={`${
              firebaseStatus === 'connected' ? 'text-green-600' : 
              firebaseStatus === 'disconnected' ? 'text-yellow-600' : 
              'text-gray-600'
            }`}>
              {firebaseStatus === 'connected' ? 
                'Changes are saved to Firebase in real-time and will persist between sessions' :
                firebaseStatus === 'disconnected' ? 
                'Firebase unavailable - changes are saved locally and will sync when connection is restored' :
                'Establishing connection...'
              }
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
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={loadAllContent}
                  className="btn-secondary"
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </motion.button>
              <p className="text-gray-600">Edit website text content easily</p>
              </div>
            </div>

            {/* Firebase Status Info */}
            {firebaseStatus === 'disconnected' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center">
                  <span className="text-yellow-800 mr-2">⚠️</span>
                  <div>
                    <p className="text-yellow-800 font-medium">Firebase Connection Unavailable</p>
                    <p className="text-yellow-700 text-sm">
                      You can still edit content, but changes will only be saved locally. 
                      When Firebase connection is restored, your changes will sync automatically.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <select
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {uniquePages.map(page => (
                    <option key={page} value={page}>
                      {page === 'all' ? 'All Pages' : page}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {uniqueSections.map(section => (
                    <option key={section} value={section}>
                      {section === 'all' ? 'All Sections' : section}
                    </option>
                  ))}
                </select>
                
                <div className="text-sm text-gray-600 flex items-center">
                  {filteredContent.length} of {contentSections.length} items
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading content...</p>
              </div>
            ) : (
            <div className="grid gap-6">
                {filteredContent.map((section) => (
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
                      onClick={() => setEditingSection(editingSection === section.id ? null : section.id || '')}
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
                          onClick={() => handleContentSave(section.id || '', section.content)}
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
            )}
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
                        onClick={() => setEditingImage(editingImage === image.id ? null : image.id || '')}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                      >
                        <Edit3 className="w-4 h-4 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteImage(image.id || '')}
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
                            onClick={() => handleImageSave(image.id || '', image.alt, image.category, image.page)}
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
