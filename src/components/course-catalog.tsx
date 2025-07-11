
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/context/language-context";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ListFilter } from "lucide-react";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const allCourses = [
  {
    titleKey: "courseTitleDPP",
    slug: "diploma-in-pharmacy-practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0005/WhatsApp%20Image%202025-05-08%20at%2020.53.25_ef00d792.jpg",
    price: 2500,
    hint: "student pharmacist smiling",
    category: "Diploma"
  },
  {
    titleKey: "courseTitleACP",
    slug: "advanced-community-pharmacy",
    image: "https://content-provider.pharmacollege.lk/courses/CS0004/WhatsApp%20Image%202025-05-08%20at%2020.53.31_a805e94a.jpg",
    price: 15000,
    hint: "woman pharmacist teaching",
    category: "Advanced"
  },
  {
    titleKey: "examCourseCPP",
    slug: "diploma-in-pharmacy-practice",
    image: "https://content-provider.pharmacollege.lk/courses/CS0001/WhatsApp%20Image%202025-05-08%20at%2020.53.28_7d7e4eea.jpg",
    price: 1500,
    hint: "pharmacist lab coat",
    category: "Certificate"
  },
   {
    titleKey: "bpharmTitle",
    slug: "advanced-community-pharmacy",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    price: 20000,
    hint: "doctor with stethoscope",
    category: "Degree"
  },
];

const courseCategories = [
    { id: 'Diploma', label: 'Diploma' },
    { id: 'Advanced', label: 'Advanced' },
    { id: 'Certificate', label: 'Certificate' },
    { id: 'Degree', label: 'Degree' },
];

const maxPrice = Math.max(...allCourses.map(c => c.price));

export default function CourseCatalog() {
  const { t } = useTranslation();
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  useEffect(() => {
    let courses = allCourses;

    if (selectedCategories.length > 0) {
      courses = courses.filter(course => selectedCategories.includes(course.category));
    }

    courses = courses.filter(course => course.price >= priceRange[0] && course.price <= priceRange[1]);
    
    setFilteredCourses(courses);
  }, [selectedCategories, priceRange]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const FilterSidebar = () => (
     <aside className="w-full lg:w-72 lg:flex-shrink-0">
        <Card>
            <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold mb-4">{t('filterTitle')}</h3>
                <Accordion type="multiple" defaultValue={['category', 'price']}>
                    <AccordionItem value="category">
                        <AccordionTrigger className="font-semibold">{t('filterCategory')}</AccordionTrigger>
                        <AccordionContent>
                           <div className="space-y-3">
                                {courseCategories.map((category) => (
                                    <div key={category.id} className="flex items-center space-x-2">
                                        <Checkbox 
                                            id={category.id}
                                            checked={selectedCategories.includes(category.id)}
                                            onCheckedChange={() => handleCategoryChange(category.id)}
                                        />
                                        <Label htmlFor={category.id} className="font-normal cursor-pointer">{category.label}</Label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="price" className="border-b-0">
                        <AccordionTrigger className="font-semibold">{t('filterPriceRange')}</AccordionTrigger>
                        <AccordionContent>
                            <div className="mt-4">
                                <Slider
                                    defaultValue={[maxPrice]}
                                    min={0}
                                    max={maxPrice}
                                    step={500}
                                    onValueCommit={(value) => setPriceRange([0, value[0]])}
                                />
                                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                                    <span>LKR 0</span>
                                    <span>LKR {priceRange[1].toLocaleString()}</span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    </aside>
  );

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
        
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block">
                <FilterSidebar />
            </div>

             {/* Mobile Filters */}
            <div className="lg:hidden mb-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                            <ListFilter className="mr-2 h-4 w-4" />
                            {t('filterTitle')}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs">
                        <FilterSidebar />
                    </SheetContent>
                </Sheet>
            </div>
            
            <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <Link href={`/courses/${course.slug}`} key={course.titleKey} className="block h-full group">
                        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                          <CardContent className="p-0 flex flex-col flex-grow">
                            <div className="relative aspect-video">
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
                                <p className="font-bold text-lg font-body text-primary">LKR {course.price.toLocaleString()}</p>
                                <ArrowRight className="h-5 w-5 text-primary opacity-0 transform -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <p className="text-lg font-semibold text-foreground">{t('noCoursesFoundTitle')}</p>
                      <p className="text-muted-foreground mt-2">{t('noCoursesFoundSubtitle')}</p>
                    </div>
                  )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
