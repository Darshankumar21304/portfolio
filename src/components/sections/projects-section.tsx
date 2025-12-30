
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS_DATA, PROJECTS_SECTION_PROPS } from '@/lib/constants';
import type { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full border-primary/20 rounded-lg">
    {/* CardHeader with image has been removed */}
    <CardContent className="p-6 flex-grow flex flex-col"> {/* Added flex flex-col here */}
      <CardTitle className="font-headline text-2xl text-primary mb-3">{project.title}</CardTitle> {/* Moved from CardHeader, adjusted margin */}
      <CardDescription className="text-foreground/80 mb-4 text-sm leading-relaxed flex-grow"> {/* Added flex-grow to description for better spacing */}
        {project.description}
      </CardDescription>
      <div className="mb-4 mt-auto"> {/* Added mt-auto to push tech stack towards bottom if description is short */}
        <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-6 pt-0"> {/* Removed mt-auto as tech stack handles pushing content */}
      <div className="flex gap-3 w-full">
        {project.liveLink && (
          <Button variant="outline" asChild className="flex-1 border-accent text-accent hover:bg-accent/10">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoLink && (
          <Button variant="outline" asChild className="flex-1 border-primary text-primary hover:bg-primary/10">
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
      </div>
    </CardFooter>
  </Card>
);

const ProjectsSection = () => {
  const { title, subtitle, icon: SectionIcon } = PROJECTS_SECTION_PROPS;
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animation-fade-in">
          {SectionIcon && <SectionIcon className="h-12 w-12 text-primary mx-auto mb-4" />}
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={project.id} className="animation-fade-in" style={{ animationDelay: `${index * 0.1}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
