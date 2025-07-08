
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Progress } from '@/components/ui/progress';

export function PageProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Using a ref to track if it's the initial load or a route change
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Skip the first run on initial load
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    setIsVisible(true);
    setProgress(10);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 500);
    }, 1500);


    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[201]">
      <Progress value={progress} className="h-1 rounded-none bg-primary/20" />
    </div>
  );
}
