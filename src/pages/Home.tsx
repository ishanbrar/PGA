import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flag, Users, Trophy, Calendar, Star, ChevronRight } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Home: React.FC = () => {
  const features = [
    {
      icon: Flag,
      title: 'Premium Golf Experience',
      description: 'Access to top-tier golf courses with exclusive member benefits and professional instruction.',
      color: 'from-golf-500 to-golf-600'
    },
    {
      icon: Users,
      title: 'Community & Networking',
      description: 'Connect with fellow Punjabi professionals and build lasting friendships on and off the course.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Trophy,
      title: 'Tournaments & Events',
      description: 'Participate in exciting tournaments, charity events, and social gatherings throughout the year.',
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Multiple events and activities to fit your busy schedule and lifestyle.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const upcomingEvents = [
    {
      title: 'home-event-1-title',
      date: 'home-event-1-date',
      description: 'home-event-1-description',
      image: '/images/events/spring-tournament.jpg'
    },
    {
      title: 'home-event-2-title',
      date: 'home-event-2-date',
      description: 'home-event-2-description',
      image: '/images/events/charity-outing.jpg'
    },
    {
      title: 'home-event-3-title',
      date: 'home-event-3-date',
      description: 'home-event-3-description',
      image: '/images/events/member-guest.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-golf-pattern opacity-10"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"
        ></motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              <ContentEditor contentId="hero-title" tag="span">
                The DFW Punjabi
              </ContentEditor>
              <span className="block text-gradient bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
                <ContentEditor contentId="hero-subtitle" tag="span">
                  Golf Club
                </ContentEditor>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              <ContentEditor contentId="hero-description" tag="span">
                Where tradition meets excellence. Join our exclusive community of Punjabi golf enthusiasts 
                in the heart of Dallas-Fort Worth.
              </ContentEditor>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>Join Our Club</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                <ContentEditor contentId="stats-members" tag="span">150+</ContentEditor>
              </div>
              <div className="text-gray-300 text-sm">
                <ContentEditor contentId="stats-members-label" tag="span">Active Members</ContentEditor>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                <ContentEditor contentId="stats-years" tag="span">25+</ContentEditor>
              </div>
              <div className="text-gray-300 text-sm">
                <ContentEditor contentId="stats-years-label" tag="span">Years History</ContentEditor>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                <ContentEditor contentId="stats-events" tag="span">12</ContentEditor>
              </div>
              <div className="text-gray-300 text-sm">
                <ContentEditor contentId="stats-events-label" tag="span">Annual Events</ContentEditor>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                <ContentEditor contentId="stats-courses" tag="span">4</ContentEditor>
              </div>
              <div className="text-gray-300 text-sm">
                <ContentEditor contentId="stats-courses-label" tag="span">Golf Courses</ContentEditor>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Club?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of premium golf amenities, cultural connection, and professional networking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <ContentEditor contentId="home-upcoming-events-title" tag="span">
                  Upcoming Events
                </ContentEditor>
              </h2>
              <p className="text-xl text-gray-600">
                <ContentEditor contentId="home-upcoming-events-subtitle" tag="span">
                  Don't miss out on our exciting upcoming events and tournaments.
                </ContentEditor>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>View All Events</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-gold-400">
                      <ContentEditor contentId={event.date} tag="span">
                        {event.date === 'home-event-1-date' ? 'March 15-17, 2024' :
                         event.date === 'home-event-2-date' ? 'April 22, 2024' : 'May 18-19, 2024'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'home-event-1-title' ? 'Spring Championship Tournament' :
                       event.title === 'home-event-2-title' ? 'Charity Golf Outing' : 'Member-Guest Tournament'}
                    </ContentEditor>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'home-event-1-description' ? 'Our premier annual tournament featuring top players from across the region.' :
                       event.description === 'home-event-2-description' ? 'Support local causes while enjoying a great day on the course.' :
                       'Invite your friends and family for a weekend of golf and camaraderie.'}
                    </ContentEditor>
                  </p>
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Become part of the most prestigious Punjabi golf club in the DFW area. 
              Experience excellence, build connections, and enjoy the game you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/members">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Apply for Membership
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
