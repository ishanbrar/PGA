import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Flag } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('general');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568'],
      description: 'Call us during business hours for immediate assistance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dfwpanjabigolf.com', 'membership@dfwpanjabigolf.com'],
      description: 'Send us an email and we\'ll respond within 24 hours.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Golf Club Drive', 'Dallas, TX 75201'],
      description: 'Stop by our clubhouse during business hours.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 7:00 AM - 7:00 PM'],
      description: 'We\'re here to help you during these hours.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const departments = [
    {
      id: 'general',
      name: 'General Inquiries',
      description: 'Questions about our club, events, or general information.',
      contact: 'info@dfwpanjabigolf.com',
      response: 'Within 24 hours'
    },
    {
      id: 'membership',
      name: 'Membership',
      description: 'Information about joining our club, membership benefits, and applications.',
      contact: 'membership@dfwpanjabigolf.com',
      response: 'Within 48 hours'
    },
    {
      id: 'events',
      name: 'Events & Tournaments',
      description: 'Questions about upcoming events, tournament registration, and event planning.',
      contact: 'events@dfwpanjabigolf.com',
      response: 'Within 24 hours'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      description: 'Help with our website, mobile app, or online booking system.',
      contact: 'support@dfwpanjabigolf.com',
      response: 'Within 4 hours'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Get in touch with our team. We\'re here to answer your questions, 
              help with membership, and assist with any club-related inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method of contact. We\'re here to help with any questions 
              or assistance you may need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Department Info */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we\'ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Information</option>
                      <option value="events">Events & Tournaments</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-4"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Department Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Department Contacts
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Need to reach a specific department? Here\'s who to contact for different types of inquiries.
              </p>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`card p-6 cursor-pointer transition-all duration-300 ${
                      activeTab === dept.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                    }`}
                    onClick={() => setActiveTab(dept.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary-600" />
                            <span className="text-primary-600 font-medium">{dept.contact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-500">{dept.response}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className={`w-3 h-3 rounded-full ${
                          activeTab === dept.id ? 'bg-primary-500' : 'bg-gray-300'
                        }`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
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
              Visit Our Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Dallas-Fort Worth, our club is easily accessible 
              from major highways and offers plenty of parking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Golf Club Drive<br />
                      Dallas, TX 75201<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-golf-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 7:00 PM</p>
                      <p className="text-sm text-gray-500 mt-2">*Hours may vary on holidays</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Main Office: (555) 123-4567</p>
                      <p>Membership: (555) 123-4568</p>
                      <p>Events: (555) 123-4569</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Addresses</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>General: info@dfwpanjabigolf.com</p>
                      <p>Membership: membership@dfwpanjabigolf.com</p>
                      <p>Events: events@dfwpanjabigolf.com</p>
                    </div>
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
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our club, membership, and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I become a member?',
                answer: 'To become a member, please fill out our membership application form and submit it along with the required documentation. Our membership committee will review your application and contact you within 48 hours.'
              },
              {
                question: 'What are the membership fees?',
                answer: 'Membership fees vary based on the type of membership you choose. We offer individual, family, and corporate memberships. Please contact our membership department for current pricing information.'
              },
              {
                question: 'Can I bring guests to the club?',
                answer: 'Yes, members can bring guests to the club. Guest fees apply and vary by course. Please check with our staff for current guest policies and pricing.'
              },
              {
                question: 'How do I book tee times?',
                answer: 'Tee times can be booked through our website, mobile app, or by calling our office. Members have priority booking privileges and can book up to 14 days in advance.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Don\'t hesitate to reach out to us directly. Our team is here to help 
              and ensure you have all the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Call Us Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
              >
                Send Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
