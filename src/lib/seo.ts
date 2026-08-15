import { useEffect } from 'react';
import { site } from '@/data/site';

type SEOProps = {
  title: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noindex?: boolean;
};

export function useSEO({ title, description, path = '/', type = 'website', publishedTime, noindex }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} — ${site.name}`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = description || 'Learn Chemistry from fundamentals to FSc, MDCAT and ECAT with concept-based lessons, exam preparation and expert guidance from Professor Noor Saleem.';
    const url = `${site.domain}${path}`;

    setMeta('meta[name="description"]', 'name', 'description', desc);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', noindex ? 'noindex,nofollow' : 'index,follow');

    if (publishedTime) {
      setMeta('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
    }
  }, [title, description, path, type, publishedTime, noindex]);
}
