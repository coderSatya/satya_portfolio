import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import HackathonSection from '@/components/sections/HackathonSection';
import CricketAchievement from '@/components/sections/CricketAchievement';
import EbookPromo from '@/components/sections/EbookPromo';
import ChessChallenge from '@/components/sections/ChessChallenge';
import EducationNavigator from '@/components/ui/EducationNavigator';

export const metadata = {
  title: 'Education & Certifications | Satya Prakash',
  description: 'Academic background and professional certifications of Satya Prakash.',
};

export default function EducationPage() {
  return (
    <main className="relative bg-void min-h-screen">
      <EducationNavigator />

      <Education />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Certifications />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <HackathonSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <EbookPromo />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>      <ChessChallenge />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <CricketAchievement />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </main>
  );
}
