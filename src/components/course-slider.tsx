
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

const courses = [
  {
    title: "Diploma in Pharmacy Practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: "2,500.00",
    hint: "student pharmacist smiling"
  },
  {
    title: "Advanced Community Pharmacy",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: "10,000.00",
    hint: "woman pharmacist teaching"
  },
  {
    title: "Pharmaceutical Compounding",
    image: "https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-05-08%20at%2020.53.28_7d7e4eea.jpg",
    price: "15,000.00",
    hint: "pharmacist lab coat"
  },
  {
    title: "Clinical Pharmacology",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: "15,000.00",
    hint: "woman pharmacist glasses"
  },
  {
    title: "Hospital Pharmacy Management",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: "15,000.00",
    hint: "pharmacist working"
  },
    {
    title: "Advanced Pharmacy Degree",
    image: "https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-05-08%20at%2020.53.28_7d7e4eea.jpg",
    price: "20,000.00",
    hint: "pharmacist smiling"
  },
];

export default function CourseSlider() {
  const { t } = useTranslation();
  return (
    <section id="courses" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            {t('courseSliderTitle')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2" />
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {courses.map((course, index) => (
              <CarouselItem key={index} className="pl-2 basis-3/4 md:basis-[43.5%] lg:basis-[30.3%] xl:basis-[23.25%]">
                <Link href="#" className="block h-full group">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <div className="relative aspect-square">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={course.hint}
                          />
                        </div>
                        <div className="p-4 bg-card border-t flex flex-col flex-grow">
                          <h3 className="font-headline font-bold text-base h-12 leading-tight">{course.title}</h3>
                          <div className="flex-grow" />
                          <div className="flex justify-between items-center mt-4">
                            <p className="font-bold text-lg font-body text-primary">LKR {course.price}</p>
                            <ArrowRight className="h-5 w-5 text-primary opacity-0 transform -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
