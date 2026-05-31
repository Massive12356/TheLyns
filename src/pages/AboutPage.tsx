import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Heart, Shield, Users, Lightbulb, ArrowRight, Award, CheckCircle2, Scale, Globe, Activity } from 'lucide-react';
import { ngoInfo, founders, impactStats } from '../data/mockData';

const AboutPage = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Heart,
    Shield,
    Users,
    Target,
    Scale,
    Globe
  };

  return (
    <>
      <Helmet>
        <title>About Us | The Lys Foundation</title>
        <meta name="description" content="Learn about The Lys Foundation — providing Montessori education to underprivileged children and empowering single mothers in Ghana." />
        <meta name="keywords" content="Lys Foundation, education NGO, Montessori, Ghana, underprivileged children, single mothers, child sponsorship" />
        <meta property="og:title" content="About Us | The Lys Foundation" />
        <meta property="og:description" content="Quality Montessori education and mother empowerment in Ghana." />
        <meta property="og:type" content="website" />
      </Helmet>

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
              About Us
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
                    The Lys Foundation was founded in 2015 and officially registered in 2021 as a Company Limited by Guarantee (LBG) and an NGO. We are a non-political, non-profit organisation dedicated to the underprivileged in our society — specifically through quality Montessori education for children, most of whom are orphans or are being raised by single mothers.
                  </p>
                  <p>
                    Co-founded by Jemima K. Adamah — a Pastor, architect-turned-educationist, and Director of the Lys Foundation School — alongside Ewurama Ocran-Gbekor, an architect and Project Management Professional leading sponsorship and business development.
                  </p>
                  <p>
                    What started as a vision to give every child a fair chance has grown into a Montessori school, a network of satellite learning centres in impoverished communities, daily meals and health checks for our pupils, and an empowerment programme for the single mothers behind them.
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
                    src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Lys Foundation pupils learning"
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

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  title: 'Collaborative Partnerships',
                  description: 'We work in partnership with religious bodies, corporate institutions, and private individuals to secure safe and strategic learning spaces within underserved communities.',
                  icon: '\uD83E\uDD1D',
                },
                {
                  num: '02',
                  title: 'Satellite Learning Model',
                  description: 'We establish satellite education and training centres in disadvantaged areas, ensuring immediate access to education. Over time, students are transitioned into a central campus with boarding facilities, offering continuous education from nursery through Junior Secondary School, alongside a fully equipped vocational training centre.',
                  icon: '\uD83C\uDFEB',
                },
                {
                  num: '03',
                  title: 'Montessori-Based Education',
                  description: 'Our curriculum is rooted in the Montessori philosophy, emphasizing experiential learning through play, exploration, and activity-based engagement \u2014 moving beyond rote memorization to deep understanding and critical thinking.',
                  icon: '\uD83C\uDFB2',
                },
                {
                  num: '04',
                  title: 'Holistic Child Development',
                  description: 'We nurture the spiritual, intellectual, emotional, and physical development of each child. Students are also introduced to technical, vocational, and essential life skills to prepare them for real-world success.',
                  icon: '\uD83C\uDF31',
                },
                {
                  num: '05',
                  title: 'Nutrition & Healthcare Support',
                  description: 'To support optimal learning and wellbeing, the Foundation provides daily breakfast and lunch. Through partnerships with healthcare professionals including doctors, paediatricians, and pharmacists, we conduct regular health screenings and provide essential medical support such as multivitamins and deworming treatments.',
                  icon: '\uD83C\uDF4E',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white rounded-3xl p-8 md:p-10 border border-primary/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                    index === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
                  }`}
                >
                  {/* Gradient corner glow on hover */}
                  <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
            
                  {/* Top row: emoji icon + number */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-5xl font-display font-bold text-primary/[0.07] group-hover:text-accent/[0.15] transition-colors duration-500 select-none">
                      {item.num}
                    </span>
                  </div>
            
                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-display font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors duration-300">
                    {item.title}
                  </h3>
            
                  {/* Description */}
                  <p className="relative z-10 text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
            
                  {/* Bottom progress bar animation */}
                  <div className="relative z-10 mt-6 h-1 rounded-full bg-primary/10 overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-700 ease-out" />
                  </div>
                </motion.div>
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

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-accent text-primary-dark text-xs font-semibold rounded-full mb-2">
                        {founder.title}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">{founder.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-secondary text-sm mb-4 line-clamp-3">{founder.bio}</p>
                    
                    {/* Achievements Preview */}
                    {founder.achievements && founder.achievements.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Key Achievements</span>
                        </div>
                        <div className="space-y-1">
                          {founder.achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              <p className="text-secondary text-xs line-clamp-1">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {founder.expertise.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-accent/10 text-primary text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                      {founder.expertise.length > 3 && (
                        <span className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                          +{founder.expertise.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Profile Link */}
                    <Link
                      to={`/about/founder/${founder.id}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                    >
                      View Full Profile
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
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
                    The Lys Foundation is a registered non-governmental organisation in Ghana — a Company Limited by Guarantee (LBG) committed to transparency, accountability, and excellence in Montessori education and mother empowerment.
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
