import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Michele Autorino - UIUC ECE & Stats Student | NLP & Backend Developer',
  description: 'Computer Engineering and Statistics student at University of Illinois',
  keywords: ['Michele Autorino', 'UIUC', 'Computer Engineering', 'Statistics', 'Portfolio'],
  authors: [{ name: 'Michele Autorino' }],
  creator: 'Michele Autorino',
  openGraph: {
    title: 'Michele Autorino - UIUC ECE & Stats Student',
    description: 'Computer Engineering and Statistics student',
    type: 'website',
    locale: 'en_US',
    siteName: 'Michele Autorino Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michele Autorino - UIUC ECE & Stats Student',
    description: 'Computer Engineering and Statistics student',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
