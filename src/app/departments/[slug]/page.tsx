
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Mail, Phone, BookOpen, Users, Building } from "lucide-react";
import { useTranslation } from "@/context/language-context";

const departmentsData: any = {
  pharmaceutical: {
    nameKey: "deptNamePharmaceutical",
    descriptionKey: "deptDescPharmaceutical",
    image: "https://images.unsplash.com/photo-1584982239339-59b7b85c57e2?q=80&w=2070&auto=format&fit=crop",
    programs: [
      { nameKey: "courseTitleDPP", slug: "diploma-in-pharmacy-practice" },
      { nameKey: "courseTitleACP", slug: "advanced-community-pharmacy" },
    ],
    faculty: [
      {
        name: "Dr. Anura Perera",
        titleKey: "facultyTitleHOD",
        image: "https://placehold.co/100x100.png",
        hint: "male professor"
      },
      {
        name: "Prof. Sunitha Silva",
        titleKey: "facultyTitleSeniorLecturer",
        image: "https://placehold.co/100x100.png",
        hint: "female professor"
      },
    ],
    contact: {
      email: "pharma@ceylonpharma.lk",
      phone: "+94 11 222 3333",
    },
  },
  english: {
    nameKey: "deptNameEnglish",
    descriptionKey: "deptDescEnglish",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop",
    programs: [
      { nameKey: "programNameEnglishProf", slug: "#" },
      { nameKey: "programNameEnglishBusiness", slug: "#" },
    ],
    faculty: [
      {
        name: "Ms. Fiona Richards",
        titleKey: "facultyTitleHOD",
        image: "https://placehold.co/100x100.png",
        hint: "female teacher"
      },
      {
        name: "Mr. David Chen",
        titleKey: "facultyTitleLecturer",
        image: "https://placehold.co/100x100.png",
        hint: "male teacher"
      },
    ],
    contact: {
      email: "english@ceylonpharma.lk",
      phone: "+94 11 444 5555",
    },
  },
  ict: {
    nameKey: "deptNameIct",
    descriptionKey: "deptDescIct",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    programs: [
      { nameKey: "programNameIctDip", slug: "#" },
      { nameKey: "programNameIctWeb", slug: "#" },
    ],
    faculty: [
      {
        name: "Mr. Roshan Fernando",
        titleKey: "facultyTitleHOD",
        image: "https://placehold.co/100x100.png",
        hint: "male professional"
      },
      {
        name: "Ms. Shalini Gupta",
        titleKey: "facultyTitleInstructor",
        image: "https://placehold.co/100x100.png",
        hint: "female professional"
      },
    ],
    contact: {
      email: "ict@ceylonpharma.lk",
      phone: "+94 11 666 7777",
    },
  },
};

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const department = departmentsData[params.slug];

  if (!department) {
    notFound();
  }

  return (
    <div>
      <section className="relative py-24 md:py-32 bg-primary/10">
         <div className="absolute inset-0 overflow-hidden">
            <Image 
                src={department.image} 
                alt={t(department.nameKey as any)} 
                fill 
                className="object-cover" 
                data-ai-hint="department background"
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex items-center gap-2 text-sm font-body mb-4 text-white">
                <Link href="/" className="hover:underline">{t('home')}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="opacity-80">{t(department.nameKey as any)}</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
            {t('deptPageTitle', { deptName: t(department.nameKey as any) })}
          </h1>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <main className="lg:col-span-2 space-y-16">
                    {/* About Section */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('deptPageAbout')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed">{t(department.descriptionKey as any)}</p>
                    </div>

                    {/* Programs Section */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('deptPagePrograms')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {department.programs.map((program: any) => (
                                <Link href={program.slug.startsWith('#') ? '#' : `/courses/${program.slug}`} key={program.slug}>
                                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                      <CardHeader>
                                          <CardTitle className="font-headline text-lg">{t(program.nameKey)}</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                          <p className="text-sm text-primary font-semibold flex items-center gap-2">
                                              {t('deptPageViewProgram')} <ChevronRight className="h-4 w-4" />
                                          </p>
                                      </CardContent>
                                  </Card>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Faculty Section */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('deptPageFaculty')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {department.faculty.map((member: any) => (
                                <Card key={member.name} className="text-center">
                                    <CardContent className="p-6">
                                        <Avatar className="h-24 w-24 mx-auto mb-4">
                                            <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                                            <AvatarFallback>{member.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="font-headline font-semibold text-foreground">{member.name}</h3>
                                        <p className="text-sm text-primary">{t(member.titleKey)}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>
                <aside className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">{t('deptPageContact')}</CardTitle>
                                <CardDescription>{t('deptPageContactDesc')}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">{t('footerPhone')}</h4>
                                        <a href={`tel:${department.contact.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary">{department.contact.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">{t('footerEmail')}</h4>
                                        <a href={`mailto:${department.contact.email}`} className="text-muted-foreground hover:text-primary">{department.contact.email}</a>
                                    </div>
                                </div>
                                <Button asChild className="w-full mt-4">
                                    <Link href="/contact">{t('contactUs')}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </aside>
            </div>
        </div>
      </section>
    </div>
  );
}
