
import Link from 'next/link';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { FOOTER_PROPS, SITE_LOGO_ICON as SiteLogoIcon, SITE_TITLE, NAV_ITEMS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-3 font-headline">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-accent-foreground text-xl font-bold mb-3 hover:opacity-80 transition-opacity">
              <SiteLogoIcon className="h-6 w-6" />
              <span>{SITE_TITLE}</span>
            </Link>
            <p className="text-sm text-accent-foreground/80 max-w-xs mx-auto">
              {FOOTER_PROPS.tagline}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 pt-4 border-t border-accent-foreground/20 text-center">
          <p className="text-xs text-accent-foreground/70">
            {FOOTER_PROPS.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
