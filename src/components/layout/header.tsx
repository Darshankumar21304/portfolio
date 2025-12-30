
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS, SITE_TITLE, SITE_LOGO_ICON as SiteLogoIcon } from '@/lib/constants';
import type { NavItem } from '@/types';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ items, onItemClick }: { items: NavItem[], onItemClick?: () => void }) => (
    <>
      {items.map((item) => (
        <Button key={item.label} variant="ghost" asChild className={cn(
          "transition-colors duration-300",
          isScrolled 
            ? "text-foreground hover:text-accent-foreground hover:bg-accent/20" 
            : "text-accent hover:text-accent-foreground hover:bg-accent/90"
        )}>
          <Link href={item.href} onClick={onItemClick}>
            {item.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-headline",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 hover:opacity-80 transition-opacity",
              isScrolled ? "text-primary" : "text-accent"
            )}
          >
            <SiteLogoIcon className={cn("h-7 w-7")} />
            <span className="text-2xl font-bold">{SITE_TITLE}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <NavLinks items={NAV_ITEMS} />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-accent")} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-4 pt-8">
                   {NAV_ITEMS.map((item) => (
                    <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-accent-foreground hover:bg-accent/20 transition-colors duration-300 w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
