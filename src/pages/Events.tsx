import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Star, ChevronRight, ChevronLeft, Filter, Search } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Championship Tournament',
      date: 'March 15, 2024',
      time: '8:00 AM - 6:00 PM',
      location: 'Prestonwood Golf Club',
      category: 'Tournament',
      description: 'Our premier spring tournament featuring individual stroke play, team competitions, and exciting prizes. Open to all skill levels with handicap divisions.',
      participants: 64,
      maxParticipants: 80,
      price: '$150',
      image: '/api/placeholder/600/400',
      features: ['Individual Stroke Play', 'Team Competitions', 'Handicap Divisions', 'Prizes & Awards', 'Lunch Included']
    },
    {
      id: 2,
      title: 'New Member Welcome Mixer',
      date: 'March 22, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Clubhouse',
      category: 'Social',
      description: 'Join us for an evening of networking, introductions, and celebration as we welcome our newest members to the DFW Panjabi Golf Club family.',
      participants: 45,
      maxParticipants: 60,
      price: 'Free',
      image: '/api/placeholder/600/400',
      features: ['Networking', 'Welcome Speeches', 'Light Refreshments', 'Member Introductions', 'Club Information']
    },
    {
      id: 3,
      title: 'Charity Golf Outing',
      date: 'April 5, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Tribute Golf Links',
      category: 'Charity',
      description: 'Support our community through golf! This charity outing raises funds for local Panjabi community organizations and scholarships.',
      participants: 72,
      maxParticipants: 100,
      price: '$200',
      image: '/api/placeholder/600/400',
      features: ['Scramble Format', 'Charity Auction', 'Dinner & Awards', 'Community Impact', 'Tax Deductible']
    },
    {
      id: 4,
      title: 'Golf Clinic & Skills Workshop',
      date: 'April 12, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Prestonwood Golf Club',
      category: 'Education',
      description: 'Improve your game with professional instruction covering putting, chipping, driving, and course management strategies.',
      participants: 25,
      maxParticipants: 30,
      price: '$75',
      image: '/api/placeholder/600/400',
      features: ['Professional Instruction', 'Video Analysis', 'Practice Drills', 'Course Management', 'Equipment Tips']
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Winter Classic Tournament',
      date: 'February 10, 2024',
      location: 'Tribute Golf Links',
      category: 'Tournament',
      description: 'A successful winter tournament with 48 participants competing in challenging winter conditions.',
      participants: 48,
      image: '/api/placeholder/600/400',
      highlights: ['Rajinder Singh - 1st Place', 'Priya Patel - 2nd Place', 'Amarjit Dhillon - 3rd Place', 'Perfect weather conditions', 'Record participation']
    },
    {
      id: 6,
      title: 'Holiday Celebration Dinner',
      date: 'December 15, 2023',
      location: 'Clubhouse',
      category: 'Social',
      description: 'Annual holiday celebration bringing together members and families for a festive evening of food, music, and community.',
      participants: 85,
      image: '/api/placeholder/600/400',
      highlights: ['Traditional Panjabi Cuisine', 'Live Music Performance', 'Family Activities', 'Gift Exchange', 'Community Bonding']
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
              Club Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Discover exciting tournaments, social gatherings, and community events that bring 
              our Panjabi golf community together throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories & Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === 'Tournament' ? 'bg-gold-100 text-gold-800' :
                      event.category === 'Social' ? 'bg-primary-100 text-primary-800' :
                      event.category === 'Charity' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{event.title}</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>

                  {/* Event Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Event Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {event.features.length > 3 && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded">
                          +{event.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Event Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}/{event.maxParticipants}</span>
                      </div>
                      <div className="text-primary-600 font-semibold">{event.price}</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Registration</span>
                      <span>{Math.round((event.participants / event.maxParticipants) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-golf-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 btn-primary text-center"
                    >
                      Register Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                    >
                      Details
                    </motion.button>
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
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the memories and achievements from our previous events and tournaments.
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
                className="card overflow-hidden group"
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === 'Tournament' ? 'bg-gold-100 text-gold-800' :
                      'bg-primary-100 text-primary-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{event.title}</div>
                    <div className="text-sm text-gray-200">{event.date}</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Event Highlights</h4>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 text-gold-400 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-300"
                    >
                      View Photos
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Never miss an important event! Subscribe to our event notifications and get updates 
                about registration deadlines, schedule changes, and exclusive member-only events.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="text-gray-700">Monthly event calendar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-golf-100 rounded-full flex items-center justify-center">
                    <Clock className="w-3 h-3 text-golf-600" />
                  </div>
                  <span className="text-gray-700">Early registration reminders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-gold-600" />
                  </div>
                  <span className="text-gray-700">Tournament results & highlights</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-golf-100 rounded-2xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-golf-600 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Event Notifications</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get instant updates about new events, registration deadlines, and exclusive member benefits.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                    >
                      Subscribe to Updates
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Events?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Whether you're a seasoned golfer or just starting out, our events offer something for everyone. 
              Join us and be part of our vibrant community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                View All Events
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
              >
                Contact Event Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
