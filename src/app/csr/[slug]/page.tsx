
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Users, Heart, Award } from "lucide-react";

const projectsData: any = {
  'health-checkup-camp': {
    titleKey: 'csrProjectTitle1',
    descriptionKey: 'csrProjectDetailDesc1',
    date: '2023-10-15',
    image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=2071&auto=format&fit=crop",
    stats: [
      { value: '250+', labelKey: 'csrStatLabel1', icon: Users },
      { value: '50+', labelKey: 'csrStatLabel2', icon: Heart },
      { value: '15+', labelKey: 'csrStatLabel3', icon: Award },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop", alt: "Doctor checking a patient's blood pressure", hint: "doctor patient" },
      { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", alt: "A group of volunteers smiling", hint: "medical volunteers" },
      { src: "https://images.unsplash.com/photo-1582719478212-c857e57693a2?q=80&w=2070&auto=format&fit=crop", alt: "Free medicines being distributed", hint: "medicine distribution" },
    ],
  },
   'blood-donation-drive': {
    titleKey: 'csrProjectTitle2',
    descriptionKey: 'csrProjectDetailDesc2',
    date: '2023-11-20',
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    stats: [
        { value: '120+', labelKey: 'csrStatLabel4', icon: Users },
        { value: '80+', labelKey: 'csrStatLabel5', icon: Heart },
        { value: '100%', labelKey: 'csrStatLabel6', icon: Award },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1615461065624-21b562ee8357?q=80&w=1974&auto=format&fit=crop", alt: "A person donating blood", hint: "blood donation" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", alt: "Students waiting in line to donate", hint: "students waiting" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", alt: "Volunteers helping with the event", hint: "event volunteers" },
    ],
  },
  'tree-planting-campaign': {
    titleKey: 'csrProjectTitle3',
    descriptionKey: 'csrProjectDetailDesc3',
    date: '2024-01-05',
    image: "https://images.unsplash.com/photo-1627843563931-a28a255f0564?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: '500+', labelKey: 'csrStatLabel7', icon: Users },
      { value: '100+', labelKey: 'csrStatLabel8', icon: Heart },
      { value: '5 acres', labelKey: 'csrStatLabel9', icon: Award },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1512428209355-e83fa414f255?q=80&w=1974&auto=format&fit=crop", alt: "Students planting saplings", hint: "students planting" },
      { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop", alt: "A close-up of a new sapling", hint: "sapling" },
      { src: "https://images.unsplash.com/photo-1423242029402-3bf481239268?q=80&w=2070&auto=format&fit=crop", alt: "Group photo of the participants", hint: "group photo" },
    ],
  }
};

export default function CsrProjectPage({ params }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main>
        <section className="relative py-32 md:py-48 bg-primary/10">
            <div className="absolute inset-0 overflow-hidden">
                <Image 
                    src={project.image} 
                    alt={t(project.titleKey as any)} 
                    fill 
                    className="object-cover" 
                    data-ai-hint="csr project background"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative text-white">
                <div className="flex items-center gap-2 text-sm font-body mb-4">
                    <Link href="/" className="hover:underline">{t('home')}</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/csr" className="hover:underline">{t('csrProjects')}</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="opacity-80">{t(project.titleKey as any)}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold drop-shadow-lg">
                    {t(project.titleKey as any)}
                </h1>
                <p className="mt-2 text-lg text-primary-foreground/90">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('csrProjectAboutTitle')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed">{t(project.descriptionKey as any)}</p>
                    </div>
                     <aside>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-headline font-bold text-xl mb-4 text-foreground">{t('csrProjectImpactTitle')}</h3>
                                <div className="space-y-4">
                                {project.stats.map((stat: any) => (
                                    <div key={stat.labelKey} className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <stat.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold font-headline text-primary">{stat.value}</p>
                                            <p className="text-sm text-muted-foreground">{t(stat.labelKey as any)}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('csrProjectGalleryTitle')}</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">{t('csrProjectGallerySubtitle')}</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4" />
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.gallery.map((image: any, index: number) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden group shadow-md">
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
              <h2 className="text-3xl font-headline font-bold">{t('csrPartnerTitle')}</h2>
              <p className="mt-2 max-w-xl mx-auto text-primary-foreground/90">
                {t('csrPartnerSubtitle')}
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">{t('contactUs')}</Link>
                </Button>
              </div>
            </div>
        </section>

    </main>
  );
}
