import React from 'react';
import Navigation from '@/components/Navigation';
import SolutionCard from '@/components/SolutionCard';

// This would typically come from an API or database
const solutionsByCategory = {
  1: [ // Computer Issues
    {
      title: 'Fix Slow Computer Performance',
      description: 'Speed up your computer by following these simple steps',
      difficulty: 'Easy',
      estimatedTime: '15 mins',
      steps: [
        {
          title: 'Check Running Programs',
          description: 'Open Task Manager to identify resource-heavy applications',
        },
        {
          title: 'Clear Temporary Files',
          description: 'Use Disk Cleanup to remove unnecessary files and free up space',
        },
        {
          title: 'Disable Startup Programs',
          description: 'Prevent unnecessary programs from launching at startup',
        },
      ],
    },
    {
      title: 'Blue Screen Error Solutions',
      description: 'Troubleshoot and fix common blue screen errors',
      difficulty: 'Medium',
      estimatedTime: '30 mins',
      steps: [
        {
          title: 'Record Error Code',
          description: 'Note down the error code displayed on the blue screen',
        },
        {
          title: 'Update Drivers',
          description: 'Check and update all system drivers to their latest versions',
        },
        {
          title: 'Check Hardware',
          description: 'Verify all hardware components are properly connected',
        },
      ],
    },
  ],
  // Add more categories as needed
};

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = parseInt(params.id);
  const solutions = solutionsByCategory[categoryId as keyof typeof solutionsByCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            {categoryId === 1 ? 'Computer Issues' : 'Category Solutions'}
          </h1>
          <p className="mt-2 text-gray-600">
            Find step-by-step solutions to common problems
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              difficulty={solution.difficulty as 'Easy' | 'Medium' | 'Hard'}
              estimatedTime={solution.estimatedTime}
              steps={solution.steps}
            />
          ))}
        </div>

        {solutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No solutions found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
} 