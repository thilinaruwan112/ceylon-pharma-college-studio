"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This effect runs only once on initial load
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setLoading(false), 500); // fade out animation
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => {
      clearInterval(progressTimer);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[200] transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Progress value={progress} className="h-1 w-full rounded-none bg-primary/20" />
    </div>
  );
};

export default Preloader;
