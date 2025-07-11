
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/context/language-context";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    titleKey: "courseTitleDPP",
    slug: "diploma-in-pharmacy-practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: "2,500.00",
    hint: "student pharmacist smiling"
  },
  {
    titleKey: "courseTitleACP",
    slug: "advanced-community-pharmacy",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: "15,000.00",
    hint: "woman pharmacist teaching"
  },
  {
    titleKey: "examCourseCPP", // Re-using an existing key
    slug: "diploma-in-pharmacy-practice", // placeholder
    image: "https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-05-08%20at%2020.53.28_7d7e4eea.jpg",
    price: "1,500.00",
    hint: "pharmacist lab coat"
  },
   {
    titleKey: "bpharmTitle",
    slug: "advanced-community-pharmacy", // placeholder
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    price: "20,000.00",
    hint: "doctor with stethoscope"
  },
];

export default function CourseCatalog() {
  const { t } = useTranslation();

  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">{t('courseCatalogTitle')}</h1>
           <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-body">
            {t('courseCatalogSubtitle')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link href={`/courses/${course.slug}`} key={course.titleKey} className="block h-full group">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative aspect-square">
                    <Image
                      src={course.image}
                      alt={t(course.titleKey as any)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={course.hint}
                    />
                  </div>
                  <div className="p-4 bg-card border-t flex flex-col flex-grow">
                    <h3 className="font-headline font-bold text-base h-12 leading-tight">{t(course.titleKey as any)}</h3>
                    <div className="flex-grow" />
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-lg font-body text-primary">LKR {course.price}</p>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 transform -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
