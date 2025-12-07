'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle:
    "Ready to transform your development workflow? Let's discuss how our AI training platform can accelerate your team's productivity.",
  formTitle: 'Send us a message',
  formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
  nameLabel: 'Full Name',
  namePlaceholder: 'Enter your full name',
  emailLabel: 'Email Address',
  emailPlaceholder: 'Enter your email address',
  companyLabel: 'Company',
  companyPlaceholder: 'Enter your company name',
  messageLabel: 'Message',
  messagePlaceholder: 'Tell us about your project and requirements...',
  submitText: 'Send Message',
  contactInfo: [
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'hello@aitraining.dev',
      description: 'Get in touch via email',
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      value: 'San Francisco, CA',
      description: 'Schedule an office visit',
    },
  ],
  features: [
    {
      icon: 'Clock',
      title: '24h Response',
      description: 'Quick response guaranteed',
    },
    {
      icon: 'Users',
      title: 'Expert Team',
      description: 'AI specialists ready to help',
    },
  ],
  successMessage: "Thank you! We'll be in touch soon.",
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Mail: Mail,
      Phone: Phone,
      MapPin: MapPin,
      Clock: Clock,
      Users: Users,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Mail;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h2>
                <p className="text-muted-foreground">
                  <span data-editable="formDescription">{config.formDescription}</span>
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <p className="text-lg font-medium">
                    <span data-editable="successMessage">{config.successMessage}</span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="693606e497232fdf21e1b3ba"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">
                        <span data-editable="nameLabel">{config.nameLabel}</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        placeholder={config.namePlaceholder}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        <span data-editable="emailLabel">{config.emailLabel}</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder={config.emailPlaceholder}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">
                      <span data-editable="companyLabel">{config.companyLabel}</span>
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={e => handleInputChange('company', e.target.value)}
                      placeholder={config.companyPlaceholder}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      <span data-editable="messageLabel">{config.messageLabel}</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      placeholder={config.messagePlaceholder}
                      rows={5}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {config.contactInfo.map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-muted/50 text-foreground hover:bg-muted/70 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3">
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          <span data-editable={`contactInfo[${idx}].title`}>{item.title}</span>
                        </h3>
                        <p className="text-lg font-medium mb-1">
                          <span data-editable={`contactInfo[${idx}].value`}>{item.value}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span data-editable={`contactInfo[${idx}].description`}>
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg">
                  <div className="bg-accent text-accent-foreground rounded-full p-2">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
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
