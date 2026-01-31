import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flag, Users, Trophy, Calendar, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Home: React.FC = () => {
  // Community images for carousel
  const communityImages = [
    {
      src: '/images/community/pic1.jpg',
      alt: 'Golfers group enjoying the course'
    },
    {
      src: '/images/community/pic2.JPG',
      alt: 'Golf community gathering'
    },
    {
      src: '/images/community/pic3.jpg',
      alt: 'Individual golfer on the course'
    },
    {
      src: '/images/community/pic4.jpg',
      alt: 'Golf course scenery'
    },
    {
      src: '/images/community/pic5.jpg',
      alt: 'Club members socializing'
    },
    {
      src: '/images/community/pic6.jpg',
      alt: 'Golf tournament action'
    },
    {
      src: '/images/community/pic7.jpg',
      alt: 'Club celebration event'
    },
    {
      src: '/images/community/pic8.jpg',
      alt: 'Members networking'
    },
    {
      src: '/images/community/pic9.jpg',
      alt: 'Golf course landscape'
    },
    {
      src: '/images/community/pic10.jpg',
      alt: 'Club social gathering'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === communityImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [communityImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === communityImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? communityImages.length - 1 : prevIndex - 1
    );
  };

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

  const stats = [
    { number: 'stats-members', label: 'stats-members-label', icon: Users },
    { number: 'stats-years', label: 'stats-years-label', icon: Trophy },
    { number: 'stats-events', label: 'stats-events-label', icon: Calendar },
    { number: 'stats-courses', label: 'stats-courses-label', icon: Star }
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
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              <ContentEditor contentId="hero-title" tag="span">
                The DFW Punjabi Golf Club
              </ContentEditor>
             
            </h1>
            
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-2 flex justify-center"
            >
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem]">
                <img 
                  src="/images/logo/logo-main.png" 
                  alt="DFW Punjabi Golf Club Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-center">
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ContentEditor contentId="stats-title" tag="span">
                Club Statistics
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <ContentEditor contentId="stats-subtitle" tag="span">
                Numbers that tell our story of growth and success.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gold-400 mb-2">
                  <ContentEditor contentId={stat.number} tag="span">
                    {stat.number === 'stats-members' ? '90+' :
                     stat.number === 'stats-years' ? '25+' :
                     stat.number === 'stats-events' ? '12' : '10'}
                  </ContentEditor>
                </div>
                <div className="text-gray-300">
                  <ContentEditor contentId={stat.label} tag="span">
                    {stat.label === 'stats-members-label' ? 'Active Members' :
                     stat.label === 'stats-years-label' ? 'Years of Excellence' :
                     stat.label === 'stats-events-label' ? 'Annual Events' : 'Golf Courses'}
                  </ContentEditor>
                </div>
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
                        {event.date === 'home-event-1-date' ? 'March 2026' :
                         event.date === 'home-event-2-date' ? 'April 2026' : 'May 2026'}
                      </ContentEditor>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <ContentEditor contentId={event.title} tag="span">
                      {event.title === 'home-event-1-title' ? 'Season Opener' :
                       event.title === 'home-event-2-title' ? 'Spring Championship Tournament' : 'Stableford Tournament'}
                    </ContentEditor>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <ContentEditor contentId={event.description} tag="span">
                      {event.description === 'home-event-1-description' ? '2 Man Scramble' :
                       event.description === 'home-event-2-description' ? 'Our premier annual tournament featuring top players from across the region.' :
                       'A competitive tournament using the Stableford scoring system.'}
                    </ContentEditor>
                  </p>
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
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
              <ContentEditor contentId="features-subtitle" tag="span">
                Experience the perfect blend of premium golf amenities, cultural connection, and professional networking.
              </ContentEditor>
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

      {/* Ready to Join Section with Carousel */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Become part of the most prestigious Punjabi golf club in the DFW area. 
              Experience excellence, build connections, and enjoy the game you love.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img 
                    src={communityImages[currentImageIndex].src}
                    alt={communityImages[currentImageIndex].alt}
                    className="w-full h-96 object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {communityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
