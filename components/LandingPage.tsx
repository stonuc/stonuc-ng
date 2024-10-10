'use client';

import { useState, useEffect } from 'react';
import BackgroundImage from './shared/BackgroundImage';
import TypingText from './shared/TypingText';
import Navbar from './Navbar'; 



export default function LandingPage() {
  const imageUrls = ['/background1.jpg', '/background2.jpg'];

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <BackgroundImage images={imageUrls} />

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        {/* Use Navbar component */}
        <Navbar />

        <main className="flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Software Consulting and Development</h1>
          <div className="text-2xl md:text-3xl md:gap-3">
            <span>We </span>
            <div className="block border min-h-9 min-w-44 px-2">
              <TypingText texts={["Documents", "Applications", "Platforms"]} />
            </div>
            <span> project success</span>
          </div>
        </main>
      </div>
    </div>
  );
}
