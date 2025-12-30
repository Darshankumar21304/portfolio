
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; // For AI image generation hint
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

// It's good practice to define types for API interactions
// We can reuse ContactFormValues from contact-section.tsx if it's exported,
// or define a specific type here if needed.
// For now, we'll assume ContactFormValues is exported and can be imported in the API route.
