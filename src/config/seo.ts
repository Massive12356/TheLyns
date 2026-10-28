import { blogPosts, events, faqs, founders, ngoInfo, patientStories, projects } from '../data/mockData';
import { methodology } from '../data/methodology';

export const SITE_URL = (
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  'https://www.thelysfoundation.org'
).replace(/\/$/, '');

export const SITE_NAME = 'The Lys Foundation';
export const SITE_TAGLINE = 'Quality Montessori education for every child in Ghana';

export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/dsk62cvbs/image/upload/w_1200,h_630,c_fill,g_auto/v1782499479/file_00000000e51071f4a3e4e86ccb41641e_rrfpuz.png';

export const LOGO_URL =
  'https://res.cloudinary.com/dsk62cvbs/image/upload/v1780176453/Picture1_w63q9q.png';

export const DEFAULT_KEYWORDS = [
  'The Lys Foundation',
  'Lys Foundation',
  'Lys Foundation Ghana',
  'Lys Foundation School',
  'education NGO Ghana',
  'Montessori school Accra',
  'Montessori education Ghana',
  'quality education for children',
  'education for underprivileged children',
  'orphan education Ghana',
  'sponsor a child Ghana',
  'child sponsorship Ghana',
  'STEAM education Ghana',
  'single mothers Ghana',
  'mother empowerment Ghana',
  'children education Accra',
].join(', ');

export const ALTERNATE_NAMES = [
  'Lys Foundation',
  'Lys Foundation Ghana',
  'Lys Foundation School',
  'The Lys Foundation School',
];

export type SeoPageType = 'website' | 'article' | 'profile';

export interface PageSEO {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: SeoPageType;
  noindex?: boolean;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  author?: string;
  publishedTime?: string;
}

const DEFAULT_DESCRIPTION =
  'The Lys Foundation is a registered education NGO in Accra, Ghana. We provide Montessori schooling, daily meals, and family support to underprivileged children and single mothers.';

function eventSlug(event: (typeof events)[number]) {
  return event.registrationLink.split('/').filter(Boolean)[1];
}

function truncate(text: string, max = 160) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export const staticPages: PageSEO[] = [
  {
    path: '/',
    title: 'The Lys Foundation | Education NGO in Accra, Ghana',
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    priority: 1,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'The Lys Foundation | About Our Education NGO in Ghana',
    description:
      'About The Lys Foundation, a registered education NGO in Accra, Ghana. Since 2015 we have provided Montessori schooling to underprivileged children.',
    keywords:
      'about Lys Foundation, education NGO Ghana, Jemima Adamah, Ewurama Ocran-Gbekor, Montessori school Accra',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/impact',
    title: 'Our Impact | Children Educated Through The Lys Foundation',
    description:
      'See how The Lys Foundation is changing children\'s lives in Ghana through Montessori education, daily meals, health screenings, and mother empowerment programmes.',
    keywords: 'Lys Foundation impact, children education Ghana, child sponsorship results, education NGO impact Accra',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/projects',
    title: 'Education Programs | Montessori, STEAM & Child Support in Ghana',
    description:
      'Explore Lys Foundation programs: Montessori education, STEAM learning, satellite centres, child nutrition, and vocational training for single mothers in Ghana.',
    keywords:
      'Montessori program Ghana, STEAM education for children, education programs Accra, child nutrition school Ghana',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/steam',
    title: 'STEAM Education for Children | Lys Foundation Ghana',
    description:
      'Science, Technology, Engineering, Arts and Mathematics for children at The Lys Foundation School — hands-on STEAM learning inside our Montessori curriculum in Accra.',
    keywords: 'STEAM education Ghana, STEM for children Accra, coding for kids Ghana, science education NGO',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/events',
    title: 'Events & School Programs | The Lys Foundation Accra',
    description:
      'Join Lys Foundation Open Days, mother workshops, Speech & Prize Day, and sponsor-a-child drives supporting quality education for children in Ghana.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/volunteer',
    title: 'Volunteer in Children\'s Education | Lys Foundation Ghana',
    description:
      'Volunteer as a Montessori teacher, childcare assistant, health worker, or mentor and help deliver quality education to underprivileged children in Accra, Ghana.',
    keywords: 'volunteer education Ghana, teach children Accra, volunteer Montessori school, NGO volunteer Ghana',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/partners',
    title: 'Partner With The Lys Foundation | Education NGO Ghana',
    description:
      'Churches, companies, and donors can partner with The Lys Foundation to expand Montessori education, satellite learning centres, and child sponsorship in Ghana.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/donors',
    title: 'Our Donors | Companies Supporting The Lys Foundation',
    description:
      'Meet the companies that support The Lys Foundation, including Akenkan Shop, Amadeus, Ghana Institute of Surveyors, IFED Global, Rehoboath, STEMAID, and STEMSHECAN.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/donate',
    title: 'Donate | Sponsor a Child\'s Education in Ghana',
    description:
      'Donate to The Lys Foundation or sponsor a child from $25/month. Your gift funds Montessori tuition, meals, uniforms, and learning materials for children in Ghana.',
    keywords:
      'donate education Ghana, sponsor a child Ghana, donate to children NGO, Lys Foundation donate',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/success-stories',
    title: 'Success Stories | Children Transformed by Education in Ghana',
    description:
      'Read real stories of children and mothers whose lives changed through Lys Foundation Montessori education, nutrition, and family empowerment in Ghana.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    title: 'Education Blog | Montessori, Child Development & Ghana Schools',
    description:
      'Articles on Montessori education, child development, STEAM learning, and how quality schooling lifts underprivileged children and families in Ghana.',
    keywords: 'Montessori education blog, child development Ghana, education articles Accra, teaching children Ghana',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/contact',
    title: 'Contact The Lys Foundation | Accra Education NGO',
    description:
      'Contact The Lys Foundation in Accra about sponsoring a child, volunteering, partnerships, donations, or enrolling in our Montessori school.',
    keywords: 'contact Lys Foundation, education NGO Accra phone, sponsor a child Ghana contact',
    priority: 0.7,
    changefreq: 'yearly',
  },
  {
    path: '/faq',
    title: 'The Lys Foundation FAQ | School, Donations and Sponsorship',
    description:
      'Answers about The Lys Foundation in Accra: donating, sponsoring a child, Montessori education, volunteering, and partnering with our NGO in Ghana.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/gallery',
    title: 'Photo Gallery | Lys Foundation School & Children in Ghana',
    description:
      'Photos from The Lys Foundation School: Montessori classrooms, children learning, STEAM projects, and community education work across Ghana.',
    priority: 0.5,
    changefreq: 'monthly',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | The Lys Foundation',
    description: 'How The Lys Foundation collects, uses, and protects personal information on our website and education programmes.',
    priority: 0.2,
    changefreq: 'yearly',
  },
  {
    path: '/terms-of-use',
    title: 'Terms of Use | The Lys Foundation',
    description: 'Terms governing use of The Lys Foundation website and information about our education programmes in Ghana.',
    priority: 0.2,
    changefreq: 'yearly',
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | The Lys Foundation',
    description: 'How The Lys Foundation uses cookies to improve the website experience for supporters, families, and volunteers.',
    priority: 0.2,
    changefreq: 'yearly',
  },
];

function dynamicPages(): PageSEO[] {
  const founderPages: PageSEO[] = founders.map((founder) => ({
    path: `/about/founder/${founder.id}`,
    title: `${founder.name} | ${founder.role} — The Lys Foundation`,
    description: truncate(
      `${founder.name} is ${founder.role} at The Lys Foundation. ${founder.bio}`
    ),
    type: 'profile',
    image: founder.image,
    priority: 0.6,
    changefreq: 'yearly',
  }));

  const projectPages: PageSEO[] = projects.map((project) => ({
    path: `/projects/${project.slug}`,
    title: `${project.title} | Children\'s Education Ghana`,
    description: truncate(project.description),
    keywords: `${project.title}, ${project.category}, children education Ghana, Lys Foundation, ${project.location}`,
    image: project.image,
    priority: 0.8,
    changefreq: 'monthly',
  }));

  const blogPages: PageSEO[] = blogPosts.map((post) => ({
    path: `/blog/${post.id}`,
    title: `${post.title} | Lys Foundation Education Blog`,
    description: truncate(post.excerpt),
    keywords: `${post.category}, Montessori education, children education Ghana, ${post.title}`,
    image: post.image,
    type: 'article',
    author: post.author,
    publishedTime: post.date,
    priority: 0.6,
    changefreq: 'monthly',
  }));

  const methodologyPages: PageSEO[] = methodology.map((item) => ({
    path: `/about/methodology/${item.slug}`,
    title: `${item.title} | The Lys Foundation Methodology`,
    description: truncate(item.summary),
    keywords: `${item.title}, Lys Foundation methodology, education NGO Ghana`,
    priority: 0.6,
    changefreq: 'monthly',
  }));

  const storyPages: PageSEO[] = patientStories.map((story) => ({
    path: `/success-stories/${story.slug}`,
    title: `${story.headline ?? story.name} | The Lys Foundation`,
    description: truncate(story.story),
    image: story.image || undefined,
    priority: 0.6,
    changefreq: 'monthly',
  }));

  const eventPages: PageSEO[] = events.map((event) => ({
    path: `/events/${eventSlug(event)}/register`,
    title: `Register: ${event.title} | The Lys Foundation`,
    description: truncate(`${event.description}${event.date ? ` ${event.date}` : ''} at ${event.location}.`),
    image: event.image,
    priority: 0.4,
    changefreq: 'weekly',
  }));

  return [...founderPages, ...projectPages, ...blogPages, ...methodologyPages, ...storyPages, ...eventPages];
}

export function getAllPages(): PageSEO[] {
  return [...staticPages, ...dynamicPages()];
}

export function resolvePageSEO(pathname: string): PageSEO {
  const clean = (pathname.replace(/\/$/, '') || '/') as string;
  const pages = getAllPages();
  const match = pages.find((page) => page.path === clean);

  if (match) return match;

  return {
    path: clean,
    title: 'Page Not Found | The Lys Foundation',
    description: 'This page could not be found. Visit The Lys Foundation to learn about Montessori education for children in Ghana.',
    noindex: true,
  };
}

export function canonicalUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: ALTERNATE_NAMES,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    image: DEFAULT_OG_IMAGE,
    description: ngoInfo.descriptionLong,
    slogan: ngoInfo.tagline,
    foundingDate: ngoInfo.founded,
    disambiguatingDescription:
      'Registered children\'s education NGO in Accra, Ghana (LBG-NGO-2021). The Lys Foundation runs a Montessori school for underprivileged children and is not a cosmetics brand.',
    email: 'lysfoundation21@gmail.com',
    telephone: ['+233243458689', '+233266557203'],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Ghana Registrar General registration',
      value: ngoInfo.registrationNumber,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'lysfoundation21@gmail.com',
      telephone: '+233243458689',
      areaServed: 'GH',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ghana',
    },
    knowsAbout: [
      'Montessori education',
      'Early childhood education',
      'Quality education for children',
      'STEAM education',
      'Child nutrition',
      'Orphan education',
      'Mother empowerment',
      'Child sponsorship',
    ],
    sameAs: [
      ngoInfo.socialMedia.facebook,
      ngoInfo.socialMedia.instagram,
      ngoInfo.socialMedia.twitter,
      ngoInfo.socialMedia.tiktok,
    ],
    founder: founders.map((founder) => ({
      '@type': 'Person',
      name: founder.name,
      jobTitle: founder.role,
      url: `${SITE_URL}/about/founder/${founder.id}`,
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ALTERNATE_NAMES,
    url: `${SITE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function buildBreadcrumbJsonLd(path: string, title: string) {
  const segments = path.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
  ];

  let current = '';
  segments.forEach((segment, index) => {
    current += `/${segment}`;
    const isLast = index === segments.length - 1;
    const page = getAllPages().find((entry) => entry.path === current);
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: isLast ? title.replace(` | ${SITE_NAME}`, '').replace(' | The Lys Foundation', '') : page?.title.split('|')[0].trim() || segment,
      item: canonicalUrl(current),
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildPageJsonLd(page: PageSEO) {
  const graph: Record<string, unknown>[] = [buildOrganizationJsonLd(), buildWebSiteJsonLd()];

  if (page.path !== '/') {
    graph.push(buildBreadcrumbJsonLd(page.path, page.title));
  }

  if (page.path === '/faq') {
    graph.push(buildFaqJsonLd());
  }

  if (page.path === '/donate') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'DonateAction',
      name: 'Sponsor a child\'s education in Ghana',
      target: canonicalUrl('/donate'),
      recipient: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (page.type === 'article') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      image: page.image || DEFAULT_OG_IMAGE,
      author: {
        '@type': 'Person',
        name: page.author || SITE_NAME,
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      datePublished: page.publishedTime,
      mainEntityOfPage: canonicalUrl(page.path),
    });
  }

  if (page.type === 'profile') {
    const founder = founders.find((person) => page.path === `/about/founder/${person.id}`);
    if (founder) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: founder.name,
        jobTitle: founder.role,
        image: founder.image,
        email: founder.email,
        worksFor: { '@id': `${SITE_URL}/#organization` },
        url: canonicalUrl(page.path),
      });
    }
  }

  if (page.path.startsWith('/projects/') && page.path !== '/projects') {
    const project = projects.find((item) => page.path === `/projects/${item.slug}`);
    if (project) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        name: project.title,
        description: project.fullDescription,
        provider: { '@id': `${SITE_URL}/#organization` },
        educationalProgramMode: 'onsite',
        occupationalCategory: 'Education',
        url: canonicalUrl(page.path),
      });
    }
  }

  return graph;
}

export function buildHeadSnippet(page: PageSEO) {
  const url = canonicalUrl(page.path);
  const image = page.image || DEFAULT_OG_IMAGE;
  const keywords = page.keywords || DEFAULT_KEYWORDS;
  const robots = page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  const jsonLd = JSON.stringify(buildPageJsonLd(page));

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `<meta name="author" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="googlebot" content="${robots}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${page.type === 'article' ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
