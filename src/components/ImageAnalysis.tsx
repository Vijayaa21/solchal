'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface AnalysisResult {
  deviceType: string;
  probableProblem: string;
  confidence: number;
  suggestedSolution: string;
  steps: string[];
  severity: 'low' | 'medium' | 'high';
  estimatedTime: string;
  requiredTools: string[];
}

export default function ImageAnalysis() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      analyzeImage(file);
    };
    reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    
    // Simulated analysis - in a real app, this would call an AI service
    setTimeout(() => {
      setAnalysisResult({
        deviceType: 'Smartphone',
        probableProblem: 'Screen Damage',
        confidence: 89,
        suggestedSolution: 'The image shows signs of physical screen damage. This might require professional repair or screen replacement.',
        steps: [
          'Power off the device',
          'Back up your data if possible',
          'Remove any screen protector',
          'Assess the extent of damage',
          'Contact authorized repair center'
        ],
        severity: 'high',
        estimatedTime: '1-2 hours',
        requiredTools: ['Backup device', 'Screen replacement kit', 'Professional tools']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 gradient-text">AI-Powered Image Analysis</h2>
        <p className="text-gray-600">Upload a photo of your device issue for instant diagnosis</p>
      </div>

      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragging ? 'border-blue-500 bg-blue-50/50' : 'border-gray-300'
        } ${!selectedImage ? 'cursor-pointer hover:border-blue-400 hover:bg-gray-50' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !selectedImage && fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileSelect}
          />

          {!selectedImage ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-blue-100 rounded-full">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">Drag and drop your image here</p>
              <p className="text-sm text-gray-500 mt-1">or</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                className="btn-secondary mt-2"
                >
                  Choose File
                </button>
            </div>
            <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          ) : (
            <div className="relative">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected device"
                fill
                className="object-contain"
              />
            </div>
              <button
              onClick={() => {
                  setSelectedImage(null);
                  setAnalysisResult(null);
                }}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>

      {isAnalyzing && (
        <div className="mt-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-600">Analyzing your image...</p>
            <p className="text-sm text-gray-500">This may take a few moments</p>
          </div>
        </div>
      )}

      {analysisResult && (
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white">Analysis Results</h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Device Type</div>
                  <div className="font-medium text-gray-900">{analysisResult.deviceType}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Detected Problem</div>
                  <div className="font-medium text-gray-900">{analysisResult.probableProblem}</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Confidence</div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${analysisResult.confidence}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-900">
                      {analysisResult.confidence}%
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Severity</div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(analysisResult.severity)}`}>
                    {analysisResult.severity.charAt(0).toUpperCase() + analysisResult.severity.slice(1)}
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Estimated Time</div>
                  <div className="font-medium text-gray-900">{analysisResult.estimatedTime}</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Required Tools</div>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.requiredTools.map((tool, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-500 mb-2">Solution Steps</div>
              <div className="space-y-3">
                {analysisResult.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium group-hover:bg-blue-200 transition-colors">
                      {index + 1}
                    </div>
                    <p className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="flex-1 btn-primary">
                View Detailed Solution
              </button>
              <button className="flex-1 btn-secondary">
                Find Repair Center
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 