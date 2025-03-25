import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andrew Bielous | Full Stack Developer',
  description: 'Personal portfolio and curriculum of Andrew Bielous, showcasing my experience as a Full Stack Developer and my journey in web development.',
  keywords: 'Andrew Bielous, Full Stack Developer, Web Development, Portfolio',
  authors: [{ name: 'Andrew Bielous' }],
  creator: 'Andrew Bielous',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 