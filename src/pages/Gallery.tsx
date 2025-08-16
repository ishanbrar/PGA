import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Users, Trophy, Heart, ChevronLeft, ChevronRight, X, Download, Share2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos', count: 156 },
    { id: 'tournaments', name: 'Tournaments', count: 45 },
    { id: 'events', name: 'Social Events', count: 38 },
    { id: 'members', name: 'Member Photos', count: 52 },
    { id: 'courses', name: 'Golf Courses', count: 21 }
  ];

  const galleryImages = [
    // Tournament Photos
    {
      id: 1,
      src: '/api/placeholder/600/400',
      alt: 'Spring Championship Winners',
      category: 'tournaments',
      title: 'Spring Championship Winners',
      description: 'Congratulations to our 2024 Spring Championship winners!',
      date: 'March 15, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 2,
      src: '/api/placeholder/600/400',
      alt: 'Tournament Action Shot',
      category: 'tournaments',
      title: 'Tournament Action Shot',
      description: 'Intense competition during the final round of our championship.',
      date: 'March 15, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 3,
      src: '/api/placeholder/600/400',
      alt: 'Award Ceremony',
      category: 'tournaments',
      title: 'Award Ceremony',
      description: 'Celebrating excellence and sportsmanship at our annual awards.',
      date: 'March 15, 2024',
      photographer: 'Club Photographer'
    },
    // Social Events
    {
      id: 4,
      src: '/api/placeholder/600/400',
      alt: 'Holiday Celebration',
      category: 'events',
      title: 'Holiday Celebration',
      description: 'Members and families enjoying our annual holiday celebration.',
      date: 'December 15, 2023',
      photographer: 'Club Photographer'
    },
    {
      id: 5,
      src: '/api/placeholder/600/400',
      alt: 'New Member Welcome',
      category: 'events',
      title: 'New Member Welcome',
      description: 'Welcoming our newest members to the DFW Panjabi Golf Club family.',
      date: 'March 22, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 6,
      src: '/api/placeholder/600/400',
      alt: 'Charity Dinner',
      category: 'events',
      title: 'Charity Dinner',
      description: 'Raising funds for our community through our annual charity dinner.',
      date: 'November 10, 2023',
      photographer: 'Club Photographer'
    },
    // Member Photos
    {
      id: 7,
      src: '/api/placeholder/600/400',
      alt: 'Member Golfing',
      category: 'members',
      title: 'Member Golfing',
      description: 'Our members enjoying a beautiful day on the course.',
      date: 'February 28, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 8,
      src: '/api/placeholder/600/400',
      alt: 'Group Photo',
      category: 'members',
      title: 'Group Photo',
      description: 'Members gathering for our monthly social event.',
      date: 'February 15, 2024',
      photographer: 'Club Photographer'
    },
    // Golf Courses
    {
      id: 9,
      src: '/api/placeholder/600/400',
      alt: 'Prestonwood Golf Club',
      category: 'courses',
      title: 'Prestonwood Golf Club',
      description: 'The beautiful 18th hole at Prestonwood Golf Club.',
      date: 'January 20, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 10,
      src: '/api/placeholder/600/400',
      alt: 'Tribute Golf Links',
      category: 'courses',
      title: 'Tribute Golf Links',
      description: 'Scenic views from our partner course, Tribute Golf Links.',
      date: 'January 15, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 11,
      src: '/api/placeholder/600/400',
      alt: 'Coyote Ridge',
      category: 'courses',
      title: 'Coyote Ridge',
      description: 'The challenging par-3 7th hole at Coyote Ridge Golf Club.',
      date: 'January 10, 2024',
      photographer: 'Club Photographer'
    },
    {
      id: 12,
      src: '/api/placeholder/600/400',
      alt: 'Heritage Ranch',
      category: 'courses',
      title: 'Heritage Ranch',
      description: 'Tree-lined fairways at Heritage Ranch Golf Club.',
      date: 'January 5, 2024',
      photographer: 'Club Photographer'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Explore memories, moments, and milestones from our club's events, tournaments, 
              and community gatherings through our comprehensive photo collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
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
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filter through our photo collection by category to find exactly what you're looking for.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{image.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-300">
                        <span>{image.date}</span>
                        <span>{image.photographer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      image.category === 'tournaments' ? 'bg-gold-100 text-gold-800' :
                      image.category === 'events' ? 'bg-primary-100 text-primary-800' :
                      image.category === 'members' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Load More Photos
            </motion.button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
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
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated photo collections highlighting special moments and events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tournament Highlights 2024',
                description: 'Relive the excitement and competition from our 2024 tournament season.',
                image: '/api/placeholder/600/400',
                count: 45,
                icon: Trophy
              },
              {
                title: 'Community Celebrations',
                description: 'Photos from our cultural celebrations and community gatherings.',
                image: '/api/placeholder/600/400',
                count: 38,
                icon: Heart
              },
              {
                title: 'Member Moments',
                description: 'Candid shots capturing the spirit and camaraderie of our members.',
                image: '/api/placeholder/600/400',
                count: 52,
                icon: Users
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {/* Collection Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xl font-bold">{collection.title}</div>
                    <div className="text-sm text-gray-200">{collection.count} photos</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <collection.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{collection.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-300"
                  >
                    View Collection →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Upload Section */}
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
                Share Your Photos
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Have great photos from club events or golf outings? Share them with our community! 
                Upload your photos and help us build a comprehensive collection of memories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <Camera className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="text-gray-700">High-quality photos from club events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-golf-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-golf-600" />
                  </div>
                  <span className="text-gray-700">Tournament and competition shots</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-gold-600" />
                  </div>
                  <span className="text-gray-700">Community and social gatherings</span>
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
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Upload Photos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your memories with the community. Upload photos from club events, 
                    tournaments, or casual rounds with fellow members.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full"
                  >
                    Upload Photos
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-gray-400" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-gray-200 mb-3">
                    {filteredImages[selectedImage]?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span>{filteredImages[selectedImage]?.date}</span>
                      <span>{filteredImages[selectedImage]?.photographer}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Capture Every Moment
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our photo gallery is a testament to the vibrant community we've built together. 
              Help us continue documenting our journey by sharing your photos and memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Upload Photos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-700 transition-colors duration-300"
              >
                View All Collections
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
