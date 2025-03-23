'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Solution {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeToFix: string;
  views: number;
  likes: number;
  thumbnail: string;
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryName = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  
  const solutions: Solution[] = [
    {
      id: '1',
      title: 'Fix Slow Computer Performance',
      description: 'Step-by-step guide to improve your computer\'s speed and performance.',
      difficulty: 'Easy',
      timeToFix: '30 mins',
      views: 15234,
      likes: 1289,
      thumbnail: '💻'
    },
    {
      id: '2',
      title: 'Laptop Battery Replacement',
      description: 'Guide to selecting and replacing your laptop battery.',
      difficulty: 'Medium',
      timeToFix: '1 hour',
      views: 12567,
      likes: 1023,
      thumbnail: '🔋'
    },
    {
      id: '3',
      title: 'Clean Computer Fans',
      description: 'Learn how to safely clean your computer fans to prevent overheating.',
      difficulty: 'Easy',
      timeToFix: '45 mins',
      views: 9876,
      likes: 876,
      thumbnail: '🌪️'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 gradient-text">
            {categoryName} Solutions
          </h1>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto font-medium">
            Browse our collection of solutions and guides for {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="modern-card text-center p-6 bg-white shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {solutions.length} Solutions
            </h3>
            <p className="text-blue-700 font-medium">
              Available guides and tutorials
            </p>
          </div>
          <div className="modern-card text-center p-6 bg-white shadow-lg">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Active Community
            </h3>
            <p className="text-blue-700 font-medium">
              Get help from experts
            </p>
          </div>
          <div className="modern-card text-center p-6 bg-white shadow-lg">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Verified Solutions
            </h3>
            <p className="text-blue-700 font-medium">
              Tested and approved by experts
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(solution => (
            <div
              key={solution.id}
              className="modern-card hover-lift group bg-white shadow-lg"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {solution.thumbnail}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-blue-700 mb-4 font-medium">
                  {solution.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className={`badge ${getDifficultyColor(solution.difficulty)} font-medium text-sm`}>
                    {solution.difficulty}
                  </span>
                  <span className="text-sm text-blue-700 font-medium">
                    ⏱️ {solution.timeToFix}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="font-medium">{solution.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-medium">{solution.likes.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full btn-primary text-lg font-medium">
                  View Solution
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {solutions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              No solutions found
            </h3>
            <p className="text-blue-700 font-medium">
              We're working on adding more solutions for this category
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 