'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  problemCount: number;
  color: string;
}

export default function CategoriesPage() {
  const categories: Category[] = [
    {
      id: 'computers',
      name: 'Computers',
      icon: '💻',
      description: 'Solutions for desktop and laptop computers',
      problemCount: 45,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'smartphones',
      name: 'Smartphones',
      icon: '📱',
      description: 'Mobile device troubleshooting and repairs',
      problemCount: 38,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'printers',
      name: 'Printers',
      icon: '🖨️',
      description: 'Printer setup and maintenance guides',
      problemCount: 25,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'networking',
      name: 'Networking',
      icon: '🌐',
      description: 'Network setup and connectivity issues',
      problemCount: 32,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'software',
      name: 'Software',
      icon: '💾',
      description: 'Software installation and troubleshooting',
      problemCount: 28,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'security',
      name: 'Security',
      icon: '🔒',
      description: 'Security setup and protection guides',
      problemCount: 20,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 gradient-text">
            Tech Categories
          </h1>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto font-medium">
            Browse solutions by category and find the help you need
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="group"
            >
              <div className="modern-card hover-lift bg-white shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <span className="badge bg-blue-100 text-blue-800 font-medium">
                      {category.problemCount} Solutions
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-blue-700 font-medium mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>View Solutions</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              No categories found
            </h3>
            <p className="text-blue-700 font-medium">
              We're working on adding more categories
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 