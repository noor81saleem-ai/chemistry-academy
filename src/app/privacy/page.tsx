import { Breadcrumbs } from '@/components/Breadcrumbs';
export const metadata = { title: 'Privacy Policy' };
export default function PrivacyPage() {
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <h1 className="text-3xl font-serif font-semibold text-ink mt-6 mb-4">Privacy Policy</h1>
      <p className="text-ink-muted">This privacy policy describes how we collect, use and protect your information. This is a placeholder page — replace with your actual privacy policy.</p>
    </div>
  );
}
