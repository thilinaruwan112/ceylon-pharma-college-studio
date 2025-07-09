
"use client";

import Image from 'next/image';
import { useTranslation } from '@/context/language-context';
import WhyChooseUs from '@/components/why-choose-us';
import Accreditations from '@/components/accreditations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BookOpen, Target, Heart, Lightbulb, Users, CheckCircle } from 'lucide-react';

const leadership = [
  {
    name: "Dr. Anura Perera",
    titleKey: "leadershipTitle1",
    image: "https://placehold.co/150x150.png",
    fallback: "AP",
    hint: "male director"
  },
  {
    name: "Prof. Sunitha Silva",
    titleKey: "leadershipTitle2",
    image: "https://placehold.co/150x150.png",
    fallback: "SS",
    hint: "female academic head"
  },
  {
    name: "Mr. Roshan Fernando",
    titleKey: "leadershipTitle3",
    image: "https://placehold.co/150x150.png",
    fallback: "RF",
    hint: "male operations manager"
  },
];

const coreValues = [
    { icon: BookOpen, titleKey: "coreValueTitle1", descKey: "coreValueDesc1" },
    { icon: Target, titleKey: "coreValueTitle2", descKey: "coreValueDesc2" },
    { icon: Heart, titleKey: "coreValueTitle3", descKey: "coreValueDesc3" },
    { icon: Lightbulb, titleKey: "coreValueTitle4", descKey: "coreValueDesc4" },
    { icon: Users, titleKey: "coreValueTitle5", descKey: "coreValueDesc5" },
];

const historyMilestones = [
  { year: "2002", eventKey: "historyEvent1" },
  { year: "2010", eventKey: "historyEvent2" },
  { year: "2015", eventKey: "historyEvent3" },
  { year: "2020", eventKey: "historyEvent4" },
  { year: "2023", eventKey: "historyEvent5" },
];


export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center px-4 md:px-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t('aboutTitle')}</h1>
             <div className="w-24 h-1 bg-primary mt-2 mb-4" />
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              {t('aboutPara1')}
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              {t('aboutPara2')}
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
              alt="The modern facade of the Ceylon Pharma College building"
              fill
              className="object-cover"
              data-ai-hint="modern building students"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                      <CardHeader className="flex-row items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <Target className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="font-headline text-2xl text-foreground">{t('visionTitle')}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground font-body">{t('visionText')}</p>
                      </CardContent>
                  </Card>
                   <Card>
                      <CardHeader className="flex-row items-center gap-4">
                           <div className="p-3 bg-primary/10 rounded-full">
                            <BookOpen className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="font-headline text-2xl text-foreground">{t('missionTitle')}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground font-body">{t('missionText')}</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>
      
       <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('historyTitle')}</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('historySubtitle')}</p>
                 <div className="w-24 h-1 bg-primary mx-auto mt-4" />
            </div>
            <div className="relative mt-12">
                 <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                 {historyMilestones.map((item, index) => (
                    <div key={item.year} className={`relative md:w-1/2 mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" style={index % 2 === 0 ? { left: '-8px' } : { right: '-8px' }}></div>
                         <Card className="shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-headline text-xl font-bold text-primary">{item.year}</h3>
                                <p className="mt-2 text-muted-foreground">{t(item.eventKey as any)}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('coreValuesTitle')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('coreValuesSubtitle')}</p>
             <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value) => (
              <div key={value.titleKey} className="text-center">
                 <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline font-semibold text-lg text-foreground">{t(value.titleKey as any)}</h3>
                <p className="text-muted-foreground text-sm mt-1">{t(value.descKey as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('leadershipTitle')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('leadershipSubtitle')}</p>
             <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader) => (
              <Card key={leader.name} className="text-center border-0 shadow-none">
                <CardContent className="p-6">
                  <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={leader.image} alt={leader.name} data-ai-hint={leader.hint}/>
                    <AvatarFallback>{leader.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline font-bold text-xl text-foreground">{leader.name}</h3>
                  <p className="text-primary font-medium">{t(leader.titleKey as any)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Accreditations />
    </main>
  );
}
