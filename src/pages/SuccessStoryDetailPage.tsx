import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { patientStories } from '../data/mockData';

const SuccessStoryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = patientStories.find((item) => item.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-primary mb-4">Story not found</h1>
          <Link to="/success-stories" className="text-accent font-semibold hover:underline">
            Back to Success Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="bg-background pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/success-stories"
            className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Success Stories
          </Link>
          <article className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            {story.image ? (
              <img
                src={story.image}
                alt={story.name}
                className="w-full aspect-[4/5] object-cover object-top rounded-3xl"
              />
            ) : (
              <div className="w-full aspect-[4/5] rounded-3xl bg-secondary flex items-end p-8">
                <p className="text-3xl font-display font-bold text-white">{story.name}</p>
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
                {story.headline ?? `${story.name}'s Story`}
              </h1>
              <div className="mt-6 space-y-5 text-secondary text-lg leading-relaxed">
                {(story.paragraphs ?? [story.story]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {story.closing && (
                <p className="mt-8 text-xl italic text-primary leading-relaxed">{story.closing}</p>
              )}
            </div>
          </article>
        </div>
      </section>
    </motion.div>
  );
};

export default SuccessStoryDetailPage;
