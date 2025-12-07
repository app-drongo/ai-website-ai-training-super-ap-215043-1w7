'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Shield, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Build, Train & Deploy AI Models at Scale',
  subheadline:
    'The all-in-one platform that empowers developers and data scientists to create production-ready AI solutions faster than ever before.',
  primaryCtaText: 'Start Building',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  trustIndicators: ['Used by 10,000+ ML Engineers', '99.9% Uptime SLA', 'SOC 2 Certified'],
  features: [
    { icon: 'Zap', title: 'Lightning Fast', description: 'Train models 10x faster' },
    { icon: 'Shield', title: 'Enterprise Security', description: 'Bank-grade encryption' },
    { icon: 'Users', title: 'Team Collaboration', description: 'Built for teams' },
  ],
  videoThumbnail:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&crop=center',
  videoAlt: 'AI Training Platform Demo',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'Users':
        return <Users className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2">
              {config.trustIndicators.map((indicator, idx) => (
                <Badge key={idx} variant="secondary" className="bg-muted text-muted-foreground">
                  <span data-editable={`trustIndicators[${idx}]`}>{indicator}</span>
                </Badge>
              ))}
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="headline">{config.headline}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Play className="mr-2 h-4 w-4" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {config.features.map((feature, idx) => (
                <Card key={idx} className="bg-card text-card-foreground border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary mt-1">{getIcon(feature.icon)}</div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm">
                          <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          <span data-editable={`features[${idx}].description`}>
                            {feature.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Video/Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Card
              className="bg-card border-border overflow-hidden group cursor-pointer"
              onClick={handleVideoClick}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={config.videoThumbnail}
                    alt={config.videoAlt}
                    data-editable-src="videoThumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground rounded-full p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium text-foreground">
                      See how teams are building AI 10x faster
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
