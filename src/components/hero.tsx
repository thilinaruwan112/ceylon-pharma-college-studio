
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/context/language-context';
import Image from 'next/image';

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
