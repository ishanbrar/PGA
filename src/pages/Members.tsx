import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Trophy, Flag, Star, CheckCircle, Shield, Heart, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Members: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const communityImages = [
    {
      src: '/images/community/pic1.jpg',
      alt: 'Golfers enjoying community time',
      title: 'Community Spirit'
    },
    {
      src: '/images/community/pic2.JPG',
      alt: 'Club members on the course',
      title: 'Golf Together'
    },
    {
      src: '/images/community/pic3.jpg',
      alt: 'Club member with golf club',
      title: 'Join Our Club'
    },
    {
      src: '/images/community/pic4.jpg',
      alt: 'Golf course scenery',
      title: 'Beautiful Course'
    },
    {
      src: '/images/community/pic5.jpg',
      alt: 'Club members socializing',
      title: 'Social Connections'
    },
    {
      src: '/images/community/pic6.jpg',
      alt: 'Golf tournament action',
      title: 'Tournament Excitement'
    },
    {
      src: '/images/community/pic7.jpg',
      alt: 'Club celebration event',
      title: 'Celebrations'
    },
    {
      src: '/images/community/pic8.jpg',
      alt: 'Members networking',
      title: 'Networking'
    }
  ];

  // Auto-rotate carousel every 4 seconds
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

  const membershipTypes = [
    {
      id: 'individual',
      name: 'Individual Membership',
      price: '$1,200',
      period: 'per year',
      description: 'Perfect for individual golfers who want full access to all club benefits.',
      features: [
        'Access to all partner golf courses',
        'Priority event booking',
        'Tournament participation',
        'Social events access',
        'Member directory access'
      ],
      popular: false
    },
    {
      id: 'family',
      name: 'Family Membership',
      price: '$1,800',
      period: 'per year',
      description: 'Ideal for families who want to enjoy golf together and build lasting connections.',
      features: [
        'All individual benefits',
        'Spouse/partner included',
        'Children under 18 included',
        'Family event discounts',
        'Priority family events',
        'Family social gatherings'
      ],
      popular: true
    }
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Tournament Participation',
      description: 'Compete in exclusive tournaments and events with exciting prizes and recognition.',
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with fellow Punjabi professionals and build lasting friendships.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Star,
      title: 'Cultural Connection',
      description: 'Celebrate and preserve Punjabi culture through golf and community events.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Attend member-only social gatherings, workshops, and cultural celebrations.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Member Support',
      description: 'Dedicated support team and resources to enhance your golf experience.',
      color: 'from-blue-500 to-blue-600'
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
              <ContentEditor contentId="members-hero-title" tag="span">
                Become a Member
              </ContentEditor>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              <ContentEditor contentId="members-hero-subtitle" tag="span">
                Join our exclusive community of Punjabi golf enthusiasts and experience 
                cultural connection, tournament participation, and lasting friendships.
              </ContentEditor>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Types */}
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
              <ContentEditor contentId="membership-title" tag="span">
                Choose Your Membership
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="membership-subtitle" tag="span">
                Select the membership type that best fits your needs and lifestyle. 
                All memberships include access to our premium golf courses and community events.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${type.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                </div>

                <ul className="space-y-4">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <ContentEditor contentId="benefits-title" tag="span">
                Member Benefits
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="benefits-subtitle" tag="span">
                Discover the exclusive benefits and privileges that come with being a member 
                of The DFW Punjabi Golf Club.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Application Process */}
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
              How to Join
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              To become a member of our exclusive community, reach out to an existing member 
              for a referral or contact us directly using our club phone number or email address.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get a Member Referral</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Connect with an existing club member who can provide a referral and introduce you to our community.
              </p>
              <p className="text-sm text-gray-500">
                Ask about membership benefits and learn about our upcoming events and activities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us Directly</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Reach out to our membership team directly using our club phone number or email address for more information.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p><strong>Phone:</strong> 469-406-7988</p>
                <p><strong>Email:</strong> dfwpunjabigolf@gmail.com</p>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards becoming part of the most prestigious Punjabi golf club 
              in the DFW area. Experience excellence, build connections, and enjoy the game you love.
            </p>
            
            {/* Community Images Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto mb-12"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {/* Main Image Display */}
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

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {communityImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Membership Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Members;
