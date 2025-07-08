"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';

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
  return (
    <section id="courses" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Explore our programs
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
          <CarouselContent className="-ml-4">
            {courses.map((course, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                           <Button size="sm" className="font-bold">More Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-4" />
          <CarouselNext className="hidden sm:flex right-4" />
        </Carousel>
      </div>
    </section>
  );
}
