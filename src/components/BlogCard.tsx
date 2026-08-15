import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import { formatDate } from '@/lib/utils';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card-hover p-5 flex flex-col gap-3 group">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="chip chip-brand">{post.category}</span>
        <span className="text-xs text-ink-light flex items-center gap-1">
          <Calendar className="h-3 w-3" /> {formatDate(post.date)}
        </span>
        <span className="text-xs text-ink-light flex items-center gap-1">
          <Clock className="h-3 w-3" /> {post.readingTime}
        </span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-brand-700 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-ink-light">{post.author}</span>
        <span className="text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">
          Read more <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
