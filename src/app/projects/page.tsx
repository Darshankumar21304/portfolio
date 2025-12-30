
import ProjectsSection from '@/components/sections/projects-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Darshan Kumar',
  description: "Explore Darshan Kumar's featured projects, showcasing his technical skills and ship-inspired tech aesthetic.",
};

export default function ProjectsPage() {
  return (
    <ProjectsSection />
  );
}
