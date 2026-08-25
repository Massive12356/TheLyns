import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, ThumbsUp, ThumbsDown } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogPosts.find(post => post.id === Number(id));
  
  // Engagement state
  const [engagement, setEngagement] = useState({
    likes: blogPost?.likes || 0,
    dislikes: blogPost?.dislikes || 0,
    userAction: null as 'like' | 'dislike' | null
  });

  if (!blogPost) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-secondary mb-8">The article you are looking for does not exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Generate full content based on the excerpt
  const generateFullContent = (post: typeof blogPost) => {
    const paragraphs = [
      `${post.excerpt} At The Lys Foundation School in Accra, quality education for children is not a luxury — it is the pathway out of poverty for orphans and children of single mothers.`,
      `Montessori education is child-led. Instead of forcing memorisation, we prepare classrooms where children want to learn: practical life, sensorial work, mathematics, language, cultural studies, and STEAM. Each pupil moves at a pace that builds confidence, independence, and real understanding.`,
      `This matters in Ghana, where too many underprivileged children never receive a strong start. The Lys Foundation (also found when people search Lyn Foundation) exists to close that gap with daily lessons, breakfast and lunch, health checks, and a community of teachers who know every child by name.`,
      `Our ${post.category.toLowerCase()} work is part of a wider programme: satellite learning centres in underserved communities, vocational training for single mothers, and a sponsor-a-child plan that covers tuition, uniforms, meals, and learning materials.`,
      `Families, churches, and companies can walk through this with us. Visit the school, volunteer in a classroom, partner on a satellite centre, or sponsor a child. Education is the gift that keeps feeding a lifetime — and every child in our care deserves that chance.`,
      `If this article speaks to you, share it, donate, or contact The Lys Foundation in Accra. Together we can put more children into classrooms where they are seen, fed, taught, and prepared to thrive.`,
    ];
    return paragraphs;
  };

  const content = generateFullContent(blogPost);
  const relatedPosts = blogPosts
    .filter(post => post.id !== blogPost.id && post.category === blogPost.category)
    .slice(0, 2);

  // Handle like/dislike
  const handleLike = () => {
    setEngagement(prev => {
      if (prev.userAction === 'like') {
        // Remove like
        return { ...prev, likes: prev.likes - 1, userAction: null };
      } else if (prev.userAction === 'dislike') {
        // Switch from dislike to like
        return { likes: prev.likes + 1, dislikes: prev.dislikes - 1, userAction: 'like' };
      } else {
        // Add like
        return { ...prev, likes: prev.likes + 1, userAction: 'like' };
      }
    });
  };

  const handleDislike = () => {
    setEngagement(prev => {
      if (prev.userAction === 'dislike') {
        // Remove dislike
        return { ...prev, dislikes: prev.dislikes - 1, userAction: null };
      } else if (prev.userAction === 'like') {
        // Switch from like to dislike
        return { likes: prev.likes - 1, dislikes: prev.dislikes + 1, userAction: 'dislike' };
      } else {
        // Add dislike
        return { ...prev, dislikes: prev.dislikes + 1, userAction: 'dislike' };
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4 ml-3 animate-bounce">
              {blogPost.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-300 gap-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blogPost.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPost.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none text-secondary">
                <p className="text-xl leading-relaxed mb-8 font-medium text-primary">
                  {blogPost.excerpt}
                </p>
                
                {content.map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-serif font-semibold text-primary mb-4">
                  Was this article helpful?
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      engagement.userAction === 'like'
                        ? 'bg-green-100 text-green-700 border-2 border-green-500'
                        : 'bg-gray-100 text-secondary hover:bg-green-50 hover:text-green-600 border-2 border-transparent'
                    }`}
                  >
                    <ThumbsUp className={`w-5 h-5 ${engagement.userAction === 'like' ? 'fill-current' : ''}`} />
                    <span className="font-medium">{engagement.likes}</span>
                  </button>
                  
                  <button
                    onClick={handleDislike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      engagement.userAction === 'dislike'
                        ? 'bg-red-100 text-red-700 border-2 border-red-500'
                        : 'bg-gray-100 text-secondary hover:bg-red-50 hover:text-red-600 border-2 border-transparent'
                    }`}
                  >
                    <ThumbsDown className={`w-5 h-5 ${engagement.userAction === 'dislike' ? 'fill-current' : ''}`} />
                    <span className="font-medium">{engagement.dislikes}</span>
                  </button>
                </div>
                <p className={`text-sm font-medium mt-3 ${
                  engagement.userAction === 'like' 
                    ? 'text-green-600' 
                    : engagement.userAction === 'dislike' 
                      ? 'text-red-600' 
                      : 'text-secondary-light'
                }`}>
                  {engagement.userAction === 'like' && "Thanks for your feedback! We're glad you found this helpful."}
                  {engagement.userAction === 'dislike' && "Thanks for your feedback. We'll work to improve our content."}
                  {!engagement.userAction && "Your feedback helps us improve our content."}
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-serif font-semibold text-primary mb-4 flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share This Article
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blogPost.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Author Box */}
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold text-primary mb-4">About the Author</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold">
                    {blogPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-primary">{blogPost.author}</p>
                    <p className="text-sm text-secondary-light">Partner</p>
                  </div>
                </div>
                <p className="text-sm text-secondary-light">
                  {blogPost.author} is an experienced attorney specializing in {blogPost.category.toLowerCase()} 
                  with extensive knowledge of Ghanaian law.
                </p>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(post => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-medium text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-secondary-light mt-1">{post.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className="bg-primary p-6 rounded-lg text-white">
                <h3 className="text-lg font-serif font-semibold mb-4">Need Legal Assistance?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Contact us to discuss your legal needs with our experienced team.
                </p>
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-accent hover:underline font-medium text-sm"
                >
                  Request Consultation
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogDetailPage;
