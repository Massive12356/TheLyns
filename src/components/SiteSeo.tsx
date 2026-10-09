import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.thelysfoundation.org';
const OG_IMAGE =
  'https://res.cloudinary.com/dsk62cvbs/image/upload/v1780176453/Picture1_w63q9q.png';

const KEYWORDS = [
  'The Lys Foundation',
  'Lys Foundation',
  'The Lyns Foundation',
  'Lyns Foundation',
  'Lys Foundation Ghana',
  'Lys Foundation School',
  'The Lys Foundation School',
  'Montessori education Ghana',
  'education NGO Ghana',
  'Accra Montessori school',
  'sponsor a child Ghana',
  'single mothers Ghana',
  'underprivileged children Ghana',
].join(', ');

const SiteSeo = () => {
  const { pathname } = useLocation();
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

  return (
    <Helmet>
      <html lang="en" />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="The Lys Foundation" />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="geo.region" content="GH-AA" />
      <meta name="geo.placename" content="Accra" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${SITE_URL}/sitemap.xml`} />

      <meta property="og:site_name" content="The Lys Foundation" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_GH" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="The Lys Foundation logo" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lysfoundation" />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="The Lys Foundation logo" />
    </Helmet>
  );
};

export default SiteSeo;
