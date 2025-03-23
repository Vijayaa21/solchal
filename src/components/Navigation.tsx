'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">Tech</span>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">Learn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium animated-underline"
            >
              Categories
            </Link>
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium animated-underline"
            >
              Solutions
            </Link>
            <Link
              href="/help"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium animated-underline"
            >
              Help Center
            </Link>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
          <Link
            href="/categories"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/solutions"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/help"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Help Center
          </Link>
          <button className="w-full btn-primary mt-2" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
} 