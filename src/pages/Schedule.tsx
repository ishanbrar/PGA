import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  Trophy, 
  Star, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Schedule: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'events-event-1-title',
      date: 'events-event-1-date',
      time: 'events-event-1-time',
      location: 'events-event-1-location',
      category: 'Tournament',
      description: 'events-event-1-description',
      participants: 64,
      maxParticipants: 80,
      price: 'events-event-1-price',
      image: '/api/placeholder/600/400',
      features: ['Individual Stroke Play', 'Team Competitions', 'Handicap Divisions', 'Prizes & Awards', 'Lunch Included']
    },
    {
      id: 2,
      title: 'events-event-2-title',
      date: 'events-event-2-date',
      time: 'events-event-2-time',
      location: 'events-event-2-location',
      category: 'Social',
      description: 'events-event-2-description',
      participants: 45,
      maxParticipants: 60,
      price: 'events-event-2-price',
      image: '/api/placeholder/600/400',
      features: ['Networking', 'Welcome Speeches', 'Light Refreshments', 'Member Introductions', 'Club Information']
    },
    {
      id: 3,
      title: 'events-event-3-title',
      date: 'events-event-3-date',
      time: 'events-event-3-time',
      location: 'events-event-3-location',
      category: 'Charity',
      description: 'events-event-3-description',
      participants: 72,
      maxParticipants: 100,
      price: 'events-event-3-price',
      image: '/api/placeholder/600/400',
      features: ['Scramble Format', 'Charity Auction', 'Dinner & Awards', 'Community Impact', 'Tax Deductible']
    },
    {
      id: 4,
      title: 'events-event-4-title',
      date: 'events-event-4-date',
      time: 'events-event-4-time',
      location: 'events-event-4-location',
      category: 'Education',
      description: 'events-event-4-description',
      participants: 25,
      maxParticipants: 30,
      price: 'events-event-4-price',
      image: '/api/placeholder/600/400',
      features: ['Professional Instruction', 'Video Analysis', 'Practice Drills', 'Course Management', 'Equipment Tips']
    }
  ];

  const pastEvents = [
    {
      id: 5,
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
      id: 6,
      title: 'events-past-event-2-title',
      date: 'events-past-event-2-date',
      location: 'events-past-event-2-location',
      category: 'Social',
      description: 'events-past-event-2-description',
      participants: 85,
      image: '/api/placeholder/600/400',
      highlights: ['Traditional Punjabi Cuisine', 'Live Music Performance', 'Family Activities', 'Gift Exchange', 'Community Bonding']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: upcomingEvents.length },
    { id: 'tournament', name: 'Tournaments', count: upcomingEvents.filter(e => e.category === 'Tournament').length },
    { id: 'social', name: 'Social Events', count: upcomingEvents.filter(e => e.category === 'Social').length },
    { id: 'charity', name: 'Charity Events', count: upcomingEvents.filter(e => e.category === 'Charity').length },
    { id: 'education', name: 'Education', count: upcomingEvents.filter(e => e.category === 'Education').length }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category.toLowerCase() === selectedCategory);

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

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* Upcoming Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
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
                         event.date === 'events-event-2-date' ? 'March 22, 2024' :
                         event.date === 'events-event-3-date' ? 'April 5, 2024' : 'April 12, 2024'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-event-1-title' ? 'Spring Championship Tournament' :
                       event.title === 'events-event-2-title' ? 'New Member Welcome Mixer' :
                       event.title === 'events-event-3-title' ? 'Charity Golf Outing' : 'Golf Clinic & Skills Workshop'}
                    </ContentEditor>
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <ContentEditor contentId={event.time} tag="span">
                        {event.time === 'events-event-1-time' ? '8:00 AM - 6:00 PM' :
                         event.time === 'events-event-2-time' ? '6:00 PM - 9:00 PM' :
                         event.time === 'events-event-3-time' ? '9:00 AM - 5:00 PM' : '10:00 AM - 2:00 PM'}
                      </ContentEditor>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <ContentEditor contentId={event.location} tag="span">
                        {event.location === 'events-event-1-location' ? 'Prestonwood Golf Club' :
                         event.location === 'events-event-2-location' ? 'Clubhouse' :
                         event.location === 'events-event-3-location' ? 'Tribute Golf Links' : 'Prestonwood Golf Club'}
                      </ContentEditor>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'events-event-1-description' ? 'Our premier spring tournament featuring individual stroke play, team competitions, and exciting prizes. Open to all skill levels with handicap divisions.' :
                       event.description === 'events-event-2-description' ? 'Join us for an evening of networking, introductions, and celebration as we welcome our newest members to the DFW Punjabi Golf Club family.' :
                       event.description === 'events-event-3-description' ? 'Support our community through golf! This charity outing raises funds for local Punjabi community organizations and scholarships.' :
                       'Improve your game with professional instruction covering putting, chipping, driving, and course management strategies.'}
                    </ContentEditor>
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}/{event.maxParticipants}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <ContentEditor contentId={event.price} tag="span">
                          {event.price === 'events-event-1-price' ? '$150' :
                           event.price === 'events-event-2-price' ? 'Free' :
                           event.price === 'events-event-3-price' ? '$200' : '$75'}
                        </ContentEditor>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                  >
                    Register Now
                  </motion.button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      'bg-primary-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-gold-400">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'events-past-event-1-date' ? 'February 10, 2024' : 'December 15, 2023'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'events-past-event-1-title' ? 'Winter Classic Tournament' : 'Holiday Celebration Dinner'}
                    </ContentEditor>
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <ContentEditor contentId={event.location} tag="span">
                        {event.location === 'events-past-event-1-location' ? 'Tribute Golf Links' : 'Clubhouse'}
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
                       'Annual holiday celebration bringing together members and families for a festive evening of food, music, and community.'}
                    </ContentEditor>
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-gold-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
