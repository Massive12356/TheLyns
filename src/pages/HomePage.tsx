import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Activity, MapPin, ChevronLeft, ChevronRight, CheckCircle2, HandHeart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ngoInfo, projects, patientStories } from '../data/mockData';

const HomePage = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredEvents = [
    {
      id: 1,
      title: 'Open Day & School Tour',
      date: 'April 18, 2026',
      type: 'Open Day',
      location: 'The Lys Foundation School, Accra',
      description: 'Tour our Montessori classrooms, meet the teachers, and see how your child or sponsored pupil could join our growing community.',
      slug: 'open-day-2026'
    },
    {
      id: 2,
      title: 'Mother Empowerment Workshop',
      date: 'May 17, 2026',
      type: 'Workshop',
      location: 'Lys Foundation Community Hall, Accra',
      description: 'A practical workshop on child hygiene, nutrition, and basic vocational skills for single mothers in our community.',
      slug: 'mother-workshop-2026'
    },
    {
      id: 3,
      title: 'Annual Speech & Prize Day',
      date: 'July 11, 2026',
      type: 'School Event',
      location: 'The Lys Foundation School, Accra',
      description: 'Celebrating our pupils’ academic, character, and creative achievements across all six Montessori disciplines.',
      slug: 'speech-day-2026'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Quality Education for Every Child in Ghana",
      highlight: "Every Child",
      description: "The Lys Foundation provides Montessori education to underprivileged children — mostly orphans and children of single mothers — right here in Ghana.",
      image: "https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499479/file_00000000e51071f4a3e4e86ccb41641e_rrfpuz.png",
    },
    {
      title: "Transforming Lives Through Learning",
      highlight: "Transforming",
      description: "Quality education, daily nourishment, and family support — empowering Ghana's next generation to dream bigger and achieve more.",
      image: "https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499483/file_00000000861872438a811f0d6c3b3948_xidrzq.png",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section - Full Background Design */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={`bg-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            ))}
          </div>

          {/* Light Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/15" />

          {/* Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 lg:py-24 w-full">
              <div className="max-w-2xl">
                {/* Eyebrow Tag */}
                <motion.div
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
                    The Lys Foundation · Est. 2015
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  key={`headline-${currentSlide}`}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.05] mb-6"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {heroSlides[currentSlide].title.split(heroSlides[currentSlide].highlight)[0]}
                  <span className="relative inline-block text-primary">
                    {heroSlides[currentSlide].highlight}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="12"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      style={{ originX: 0 }}
                    >
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="#F7941D" strokeWidth="6" fill="none" />
                    </motion.svg>
                  </span>
                  {heroSlides[currentSlide].title.split(heroSlides[currentSlide].highlight)[1]}
                </motion.h1>

                {/* Description */}
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                  <Link
                    to="/donate"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-secondary-dark text-white font-semibold rounded-xl border-2 border-secondary-dark hover:bg-white hover:text-primary hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/volunteer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Become a Volunteer
                  </Link>
                </motion.div>

                {/* Mini Stats Strip */}
                <motion.div
                  className="inline-flex gap-6 px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                >
                  <div>
                    <div className="text-3xl font-display font-bold text-white">
                      120<span className="text-primary">+</span>
                    </div>
                    <div className="text-white/80 text-[11px] uppercase tracking-[0.15em] mt-1">
                      Children Supported
                    </div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="text-3xl font-display font-bold text-white">
                      6<span className="text-primary">+</span>
                    </div>
                    <div className="text-white/80 text-[11px] uppercase tracking-[0.15em] mt-1">
                      Communities
                    </div>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <div className="text-3xl font-display font-bold text-white">
                      85<span className="text-primary">%</span>
                    </div>
                    <div className="text-white/80 text-[11px] uppercase tracking-[0.15em] mt-1">
                      To Pupil Care
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Slide Counter (top-right) */}
          <motion.div
            className="absolute top-12 right-12 lg:right-16 z-20 text-right px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-white font-display text-5xl font-bold leading-none drop-shadow-lg">
              0{currentSlide + 1}
            </div>
            <div className="text-white/80 text-xs tracking-[0.25em] mt-2 font-semibold">
              / 0{heroSlides.length}
            </div>
          </motion.div>
          
          {/* Carousel Controls (bottom-right) */}
          <motion.div
            className="absolute bottom-12 right-12 lg:bottom-14 lg:right-16 z-20 flex items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-11 h-11 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          
          {/* Mobile carousel controls (bottom of section) */}
          <div className="lg:hidden absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between">
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={`mdot-${index}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Floating Stats Section */}
        {/* <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Activity, value: impactStats.surgeriesFunded, label: 'Surgeries Funded', suffix: '+' },
                { icon: Heart, value: impactStats.childrenSupported, label: 'Children Supported', suffix: '+' },
                { icon: Users, value: impactStats.volunteersMobilized, label: 'Volunteers', suffix: '+' },
                { icon: MapPin, value: impactStats.communitiesReached, label: 'Communities Reached', suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Mission & Vision
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Driven by faith, guided by integrity, and committed to transforming lives through quality education.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card - Clean White with Gradient Border */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 hover:from-primary/40 hover:via-accent/30 hover:to-primary/20 transition-all duration-500"
              >
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-primary/30 transition-all duration-300">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-8xl font-display font-bold text-primary/[0.04] leading-none select-none">01</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Our Mission</h3>
                    <p className="text-secondary leading-relaxed text-lg mb-8">{ngoInfo.mission}</p>

                    {/* <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary/10">
                      <div className="group/stat">
                        <div className="text-3xl font-display font-bold text-primary group-hover/stat:text-accent transition-colors">{impactStats.surgeriesFunded}+</div>
                        <div className="text-secondary text-sm mt-1">Surgeries Funded</div>
                      </div>
                      <div className="group/stat">
                        <div className="text-3xl font-display font-bold text-primary group-hover/stat:text-accent transition-colors">${(impactStats.fundsRaised / 1000000).toFixed(1)}M+</div>
                        <div className="text-secondary text-sm mt-1">Funds Raised</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </motion.div>

              {/* Vision Card - Rich Warm Brown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#8B6914]/40 via-[#5C3D2E]/30 to-accent/20 hover:from-[#8B6914]/60 hover:via-[#5C3D2E]/50 hover:to-accent/30 transition-all duration-500"
              >
                <div className="relative bg-[#5C3D2E] rounded-3xl p-8 md:p-10 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl shadow-lg shadow-accent/30 group-hover:scale-110 group-hover:shadow-accent/40 transition-all duration-300">
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-8xl font-display font-bold text-white/[0.06] leading-none select-none">02</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-white/85 leading-relaxed text-lg mb-8">{ngoInfo.vision}</p>

                    <div className="pt-6 border-t border-white/15">
                      <blockquote className="relative pl-5 border-l-2 border-accent">
                        <p className="text-white/90 font-medium italic text-lg leading-relaxed">
                          "If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime."
                        </p>
                        <cite className="text-accent text-sm not-italic mt-2 block">— The Lys Foundation</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Our Programs & Interventions
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Explore our education and empowerment programs serving underprivileged children and single mothers across Ghana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Full Image Background */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    {/* Content Overlaid */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-white/70">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          {project.location}
                        </div>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center text-accent font-semibold text-sm hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* STEAM Education Section */}
        <section className="py-20 bg-gradient-to-br from-secondary to-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                Innovation in Learning
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                STEAM Education Program
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Integrating Science, Technology, Engineering, Arts, and Mathematics into our Montessori curriculum to prepare children for the future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[
                {
                  letter: 'S',
                  title: 'Science',
                  description: 'Hands-on experiments, nature exploration, and scientific discovery',
                  icon: '🔬',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  letter: 'T',
                  title: 'Technology',
                  description: 'Digital literacy, coding basics, and educational technology',
                  icon: '💻',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  letter: 'E',
                  title: 'Engineering',
                  description: 'Building, problem-solving, and creative design thinking',
                  icon: '⚙️',
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  letter: 'A',
                  title: 'Arts',
                  description: 'Creative expression, music, visual arts, and cultural heritage',
                  icon: '🎨',
                  color: 'from-pink-500 to-pink-600'
                },
                {
                  letter: 'M',
                  title: 'Mathematics',
                  description: 'Montessori math materials, patterns, and logical reasoning',
                  icon: '📐',
                  color: 'from-green-500 to-green-600'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">{item.letter}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/steam"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Explore STEAM Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pupil Success Stories Preview */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Real Impact</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Success Stories
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Meet the children and mothers whose lives have been transformed by your generosity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {patientStories.filter(s => s.featured).map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-md border ${
                        story.status === 'Recovered'
                          ? 'bg-accent/90 text-white border-accent/30'
                          : 'bg-amber-500/90 text-white border-amber-400/30'
                      }`}>
                        {story.status}
                      </span>
                    </div>
                    {/* Name overlay at bottom of image */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-xl font-display font-bold text-white drop-shadow-lg">
                        {story.name}, {story.age}
                      </h3>
                      <p className="text-white/80 text-sm font-medium mt-0.5">{story.condition}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {story.story}
                    </p>

                    <p className="text-secondary/70 text-xs italic mb-5">
                      {story.donorImpact}
                    </p>

                    <Link
                      to="/success-stories"
                      className="inline-flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors group/link"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-700 ease-out" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/success-stories"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View All Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Involved</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Upcoming Events
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Join us at our health screenings, workshops, and community outreach events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-accent/30"
                >
                  {/* Top Accent Bar */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-accent to-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Date Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex flex-col items-center justify-center shadow-md shadow-primary/20">
                        <span className="text-white text-[10px] font-bold uppercase leading-none">{event.date.split(' ')[0]}</span>
                        <span className="text-white text-lg font-bold leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{event.title}</h3>
                  <p className="text-secondary text-sm mb-5 line-clamp-2 leading-relaxed">{event.description}</p>

                  <div className="flex items-center text-sm text-secondary mb-5 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm mr-3">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>

                  <Link
                    to={`/events/${event.slug}/register`}
                    className="inline-flex items-center w-full justify-center px-5 py-3 bg-primary/5 text-primary font-semibold rounded-xl hover:bg-primary hover:text-black transition-all duration-300 group/link"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                View All Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Get Involved CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Become a Volunteer',
                  description: 'Join our team and contribute your skills to teach, mentor, and care for our pupils and the mothers in our community.',
                  icon: Users,
                  link: '/volunteer',
                  gradient: 'from-primary to-primary-light',
                  shadow: 'shadow-primary/20',
                  hoverShadow: 'shadow-primary/30'
                },
                {
                  title: 'Partner With Us',
                  description: 'Collaborate with us to expand access to quality education for underprivileged children across Ghana.',
                  icon: HandHeart,
                  link: '/partners',
                  gradient: 'from-accent to-accent-light',
                  shadow: 'shadow-accent/20',
                  hoverShadow: 'shadow-accent/30'
                },
                {
                  title: 'Make a Donation',
                  description: 'Your contribution directly funds tuition, daily meals, learning materials, and health screenings for our pupils.',
                  icon: Heart,
                  link: '/donate',
                  gradient: 'from-[#5C3D2E] to-[#7A5A4A]',
                  shadow: 'shadow-[#5C3D2E]/20',
                  hoverShadow: 'shadow-[#5C3D2E]/30'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 hover:border-transparent"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-lg ${item.shadow} group-hover:scale-110 group-hover:${item.hoverShadow} transition-all duration-300`}>
                      <item.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-secondary mb-8 leading-relaxed">{item.description}</p>
                    <Link
                      to={item.link}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-xl shadow-md ${item.shadow} hover:shadow-lg hover:${item.hoverShadow} hover:-translate-y-0.5 transition-all duration-300 group/link`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <span className="inline-block px-4 py-2 bg-accent/20 text-primary text-sm font-semibold rounded-full mb-6">
                    Newsletter
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
                    Stay Updated
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    Subscribe to our newsletter for pupil success stories, education insights, event updates, and opportunities to make an impact.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      'Monthly impact reports and pupil stories',
                      'Early access to volunteer opportunities',
                      'Education resources and parenting tips'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-secondary text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Form Card */}
                <div className="bg-background rounded-2xl p-8 border-2 border-accent/20">
                  <h3 className="text-xl font-display font-bold text-primary mb-2">Join Our Community</h3>
                  <p className="text-secondary text-sm mb-6">
                    Join 5,000+ subscribers who receive our monthly updates.
                  </p>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-primary text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-primary/10 text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-primary text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-primary/10 text-primary placeholder-secondary focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                    >
                      Subscribe Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                  
                  <p className="text-secondary text-xs text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
