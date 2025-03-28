
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Brain, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Resume Parsing',
    description: 'Instantly extract structured data from resumes in any format.',
    link: '/resume-parser'
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'AI Matching',
    description: 'Match candidates to job requirements with advanced AI algorithms.',
    link: '/skill-matching'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Candidate Comparison',
    description: 'Compare candidates side by side to make informed decisions.',
    link: '/candidate-comparison'
  }
];

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with hover effect */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto animate-slide-up transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Resume Screener –{' '}
            <span className="text-primary">Smarter Hiring Starts Here.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Streamline your recruitment process with powerful AI tools that analyze, score, and compare resumes with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button asChild size="lg" className="rounded-full transition-all duration-300 hover:shadow-lg hover:bg-primary/90">
                  <Link to="/upload">Upload Resume</Link>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Upload your resume</h4>
                  <p className="text-sm text-muted-foreground">Let our AI analyze your resume and provide valuable insights</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button asChild variant="outline" size="lg" className="rounded-full transition-all duration-300 hover:shadow-lg hover:bg-accent">
                  <Link to="/tools">Explore Tools</Link>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Discover our tools</h4>
                  <p className="text-sm text-muted-foreground">Explore our suite of AI-powered recruitment tools</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Features Section with improved cards */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recruitment Tools Powered by AI</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our suite of tools helps you make better hiring decisions in less time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="neumorphic-card border-none h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary/10 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">{feature.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                    <Button asChild variant="outline" className="w-full mt-auto rounded-full">
                      <Link to={feature.link} className="flex items-center justify-center">
                        Explore {feature.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">
          <h2 className="text-3xl font-bold">Ready to transform your hiring process?</h2>
          <p className="text-muted-foreground max-w-2xl">
            Start using our AI-powered tools today and find the perfect candidates faster.
          </p>
          <Button asChild size="lg" className="rounded-full mt-4 transition-all duration-300 hover:scale-105">
            <Link to="/upload" className="flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
