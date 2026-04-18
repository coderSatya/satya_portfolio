import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export const metadata = {
  title: 'Satya Prakash | Frontend Developer',
  description:
    'Portfolio of Satya Prakash — Frontend Developer specializing in React.js, Next.js, and modern web technologies. 2.5+ years building premium web experiences.',
  keywords: 'Frontend Developer, React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Kolkata',
  authors: [{ name: 'Satya Prakash' }],
  openGraph: {
    title: 'Satya Prakash | Frontend Developer',
    description: 'Premium portfolio of Satya Prakash — Frontend Engineer & AI Enthusiast',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(13, 21, 48, 0.95)',
              color: '#e2e8f0',
              border: '1px solid rgba(0, 245, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              fontFamily: 'var(--font-body)',
            },
          }}
        />
      </body>
    </html>
  );
}
