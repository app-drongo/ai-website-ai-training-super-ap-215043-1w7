'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PAGE_HEADER = {
  title: 'Contact Us',
  subtitle: 'Get in touch with our team',
  description:
    "We're here to help you succeed with our AI training platform. Reach out for support, partnerships, or general inquiries.",
  backText: 'Back to Home',
  backHref: '/',
  showBreadcrumb: true,
  breadcrumbItems: ['Home', 'Contact'],
  contactMethods: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'hello@aiplatform.com',
      href: 'mailto:hello@aiplatform.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: 'location',
      label: 'Office',
      value: 'San Francisco, CA',
      href: '#',
    },
  ],
  badge: 'Support Available 24/7',
} as const;

type PageHeaderProps = Partial<typeof DEFAULT_PAGE_HEADER>;

export default function PageHeader(props: PageHeaderProps) {
  const config = { ...DEFAULT_PAGE_HEADER, ...props };
  const navigate = useSmartNavigation();

  const handleBackClick = () => {
    navigate(config.backHref);
  };

  const handleContactClick = (href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    } else if (href !== '#') {
      navigate(href);
    }
  };

  const getContactIcon = (iconType: string) => {
    switch (iconType) {
      case 'mail':
        return <Mail className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
      case 'location':
        return <MapPin className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <section id="page-header" className="bg-background text-foreground border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            data-editable-href="backHref"
            data-href={config.backHref}
            className="text-muted-foreground hover:text-foreground transition-colors p-0 h-auto font-normal"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span data-editable="backText">{config.backText}</span>
          </Button>
        </div>

        {/* Breadcrumb */}
        {config.showBreadcrumb && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              {config.breadcrumbItems.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  {idx > 0 && <span className="mx-2">/</span>}
                  <span
                    data-editable={`breadcrumbItems[${idx}]`}
                    className={
                      idx === config.breadcrumbItems.length - 1 ? 'text-foreground font-medium' : ''
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Quick Contact</h2>
            <div className="grid gap-4">
              {config.contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  onClick={() => handleContactClick(method.href)}
                  className="group flex items-center space-x-4 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {getContactIcon(method.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      <span data-editable={`contactMethods[${idx}].label`}>{method.label}</span>
                    </p>
                    <p className="text-base font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                      <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
