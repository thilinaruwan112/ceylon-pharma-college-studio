"use client";

import { useTranslation } from '@/context/language-context';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PolicyPageProps {
  titleKey: string;
  contentKey: string;
}

export default function PolicyPageTemplate({ titleKey, contentKey }: PolicyPageProps) {
  const { t } = useTranslation();

  // The content from translation might have multiple paragraphs separated by newlines
  const contentParagraphs = t(contentKey as any).split('\n\n');

  return (
    <main className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 text-sm font-body mb-8 text-muted-foreground">
            <Link href="/" className="hover:text-primary">{t('home')}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{t(titleKey as any)}</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8">
            {t(titleKey as any)}
          </h1>
          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body space-y-6">
            {contentParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
