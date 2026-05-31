import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Activity, Heart, Users, MapPin, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { impactStats, patientStories } from '../data/mockData';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactPage = () => {
  const stats = [
    { icon: Activity, value: impactStats.surgeriesFunded, label: 'Children Sponsored', suffix: '+' },
    { icon: Heart, value: impactStats.childrenSupported, label: 'Children Supported', suffix: '+' },
    { icon: Users, value: impactStats.volunteersMobilized, label: 'Volunteers Mobilized', suffix: '+' },
    { icon: MapPin, value: impactStats.communitiesReached, label: 'Communities Reached', suffix: '+' },
    { icon: TrendingUp, value: Math.round(impactStats.fundsRaised / 1000), label: 'Funds Raised (USD)', suffix: 'k+' },
    { icon: Activity, value: impactStats.patientsScreened, label: 'Pupils Screened', suffix: '+' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Impact | The Lys Foundation</title>
        <meta name="description" content="See how The Lys Foundation is transforming lives through Montessori education, daily meals, mother empowerment, and satellite learning centres across Ghana." />
        <meta property="og:title" content="Our Impact | The Lys Foundation" />
        <meta property="og:description" content="120+ children supported, 240+ pupils through satellite centres, 6 communities reached." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Every number represents a child whose future has been transformed and a family lifted out of need. Here is the measurable difference your support makes.
            </motion.p>
          </div>
        </section>

        {/* Animated Statistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">By The Numbers</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2 mb-4">
                Impact Statistics
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Real numbers that reflect real children educated and families empowered.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-background rounded-2xl"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <div className="text-secondary text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Pupil Stories */}
        <section className="py-20 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Real Stories</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Featured Pupil Stories
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Meet the children whose lives have been transformed by your generosity.
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
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Accountability</span>
              <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-4">
                Trust & Transparency
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                We believe in complete transparency. Here is how we ensure your donations make the maximum impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Registered NGO',
                  description: 'Registered with the Registrar General\'s Department, Ghana. Fully compliant with nonprofit regulations.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Financial Transparency',
                  description: '85% of donations go directly to pupil care, learning materials, and meals. Annual financial reports are publicly available.'
                },
                {
                  icon: Activity,
                  title: 'Educator Oversight',
                  description: 'Every programme is overseen by qualified Montessori educators and our board to ensure funds achieve real learning outcomes.'
                },
                {
                  icon: TrendingUp,
                  title: 'Impact Tracking',
                  description: 'We track and report on every child sponsored, satellite centre opened, and mother empowered through our programmes.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Trust The Lys Foundation?</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
                We understand that donating to a cause requires trust. That is why we have built our organization on the pillars of transparency, accountability, and measurable impact.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Direct Impact</h3>
                  <p className="text-white/70 text-sm">85% of every donation goes directly to pupil care, learning materials, and daily meals. We keep administrative costs minimal so your money changes lives.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Verified Partners</h3>
                  <p className="text-white/70 text-sm">We partner with accredited educational bodies, religious institutions, and corporate sponsors across Ghana.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Donor Updates</h3>
                  <p className="text-white/70 text-sm">Receive regular updates on sponsored children, programme outcomes, and how your contribution made a difference.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ImpactPage;
