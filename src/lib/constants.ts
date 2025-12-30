
import type { NavItem, Project } from '@/types';
import { User, Briefcase, Mail, Compass, Anchor, Ship, Send, Phone, Github, Linkedin } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Anchor },
  { label: 'About', href: '/about', icon: User },
  { label: 'Projects', href: '/projects', icon: Compass },
  { label: 'Contact', href: '/contact', icon: Send },
];

export const SITE_TITLE = "Darshan Kumar";
export const SITE_LOGO_ICON = Anchor; // Main site logo icon

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-online-book-store',
    title: 'Online Book Store',
    description: 'A comprehensive e-commerce platform for browsing and purchasing books. Features user accounts, search functionality, a shopping cart, and an admin panel for managing inventory.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'books online store',
    liveLink: '#',
    repoLink: '#',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project-online-laundry-management',
    title: 'Online Laundry Management System',
    description: 'A web application for managing laundry service orders. Allows customers to place orders, track status, and make payments. Includes an admin interface for service providers to manage operations.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'laundry service',
    liveLink: '#',
    repoLink: '#',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];

export const HERO_SECTION_PROPS = {
  greeting: "Hi, I'm",
  title: "Darshan Kumar",
  tagline: "Web Developer | Tech Explorer",
  subtitle: "I design and develop interactive, user-focused web applications.",
  ctaPrimary: {
    text: "View Projects",
    href: "/projects",
    icon: Briefcase,
  },
  ctaSecondary: {
    text: "Contact Me",
    href: "/contact",
    icon: Mail,
  },
};

export const PROJECTS_SECTION_PROPS = {
  title: "Featured Voyages",
  subtitle: "A showcase of recent projects, navigating through diverse technologies and challenges.",
  icon: Ship,
};

export const CONTACT_SECTION_PROPS = {
  title: "Plot Your Message",
  subtitle: "Ready to discuss your next project or have a question? Send a signal!",
  icon: Compass,
};

export const FOOTER_PROPS = {
  tagline: "Crafted by Darshan Kumar with 💙, code, and coffee.",
  email: "darshandarshankumar088@gmail.com",
  phone: "+91 74837 98467",
  copyrightText: `© ${new Date().getFullYear()} ${SITE_TITLE}. All rights reserved.`,
  socialLinks: [
    { name: 'GitHub', href: '#', icon: 'github' as const },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' as const },
  ]
};

export const ABOUT_SECTION_PROPS = {
  title: "🧭 About the Captain",
  subtitle: "Navigating the seas of technology and innovation.",
  icon: User,
  imageUrl: "/face.png",
  imageHint: "developer portrait",
  bioParagraphs: [
    "Hello! I’m Darshan Kumar, a web developer passionate about creating intuitive, efficient, and elegant digital experiences. I specialize in front-end technologies and love exploring the latest tools in the software ocean. With every project, I aim to bring value, structure, and creativity to the user’s voyage."
  ],
  roles: ["Web Developer", "Tech Explorer", "Lifelong Learner"],
  skills: [],
};
