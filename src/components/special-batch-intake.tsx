
"use client";

import Image from 'next/image';
import { useTranslation } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpecialBatchIntake() {
  const { t } = useTranslation();

  const whoCanJoin = [
    'Pharmacy Assistant',
    'Medical Representative',
    'Nursing Assistant',
    'Care Giver',
    'Anyone who wants to learn about medicines'
  ];

  const whatYouWillLearn = [
    'Basics of Pharmacology',
    'Identifying medicines and their uses',
    'Reading and understanding prescriptions',
    'Assisting in dispensing drugs',
    'Pharmacy processes and procedures',
    'Storage and management of medicines',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden shadow-lg border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-300 group">
            <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary leading-tight">{t('specialIntakeTitle')}</h2>
                        <p className="mt-4 text-muted-foreground font-body leading-relaxed">{t('specialIntakeSubtitle')}</p>
                        
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h3 className="font-headline font-bold text-foreground mb-3">{t('whoCanJoinTitle')}</h3>
                                <ul className="space-y-2">
                                    {whoCanJoin.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-headline font-bold text-foreground mb-3">{t('whatWillYouLearnTitle')}</h3>
                                 <ul className="space-y-2">
                                    {whatYouWillLearn.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="font-bold">
                                <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('applyNow')}</a>
                            </Button>
                             <Button asChild size="lg" variant="outline">
                                <a href="https://pharmacollege.lk/courses/certificate-course-in-pharmacy-practice" target="_blank" rel="noopener noreferrer" className="group/button">
                                  {t('learnMore')}
                                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                         <Badge className="absolute top-4 right-4 z-10 bg-red-600 text-white border-red-600 text-sm py-1 px-3 animate-pulse">Trending</Badge>
                         <Image 
                            src="https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-09-20%20at%2010.56.49_69cedaa2.jpg"
                            alt="Special Batch Intake for Diploma in Pharmacy Practice"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
