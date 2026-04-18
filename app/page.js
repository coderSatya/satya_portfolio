import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/AchievementsAndHobbies';

export default function Home() {
  return (
    <>
      <main className="relative bg-void overflow-hidden">
        <Hero />
        
        {/* Divider glow */}
        <div
          className="h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
          <About />
          <Skills />
          <div className="space-y-24">
            <Achievements />
          </div>
        </div>
      </main>
    </>
  );
}
