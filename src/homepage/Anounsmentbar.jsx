"use client";
import React from 'react';

export function Anounsmentbar() {
  return (
    <div className="w-full font-sans">
      {/* Outer Container with exact background color and top border from image */}
      <div 
        className="w-full flex items-center justify-center py-4 px-6 border-t-[3px]"
        style={{ 
          backgroundColor: '#0e4b5a', 
          borderColor: '#2b2031' 
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
          {/* Main Title Text */}
          <span className="text-white font-bold tracking-tight">
            Your AI Team for Shopify
          </span>

          {/* Call to Action Link */}
          <a 
            href="#" 
            className="flex items-center gap-1 font-medium transition-opacity hover:opacity-80"
            style={{ color: '#00d1e0' }}
          >
            <span>See what's new!</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}