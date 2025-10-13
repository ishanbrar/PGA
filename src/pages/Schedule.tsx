import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users 
} from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Schedule: React.FC = () => {
  // Helper function to get highlights content ID
  const getHighlightsContentId = (eventTitle: string) => {
    return eventTitle.replace('-title', '-highlights');
  };
  const upcomingEvents = [
    {
      id: 1,
      title: 'events-event-1-title',
      date: 'events-event-1-date',
      location: 'events-event-1-location',
      category: 'Tournament',
      description: 'events-event-1-description',
      image: '/api/placeholder/600/400',
      highlights: ['Championship Format', 'Professional Prizes', 'Live Scoring', 'Awards Ceremony', 'Networking']
    },
    {
      id: 2,
      title: 'events-event-2-title',
      date: 'events-event-2-date',
      location: 'events-event-2-location',
      category: 'Social',
      description: 'events-event-2-description',
      image: '/api/placeholder/600/400',
      highlights: ['Family Friendly', 'Cultural Activities', 'Food & Refreshments', 'Games & Prizes', 'Community Building']
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'events-past-event-1-title',
      date: 'events-past-event-1-date',
      location: 'events-past-event-1-location',
      category: 'Tournament',
      description: 'events-past-event-1-description',
      participants: 48,
      image: '/api/placeholder/600/400',
      highlights: ['Rajinder Singh - 1st Place', 'Priya Patel - 2nd Place', 'Amarjit Dhillon - 3rd Place', 'Perfect weather conditions', 'Record participation']
    },
    {
      id: 4,
      title: 'events-past-event-2-title',
      date: 'events-past-event-2-date',
      location: 'events-past-event-2-location',
      category: 'Social',
      description: 'events-past-event-2-description',
      participants: 85,
      image: '/api/placeholder/600/400',
      highlights: ['Traditional Punjabi Cuisine', 'Live Music Performance', 'Family Activities', 'Gift Exchange', 'Community Bonding']
    },
    {
      id: 5,
      title: 'events-past-event-3-title',
      date: 'events-past-event-3-date',
      location: 'events-past-event-3-location',
      category: 'Charity',
      description: 'events-past-event-3-description',
      participants: 72,
      image: '/api/placeholder/600/400',
      highlights: ['Charity Auction Success', 'Community Fundraising', 'Local Organization Support', 'Volunteer Recognition', 'Impact Report']
    },
    {
      id: 6,
      title: 'events-past-event-4-title',
      date: 'events-past-event-4-date',
      location: 'events-past-event-4-location',
      category: 'Education',
      description: 'events-past-event-4-description',
      participants: 35,
      image: '/api/placeholder/600/400',
      highlights: ['Professional Instruction', 'Video Analysis', 'Practice Drills', 'Course Management', 'Equipment Tips']
    },
    {
      id: 7,
      title: 'events-past-event-5-title',
      date: 'events-past-event-5-date',
      location: 'events-past-event-5-location',
      category: 'Tournament',
      description: 'events-past-event-5-description',
      participants: 56,
      image: '/api/placeholder/600/400',
      highlights: ['Championship Format', 'Prize Distribution', 'Media Coverage', 'Sponsor Recognition', 'Player Interviews']
    },
    {
      id: 8,
      title: 'events-past-event-6-title',
      date: 'events-past-event-6-date',
      location: 'events-past-event-6-location',
      category: 'Social',
      description: 'events-past-event-6-description',
      participants: 92,
      image: '/api/placeholder/600/400',
      highlights: ['Cultural Celebration', 'Traditional Music', 'Family Activities', 'Community Awards', 'Networking Success']
    }
  ];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-golf-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              <ContentEditor contentId="events-hero-title" tag="span">
                Club Events
              </ContentEditor>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              <ContentEditor contentId="events-hero-subtitle" tag="span">
                Discover exciting tournaments, social gatherings, and community events that bring 
                our Punjabi golf community together throughout the year.
              </ContentEditor>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <ContentEditor contentId="upcoming-events-title" tag="span">
                Upcoming Events
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="upcoming-events-subtitle" tag="span">
                Mark your calendar for these exciting upcoming events.
              </ContentEditor>
            </p>
          </motion.div>

          {/* Upcoming Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'Tournament' ? 'bg-gold-500 text-white' :
                      event.category === 'Social' ? 'bg-primary-500 text-white' :
                      event.category === 'Charity' ? 'bg-red-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-gold-400">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'events-event-1-date' ? 'March 15, 2024' :
                         event.date === 'events-event-2-date' ? 'March 22, 2024' : 'April 5, 2024'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-event-1-title' ? 'Spring Championship Tournament' :
                       event.title === 'events-event-2-title' ? 'Family Golf Day' : 'Member-Guest Tournament'}
                    </ContentEditor>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'events-event-1-description' ? 'Our premier annual tournament featuring top players from across the region.' :
                       event.description === 'events-event-2-description' ? 'Fun day for all skill levels and ages.' :
                       'Invite your friends and family for a weekend of golf and camaraderie.'}
                    </ContentEditor>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <ContentEditor contentId="past-events-title" tag="span">
                Past Events
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="past-events-subtitle" tag="span">
                Relive the memories and achievements from our previous events and tournaments.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'Tournament' ? 'bg-gold-500 text-white' :
                      event.category === 'Social' ? 'bg-primary-500 text-white' :
                      event.category === 'Charity' ? 'bg-red-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-gold-400">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'events-past-event-1-date' ? 'February 10, 2024' :
                         event.date === 'events-past-event-2-date' ? 'December 15, 2023' :
                         event.date === 'events-past-event-3-date' ? 'November 20, 2023' :
                         event.date === 'events-past-event-4-date' ? 'October 8, 2023' :
                         event.date === 'events-past-event-5-date' ? 'September 15, 2023' : 'August 22, 2023'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-past-event-1-title' ? 'Winter Classic Tournament' :
                       event.title === 'events-past-event-2-title' ? 'Holiday Celebration Dinner' :
                       event.title === 'events-past-event-3-title' ? 'Fall Charity Golf Outing' :
                       event.title === 'events-past-event-4-title' ? 'Golf Skills Workshop' :
                       event.title === 'events-past-event-5-title' ? 'Summer Championship' : 'Community Mixer'}
                    </ContentEditor>
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <ContentEditor contentId={event.location} tag="span">
                        {event.location === 'events-past-event-1-location' ? 'Tribute Golf Links' :
                         event.location === 'events-past-event-2-location' ? 'Clubhouse' :
                         event.location === 'events-past-event-3-location' ? 'Prestonwood Golf Club' :
                         event.location === 'events-past-event-4-location' ? 'Prestonwood Golf Club' :
                         event.location === 'events-past-event-5-location' ? 'Tribute Golf Links' : 'Clubhouse'}
                      </ContentEditor>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'events-past-event-1-description' ? 'A successful winter tournament with 48 participants competing in challenging winter conditions.' :
                       event.description === 'events-past-event-2-description' ? 'Annual holiday celebration bringing together members and families for a festive evening of food, music, and community.' :
                       event.description === 'events-past-event-3-description' ? 'Fall charity outing that raised significant funds for local community organizations.' :
                       event.description === 'events-past-event-4-description' ? 'Educational workshop focused on improving golf skills and techniques.' :
                       event.description === 'events-past-event-5-description' ? 'Summer championship tournament with record participation and exciting competition.' :
                       'Community networking event that strengthened bonds between club members.'}
                    </ContentEditor>
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Highlights:</h4>
                    <div className="text-sm text-gray-600">
                      <ContentEditor 
                        contentId={getHighlightsContentId(event.title)}
                        tag="div"
                        allowDirectEdit={true}
                        showSaveButton={true}
                      >
                        {event.highlights.join(', ')}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
