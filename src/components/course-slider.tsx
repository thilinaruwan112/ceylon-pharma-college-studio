
"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const courses = [
  {
    title: "Pharmacy Practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: "2,500.00",
    hint: "student pharmacist smiling"
  },
  {
    title: "Pharmacy Practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: "10,000.00",
    hint: "woman pharmacist teaching"
  },
  {
    title: "Pharmacy Practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-05-08%20at%2020.53.28_7d7e4eea.jpg",
    price: "15,000.00",
    hint: "pharmacist lab coat"
  },
  {
    title: "Pharmaceuticals",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: "15,000.00",
    hint: "woman pharmacist glasses"
  },
  {
    title: "Pharmacist",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: "15,000.00",
    hint: "pharmacist working"
  },
    {
    title: "Advanced Pharmacy",
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
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                          data-ai-hint={course.hint}
                        />
                      </div>
                      <div className="p-4 bg-card border-t">
                        <div className="flex justify-between items-center mb-4 text-foreground">
                           <p className="font-bold text-lg font-body">LKR {course.price}</p>
                           <Users className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <Button className="w-full font-bold">MORE DETAILS</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
