'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ImageAnalysis from '@/components/ImageAnalysis';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text">
              Smart Tech Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Upload a photo or describe your tech problem, and get instant solutions powered by AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-lg px-8 py-3">
                Get Started
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Learn More
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="modern-card hover-lift">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Take a Photo</h3>
            <p className="text-gray-600">Use your camera to capture the problem for instant analysis</p>
          </div>

          <div className="modern-card hover-lift">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Diagnosis</h3>
            <p className="text-gray-600">Get smart analysis and recommendations for your tech issues</p>
          </div>

          <div className="modern-card hover-lift">
            <div className="text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Help</h3>
            <p className="text-gray-600">Connect with certified technicians for complex issues</p>
          </div>
        </div>

        {/* Image Analysis Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 glass">
          <ImageAnalysis />
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 gradient-text">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find solutions for specific devices and common problems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smartphones & Tablets',
                icon: '📱',
                count: '2,345',
                solutions: '150+',
                link: '/categories#smartphones'
              },
              {
                title: 'Computers & Laptops',
                icon: '💻',
                count: '3,121',
                solutions: '200+',
                link: '/categories#laptops'
              },
              {
                title: 'Printers & Scanners',
                icon: '🖨️',
                count: '1,432',
                solutions: '80+',
                link: '/categories#printers'
              }
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="modern-card hover-lift group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{category.count} Solutions</span>
                  <span>{category.solutions} Articles</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white glass">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Tech Community</h2>
            <p className="text-blue-900 max-w-2xl mx-auto font-medium">
              Share your experiences, help others, and learn from tech experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl text-blue-800 font-bold mb-2 animate-pulse">50K+</div>
              <div className="text-blue-900">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-800 font-bold mb-2 animate-pulse">100K+</div>
              <div className="text-blue-900">Solutions Shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-800 font-bold mb-2 animate-pulse">95%</div>
              <div className="text-blue-900">Success Rate</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary text-lg px-8 py-3">
              Join Community
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 