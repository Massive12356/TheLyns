import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Camera, Grid, Filter } from 'lucide-react';
import { galleryCategories, galleryImages } from '../data/mockData';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', ...galleryCategories];
  
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | The Lys Foundation</title>
        <meta name="description" content="Browse through our gallery of Montessori education activities, student achievements, and community impact across Ghana." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/20"
            >
              <Camera className="w-4 h-4 inline mr-2" />
              Photo Gallery
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Explore moments from our Montessori classrooms, STEAM activities, community events, and the everyday joy of learning.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center flex-wrap gap-3">
              <Filter className="w-5 h-5 text-secondary mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-black'
                      : 'bg-gray-100 text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(index)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm mb-1">{image.caption}</p>
                    <span className="inline-block px-2 py-1 bg-accent/90 text-white text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <Grid className="w-16 h-16 mx-auto text-primary/30 mb-4" />
                <p className="text-secondary text-lg">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                ✕
              </button>
              <img
                src={filteredImages[selectedImage]?.url}
                alt={filteredImages[selectedImage]?.caption}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white font-semibold">{filteredImages[selectedImage]?.caption}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-accent/90 text-white text-sm rounded-full">
                  {filteredImages[selectedImage]?.category}
                </span>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1)}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  ← Previous
                </button>
                <p className="text-white/70 text-sm">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
                <button
                  onClick={() => setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0)}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default GalleryPage;
