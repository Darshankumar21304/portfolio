import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Ship, Code, Compass, Terminal, Cpu, Binary } from 'lucide-react';
import { cn } from '@/lib/utils';

const SkillCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-xl font-headline font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Welcome Aboard Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="binary-rain" />
        <div className="circuit-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <Ship className="h-12 w-12 text-accent mx-auto mb-4 animate-float" />
              <div className="tech-scanline" />
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4 tech-glitch">
              Welcome Aboard!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my journey through the digital seas, discover innovative projects, and let's create something amazing together.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="group tech-pulse">
              <Link href="/about" className="flex items-center gap-2">
                <Compass className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                About Me
              </Link>
            </Button>
            <Button asChild size="lg" className="group tech-pulse">
              <Link href="/projects" className="flex items-center gap-2">
                <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="tech-matrix" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="tech-terminal inline-block mb-4">
              <span className="tech-typing">Tech Arsenal Initialized</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
              Tech Arsenal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipped with modern technologies to navigate the digital landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={Code}
              title="Frontend Development"
              description="Crafting responsive and interactive user interfaces with React, Next.js, and modern CSS"
            />
            <SkillCard
              icon={Terminal}
              title="Backend Development"
              description="Building robust server-side applications with Node.js, Express, and various databases"
            />
            <SkillCard
              icon={Cpu}
              title="DevOps & Deployment"
              description="Streamlining development workflows and ensuring smooth deployments"
            />
          </div>
        </div>
      </section>
    </>
  );
}
