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
      details: ['info@dfwpunjabigolf.com', 'membership@dfwpunjabigolf.com'],
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
      description: 'Questions about our club, services, or general information.',
      contact: 'info@dfwpunjabigolf.com',
      response: 'Within 24 hours'
    },
    {
      id: 'membership',
      name: 'Membership',
      description: 'Information about joining our club, membership types, and fees.',
      contact: 'membership@dfwpunjabigolf.com',
      response: 'Within 48 hours'
    },
    {
      id: 'events',
      name: 'Events & Tournaments',
      description: 'Questions about upcoming events, tournament registration, and schedules.',
      contact: 'events@dfwpunjabigolf.com',
      response: 'Within 24 hours'
    },
    {
      id: 'support',
      name: 'Technical Support',
      description: 'Help with website access, member portal, or technical issues.',
      contact: 'support@dfwpunjabigolf.com',
      response: 'Within 4 hours'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
              Get in touch with our team. We\'re here to help with any questions, 
              membership inquiries, or support you may need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
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
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team. 
              We\'re committed to providing excellent service and support.
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
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
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

      {/* Department Information */}
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
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the right department for your specific needs. 
              Each team specializes in different aspects of our club.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
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
        </div>
      </section>

      {/* FAQ Section */}
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
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
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
              Additional Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find more ways to connect with us and stay updated with club news and events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-golf-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Contacts</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>General: info@dfwpunjabigolf.com</p>
                <p>Membership: membership@dfwpunjabigolf.com</p>
                <p>Events: events@dfwpunjabigolf.com</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-golf-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Numbers</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Main Office: (555) 123-4567</p>
                <p>Membership: (555) 123-4568</p>
                <p>Events: (555) 123-4569</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Times</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>General Inquiries: 24 hours</p>
                <p>Membership: 48 hours</p>
                <p>Technical Support: 4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
