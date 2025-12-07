'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Database, Zap, Shield, BarChart3, Rocket, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  sectionTitle: 'Everything You Need for AI Development',
  sectionSubtitle:
    'From data preprocessing to model deployment, streamline your entire ML workflow',
  ctaText: 'Start Building',
  ctaHref: '/signup',
  features: [
    {
      id: '1',
      icon: 'Brain',
      title: 'Advanced Model Training',
      description:
        'Train state-of-the-art models with automated hyperparameter tuning and distributed computing support.',
      badge: 'Core',
    },
    {
      id: '2',
      icon: 'Database',
      title: 'Smart Data Pipeline',
      description:
        'Automated data preprocessing, validation, and augmentation with real-time quality monitoring.',
      badge: 'Essential',
    },
    {
      id: '3',
      icon: 'Zap',
      title: 'One-Click Deployment',
      description:
        'Deploy models to production with automatic scaling, A/B testing, and performance monitoring.',
      badge: 'Pro',
    },
    {
      id: '4',
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'SOC 2 compliant infrastructure with end-to-end encryption and audit logging.',
      badge: 'Security',
    },
    {
      id: '5',
      icon: 'BarChart3',
      title: 'Real-time Analytics',
      description:
        'Monitor model performance, data drift, and business metrics with customizable dashboards.',
      badge: 'Insights',
    },
    {
      id: '6',
      icon: 'Rocket',
      title: 'MLOps Automation',
      description:
        'Continuous integration and deployment for ML models with version control and rollback capabilities.',
      badge: 'DevOps',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Brain,
      Database,
      Zap,
      Shield,
      BarChart3,
      Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Brain;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-200 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/5 border border-border rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to accelerate your AI development?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of developers building the future with our platform.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg group"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
