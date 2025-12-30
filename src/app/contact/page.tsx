
import ContactSection from '@/components/sections/contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Darshan Kumar',
  description: "Get in touch with Darshan Kumar for project collaborations, inquiries, or to discuss his ship-inspired tech portfolio.",
};

export default function ContactPage() {
  return (
    <ContactSection />
  );
}
