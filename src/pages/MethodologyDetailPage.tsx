import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getMethodology, methodology } from '../data/methodology';

const MethodologyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getMethodology(slug) : undefined;

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-primary mb-4">Methodology not found</h1>
          <Link to="/about" className="text-accent font-semibold hover:underline">
            Back to About
          </Link>
        </div>
      </div>
    );
  }

  const index = methodology.findIndex((entry) => entry.slug === item.slug);
  const previous = methodology[index - 1];
  const next = methodology[index + 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="bg-secondary pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/about"
            className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Methodology
          </Link>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">{item.number}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            {item.title}
          </h1>
          {item.subtitle && (
            <p className="mt-5 text-xl italic text-white/75">{item.subtitle}</p>
          )}
        </div>
      </section>

      <section className="bg-background py-16">
        <article className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-lg leading-relaxed text-secondary">
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {item.closing && (
            <blockquote className="mt-12 border-l-2 border-accent pl-6">
              <p className="text-xl italic text-primary leading-relaxed">{item.closing}</p>
            </blockquote>
          )}

          <div className="mt-16 grid sm:grid-cols-2 gap-4 border-t border-primary/10 pt-8">
            {previous ? (
              <Link
                to={`/about/methodology/${previous.slug}`}
                className="group rounded-2xl border border-primary/10 bg-white p-5 hover:border-accent/40 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider text-secondary">Previous</span>
                <span className="mt-2 flex items-center font-display font-semibold text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  {previous.title}
                </span>
              </Link>
            ) : <span />}
            {next && (
              <Link
                to={`/about/methodology/${next.slug}`}
                className="group rounded-2xl border border-primary/10 bg-white p-5 text-right hover:border-accent/40 transition-colors sm:col-start-2"
              >
                <span className="text-xs uppercase tracking-wider text-secondary">Next</span>
                <span className="mt-2 flex items-center justify-end font-display font-semibold text-primary">
                  {next.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )}
          </div>
        </article>
      </section>
    </motion.div>
  );
};

export default MethodologyDetailPage;
