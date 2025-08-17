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

// Default content values - matches what's in AdminDashboard.tsx
const getDefaultContent = (contentId, title, page, section) => {
  const defaultContentMap = {
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
    'upcoming-events-title': 'Upcoming Events',
    'upcoming-events-subtitle': 'Don\'t miss out on our exciting upcoming events and tournaments.',
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
