import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Trophy, Flag, Star, CheckCircle, ArrowRight, Shield, Heart, Calendar, MapPin } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Members: React.FC = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [selectedMembership, setSelectedMembership] = useState('individual');

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
      icon: Flag,
      title: 'Premium Golf Access'
    },
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

  const stats = [
    { number: '150+', label: 'Active Members', icon: Users },
    { number: '4', label: 'Partner Courses', icon: Flag },
    { number: '12', label: 'Annual Events', icon: Calendar },
    { number: '95%', label: 'Satisfaction Rate', icon: Star }
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
                premium golf access, cultural connection, and lasting friendships.
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Club Statistics
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join a thriving community with impressive numbers that reflect our success and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.number}</div>
                <div className="text-primary-100 text-sm">{stat.label}</div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our membership application process is simple and straightforward. 
              Follow these steps to become part of our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Fill out our online membership application form with your details and preferences.'
              },
              {
                step: '02',
                title: 'Review Process',
                description: 'Our membership committee will review your application within 48 hours.'
              },
              {
                step: '03',
                title: 'Interview & Approval',
                description: 'Schedule a brief interview to discuss your golf experience and club expectations.'
              },
              {
                step: '04',
                title: 'Welcome & Onboarding',
                description: 'Receive your welcome package and get introduced to the club community.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Portal Preview */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Member Portal
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access your exclusive member portal to manage your profile, book events, 
                view tournament schedules, and connect with fellow members.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Easy event booking and management',
                  'Tournament registration and results',
                  'Member directory and messaging',
                  'Event calendar and RSVP system',
                  'Payment history and billing',
                  'Mobile app for on-the-go access'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Access Portal</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 bg-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Welcome Back!</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Next Event</span>
                      <span className="font-semibold text-gray-900">Tomorrow, 8:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Upcoming Event</span>
                      <span className="font-semibold text-gray-900">Spring Tournament</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Messages</span>
                      <span className="font-semibold text-gray-900">3 unread</span>
                    </div>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards becoming part of the most prestigious Punjabi golf club 
              in the DFW area. Experience excellence, build connections, and enjoy the game you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Apply Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
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
