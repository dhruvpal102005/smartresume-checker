
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Award, Code, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tools = [
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: 'Resume Parser',
    description: 'Extract key information from resumes in any format. Get structured data for candidates in seconds.',
    link: '/resume-parser'
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: 'Resume Scoring',
    description: 'Rank candidates based on job fit using our advanced AI algorithm with customizable criteria.',
    link: '/resume-scoring'
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Skill Matching',
    description: 'Compare required job skills with candidate profiles to find the perfect match for your positions.',
    link: '/skill-matching'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Candidate Comparison',
    description: 'View candidates side-by-side and analyze their strengths and weaknesses to make informed decisions.',
    link: '/candidate-comparison'
  }
];

const ToolsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Resume Analysis Tools</h1>
        <p className="text-muted-foreground max-w-2xl">
          Our suite of AI-powered tools to help you screen, analyze, and compare candidates efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <Card key={index} className="neumorphic-card border-none overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-4 flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">{tool.title}</h2>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <Button asChild className="rounded-full w-full sm:w-auto transition-all duration-300 hover:scale-105">
                    <Link to={tool.link} className="flex items-center justify-center">
                      Use {tool.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
