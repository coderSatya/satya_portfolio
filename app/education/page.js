import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';

export const metadata = {
  title: 'Education & Certifications | Satya Prakash',
  description: 'Academic background and professional certifications of Satya Prakash.',
};

export default function EducationPage() {
  return (
    <main className="relative bg-void">
      <Education />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Certifications />
    </main>
  );
}
