
"use client";

import { useTranslation } from '@/context/language-context';

export default function StudentLifePage() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 md:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">
        {t('studentLife')}
      </h1>
      <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-2xl">
        This is the student life page. Content will be added here soon.
      </p>
    </main>
  );
}
