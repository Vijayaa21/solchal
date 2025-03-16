'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';

interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
}

interface DeviceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  problems: Problem[];
}

const categories: DeviceCategory[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: '📱',
    description: 'Common issues with mobile phones and tablets',
    problems: [
      {
        id: 'battery-drain',
        title: 'Battery Draining Too Fast',
        description: 'Phone battery depleting quicker than usual',
        difficulty: 'Easy',
        estimatedTime: '10 mins'
      },
      {
        id: 'slow-performance',
        title: 'Slow Performance',
        description: 'Device running slower than normal',
        difficulty: 'Medium',
        estimatedTime: '15 mins'
      },
      {
        id: 'screen-issues',
        title: 'Screen Not Responding',
        description: 'Touchscreen unresponsive or glitching',
        difficulty: 'Hard',
        estimatedTime: '30 mins'
      }
    ]
  },
  {
    id: 'laptops',
    name: 'Laptops',
    icon: '💻',
    description: 'Solutions for laptop-related problems',
    problems: [
      {
        id: 'overheating',
        title: 'Overheating Issues',
        description: 'Laptop getting too hot during use',
        difficulty: 'Medium',
        estimatedTime: '20 mins'
      },
      {
        id: 'blue-screen',
        title: 'Blue Screen Error',
        description: 'System showing blue screen of death',
        difficulty: 'Hard',
        estimatedTime: '45 mins'
      },
      {
        id: 'wifi-issues',
        title: 'WiFi Connection Problems',
        description: 'Unable to connect to wireless networks',
        difficulty: 'Easy',
        estimatedTime: '15 mins'
      }
    ]
  },
  {
    id: 'printers',
    name: 'Printers',
    icon: '🖨️',
    description: 'Troubleshoot printer problems',
    problems: [
      {
        id: 'paper-jam',
        title: 'Paper Jam',
        description: 'Paper stuck inside printer',
        difficulty: 'Easy',
        estimatedTime: '10 mins'
      },
      {
        id: 'print-quality',
        title: 'Poor Print Quality',
        description: 'Prints are blurry or have streaks',
        difficulty: 'Medium',
        estimatedTime: '20 mins'
      },
      {
        id: 'offline',
        title: 'Printer Offline',
        description: 'Computer cannot detect printer',
        difficulty: 'Medium',
        estimatedTime: '25 mins'
      }
    ]
  }
];

export default function CategoriesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Device Categories
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Select your device type and find solutions to common problems
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div className="text-left">
                    <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedCategory === category.id && (
                <div className="border-t border-gray-200">
                  {category.problems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => setSelectedProblem(selectedProblem?.id === problem.id ? null : problem)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{problem.title}</h3>
                          <p className="text-gray-600">{problem.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                            problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {problem.difficulty}
                          </span>
                          <span className="text-sm text-gray-500">
                            ⏱️ {problem.estimatedTime}
                          </span>
                        </div>
                      </div>

                      {selectedProblem?.id === problem.id && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-md">
                          <h4 className="font-medium text-blue-900 mb-2">Solution Steps:</h4>
                          <div className="space-y-2">
                            {problem.difficulty === 'Easy' && (
                              <>
                                <p className="text-blue-800">1. Check basic settings first</p>
                                <p className="text-blue-800">2. Restart the device</p>
                                <p className="text-blue-800">3. Follow guided troubleshooting</p>
                              </>
                            )}
                            {problem.difficulty === 'Medium' && (
                              <>
                                <p className="text-blue-800">1. Run diagnostic tests</p>
                                <p className="text-blue-800">2. Check for software updates</p>
                                <p className="text-blue-800">3. Follow advanced troubleshooting</p>
                              </>
                            )}
                            {problem.difficulty === 'Hard' && (
                              <>
                                <p className="text-blue-800">1. Backup your data</p>
                                <p className="text-blue-800">2. Try system recovery options</p>
                                <p className="text-blue-800">3. Consider professional help</p>
                              </>
                            )}
                            <button
                              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Navigate to detailed solution page
                              }}
                            >
                              View Detailed Solution
                            </button>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 