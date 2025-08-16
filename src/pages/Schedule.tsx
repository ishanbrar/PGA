import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Flag, ChevronLeft, ChevronRight, Plus, Minus, Star } from 'lucide-react';

const Schedule: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState('all');

  const courses = [
    {
      id: 'prestonwood',
      name: 'Prestonwood Golf Club',
      location: 'Plano, TX',
      rating: 4.8,
      holes: 36,
      par: 72,
      length: '7,200 yards',
      image: '/api/placeholder/600/400',
      description: 'A championship golf course featuring rolling hills, mature trees, and challenging water hazards.',
      amenities: ['Pro Shop', 'Driving Range', 'Practice Green', 'Clubhouse', 'Restaurant']
    },
    {
      id: 'tribute',
      name: 'Tribute Golf Links',
      location: 'The Colony, TX',
      rating: 4.9,
      holes: 18,
      par: 72,
      length: '7,200 yards',
      image: '/api/placeholder/600/400',
      description: 'A Scottish links-style course with rolling fairways, deep bunkers, and challenging winds.',
      amenities: ['Pro Shop', 'Driving Range', 'Practice Green', 'Clubhouse', 'Restaurant']
    },
    {
      id: 'coyote',
      name: 'Coyote Ridge Golf Club',
      location: 'Carrollton, TX',
      rating: 4.7,
      holes: 18,
      par: 72,
      length: '7,000 yards',
      image: '/api/placeholder/600/400',
      description: 'A scenic course with elevation changes, water features, and strategic bunkering.',
      amenities: ['Pro Shop', 'Driving Range', 'Practice Green', 'Clubhouse', 'Restaurant']
    },
    {
      id: 'heritage',
      name: 'Heritage Ranch Golf Club',
      location: 'McKinney, TX',
      rating: 4.6,
      holes: 18,
      par: 72,
      length: '6,800 yards',
      image: '/api/placeholder/600/400',
      description: 'A traditional course with tree-lined fairways and challenging approach shots.',
      amenities: ['Pro Shop', 'Driving Range', 'Practice Green', 'Clubhouse', 'Restaurant']
    }
  ];

  const teeTimes = [
    { time: '7:00 AM', available: true, price: '$85' },
    { time: '7:30 AM', available: true, price: '$85' },
    { time: '8:00 AM', available: false, price: '$95' },
    { time: '8:30 AM', available: true, price: '$85' },
    { time: '9:00 AM', available: false, price: '$95' },
    { time: '9:30 AM', available: true, price: '$85' },
    { time: '10:00 AM', available: true, price: '$75' },
    { time: '10:30 AM', available: true, price: '$75' },
    { time: '11:00 AM', available: true, price: '$75' },
    { time: '11:30 AM', available: true, price: '$75' },
    { time: '12:00 PM', available: true, price: '$65' },
    { time: '12:30 PM', available: true, price: '$65' },
    { time: '1:00 PM', available: true, price: '$65' },
    { time: '1:30 PM', available: true, price: '$65' },
    { time: '2:00 PM', available: true, price: '$55' },
    { time: '2:30 PM', available: true, price: '$55' },
    { time: '3:00 PM', available: true, price: '$55' },
    { time: '3:30 PM', available: true, price: '$55' },
    { time: '4:00 PM', available: true, price: '$45' },
    { time: '4:30 PM', available: true, price: '$45' },
    { time: '5:00 PM', available: true, price: '$45' },
    { time: '5:30 PM', available: true, price: '$45' }
  ];

  const events = [
    {
      title: 'Member Tournament',
      date: 'March 15, 2024',
      course: 'Prestonwood Golf Club',
      time: '8:00 AM',
      type: 'Tournament'
    },
    {
      title: 'Golf Clinic',
      date: 'March 20, 2024',
      course: 'Tribute Golf Links',
      time: '10:00 AM',
      type: 'Education'
    },
    {
      title: 'Social Round',
      date: 'March 25, 2024',
      course: 'Coyote Ridge Golf Club',
      time: '2:00 PM',
      type: 'Social'
    }
  ];

  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      days.push(currentDate);
    }
    return days;
  };

  const calendarDays = generateCalendarDays(currentMonth);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
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
              Golf Schedule
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Book your tee times, view course schedules, and stay updated with all club activities 
              and tournaments throughout the year.
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
              Tee Time Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse available tee times and book your preferred slots at our partner golf courses.
            </p>
          </motion.div>

          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <h3 className="text-2xl font-bold text-gray-900">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            {/* Calendar Headers */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(day)}
                  className={`p-3 text-sm rounded-lg transition-all duration-300 ${
                    isToday(day)
                      ? 'bg-primary-600 text-white font-semibold'
                      : isSelected(day)
                      ? 'bg-primary-100 text-primary-700 font-semibold'
                      : isCurrentMonth(day)
                      ? 'hover:bg-gray-100 text-gray-900'
                      : 'text-gray-400'
                  }`}
                >
                  {day.getDate()}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Date Info */}
          <div className="bg-gradient-to-br from-primary-50 to-golf-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Available Tee Times</h4>
                <div className="text-2xl font-bold text-primary-600">
                  {teeTimes.filter(t => t.available).length}
                </div>
                <p className="text-sm text-gray-600">slots available</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Course Events</h4>
                <div className="text-2xl font-bold text-golf-600">
                  {events.filter(e => e.date === selectedDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })).length}
                </div>
                <p className="text-sm text-gray-600">events scheduled</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Weather</h4>
                <div className="text-2xl font-bold text-gold-600">72°F</div>
                <p className="text-sm text-gray-600">partly cloudy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tee Time Booking */}
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
              Book Your Tee Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select your preferred course and time slot to reserve your spot on the green.
            </p>
          </motion.div>

          {/* Course Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-6 cursor-pointer transition-all duration-300 ${
                  selectedCourse === course.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                }`}
                onClick={() => setSelectedCourse(course.id)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-golf-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flag className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-gold-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{course.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tee Time Grid */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Available Tee Times - {courses.find(c => c.id === selectedCourse)?.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {teeTimes.map((slot, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    slot.available
                      ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className="font-semibold">{slot.time}</div>
                  <div className="text-xs">{slot.price}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
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
              Our Partner Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class golf at our carefully selected partner courses throughout the DFW area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{course.name}</div>
                    <div className="text-sm text-gray-200">{course.location}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-gold-400 fill-current" />
                      <span className="text-white text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary-600">{course.holes}</div>
                      <div className="text-sm text-gray-600">Holes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-golf-600">{course.par}</div>
                      <div className="text-sm text-gray-600">Par</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gold-600">{course.length}</div>
                      <div className="text-sm text-gray-600">Length</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-purple-600">{course.amenities.length}</div>
                      <div className="text-sm text-gray-600">Amenities</div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.amenities.map((amenity, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 btn-primary text-center"
                    >
                      Book Tee Time
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                    >
                      Course Info
                    </motion.button>
                  </div>
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
              Book your tee time today and experience the finest golf courses in the DFW area. 
              Our member rates and exclusive access make every round special.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
