
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/context/language-context';

const HeroLogo = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center gap-3 mb-6 text-white">
            <div className="p-2 border-2 border-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                </svg>
            </div>
            <div className="text-left font-headline">
                <p className="text-xs tracking-widest">{t('heroLogoLine1')}</p>
                <p className="text-sm font-semibold tracking-wider">{t('heroLogoLine2')}</p>
            </div>
        </div>
    );
};

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src="https://www.pharmacollege.lk/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <HeroLogo />
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg tracking-wider leading-tight">
          {t('heroTitle1')}<br />{t('heroTitle2')}
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-bold w-48">
            <Link href="#contact">{t('heroApplyNow')}</Link>
          </Button>
          <Button asChild size="lg" variant="accent" className="font-bold w-48">
            <Link href="#">{t('heroStudentLogin')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
