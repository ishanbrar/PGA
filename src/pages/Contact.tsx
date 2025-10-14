import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import ContentEditor from '../components/ContentEditor';

const Contact: React.FC = () => {




  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['469-406-7988'],
      description: 'Call us during business hours for immediate assistance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['dfwpunjabigolf@gmail.com'],
      description: 'Send us an email and we\'ll respond within 24 hours.',
      color: 'from-green-500 to-green-600'
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
              <ContentEditor contentId="contact-hero-title" tag="span">
                Contact Us
              </ContentEditor>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center max-w-3xl mx-auto">
              <ContentEditor contentId="contact-hero-subtitle" tag="span">
                Get in touch with our team. We\'re here to help with any questions, 
                membership inquiries, or support you may need.
              </ContentEditor>
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
              <ContentEditor contentId="contact-methods-title" tag="span">
                How to Reach Us
              </ContentEditor>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              <ContentEditor contentId="contact-methods-subtitle" tag="span">
                Choose the most convenient way to get in touch with our team. 
                We\'re committed to providing excellent service and support.
              </ContentEditor>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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



    </div>
  );
};

export default Contact;
