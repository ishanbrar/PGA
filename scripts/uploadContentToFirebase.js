const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// You'll need to download your service account key from Firebase Console
// Project Settings > Service Accounts > Generate New Private Key
const serviceAccount = require('../path-to-your-service-account-key.json');

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
      'hero-cta-primary': 'Primary CTA Text',
      'hero-cta-secondary': 'Secondary CTA Text'
    },
    stats: {
      'stats-members': 'Members Count',
      'stats-years': 'Years History',
      'stats-events': 'Annual Events',
      'stats-courses': 'Golf Courses'
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
    events: {
      'events-title': 'Events Section Title',
      'events-subtitle': 'Events Section Subtitle',
      'event-1-title': 'Event 1 Title',
      'event-1-date': 'Event 1 Date',
      'event-1-description': 'Event 1 Description',
      'event-2-title': 'Event 2 Title',
      'event-2-date': 'Event 2 Date',
      'event-2-description': 'Event 2 Description',
      'event-3-title': 'Event 3 Title',
      'event-3-date': 'Event 3 Date',
      'event-3-description': 'Event 3 Description'
    }
  },
  about: {
    hero: {
      'about-hero-title': 'About Hero Title',
      'about-hero-subtitle': 'About Hero Subtitle'
    },
    mission: {
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
    }
  },
  contact: {
    hero: {
      'contact-hero-title': 'Contact Hero Title',
      'contact-hero-subtitle': 'Contact Hero Subtitle'
    },
    departments: {
      'departments-title': 'Departments Section Title',
      'departments-subtitle': 'Departments Section Subtitle'
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

// Default content values - matches what's in AdminDashboard.tsx
const getDefaultContent = (contentId, title, page, section) => {
  const defaultContentMap = {
    'hero-title': 'The DFW Punjabi Golf Club',
    'hero-subtitle': 'Golf Club',
    'hero-description': 'Where tradition meets excellence. Join our exclusive community of Punjabi golf enthusiasts in the heart of Dallas-Fort Worth.',
    'hero-cta-primary': 'Join Our Club',
    'hero-cta-secondary': 'Learn More',
    'stats-members': '150+',
    'stats-years': '25+',
    'stats-events': '12',
    'stats-courses': '4',
    'features-title': 'Why Choose Our Club?',
    'features-subtitle': 'Experience the perfect blend of premium golf amenities, cultural connection, and professional networking.',
    'feature-1-title': 'Premium Golf Experience',
    'feature-1-description': 'Access to top-tier golf courses with exclusive member benefits and professional instruction.',
    'feature-2-title': 'Community & Networking',
    'feature-2-description': 'Connect with fellow Punjabi professionals and build lasting friendships on and off the course.',
    'feature-3-title': 'Tournaments & Events',
    'feature-3-description': 'Participate in exciting tournaments, charity events, and social gatherings throughout the year.',
    'feature-4-title': 'Flexible Scheduling',
    'feature-4-description': 'Multiple tee times and events to fit your busy schedule and lifestyle.',
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
    'benefit-1-title': 'Priority Tee Times',
    'benefit-1-description': 'Reserved tee times and priority booking for all club events.',
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
    'schedule-hero-title': 'Event Schedule',
    'schedule-hero-subtitle': 'Stay updated on all upcoming events, tournaments, and club activities.',
    'calendar-title': 'Event Calendar',
    'calendar-subtitle': 'Browse our comprehensive calendar of events and activities.',
    'contact-hero-title': 'Contact Us',
    'contact-hero-subtitle': 'Get in touch with our team. We\'re here to help with any questions or concerns.',
    'departments-title': 'Department Contacts',
    'departments-subtitle': 'Connect with the right department for your specific needs.',
    'events-hero-title': 'Club Events',
    'events-hero-subtitle': 'Discover exciting tournaments, social gatherings, and special events throughout the year.',
    'upcoming-events-title': 'Upcoming Events',
    'upcoming-events-subtitle': 'Mark your calendar for these exciting upcoming events.',
    'past-events-title': 'Past Events',
    'past-events-subtitle': 'Relive the memories of our successful past events and tournaments.',
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
    version: 1,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    lastModifiedAt: admin.firestore.FieldValue.serverTimestamp(),
    lastModifiedBy: 'system-upload-script'
  };
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
            const contentData = getDefaultContent(contentId, title, page, sectionName);
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

// Function to clean up duplicate or test content
async function cleanupContent() {
  console.log('🧹 Cleaning up content...');
  
  try {
    const snapshot = await db.collection('content').get();
    let deletedCount = 0;
    
    for (const doc of snapshot.docs) {
      const data = doc.data();
      
      // Delete documents with test content or specific patterns
      if (data.content && (
        data.content.includes('test') || 
        data.content.includes('Test') ||
        data.content.includes('default') ||
        data.content.includes('Default')
      )) {
        await doc.ref.delete();
        console.log(`   🗑️  Deleted test content: ${data.contentId}`);
        deletedCount++;
      }
    }
    
    console.log(`\n🧹 Cleanup complete! Deleted ${deletedCount} test documents.`);
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
  }
}

// Main execution
async function main() {
  const command = process.argv[2] || 'upload';
  
  switch (command) {
    case 'check':
      await checkExistingContent();
      break;
    case 'cleanup':
      await cleanupContent();
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
