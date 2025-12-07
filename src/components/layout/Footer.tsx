'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'AI TrainLab',
  tagline: 'The Complete AI Training Platform for Modern Development Teams',
  description:
    'Empowering developers with cutting-edge AI training tools and infrastructure for the next generation of intelligent applications.',

  // Company section
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal section
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social links
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],

  // Contact info
  contactEmail: 'hello@aitrainlab.com',
  contactPhone: '+1 (555) 123-4567',
  address: 'San Francisco, CA',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest AI training insights and platform updates.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 AI TrainLab. All rights reserved.',

  // Bottom links
  bottomLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Support', href: '/support' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  const renderIcon = (iconName: string) => {
    const iconProps = {
      size: 20,
      className: 'text-muted-foreground hover:text-foreground transition-colors',
    };

    switch (iconName) {
      case 'github':
        return <Github {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-2">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {config.socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(social.href)}
                  className="hover:scale-110 transition-transform"
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.label}
                >
                  {renderIcon(social.icon)}
                </button>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              data-form-id="6936024e84e72fd19c55eb52"
            >
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-editable="newsletterPlaceholder"
              />
              <Button type="submit" size="sm" className="w-full">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap gap-6">
            {config.legalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-editable-href={`legalLinks[${idx}].href`}
                data-href={link.href}
              >
                <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}

            {config.bottomLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-editable-href={`bottomLinks[${idx}].href`}
                data-href={link.href}
              >
                <span data-editable={`bottomLinks[${idx}].label`}>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
