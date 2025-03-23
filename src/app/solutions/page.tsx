'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Solution {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeToFix: string;
  views: number;
  likes: number;
  thumbnail: string;
}

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const solutions: Solution[] = [
    {
      id: '1',
      title: 'Fix Slow Computer Performance',
      description: 'Step-by-step guide to improve your computer\'s speed and performance.',
      category: 'Computers',
      difficulty: 'Easy',
      timeToFix: '30 mins',
      views: 15234,
      likes: 1289,
      thumbnail: '💻'
    },
    {
      id: '2',
      title: 'Repair Cracked Phone Screen',
      description: 'Professional guide to safely replace a damaged phone screen.',
      category: 'Smartphones',
      difficulty: 'Hard',
      timeToFix: '2 hours',
      views: 28456,
      likes: 2341,
      thumbnail: '📱'
    },
    {
      id: '3',
      title: 'Fix Printer Paper Jam',
      description: 'Quick solutions for common printer paper jam issues.',
      category: 'Printers',
      difficulty: 'Easy',
      timeToFix: '15 mins',
      views: 9876,
      likes: 876,
      thumbnail: '🖨️'
    },
    {
      id: '4',
      title: 'Laptop Battery Replacement',
      description: 'Guide to selecting and replacing your laptop battery.',
      category: 'Computers',
      difficulty: 'Medium',
      timeToFix: '1 hour',
      views: 12567,
      likes: 1023,
      thumbnail: '🔋'
    },
    {
      id: '5',
      title: 'Fix Phone Charging Issues',
      description: 'Troubleshoot and repair common phone charging problems.',
      category: 'Smartphones',
      difficulty: 'Medium',
      timeToFix: '45 mins',
      views: 19876,
      likes: 1654,
      thumbnail: '⚡'
    },
    {
      id: '6',
      title: 'Printer Network Setup',
      description: 'Connect your printer to WiFi and troubleshoot connection issues.',
      category: 'Printers',
      difficulty: 'Medium',
      timeToFix: '1 hour',
      views: 8765,
      likes: 743,
      thumbnail: '📶'
    }
  ];

  const categories = ['all', 'Computers', 'Smartphones', 'Printers'];
  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

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

  const filteredSolutions = solutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || solution.difficulty === selectedDifficulty;
    const matchesSearch = solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 gradient-text">
            Tech Solutions Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive collection of tech solutions and repair guides
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 glass">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="form-input"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Difficulty
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map(solution => (
            <div
              key={solution.id}
              className="modern-card hover-lift group"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {solution.thumbnail}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className={`badge ${getDifficultyColor(solution.difficulty)}`}>
                    {solution.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⏱️ {solution.timeToFix}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{solution.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{solution.likes.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full btn-primary">
                  View Solution
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSolutions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No solutions found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 