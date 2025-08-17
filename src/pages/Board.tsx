import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Flag, Star, Calendar, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Board: React.FC = () => {
  const boardMembers = [
    {
      name: 'Rajinder Singh',
      position: 'President',
      email: 'president@dfwpunjabigolf.com',
      phone: '(555) 123-4567',
      image: '/images/board/president.jpg',
      bio: 'Leading our club with over 15 years of golf experience and a passion for community building.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Priya Patel',
      position: 'Vice President',
      email: 'vicepresident@dfwpunjabigolf.com',
      phone: '(555) 123-4568',
      image: '/images/board/vice-president.jpg',
      bio: 'Dedicated to expanding our club\'s reach and enhancing member experiences.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Amarjit Dhillon',
      position: 'Secretary',
      email: 'secretary@dfwpunjabigolf.com',
      phone: '(555) 123-4569',
      image: '/images/board/secretary.jpg',
      bio: 'Ensuring smooth communication and maintaining our club\'s official records.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Gurpreet Kaur',
      position: 'Treasurer',
      email: 'treasurer@dfwpunjabigolf.com',
      phone: '(555) 123-4570',
      image: '/images/board/treasurer.jpg',
      bio: 'Managing our club\'s finances with transparency and fiscal responsibility.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Harinder Singh',
      position: 'Tournament Director',
      email: 'tournaments@dfwpunjabigolf.com',
      phone: '(555) 123-4571',
      image: '/images/board/tournament-director.jpg',
      bio: 'Organizing exciting tournaments and events that bring our community together.',
      linkedin: '#',
      term: '2024-2026'
    },
    {
      name: 'Manpreet Kaur',
      position: 'Membership Director',
      email: 'membership@dfwpunjabigolf.com',
      phone: '(555) 123-4572',
      image: '/images/board/membership-director.jpg',
      bio: 'Growing our community and ensuring every member feels valued and supported.',
      linkedin: '#',
      term: '2024-2026'
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
              <ContentEditor contentId="board-hero-title" tag="span">
                Meet Our Board
              </ContentEditor>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              <ContentEditor contentId="board-hero-subtitle" tag="span">
                Get to know the dedicated leaders who guide our club's vision and ensure 
                every member has an exceptional experience.
              </ContentEditor>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Section */}
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
              Board of Directors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced board members bring diverse expertise and a shared commitment 
              to excellence, community, and the sport of golf.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-golf-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-16 h-16 text-primary-600" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-semibold mb-1">{member.position}</div>
                  <div className="text-sm text-gray-500">Term: {member.term}</div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${member.email}`} className="text-sm text-primary-600 hover:text-primary-700">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${member.phone}`} className="text-sm text-primary-600 hover:text-primary-700">
                      {member.phone}
                    </a>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
                Our Leadership Philosophy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-600 mb-3">Servant Leadership</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe in leading by serving our members and community. Every decision we make 
                    is guided by what's best for our members and the broader Punjabi community.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-golf-600 mb-3">Transparency & Accountability</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We maintain the highest standards of transparency in all our operations and hold 
                    ourselves accountable to our members and community.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gold-600 mb-3">Continuous Improvement</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We constantly seek ways to improve our club, enhance member experience, and 
                    expand our positive impact on the community.
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
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to fostering a culture of excellence, inclusivity, and 
                    community engagement that reflects the values of our members and the 
                    broader Punjabi community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Board Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have questions, suggestions, or feedback? Our board members are here to help 
              and would love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Contact Our Board
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Board;
