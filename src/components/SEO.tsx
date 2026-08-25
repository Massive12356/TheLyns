import { Helmet } from 'react-helmet-async';
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildPageJsonLd,
  canonicalUrl,
  type PageSEO,
} from '../config/seo';

interface SEOProps {
  page: PageSEO;
}

const SEO = ({ page }: SEOProps) => {
  const url = canonicalUrl(page.path);
  const image = page.image || DEFAULT_OG_IMAGE;
  const keywords = page.keywords || DEFAULT_KEYWORDS;
  const robots = page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  const jsonLd = buildPageJsonLd(page);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="theme-color" content="#1a2744" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={page.type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={page.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content="GH-AA" />
      <meta name="geo.placename" content="Accra, Ghana" />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {page.type === 'article' && page.publishedTime && (
        <meta property="article:published_time" content={page.publishedTime} />
      )}
      {page.author && <meta property="article:author" content={page.author} />}

      {jsonLd.map((schema, index) => (
        <script key={`${SITE_URL}-ld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
