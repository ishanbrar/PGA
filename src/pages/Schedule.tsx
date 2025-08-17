import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star, ChevronLeft, ChevronRight, Minus } from 'lucide-react';

const Schedule: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Spring Championship Tournament',
      date: '2024-03-15',
      time: '8:00 AM',
      location: 'Prestonwood Golf Club',
      type: 'Tournament',
      participants: 64,
      description: 'Our premier annual tournament featuring top players from across the region.'
    },
    {
      id: 2,
      title: 'New Member Welcome Mixer',
      date: '2024-03-22',
      time: '6:00 PM',
      location: 'Clubhouse',
      type: 'Social',
      participants: 25,
      description: 'Join us for an evening of networking, introductions, and celebration as we welcome our newest members to the DFW Punjabi Golf Club family.'
    },
    {
      id: 3,
      title: 'Charity Golf Outing',
      date: '2024-04-05',
      time: '9:00 AM',
      location: 'Tribute Golf Links',
      type: 'Charity',
      participants: 80,
      description: 'Support our community through golf! This charity outing raises funds for local Punjabi community organizations and scholarships.'
    },
    {
      id: 4,
      title: 'Member-Guest Tournament',
      date: '2024-05-18',
      time: '8:30 AM',
      location: 'Multiple Courses',
      type: 'Tournament',
      participants: 120,
      description: 'Invite your friends and family for a weekend of golf and camaraderie.'
    },
    {
      id: 5,
      title: 'Summer Social Gathering',
      date: '2024-06-15',
      time: '7:00 PM',
      location: 'Clubhouse',
      type: 'Social',
      participants: 40,
      description: 'Enjoy an evening of food, music, and fellowship with fellow members.'
    },
    {
      id: 6,
      title: 'Fall Classic Tournament',
      date: '2024-09-20',
      time: '8:00 AM',
      location: 'Prestonwood Golf Club',
      type: 'Tournament',
      participants: 72,
      description: 'Our fall championship tournament with exciting prizes and recognition.'
    },
    {
      id: 7,
      title: 'Holiday Celebration',
      date: '2024-12-14',
      time: '6:00 PM',
      location: 'Clubhouse',
      type: 'Cultural',
      participants: 60,
      description: 'Celebrate the holiday season with traditional Punjabi cuisine, live music, and festive activities for the whole family.'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getEventsForDate = (day: number) => {
    if (!day) return [];
    const month = currentMonth.getMonth() + 1;
    const year = currentMonth.getFullYear();
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    return events.filter(event => event.date === dateString);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
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
              Club Schedule
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Stay updated with all our upcoming events, tournaments, and social gatherings. 
              Book your tee times, view course schedules, and stay updated with all club activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
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
              Event Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View our monthly calendar to see all upcoming events, tournaments, and social gatherings.
            </p>
          </motion.div>

          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevMonth}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <h3 className="text-2xl font-bold text-gray-900">{getMonthName(currentMonth)}</h3>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextMonth}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 bg-gray-50 border-b">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-4 text-center font-semibold text-gray-700">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {getDaysInMonth(currentMonth).map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] p-2 border-r border-b ${
                    index % 7 === 6 ? 'border-r-0' : ''
                  } ${!day ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                >
                  {day && (
                    <>
                      <div className="text-sm font-medium text-gray-900 mb-2">{day}</div>
                      {getEventsForDate(day).map((event) => (
                        <div
                          key={event.id}
                          className="text-xs bg-primary-100 text-primary-800 p-1 rounded mb-1 truncate"
                          title={event.title}
                        >
                          {event.title}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on our exciting upcoming events and tournaments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 6).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Event Header */}
                <div className="relative h-32 bg-gradient-to-br from-primary-500 to-golf-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium text-primary-200 mb-1">{event.type}</div>
                    <div className="text-xl font-bold">{event.title}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">{event.participants} participants</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-golf-600" />
                      <span className="text-sm text-gray-600">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gold-600" />
                      <span className="text-sm text-gray-600">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-600">{event.participants} participants</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    Learn More
                  </motion.button>
                </div>
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
              Ready to Hit the Links?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join our events and experience the finest golf courses in the DFW area. 
              Our member rates and exclusive access make every round special.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View All Events
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
