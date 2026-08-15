import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SearchClient } from '@/components/SearchClient';

export const metadata = { title: 'Search' };

export default function SearchPage() {
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Find Content</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Search</h1>
        <p className="mt-3 text-ink-muted">Search across all chapters, topics, resources and blog posts.</p>
      </div>
      <SearchClient />
    </div>
  );
}
