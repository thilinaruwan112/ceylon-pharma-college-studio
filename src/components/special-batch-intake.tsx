
"use client";

import Image from 'next/image';
import { useTranslation } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function SpecialBatchIntake() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden shadow-lg border-primary border-2">
            <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t('specialIntakeTitle')}</h2>
                        <p className="mt-4 text-muted-foreground font-body leading-relaxed">{t('specialIntakeSubtitle')}</p>
                        <div className="mt-8 flex gap-4">
                            <Button asChild size="lg" className="font-bold">
                                <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('applyNow')}</a>
                            </Button>
                             <Button asChild size="lg" variant="outline">
                                <Link href="/courses/diploma-in-pharmacy-practice">{t('learnMore')}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                         <Image 
                            src="https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-09-20%20at%2010.56.49_69cedaa2.jpg"
                            alt="Special Batch Intake for Diploma in Pharmacy Practice"
                            fill
                            className="object-cover"
                            data-ai-hint="pharmacy students class"
                         />
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
