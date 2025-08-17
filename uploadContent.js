const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// You'll need to download your service account key from Firebase Console
// Project Settings > Service Accounts > Generate New Private Key
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dfwpga-default-rtdb.firebaseio.com" // Replace with your actual database URL
});

const db = admin.firestore();

// Comprehensive content mapping - matches what's in AdminDashboard.tsx
const CONTENT_MAPPING = {
  home: {
    hero: {
      'hero-title': 'Hero Title',
      'hero-subtitle': 'Hero Subtitle',
      'hero-description': 'Hero Description',
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
      'mission-description': 'Mission Description',
      'vision-description': 'Vision Description'
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

// Add image content IDs
CONTENT_MAPPING.images = {
  'logo-main': 'Main Logo',
  'logo-footer': 'Footer Logo', 
  'favicon': 'Favicon',
  'home-hero-bg': 'Home Hero Background',
  'home-stats-bg': 'Home Stats Background',
  'home-events-bg': 'Home Events Background',
  'about-hero-bg': 'About Hero Background',
  'about-mission-bg': 'About Mission Background',
  'about-values-bg': 'About Values Background',
  'schedule-hero-bg': 'Schedule Hero Background',
  'event-1-image': 'Event 1 Image',
  'event-2-image': 'Event 2 Image',
  'event-3-image': 'Event 3 Image',
  'event-4-image': 'Event 4 Image',
  'event-5-image': 'Event 5 Image',
  'event-6-image': 'Event 6 Image',
  'gallery-1': 'Gallery Image 1',
  'gallery-2': 'Gallery Image 2',
  'gallery-3': 'Gallery Image 3',
  'gallery-4': 'Gallery Image 4',
  'gallery-5': 'Gallery Image 5',
  'gallery-6': 'Gallery Image 6',
  'gallery-7': 'Gallery Image 7',
  'gallery-8': 'Gallery Image 8',
  'gallery-9': 'Gallery Image 9',
  'gallery-10': 'Gallery Image 10',
  'gallery-11': 'Gallery Image 11',
  'gallery-12': 'Gallery Image 12'
};

// Default content values - matches what's in AdminDashboard.tsx
const getDefaultContent = (contentId) => {
  const defaults = {
    // Home page defaults
    'hero-title': 'Welcome to DFW Punjabi Golf Club',
    'hero-subtitle': 'Building Community Through Golf',
    'hero-description': 'Join our vibrant community of golf enthusiasts and experience the perfect blend of sport, culture, and friendship.',
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
    'mission-description': 'To promote golf excellence while fostering a strong Punjabi community through sportsmanship and cultural pride.',
    'vision-description': 'To be the premier golf club that celebrates diversity, promotes golf excellence, and builds lasting community bonds.',
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

  return defaults[contentId] || 'Default content - please edit';
};

// Function to upload all content
async function uploadAllContent() {
  console.log('🚀 Starting content upload to Firebase...');
  
  try {
    let totalUploaded = 0;
    let totalSkipped = 0;
    
    // Process each page and section
    for (const [page, sections] of Object.entries(CONTENT_MAPPING)) {
      console.log(`\n📄 Processing page: ${page.toUpperCase()}`);
      
      for (const [sectionName, fields] of Object.entries(sections)) {
        console.log(`  📍 Section: ${sectionName}`);
        
        for (const [contentId, title] of Object.entries(fields)) {
          try {
            // Check if content already exists
            const existingQuery = await db.collection('content')
              .where('contentId', '==', contentId)
              .get();
            
            if (!existingQuery.empty) {
              console.log(`    ⏭️  Skipping ${contentId} - already exists`);
              totalSkipped++;
              continue;
            }
            
            // Create new content
            const contentData = {
              contentId,
              title,
              content: getDefaultContent(contentId),
              page: page.charAt(0).toUpperCase() + page.slice(1),
              section: sectionName.charAt(0).toUpperCase() + sectionName.slice(1),
              language: 'en',
              isPublished: true,
              version: 1,
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              lastModifiedAt: admin.firestore.FieldValue.serverTimestamp(),
              lastModifiedBy: 'system-upload-script'
            };
            await db.collection('content').add(contentData);
            
            console.log(`    ✅ Uploaded ${contentId}`);
            totalUploaded++;
            
          } catch (error) {
            console.error(`    ❌ Error uploading ${contentId}:`, error.message);
          }
        }
      }
    }
    
    console.log(`\n🎉 Upload complete!`);
    console.log(`   Total uploaded: ${totalUploaded}`);
    console.log(`   Total skipped: ${totalSkipped}`);
    console.log(`   Total processed: ${totalUploaded + totalSkipped}`);
    
  } catch (error) {
    console.error('❌ Fatal error during upload:', error);
  }
}

// Function to check existing content
async function checkExistingContent() {
  console.log('🔍 Checking existing content in Firebase...');
  
  try {
    const snapshot = await db.collection('content').get();
    const existingContent = snapshot.docs.map(doc => doc.data());
    
    console.log(`\n📊 Current content in Firebase:`);
    console.log(`   Total documents: ${existingContent.length}`);
    
    // Group by page
    const byPage = {};
    existingContent.forEach(item => {
      const page = item.page || 'Unknown';
      if (!byPage[page]) byPage[page] = [];
      byPage[page].push(item);
    });
    
    Object.entries(byPage).forEach(([page, items]) => {
      console.log(`   ${page}: ${items.length} items`);
    });
    
    // Show some sample content IDs
    console.log(`\n📝 Sample content IDs:`);
    existingContent.slice(0, 10).forEach(item => {
      console.log(`   - ${item.contentId} (${item.page} > ${item.section})`);
    });
    
  } catch (error) {
    console.error('❌ Error checking existing content:', error);
  }
}

// Main execution
async function main() {
  const command = process.argv[2] || 'upload';
  
  switch (command) {
    case 'check':
      await checkExistingContent();
      break;
    case 'upload':
    default:
      await uploadAllContent();
      break;
  }
  
  process.exit(0);
}

// Run the script
main().catch(console.error);
