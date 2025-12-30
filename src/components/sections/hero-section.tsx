
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HERO_SECTION_PROPS } from '@/lib/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const TechyCodeElement = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={cn(
      "absolute font-code text-accent/40 text-xs md:text-sm pointer-events-none select-none opacity-0 animate-fadeIn",
      className
    )}
    style={{ animationDelay: '0.5s' }} // Stagger appearance slightly after main content
    aria-hidden="true"
  >
    {text}
  </span>
);

const HeroSection = () => {
  const { greeting, title, tagline, subtitle, ctaPrimary, ctaSecondary } = HERO_SECTION_PROPS;

  return (
    <section
      id="home"
      className="relative pt-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden" // Added overflow-hidden
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/dar.png"
          alt="Darshan Kumar background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/70 opacity-75"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animation-fade-in">
        {/* Techy Code Elements */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <TechyCodeElement text="01001101 01100001 01110010" className="top-[10%] left-[5%] transform -rotate-[15deg]" />
          <TechyCodeElement text="<DevFolio_Init />" className="top-[20%] right-[8%] transform rotate-[10deg]" />
          <TechyCodeElement text="const ship = new Vessel();" className="bottom-[25%] left-[12%] transform rotate-[8deg] text-base" />
          <TechyCodeElement text="run(sail.navigate());" className="bottom-[10%] right-[15%] transform -rotate-[12deg]" />
           <TechyCodeElement text="COMMIT_CHANGES --force" className="top-[60%] left-[2%] transform rotate-[20deg] text-[0.6rem] md:text-xs" />
          <TechyCodeElement text="renderOcean(true);" className="top-[35%] left-[40%] transform -rotate-[5deg] opacity-70" />
        </div>

        <div className="relative z-10"> {/* Ensure main content is above techy elements */}
          {greeting && (
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-2 font-headline">
              {greeting}
            </h2>
          )}
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {tagline && (
            <h3 className="text-lg md:text-2xl text-primary-foreground/80 font-headline mb-8">
              {tagline}
            </h3>
          )}
          <p className="text-md md:text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {ctaPrimary && ctaPrimary.text && ctaPrimary.href && (
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 backdrop-blur-sm transition-all shadow-lg transform hover:scale-105"
              >
                <Link href={ctaPrimary.href}>
                  {ctaPrimary.icon && <ctaPrimary.icon className="mr-2 h-5 w-5" />}
                  {ctaPrimary.text}
                </Link>
              </Button>
            )}
            {ctaSecondary && ctaSecondary.text && ctaSecondary.href && (
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 backdrop-blur-sm transition-all shadow-lg transform hover:scale-105" // Changed from outline to solid accent
              >
                <Link href={ctaSecondary.href}>
                  {ctaSecondary.icon && <ctaSecondary.icon className="mr-2 h-5 w-5" />}
                  {ctaSecondary.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
