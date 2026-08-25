import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Beaker, Cpu, Wrench, Palette, Calculator, Sparkles, Users, BookOpen } from 'lucide-react';

const STEAMPage = () => {
  const steamPillars = [
    {
      letter: 'S',
      title: 'Science',
      icon: Beaker,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      description: 'Our young scientists explore the world through hands-on experiments, nature walks, and scientific discovery.',
      activities: [
        'Plant growth observation journals',
        'Simple chemistry experiments with safe materials',
        'Weather tracking and seasonal changes',
        'Nature exploration and specimen collection',
        'Introduction to the scientific method'
      ],
      image: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      letter: 'T',
      title: 'Technology',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      description: 'Children develop digital literacy and learn coding basics through age-appropriate educational technology.',
      activities: [
        'Introduction to tablets and educational apps',
        'Block-based coding with Scratch Jr.',
        'Digital storytelling and presentation skills',
        'Robotics basics with simple kits',
        'Online safety and digital citizenship'
      ],
      image: 'https://images.pexels.com/photos/5905888/pexels-photo-5905888.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      letter: 'E',
      title: 'Engineering',
      icon: Wrench,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      description: 'Future engineers learn problem-solving through building, designing, and creative construction projects.',
      activities: [
        'Building structures with blocks and recycled materials',
        'Simple machine demonstrations and models',
        'Bridge and tower building challenges',
        'Introduction to architectural concepts',
        'Design thinking for everyday problems'
      ],
      image: 'https://images.pexels.com/photos/8617687/pexels-photo-8617687.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      letter: 'A',
      title: 'Arts',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
      description: 'Creative expression through music, visual arts, dance, and celebration of cultural heritage.',
      activities: [
        'Painting, drawing, and sculpture projects',
        'Music appreciation and instrument exploration',
        'Drama and role-playing activities',
        'Cultural dance and traditional crafts',
        'Art history introduction through famous works'
      ],
      image: 'https://images.pexels.com/photos/8853473/pexels-photo-8853473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      letter: 'M',
      title: 'Mathematics',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      description: 'Montessori math materials make abstract concepts tangible through hands-on learning and logical reasoning.',
      activities: [
        'Golden bead material for decimal system',
        'Number rods and sandpaper numbers',
        'Pattern blocks and geometric shapes',
        'Practical measurement activities',
        'Math games and problem-solving puzzles'
      ],
      image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary via-black to-primary-dark">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-1/2 -right-1/2 w-full h-full"
            >
              <div className="w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full"
            >
              <div className="w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Link>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                  Integrated Curriculum
                </span>
                <span className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                  Active Program
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
                STEAM Education
                <span className="block text-3xl md:text-4xl mt-2 text-primary">
                  Science • Technology • Engineering • Arts • Mathematics
                </span>
              </h1>

              <p className="text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
                Preparing children for the future through inquiry-based learning that sparks curiosity, builds critical thinking, and nurtures creativity across all five disciplines.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                {[
                  { label: 'Students', value: '120+' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Experiments', value: '100+' },
                  { label: 'Since', value: '2023' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-12 h-12 mx-auto text-primary mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why STEAM in Montessori?
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                STEAM education complements the Montessori philosophy perfectly. Both approaches emphasize hands-on learning, self-directed exploration, and real-world application. By integrating Science, Technology, Engineering, Arts, and Mathematics into our curriculum, we give children the tools to think critically, solve problems creatively, and prepare for a rapidly changing world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* STEAM Pillars */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-4">
                The Five Pillars
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Each pillar of STEAM is thoughtfully integrated into daily learning activities
              </p>
            </motion.div>

            {steamPillars.map((pillar, index) => (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-16 last:mb-0 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`${pillar.bgColor} rounded-3xl p-8 border ${pillar.borderColor} shadow-sm`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}>
                          <pillar.icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className={`text-6xl font-display font-bold ${pillar.textColor} mb-1`}>
                            {pillar.letter}
                          </div>
                          <h3 className={`text-2xl font-bold ${pillar.textColor}`}>
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-secondary text-lg leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className={`font-semibold ${pillar.textColor} mb-3 flex items-center gap-2`}>
                          <BookOpen className="w-5 h-5" />
                          Key Activities:
                        </h4>
                        {pillar.activities.map((activity, actIndex) => (
                          <motion.div
                            key={actIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: actIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color} mt-2 flex-shrink-0`} />
                            <span className="text-secondary text-sm">{activity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className={`px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full ${pillar.textColor} font-bold text-sm`}>
                          {pillar.title} in Action
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cross-Disciplinary Projects */}
        <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Users className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-4xl font-display font-bold mb-4">
                Cross-Disciplinary Projects
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Our students combine multiple STEAM pillars in exciting collaborative projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Solar System Model',
                  pillars: 'Science + Engineering + Arts',
                  description: 'Students build a scaled model of the solar system, learning about planets (Science), structural design (Engineering), and painting details (Arts).'
                },
                {
                  title: 'Weather Station',
                  pillars: 'Science + Technology + Math',
                  description: 'Creating a simple weather station with digital sensors (Technology), recording data patterns (Math), and understanding meteorology (Science).'
                },
                {
                  title: 'Musical Instruments',
                  pillars: 'Engineering + Arts + Science',
                  description: 'Designing and building simple instruments (Engineering), exploring sound waves (Science), and creating music (Arts).'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <div className="bg-primary/10 px-3 py-1.5 rounded-full text-primary-dark text-sm font-semibold mb-4 inline-block">
                    {project.pillars}
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                STEAM in Action
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Browse through photos from our STEAM activities and projects
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/5905888/pexels-photo-5905888.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/8853473/pexels-photo-8853473.jpeg?auto=compress&cs=tinysrgb&w=600'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden aspect-square group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`STEAM activity ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                View Full Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Support STEAM Education
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Your donation helps us provide STEAM learning materials, technology tools, and resources for every child to explore, create, and innovate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg"
                >
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default STEAMPage;
