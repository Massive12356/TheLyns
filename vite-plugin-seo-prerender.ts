import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { SITE_URL, buildHeadSnippet, getAllPages, resolvePageSEO } from './src/config/seo';

const SEO_START = '<!--seo-head-start-->';
const SEO_END = '<!--seo-head-end-->';

function injectHead(template: string, snippet: string) {
  const start = template.indexOf(SEO_START);
  const end = template.indexOf(SEO_END);

  if (start === -1 || end === -1) {
    return template;
  }

  return `${template.slice(0, start)}${SEO_START}\n    ${snippet}\n    ${template.slice(end)}`;
}

function buildSitemap(pages: ReturnType<typeof getAllPages>) {
  const urls = pages
    .filter((page) => !page.noindex)
    .map((page) => {
      const loc = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
      return `  <url>
    <loc>${loc}</loc>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${(page.priority ?? 0.5).toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Disallow: /panel
Disallow: /panel/
Disallow: /secure-access
Disallow: /secure-access/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export function seoPrerenderPlugin(): Plugin {
  return {
    name: 'seo-prerender',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        return;
      }

      const template = fs.readFileSync(indexPath, 'utf8');
      const pages = getAllPages();

      for (const page of pages) {
        const html = injectHead(template, buildHeadSnippet(page));
        if (page.path === '/') {
          fs.writeFileSync(indexPath, html);
          continue;
        }

        const outFile = path.join(distDir, page.path.slice(1), 'index.html');
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, html);
      }

      const notFound = resolvePageSEO('/404');
      fs.writeFileSync(
        path.join(distDir, '404.html'),
        injectHead(template, buildHeadSnippet({ ...notFound, path: '/404' }))
      );

      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(pages));
      fs.writeFileSync(path.join(distDir, 'robots.txt'), buildRobots());
    },
  };
}
