import { Breadcrumbs } from '@/components/Breadcrumbs';
export const metadata = { title: 'Terms of Use' };
export default function TermsPage() {
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]} />
      <h1 className="text-3xl font-serif font-semibold text-ink mt-6 mb-4">Terms of Use</h1>
      <p className="text-ink-muted">These terms govern your use of this website. This is a placeholder page — replace with your actual terms of use.</p>
    </div>
  );
}
