import { notFound } from 'next/navigation';
import { ecatGroups } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChapterCard } from '@/components/ChapterCard';

export function generateStaticParams() {
  return ecatGroups.map((g) => ({ branch: g.slug }));
}

export default function EcatBranchPage({ params }: { params: { branch: string } }) {
  const group = ecatGroups.find((g) => g.slug === params.branch);
  if (!group) notFound();
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'ECAT', href: '/ecat' }, { label: group.title }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">ECAT Chemistry</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">{group.title}</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">{group.description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.topics.map((topic, i) => (
          <ChapterCard key={topic.slug} href={`/ecat/${group.slug}/${topic.slug}`} number={i + 1} title={topic.title} hasContent={topic.hasContent} />
        ))}
      </div>
    </div>
  );
}
