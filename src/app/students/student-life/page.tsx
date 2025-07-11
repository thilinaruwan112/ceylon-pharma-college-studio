
"use client";

import Image from 'next/image';
import { useTranslation } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Microscope, BookOpen, Dumbbell, Briefcase, Heart, Lightbulb, GraduationCap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const clubs = [
  {
    icon: GraduationCap,
    nameKey: 'clubName1',
    descKey: 'clubDesc1',
  },
  {
    icon: Dumbbell,
    nameKey: 'clubName2',
    descKey: 'clubDesc2',
  },
  {
    icon: Lightbulb,
    nameKey: 'clubName3',
    descKey: 'clubDesc3',
  },
];

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop',
    titleKey: 'facilityTitle1',
    descKey: 'facilityDesc1',
    hint: "modern library books"
  },
  {
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
    titleKey: 'facilityTitle2',
    descKey: 'facilityDesc2',
    hint: "science laboratory equipment"
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
    titleKey: 'facilityTitle3',
    descKey: 'facilityDesc3',
    hint: "students collaborating lounge"
  },
];

const supportServices = [
    { icon: Briefcase, titleKey: 'supportTitle1', descKey: 'supportDesc1' },
    { icon: Heart, titleKey: 'supportTitle2', descKey: 'supportDesc2' },
    { icon: Users, titleKey: 'supportTitle3', descKey: 'supportDesc3' },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", alt: "Students at graduation", hint: "students graduation" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", alt: "Students walking on campus", hint: "students campus" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", alt: "Students in a lecture hall", hint: "students lecture" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop", alt: "Students playing sports", hint: "students sports" },
];

export default function StudentLifePage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="relative h-96 bg-primary/10">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="A group of diverse students laughing and studying together"
          fill
          className="object-cover"
          data-ai-hint="diverse students studying"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold drop-shadow-lg">
              {t('studentLifeTitle')}
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md">
              {t('studentLifeSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('clubsTitle')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('clubsSubtitle')}</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {clubs.map((club) => (
              <Card key={club.nameKey} className="text-center bg-card/50">
                <CardContent className="p-8">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <club.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground">{t(club.nameKey as any)}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{t(club.descKey as any)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('facilitiesTitle')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('facilitiesSubtitle')}</p>
             <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <Card key={facility.titleKey} className="overflow-hidden group">
                 <div className="relative aspect-video">
                  <Image src={facility.image} alt={t(facility.titleKey as any)} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={facility.hint} />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{t(facility.titleKey as any)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{t(facility.descKey as any)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('supportTitle')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('supportSubtitle')}</p>
             <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service) => (
              <div key={service.titleKey} className="flex gap-6">
                <div className="p-3 bg-primary/10 rounded-full h-fit">
                    <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-foreground">{t(service.titleKey as any)}</h3>
                  <p className="text-muted-foreground mt-1">{t(service.descKey as any)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.hint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold">{t('joinCommunityTitle')}</h2>
          <p className="mt-2 max-w-xl mx-auto text-primary-foreground/90">
            {t('joinCommunitySubtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
                <Link href="/courses">{t('exploreCourses')}<ChevronRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">{t('contactUs')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
