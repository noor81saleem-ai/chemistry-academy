import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-narrow py-20 text-center">
      <h1 className="text-6xl font-serif font-semibold text-brand-700">404</h1>
      <h2 className="mt-4 text-2xl font-serif font-semibold text-ink">Page Not Found</h2>
      <p className="mt-2 text-ink-muted">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn-primary mt-6"><Home className="h-4 w-4" /> Back to Home</Link>
    </div>
  );
}
