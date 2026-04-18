import Projects from '@/components/sections/Projects';

export const metadata = {
  title: 'Projects | Satya Prakash',
  description: 'Selected frontend and full-stack projects built by Satya Prakash.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <Projects />
    </div>
  );
}
