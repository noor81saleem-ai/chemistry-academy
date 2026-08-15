import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChapterView } from '@/components/ChapterView';

export function generateStaticParams() {
  return fscGrades.find((g) => g.slug === 'grade-12')!.chapters.map((ch) => ({ slug: ch.slug }));
}

export default function Grade12ChapterPage({ params }: { params: { slug: string } }) {
  const grade = fscGrades.find((g) => g.slug === 'grade-12')!;
  const chapter = grade.chapters.find((c) => c.slug === params.slug);
  if (!chapter) notFound();
  const content = getChapterContent('grade-12', params.slug);

  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 12', href: '/fsc/grade-12' }, { label: chapter.title }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Chapter {chapter.number}</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">{content?.title || chapter.title}</h1>
      </div>
      {content ? (
        <ChapterView content={content} gradeSlug="grade-12" chapterSlug={params.slug} />
      ) : (
        <div className="card p-8 text-center">
          <p className="text-ink-muted">Content for this chapter has not been added yet. Edit the file <code className="font-mono text-sm bg-brand-50 text-brand-800 px-1.5 py-0.5 rounded">src/data/chapter-content/g12-ch{chapter.number}.ts</code> to add content.</p>
        </div>
      )}
    </div>
  );
}
