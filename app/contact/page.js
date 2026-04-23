import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Contact | Satya Prakash',
  description: 'Get in touch with Satya Prakash for frontend development opportunities.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32 pb-12">
      <Contact />
    </div>
  );
}
