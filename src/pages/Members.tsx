import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Flag, Star, CheckCircle, ArrowRight, Shield, Heart, Calendar, MapPin } from 'lucide-react';

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
        'Priority tee time booking',
        'Tournament participation',
        'Social events access',
        'Member directory access',
        'Newsletter subscription'
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
        'Priority family tee times',
        'Family social gatherings'
      ],
      popular: true
    },
    {
      id: 'corporate',
      name: 'Corporate Membership',
      price: '$3,600',
      period: 'per year',
      description: 'Designed for businesses to entertain clients and build professional relationships.',
      features: [
        'All family benefits',
        'Up to 4 designated employees',
        'Client entertainment privileges',
        'Corporate event hosting',
        'Business networking events',
        'Branding opportunities'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Flag,
      title: 'Premium Golf Access',
      description: 'Access to 4 world-class golf courses with member-only rates and priority booking.',
      color: 'from-golf-500 to-golf-600'
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
      description: 'Connect with fellow Panjabi professionals and build lasting friendships.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Heart,
      title: 'Cultural Connection',
      description: 'Celebrate and preserve Panjabi culture through golf and community events.',
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

  const testimonials = [
    {
      name: 'Rajinder Singh',
      membership: 'Individual Member since 2018',
      content: 'The DFW Panjabi Golf Club has transformed my golf experience. The community is incredible, and the access to premium courses is unmatched.',
      rating: 5
    },
    {
      name: 'Priya & Amit Patel',
      membership: 'Family Members since 2020',
      content: 'As a family, we love the inclusive environment and the opportunity to golf together. Our kids have made great friends here.',
      rating: 5
    },
    {
      name: 'Gurpreet Kaur',
      membership: 'Corporate Member since 2021',
      content: 'Our corporate membership has been invaluable for client entertainment and team building. The networking opportunities are fantastic.',
      rating: 5
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
              Become a Member
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Join our exclusive community of Panjabi golf enthusiasts and experience 
              premium golf access, cultural connection, and lasting friendships.
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
              Choose Your Membership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the membership type that best fits your needs and lifestyle. 
              All memberships include access to our premium golf courses and community events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${
                  type.popular ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                }`}
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
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">{type.price}</span>
                    <span className="text-gray-600 ml-2">{type.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    type.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Choose {type.name}
                </motion.button>
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
              Member Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exclusive benefits and privileges that come with being a member 
              of The DFW Panjabi Golf Club.
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

      {/* Testimonials */}
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
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from current members about their experience and the value they find in our club.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 relative"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.membership}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Portal Preview */}
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
                Member Portal Access
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Once you become a member, you'll have access to our exclusive member portal 
                with advanced features and personalized content.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="text-gray-700">Advanced tee time booking system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-golf-100 rounded-full flex items-center justify-center">
                    <Flag className="w-3 h-3 text-golf-600" />
                  </div>
                  <span className="text-gray-700">Personalized golf statistics and tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-gold-600" />
                  </div>
                  <span className="text-gray-700">Member directory and networking tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Tournament registration and results</span>
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
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Member Login</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access your personalized member dashboard with exclusive features and content.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Member Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                    >
                      Access Portal
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
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards becoming part of the most prestigious Panjabi golf club 
              in the DFW area. Experience excellence, build connections, and enjoy the game you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
              >
                Contact Membership Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Members;
