import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, Calendar, MapPin, Flag, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We prioritize building strong relationships and fostering a sense of belonging among our members.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from golf skills to event organization.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We welcome golfers of all skill levels and backgrounds, creating an environment where everyone feels valued.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Tradition',
      description: 'We honor and preserve our Panjabi cultural heritage while embracing modern golf traditions.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      year: '1999',
      title: 'Club Founded',
      description: 'The DFW Panjabi Golf Club was established by a group of passionate golfers.'
    },
    {
      year: '2005',
      title: 'First Tournament',
      description: 'Hosted our inaugural championship tournament with 50 participants.'
    },
    {
      year: '2010',
      title: '100 Members',
      description: 'Reached our first milestone of 100 active members.'
    },
    {
      year: '2015',
      title: 'Charity Foundation',
      description: 'Established our charitable foundation to give back to the community.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched our comprehensive online platform and mobile app.'
    },
    {
      year: '2024',
      title: '25th Anniversary',
      description: 'Celebrating 25 years of excellence and community building.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Calendar },
    { number: '150+', label: 'Active Members', icon: Users },
    { number: '4', label: 'Partner Golf Courses', icon: Flag },
    { number: '12', label: 'Annual Events', icon: Star },
    { number: '$50K+', label: 'Charity Donations', icon: Heart },
    { number: '95%', label: 'Member Satisfaction', icon: Award }
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
              About Our Club
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Discover the rich history, core values, and remarkable achievements that make 
              The DFW Panjabi Golf Club a premier destination for golf enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-600 mb-3">Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide an exceptional golf experience while fostering a strong Panjabi community 
                    through sportsmanship, cultural connection, and professional networking opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-golf-600 mb-3">Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the leading Panjabi golf club in the United States, recognized for excellence, 
                    community impact, and cultural preservation while promoting the sport of golf.
                  </p>
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
                    <Flag className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Why We Exist</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our club was born from a simple idea: to create a space where Panjabi professionals 
                    could enjoy their passion for golf while building meaningful connections with people 
                    who share their cultural heritage and professional aspirations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the culture of our club.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
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
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a premier golf club, discover the key milestones 
              that shaped our organization.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-golf-500 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:text-left text-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-600 to-golf-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card p-6">
                      <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for mobile */}
                  <div className="lg:hidden w-full h-8"></div>
                </motion.div>
              ))}
            </div>
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
              By The Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our achievements and impact in numbers that tell the story of our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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

      {/* Location & Facilities */}
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
                Location & Facilities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Located in the heart of Dallas-Fort Worth, our club provides easy access to 
                      some of the finest golf courses in Texas, with convenient access from major highways.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Flag className="w-6 h-6 text-golf-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Partner Courses</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We have exclusive partnerships with prestigious golf courses including Prestonwood, 
                      Tribute Golf Links, and more, offering our members access to world-class facilities.
                    </p>
                  </div>
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
              <div className="bg-gradient-to-br from-golf-100 to-primary-100 rounded-2xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-golf-600 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Visit Us</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>123 Golf Club Drive</p>
                    <p>Dallas, TX 75201</p>
                    <p className="text-primary-600 font-semibold">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Legacy
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Become part of our storied history and help us continue building a community 
              that celebrates both golf excellence and cultural heritage.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Become a Member
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
