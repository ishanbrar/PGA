import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin
} from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Schedule: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'events-event-1-title',
      date: 'events-event-1-date',
      location: 'events-event-1-location',
      category: 'Tournament',
      description: 'events-event-1-description',
      image: '/images/courses/PecanHollow.jpeg',
      highlights: ['Championship Format', 'Professional Prizes', 'Live Scoring', 'Awards Ceremony', 'Networking']
    },
    {
      id: 2,
      title: 'events-event-2-title',
      date: 'events-event-2-date',
      location: 'events-event-2-location',
      category: 'Social',
      description: 'events-event-2-description',
      image: '/images/courses/PrestonwoodHills.jpeg',
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
      image: '/images/courses/PrestonwoodHills.jpeg',
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
      image: '/images/courses/Woodbridge.jpg',
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
      image: '/images/courses/IronHorse.jpeg',
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
      image: '/images/courses/PecanHollow.jpeg',
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
      image: '/images/courses/FriscoFarms.jpeg',
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
      image: '/images/courses/Woodbridge.jpg',
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold text-gold-400 bg-black/30 px-3 py-1 rounded-lg">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'events-event-1-date' ? 'March 2026' :
                         event.date === 'events-event-2-date' ? 'April 2026' : 'May 2026'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-event-1-title' ? 'Season Opener' :
                       event.title === 'events-event-2-title' ? 'Spring Championship Tournament' : 'Stableford Tournament'}
                    </ContentEditor>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'events-event-1-description' ? '2 Man Scramble' :
                       event.description === 'events-event-2-description' ? 'Our premier annual tournament featuring top players from across the region.' :
                       'A competitive tournament using the Stableford scoring system.'}
                    </ContentEditor>
                  </p>
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
                <div className={`relative h-48 overflow-hidden ${event.image === '/api/placeholder/600/400' ? 'bg-gradient-to-br from-gray-200 to-gray-300' : ''}`}>
                  {event.image !== '/api/placeholder/600/400' && (
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold text-gold-400 bg-black/30 px-3 py-1 rounded-lg">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'events-past-event-1-date' ? 'Dec 7, 2025' :
                         event.date === 'events-past-event-2-date' ? 'November 16, 2025' :
                         event.date === 'events-past-event-3-date' ? 'October 19, 2025' :
                         event.date === 'events-past-event-4-date' ? 'September 21, 2025' :
                         event.date === 'events-past-event-5-date' ? 'August 16, 2025' : 'July 19, 2025'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-past-event-1-title' ? 'Punjab Cup' :
                       event.title === 'events-past-event-2-title' ? 'Stableford Tournament' :
                       event.title === 'events-past-event-3-title' ? 'Strokeplay Event' :
                       event.title === 'events-past-event-4-title' ? 'Strokeplay Event' :
                       event.title === 'events-past-event-5-title' ? '2-Man Best Ball' : '2-Man Scramble'}
                    </ContentEditor>
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <ContentEditor contentId={event.location} tag="span">
                        {event.location === 'events-past-event-1-location' ? 'Prestonwood Hills CC' :
                         event.location === 'events-past-event-2-location' ? 'Woodbridge GC' :
                         event.location === 'events-past-event-3-location' ? 'Iron Horse Golf Club' :
                         event.location === 'events-past-event-4-location' ? 'Pecan Hollow GC' :
                         event.location === 'events-past-event-5-location' ? 'Frisco Farms GC' : 'Woodbridge GC'}
                      </ContentEditor>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'events-past-event-1-description' ? 'Team competition between Shan-E-Punjab and Sher-E-Punjab.' :
                       event.description === 'events-past-event-2-description' ? 'Individual Stableford' :
                       event.description === 'events-past-event-3-description' ? 'Individual Strokeplay' :
                       event.description === 'events-past-event-4-description' ? 'Individual Strokeplay' :
                       event.description === 'events-past-event-5-description' ? '2-Man Best Ball' :
                       '2-Man Scramble'}
                    </ContentEditor>
                  </p>
                  
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
