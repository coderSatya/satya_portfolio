import { Toaster } from 'react-hot-toast';
import GlobalLayout from '@/components/ui/GlobalLayout';
import '../styles/globals.css';

export const metadata = {
  title: 'Satya Prakash | Software Engineer',
  description:
    'Portfolio of Satya Prakash — Software Engineer & Full Stack Developer specializing in MERN stack, React.js, and AI-integrated systems.',
  keywords: 'Software Engineer, Full Stack Developer, MERN Stack, React.js, Next.js, Node.js, Kolkata',
  authors: [{ name: 'Satya Prakash' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Satya Prakash | Software Engineer',
    description: 'Premium portfolio of Satya Prakash — Full Stack Engineer & AI Enthusiast',
    type: 'website',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Satya Prakash' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GlobalLayout>
          {children}
        </GlobalLayout>
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
