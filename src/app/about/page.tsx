
import AboutSection from '@/components/sections/about-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Darshan Kumar',
  description: "Learn more about Darshan Kumar, his skills, his journey in technology, and the ship-inspired tech aesthetic of his portfolio.",
};

export default function AboutPage() {
  return (
    <AboutSection />
  );
}
