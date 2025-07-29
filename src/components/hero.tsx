
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/context/language-context';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://www.pharmacollege.lk/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 h-full min-h-screen flex flex-col items-center justify-center text-center text-white container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Image
            src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
            alt="Ceylon Pharma College Logo"
            width={240}
            height={75}
            className="brightness-0 invert"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg tracking-wider leading-tight">
          {t('heroTitle1')}<br />{t('heroTitle2')}
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-bold w-48">
            <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('heroApplyNow')}</a>
          </Button>
          <Button asChild size="lg" variant="accent" className="font-bold w-48">
            <a href="https://lms.pharmacollge.lk" target="_blank" rel="noopener noreferrer">{t('heroStudentLogin')}</a>
          </Button>
        </div>
        
        <Link href="#courses" className="absolute bottom-10 animate-bounce bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors z-30">
          <ChevronDown className="h-6 w-6 text-white" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  );
}
