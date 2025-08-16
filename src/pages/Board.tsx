import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Award, Users, Calendar, Target, Heart } from 'lucide-react';

const Board: React.FC = () => {
  const boardMembers = [
    {
      name: 'Rajinder Singh',
      position: 'President',
      image: '/api/placeholder/400/500',
      bio: 'A passionate golfer with over 20 years of experience, Rajinder has been instrumental in growing our club from 50 to 150+ members. He brings extensive business leadership experience and a deep commitment to community building.',
      email: 'president@dfwpanjabigolf.com',
      phone: '(555) 123-4567',
      linkedin: 'https://linkedin.com/in/rajinder-singh',
      achievements: ['Club President since 2018', 'Led 3 major tournaments', 'Increased membership by 40%'],
      term: '2022-2025'
    },
    {
      name: 'Priya Patel',
      position: 'Vice President',
      image: '/api/placeholder/400/500',
      bio: 'Priya is a dynamic leader who has revolutionized our event planning and member engagement strategies. Her background in marketing and community development has helped establish our club as a premier destination.',
      email: 'vicepresident@dfwpanjabigolf.com',
      phone: '(555) 123-4568',
      linkedin: 'https://linkedin.com/in/priya-patel',
      achievements: ['Vice President since 2020', 'Organized 15+ events annually', 'Improved member satisfaction to 95%'],
      term: '2023-2026'
    },
    {
      name: 'Amarjit Dhillon',
      position: 'Secretary',
      image: '/api/placeholder/400/500',
      bio: 'Amarjit brings meticulous attention to detail and organizational excellence to our club. His background in finance and governance ensures our operations run smoothly and transparently.',
      email: 'secretary@dfwpanjabigolf.com',
      phone: '(555) 123-4569',
      linkedin: 'https://linkedin.com/in/amarjit-dhillon',
      achievements: ['Secretary since 2019', 'Streamlined club operations', 'Implemented digital record keeping'],
      term: '2021-2024'
    },
    {
      name: 'Gurpreet Kaur',
      position: 'Treasurer',
      image: '/api/placeholder/400/500',
      bio: 'Gurpreet is a certified public accountant with over 15 years of experience in financial management. She ensures our club\'s financial health and transparency in all monetary matters.',
      email: 'treasurer@dfwpanjabigolf.com',
      phone: '(555) 123-4570',
      linkedin: 'https://linkedin.com/in/gurpreet-kaur',
      achievements: ['Treasurer since 2021', 'Improved financial reporting', 'Reduced operational costs by 25%'],
      term: '2022-2025'
    },
    {
      name: 'Harinder Singh',
      position: 'Tournament Director',
      image: '/api/placeholder/400/500',
      bio: 'Harinder is a former professional golfer who brings his expertise to organizing world-class tournaments and events. His passion for the game and attention to detail ensures exceptional experiences.',
      email: 'tournaments@dfwpanjabigolf.com',
      phone: '(555) 123-4571',
      linkedin: 'https://linkedin.com/in/harinder-singh',
      achievements: ['Tournament Director since 2018', 'Organized 25+ tournaments', 'Increased tournament participation by 60%'],
      term: '2020-2025'
    },
    {
      name: 'Manpreet Kaur',
      position: 'Membership Director',
      image: '/api/placeholder/400/500',
      bio: 'Manpreet excels at building relationships and growing our community. Her background in human resources and community development has been invaluable in attracting and retaining quality members.',
      email: 'membership@dfwpanjabigolf.com',
      phone: '(555) 123-4572',
      linkedin: 'https://linkedin.com/in/manpreet-kaur',
      achievements: ['Membership Director since 2020', 'Grew membership by 35%', 'Improved retention rate to 92%'],
      term: '2021-2024'
    }
  ];

  const committees = [
    {
      name: 'Tournament Committee',
      description: 'Organizes and manages all golf tournaments, leagues, and competitive events.',
      members: 8,
      icon: Award
    },
    {
      name: 'Social Events Committee',
      description: 'Plans cultural celebrations, networking events, and social gatherings.',
      members: 6,
      icon: Users
    },
    {
      name: 'Membership Committee',
      description: 'Handles new member recruitment, onboarding, and member relations.',
      members: 5,
      icon: Heart
    },
    {
      name: 'Finance Committee',
      description: 'Oversees budget planning, financial reporting, and investment decisions.',
      members: 4,
      icon: Target
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
              Meet Our Board
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Meet the dedicated leaders who guide our club with vision, passion, and commitment 
              to excellence in everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Grid */}
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
              Executive Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our board members bring diverse expertise and unwavering dedication to serving our community 
              and advancing our club's mission.
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
                className="card overflow-hidden group"
              >
                {/* Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-gold-400 mb-1">{member.term}</div>
                    <div className="text-2xl font-bold">{member.name}</div>
                    <div className="text-lg text-gray-200">{member.position}</div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <a href={`mailto:${member.email}`} className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <a href={`tel:${member.phone}`} className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-4 h-4 text-primary-600" />
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
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
              Our Committees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated committees work tirelessly behind the scenes to ensure every aspect 
              of our club operates smoothly and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <committee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{committee.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{committee.description}</p>
                <div className="text-sm text-primary-600 font-semibold">
                  {committee.members} Members
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
                    is guided by what's best for our members and the broader Panjabi community.
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
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Get Involved</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Interested in contributing to our club's leadership? We welcome members who want 
                    to serve on committees or run for board positions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Contact Us
                  </motion.button>
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
              Questions for Our Board?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our board members are always available to answer your questions, hear your suggestions, 
              and discuss ways to improve our club. Don't hesitate to reach out!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
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
