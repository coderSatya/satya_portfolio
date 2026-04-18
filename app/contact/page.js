import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Contact | Satya Prakash',
  description: 'Get in touch with Satya Prakash for frontend development opportunities.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <Contact />
    </div>
  );
}
