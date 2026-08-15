import { notFound } from 'next/navigation';
import { ecatGroups } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader } from '@/components/TopicReader';

export function generateStaticParams() {
  const params: { branch: string; topic: string }[] = [];

  for (const group of ecatGroups) {
    for (const topic of group.topics) {
      params.push({
        branch: group.slug,
        topic: topic.slug,
      });
    }
  }

  return params;
}

export default function EcatTopicPage({
  params,
}: {
  params: { branch: string; topic: string };
}) {
  const group = ecatGroups.find(
    (group) => group.slug === params.branch
  );

  if (!group) notFound();

  const topic = group.topics.find(
    (topic) => topic.slug === params.topic
  );

  if (!topic) notFound();

  return (
    <div className="container-narrow py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'ECAT', href: '/ecat' },
          {
            label: group.title,
            href: `/ecat/${group.slug}`,
          },
          { label: topic.title },
        ]}
      />

      <div className="mt-6">
        <TopicReader
          backHref={`/ecat/${group.slug}`}
          backLabel={`Back to ${group.title}`}
          title={topic.title}
          subtitle={group.title}
        >
          <div className="card p-8 text-center">
            <p className="text-ink-muted">
              Content for this topic will be added soon.
            </p>
          </div>
        </TopicReader>
      </div>
    </div>
  );
}