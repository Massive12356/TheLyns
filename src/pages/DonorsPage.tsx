import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { donorCompanies } from '../data/mockData';
import { OptimizedImage } from '../components/OptimizedImage';

const DonorsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Heart className="w-4 h-4 inline mr-2" />
            Our Supporters
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Companies That Donate
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {donorCompanies.map((donor) => (
            <div key={donor.slug} id={donor.slug}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
                {donor.name}
              </h2>
              <div className={`grid gap-6 ${donor.images.length === 1 ? 'max-w-xl' : 'sm:grid-cols-2'}`}>
                {donor.images.map((image) => (
                  <div key={image} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                    <OptimizedImage
                      src={image}
                      alt={donor.name}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      widths={[480, 900]}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default DonorsPage;
