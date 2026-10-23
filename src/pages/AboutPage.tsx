import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Shield, ArrowRight, Activity } from 'lucide-react';
import { ngoInfo, founders, impactStats } from '../data/mockData';
import { methodology } from '../data/methodology';

const AboutPage = () => {
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
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              About The Lys Foundation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              {ngoInfo.descriptionLong}
            </motion.p>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-6">
                  Born from a Calling to Serve
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Our work focuses primarily on children from vulnerable backgrounds, particularly orphans and those being raised in single-parent households. Through a holistic, child-centred Montessori approach, we provide a nurturing learning environment that fosters academic excellence, character development, independence and essential life skills.
                  </p>
                  <p>
                    At The Lys Foundation, we believe that every child, regardless of their background or circumstances, deserves the opportunity to learn, grow and reach their full potential. Our philosophy is rooted in the timeless wisdom:
                  </p>
                  <blockquote className="border-l-2 border-accent pl-5">
                    <p className="italic text-primary">
                      “Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.”
                    </p>
                  </blockquote>
                  <p>
                    What began as a simple vision to give every child a fair chance in life has grown into a transformative initiative encompassing a Montessori school, serving underserved communities with educational initiatives, daily nutritious meals and routine health checks for our pupils, and empowerment programmes that equip single mothers with the skills and opportunities to build sustainable livelihoods.
                  </p>
                  <p>
                    Our commitment goes beyond education. We seek to nurture the whole child, strengthen families and empower communities to break the cycle of poverty.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499480/file_0000000058e471f48d9627ee6cc2ce00_oscrsn.png"
                    alt="Lys Foundation pupils learning in a Montessori classroom in Accra, Ghana"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-lg">
                  <p className="text-4xl font-display font-bold text-white">2015</p>
                  <p className="text-white/80 text-sm">Year Established</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - Matching Home Page Design */}
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
                Driven by faith, guided by integrity, and committed to transforming lives through education.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-secondary leading-relaxed text-lg">{ngoInfo.mission}</p>

                  {/* Mission Stats */}
                  <div className="flex gap-8 mt-8 pt-8 border-t border-primary/10">
                    <div>
                      <div className="text-3xl font-bold text-primary">{impactStats.childrenSupported}+</div>
                      <div className="text-secondary text-sm">Children Supported</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{impactStats.communitiesReached}+</div>
                      <div className="text-secondary text-sm">Communities Reached</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card - Rich Warm Brown (matches Home page design) */}
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

        {/* Our Methodology - Sleek Minimal Cards */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">How We Serve</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Our Methodology
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                The Lys Foundation adopts a strategic, scalable, and community-centered approach to impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {methodology.map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white rounded-2xl p-7 border border-primary/10 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs font-bold tracking-[0.22em] text-accent">{item.number}</span>
                  <h3 className="mt-4 text-xl font-display font-bold text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary flex-1">
                    {item.summary}
                  </p>
                  <Link
                    to={`/about/methodology/${item.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-accent"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Leadership</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Our Founders
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Meet the dedicated leaders behind The Lys Foundation, committed to transforming education access in Ghana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <motion.article
                  key={founder.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 bg-secondary px-4 py-2.5 text-xs font-semibold tracking-wide text-white">
                      Meet {founder.name.split(' ')[0]}
                    </span>
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {founder.role}
                  </p>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl font-medium italic text-secondary leading-tight">
                    {founder.name}
                  </h3>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-secondary/80">
                    {founder.bio}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Info - Light Green Theme */}
        <section className="py-20 bg-accent/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl border-2 border-accent/20 overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                    Registered NGO
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed">
                    {ngoInfo.descriptionLong}
                  </p>
                </div>

                {/* Right Content - Registration Card */}
                <div className="bg-background rounded-2xl p-8 border-2 border-accent/20">
                  <div className="text-center">
                    <p className="text-secondary text-sm uppercase tracking-wider mb-2">Official Registration</p>
                    <div className="inline-block bg-accent/20 rounded-xl px-6 py-3 mb-4">
                      <p className="text-primary font-display font-bold text-2xl">{ngoInfo.registrationNumber}</p>
                    </div>
                    <p className="text-secondary text-sm">
                      Registered with the Registrar General's Department, Ghana
                    </p>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary/10">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">85%</p>
                      <p className="text-secondary text-xs">To Pupil Care</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">2015</p>
                      <p className="text-secondary text-xs">Founded</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">2021</p>
                      <p className="text-secondary text-xs">Registered</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;
