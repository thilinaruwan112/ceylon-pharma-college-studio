"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { usePathname } from 'next/navigation';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 18);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(progressTimer);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="animate-pulse">
        <Image
          src="https://pharmacollege.lk/assets/images/logo.png"
          alt="Ceylon Pharma College Logo"
          width={200}
          height={62}
          priority
          className="dark:hidden"
        />
        <Image
          src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
          alt="Ceylon Pharma College Logo"
          width={200}
          height={62}
          priority
          className="hidden dark:block dark:brightness-0 dark:invert"
        />
      </div>
      <Progress value={progress} className="w-56 mt-4 h-2 bg-primary/20" />
    </div>
  );
};

export default Preloader;
