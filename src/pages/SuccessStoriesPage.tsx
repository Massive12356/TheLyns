import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { patientStories } from '../data/mockData';

const SuccessStoriesPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7108293/pexels-photo-7108293.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Every story is a testament to the power of compassion and quality education. Meet the children and mothers whose lives have been transformed by your generosity.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {patientStories[0] && (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start"
              >
                {patientStories[0].image ? (
                  <img
                    src={patientStories[0].image}
                    alt={patientStories[0].name}
                    className="w-full aspect-[4/5] object-cover object-top rounded-3xl"
                  />
                ) : (
                  <div className="w-full aspect-[4/5] rounded-3xl bg-secondary flex items-end p-8">
                    <p className="text-3xl font-display font-bold text-white">{patientStories[0].name}</p>
                  </div>
                )}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
                    {patientStories[0].headline ?? `${patientStories[0].name}'s Story`}
                  </h2>
                  <div className="mt-6 space-y-5 text-secondary text-lg leading-relaxed">
                    {(patientStories[0].paragraphs ?? [patientStories[0].story]).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {patientStories[0].closing && (
                    <p className="mt-8 text-xl italic text-primary leading-relaxed">{patientStories[0].closing}</p>
                  )}
                </div>
              </motion.article>
            )}

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {patientStories.slice(1).map((story, index) => (
                <motion.div
                  key={story.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/success-stories/${story.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-primary/10 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-64 overflow-hidden bg-secondary">
                      {story.image ? (
                        <img
                          src={story.image}
                          alt={story.name}
                          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-2xl font-display font-bold text-white">
                          {story.name}{story.age ? `, ${story.age}` : ''}
                        </h3>
                        <p className="text-white/80 text-sm mt-1">{story.condition}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-secondary text-sm leading-relaxed line-clamp-3">{story.story}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent">
                        Read story
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Be Part of the Next Success Story</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Your donation can sponsor the next child and give another family the chance to break the cycle of poverty through quality education.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center px-8 py-4 bg-accent text-black font-semibold rounded-full hover:bg-accent-light transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
                <Link
                  to="/impact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  View Our Impact
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default SuccessStoriesPage;
