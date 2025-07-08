
"use client";

import Image from 'next/image';
import { useTranslation } from '@/context/language-context';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center px-4 md:px-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t('aboutTitle')}</h1>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              {t('aboutPara1')}
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              {t('aboutPara2')}
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="The modern facade of the Ceylon Pharma College building"
              fill
              className="object-cover"
              data-ai-hint="modern building"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
