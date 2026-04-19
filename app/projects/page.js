import Projects from '@/components/sections/Projects';

export const metadata = {
  title: 'Projects | Satya Prakash',
  description: 'Selected frontend and full-stack projects built by Satya Prakash.',
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Projects />
    </main>
  );
}
