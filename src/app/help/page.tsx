'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

interface Location {
  id: number;
  name: string;
  address: string;
  distance: string;
  specialties: string[];
  rating: number;
  openNow: boolean;
}

const mockLocations: Location[] = [
  {
    id: 1,
    name: "TechFix Express",
    address: "123 Main Street, Downtown",
    distance: "0.8 miles",
    specialties: ["Computers", "Smartphones", "Tablets"],
    rating: 4.5,
    openNow: true
  },
  {
    id: 2,
    name: "Mobile Repair Pro",
    address: "456 Tech Avenue",
    distance: "1.2 miles",
    specialties: ["Smartphones", "Laptops"],
    rating: 4.8,
    openNow: true
  },
  {
    id: 3,
    name: "Computer Care Center",
    address: "789 Digital Lane",
    distance: "1.5 miles",
    specialties: ["Desktop PCs", "Laptops", "Networking"],
    rating: 4.3,
    openNow: false
  }
];

export default function HelpPage() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [nearbyLocations, setNearbyLocations] = useState<Location[]>(mockLocations);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          // In a real app, we would make an API call here to get actual nearby locations
          setNearbyLocations(mockLocations);
        },
        (error) => {
          setLocationError('Unable to get your location. Showing general results instead.');
          setNearbyLocations(mockLocations);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser. Showing general results instead.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 gradient-text">
            Find Tech Support Near You
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get professional help from verified tech support centers in your area
          </p>
          {locationError && (
            <p className="mt-2 text-sm text-yellow-600">{locationError}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {nearbyLocations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{location.name}</h2>
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${location.openNow ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {location.openNow ? 'Open Now' : 'Closed'}
                </span>
              </div>
              
              <p className="text-gray-600 mb-2">{location.address}</p>
              <p className="text-blue-600 font-medium mb-4">{location.distance}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Specialties:</h3>
                <div className="flex flex-wrap gap-2">
                  {location.specialties.map((specialty, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${index < Math.floor(location.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{location.rating} / 5</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Need Immediate Assistance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Emergency Support</p>
                <p className="text-gray-600">1-800-TECH-HELP</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Live Chat</p>
                <button className="text-blue-600 hover:text-blue-800">Start Chat Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 