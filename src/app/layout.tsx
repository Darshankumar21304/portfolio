import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Darshan Kumar | Portfolio',
  description: "Darshan Kumar's personal portfolio, showcasing skills, projects, and a ship-inspired tech aesthetic.",
  icons: {
    icon: '/dar.png',
  },
  openGraph: {
    title: 'Darshan Kumar | Portfolio',
    description: "Darshan Kumar's personal portfolio, showcasing skills, projects, and a ship-inspired tech aesthetic.",
    images: [
      {
        url: '/dar.png',
        width: 1200,
        height: 630,
        alt: 'Darshan Kumar Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darshan Kumar | Portfolio',
    description: "Darshan Kumar's personal portfolio, showcasing skills, projects, and a ship-inspired tech aesthetic.",
    images: ['/dar.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
