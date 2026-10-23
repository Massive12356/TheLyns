import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { ngoInfo } from '../data/mockData';

const ContactPage = () => {
  const email = 'lysfoundation21@gmail.com';
  const phones = ['+233 24 345 8689', '+233 266557203'];
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      content: email,
      link: `mailto:${email}`,
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      phones,
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ngoInfo.address,
      link: '#map',
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ngoInfo.businessHours,
      link: null,
      color: 'bg-purple-500'
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
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/20"
            >
              <Send className="w-4 h-4 inline mr-2" />
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Have a question, idea, or want to get involved? We'd love to hear from you. Reach out and let's build a sustainable future together.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods Cards */}
        <section className="py-16 -mt-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{method.title}</h3>
                  {'phones' in method && method.phones ? (
                    <div className="space-y-1">
                      {method.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-secondary hover:text-accent transition-colors break-words"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  ) : method.link ? (
                    <a 
                      href={method.link} 
                      className="text-secondary hover:text-accent transition-colors break-words"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-secondary break-words">{method.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content - Form & Info */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Connect With Us - Light Design */}
                <div className="bg-white rounded-3xl p-8 border-2 border-accent/20 shadow-xl">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">Connect With Us</h3>
                  <p className="text-secondary mb-6">
                    Follow us on social media to stay updated on our latest projects, events, and impact stories.
                  </p>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Facebook, label: 'Facebook' }
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-primary mb-1">Quick Response</h4>
                      <p className="text-secondary text-sm">
                        We aim to respond to all inquiries within 24-48 hours. For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: 'How can I volunteer with The Lys Foundation?',
                        a: 'You can volunteer by filling out the volunteer registration form on our "Get Involved" page. We welcome professionals from all backgrounds who are passionate about sustainable development.'
                      },
                      {
                        q: 'How do I partner with The Lys Foundation?',
                        a: 'Organizations interested in partnering can fill out the partnership inquiry form on our Partners page. We collaborate with academic institutions, corporations, NGOs, and government agencies.'
                      },
                      {
                        q: 'How can I donate to support your work?',
                        a: 'You can donate via bank transfer or Mobile Money. Visit our Donate page for detailed payment information. All donations go directly to supporting our training programs and initiatives.'
                      },
                      {
                        q: 'How do I register for your events?',
                        a: 'Event registration can be done through the Events page. Simply click on the event you\'re interested in and follow the registration link.'
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-xl p-4"
                      >
                        <h4 className="font-display font-semibold text-primary mb-1 text-sm">{faq.q}</h4>
                        <p className="text-secondary text-xs">{faq.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full Width Map */}
        <section className="py-0">
          <div className="w-full">
            <div className="bg-white">
              <div className="p-8 max-w-7xl mx-auto">
                <h3 className="text-2xl font-display font-semibold text-primary">Our Location</h3>
                <p className="text-secondary mt-2">{ngoInfo.address}</p>
              </div>
              <div className="h-96 w-full">
                <iframe
                  id="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2204440645305!2d-0.2533327!3d5.5342858999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf97cca60d14d1%3A0xee0f377d903c5cf9!2sThe%20Lys%20Foundation!5e0!3m2!1sen!2sgh!4v1792770861718!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="The Lys Foundation"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ContactPage;
