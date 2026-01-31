import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Flag, Star, Phone, Mail } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const About: React.FC = () => {
  const boardMembers = [
    {
      name: 'Charanpal Sekhon',
      position: 'Chairman',
      email: 'dfwpunjabigolf@gmail.com',
      phone: '469-406-7988',
      image: '/images/board/charanpal-sekhon.jpg',
      bio: 'Leading our club with over 15 years of golf experience and a passion for community building.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Rajdeep Brar',
      position: 'Captain',
      email: 'dfwpunjabigolf@gmail.com',
      phone: '469-406-7988',
      image: '/images/board/rajdeep-brar.jpg',
      bio: 'Dedicated to expanding our club\'s reach and enhancing member experiences.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Upinder Ghumman',
      position: 'Secretary',
      email: 'dfwpunjabigolf@gmail.com',
      phone: '469-406-7988',
      image: '/images/board/upinder-ghumman.jpg',
      bio: 'Ensuring smooth communication and maintaining our club\'s official records.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Kit Virk',
      position: 'Treasurer',
      email: 'dfwpunjabigolf@gmail.com',
      phone: '469-406-7988',
      image: '/images/board/kit-virk.jpg',
      bio: 'Growing our community and ensuring every member feels valued and supported.',
      linkedin: '#',
      term: '2024-2026'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'value-1-title',
      description: 'value-1-description'
    },
    {
      icon: Flag,
      title: 'value-2-title',
      description: 'value-2-description'
    },
    {
      icon: Users,
      title: 'value-3-title',
      description: 'value-3-description'
    },
    {
      icon: Trophy,
      title: 'value-4-title',
      description: 'value-4-description'
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
            <h1 className="text-5xl md:text-6xl font-bold text-shadow-lg">
              <ContentEditor contentId="about-hero-title" tag="span">
                About Our Club
              </ContentEditor>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              <ContentEditor contentId="mission-vision-title" tag="span">
                Our Mission & Vision
              </ContentEditor>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary-100 to-golf-100 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-golf-600 rounded-full flex items-center justify-center mx-auto">
                  <Flag className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Founders: Why We Exist</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our club was born from a simple idea shared by our founders <strong>Jessie Mann</strong>, <strong>Charanpal Sekhon</strong>, <strong>Rajdeep Brar</strong>, <strong>Upinder Ghumman</strong>, <strong>JP Bains</strong>, <strong>Mohit Verma</strong>, <strong>Tej Gill</strong> and <strong>Paul Buttar</strong>: to create a space where Punjabi professionals could enjoy their passion for golf while building meaningful connections with people who share their cultural heritage and professional aspirations.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <ContentEditor contentId="mission-title" tag="span">Mission</ContentEditor>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <ContentEditor contentId="mission-content" tag="span">
                  To provide an exceptional golf experience while fostering a strong Punjabi community through sportsmanship, cultural connection, and professional networking opportunities.
                </ContentEditor>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-golf-500 to-golf-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <ContentEditor contentId="vision-title" tag="span">Vision</ContentEditor>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <ContentEditor contentId="vision-content" tag="span">
                  To be the leading Punjabi golf club in the United States, recognized for excellence, community impact, and cultural preservation while promoting the sport of golf.
                </ContentEditor>
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Managing Committee Section */}
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
              <ContentEditor contentId="board-title" tag="span">
                Managing Committee
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="board-subtitle" tag="span">
                Meet the dedicated leaders who steer our club towards success.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  <ContentEditor contentId={index === 0 ? 'board-member-1-name' : 
                                           index === 1 ? 'board-member-2-name' :
                                           index === 2 ? 'board-member-3-name' :
                                           index === 3 ? 'board-member-4-name' :
                                           index === 4 ? 'board-member-5-name' : 'board-member-6-name'} tag="span">
                    {member.name}
                  </ContentEditor>
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  <ContentEditor contentId={index === 0 ? 'board-member-1-position' : 
                                           index === 1 ? 'board-member-2-position' :
                                           index === 2 ? 'board-member-3-position' :
                                           index === 3 ? 'board-member-4-position' :
                                           index === 4 ? 'board-member-5-position' : 'board-member-6-position'} tag="span">
                    {member.position}
                  </ContentEditor>
                </p>
                <p className="text-gray-600 leading-relaxed text-center">
                  <ContentEditor contentId={index === 0 ? 'board-member-1-bio' : 
                                           index === 1 ? 'board-member-2-bio' :
                                           index === 2 ? 'board-member-3-bio' :
                                           index === 3 ? 'board-member-4-bio' :
                                           index === 4 ? 'board-member-5-bio' : 'board-member-6-bio'} tag="span">
                    {member.bio}
                  </ContentEditor>
                </p>
                <div className="mt-6 flex items-center justify-center space-x-4">
                  <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Phone className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              <ContentEditor contentId="values-title" tag="span">
                Our Core Values
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <ContentEditor contentId="values-subtitle" tag="span">
                The principles that guide everything we do.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <ContentEditor contentId={value.title} tag="span">
                    {value.title === 'value-1-title' ? 'Excellence' :
                     value.title === 'value-2-title' ? 'Community' :
                     value.title === 'value-3-title' ? 'Heritage' : 'Sportsmanship'}
                  </ContentEditor>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <ContentEditor contentId={value.description} tag="span">
                    {value.description === 'value-1-description' ? 'Striving for the highest standards in everything we do' :
                     value.description === 'value-2-description' ? 'Building strong relationships and supporting each other' :
                     value.description === 'value-3-description' ? 'Honoring our cultural roots while embracing new traditions' :
                     'Playing with integrity, respect, and fair play'}
                  </ContentEditor>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our club? We'd love to hear from you and help you learn more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                details: ['469-406-7988'],
                description: 'Speak directly with our team for immediate assistance.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Mail,
                title: 'Email Us',
                details: ['dfwpunjabigolf@gmail.com'],
                description: 'Send us a message and we\'ll respond within 24 hours.',
                color: 'from-green-500 to-green-600'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
