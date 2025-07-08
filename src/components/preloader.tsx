"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-700 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="animate-pulse">
        <Image
          src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
          alt="Ceylon Pharma College Logo"
          width={200}
          height={62}
          priority
          className="dark:brightness-0 dark:invert"
        />
      </div>
    </div>
  );
};

export default Preloader;
