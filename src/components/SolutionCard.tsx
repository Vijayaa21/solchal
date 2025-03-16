'use client';

import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface SolutionCardProps {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  steps: Step[];
}

export default function SolutionCard({
  title,
  description,
  difficulty,
  estimatedTime,
  steps,
}: SolutionCardProps) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  }[difficulty];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center space-x-3">
            <span className={`px-2 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
              {difficulty}
            </span>
            <span className="text-sm text-gray-500">
              ⏱️ {estimatedTime}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Mark as Helpful
          </button>
          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
} 