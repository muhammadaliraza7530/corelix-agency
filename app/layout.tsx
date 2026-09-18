import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoToTop from '@/components/GoToTop';
import { ScrollProgressBar } from '@/components/ScrollAnimation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Corelix Systems - Website Development, App Development, Video Editing & AI Automation',
  description: 'Corelix Systems is a premier digital agency specializing in modern Website Development, iOS & Android App Development, high-impact Video Editing, and intelligent AI Automation solutions.',
  openGraph: {
    title: 'Corelix Systems - Website Development, App Development, Video Editing & AI Automation',
    description: 'Corelix Systems is a premier digital agency specializing in modern Website Development, iOS & Android App Development, high-impact Video Editing, and intelligent AI Automation solutions.',
  },
  icons: {
    icon: 'https://i.postimg.cc/XvZmZXGf/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} id="top">
        <ScrollProgressBar />
        <Header />
        {children}
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
