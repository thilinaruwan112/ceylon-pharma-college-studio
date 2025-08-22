
"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Laptop,
  Library,
  Target,
  UserCheck,
  FileText,
  Video,
  Book,
  FileQuestion,
  Loader2,
} from "lucide-react";

import { useTranslation } from "@/context/language-context";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Course {
  id: string;
  course_name: string;
  course_code: string;
  course_fee: string;
  course_img: string;
  slug: string;
  course_description: string;
  course_duration: string;
  skill_level: string;
  assessments: string;
  quizzes: string;
}

const keyFeatures = [
    { icon: Library, title: "keyFeatureTitle1", description: "keyFeatureDesc1" },
    { icon: UserCheck, title: "keyFeatureTitle2", description: "keyFeatureDesc2" },
    { icon: Target, title: "keyFeatureTitle3", description: "keyFeatureDesc3" },
];

const certificationRequirements = [
    "certReq1",
    "certReq2",
    "certReq3",
    "certReq4",
];


export default function CoursePage({ params }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourseData() {
      try {
        setLoading(true);
        const response = await fetch('https://qa-api.pharmacollege.lk/parent-main-course');
        const courses: Course[] = await response.json();
        const currentCourse = courses.find(c => c.slug === params.slug);
        if (currentCourse) {
          setCourse(currentCourse);
        } else {
          notFound();
        }
      } catch (error) {
        console.error("Failed to fetch course:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchCourseData();
  }, [params.slug]);


  if (loading) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-16">
            <Skeleton className="h-12 w-1/3 mb-4" />
            <Skeleton className="h-8 w-2/3 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Skeleton className="h-64 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
                <div className="lg:col-span-1">
                    <Skeleton className="h-96 w-full" />
                </div>
            </div>
        </div>
    )
  }

  if (!course) {
    notFound();
  }
  
  const NumberedCircle = ({ number }: { number: number }) => (
    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="font-bold text-primary text-sm">{number}</span>
    </div>
  );

  const cleanDescription = course.course_description.replace(/style="[^"]*"/g, '');

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm font-body mb-4">
                <Link href="/" className="hover:underline">{t('home')}</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/courses" className="hover:underline">{t('courses')}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="opacity-80">{course.course_name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{course.course_name}</h1>
            <p className="mt-2 text-lg text-primary-foreground/90 max-w-3xl">{t('coursePageSubtitle')}</p>
             <div className="mt-6 flex gap-4">
                <Button asChild size="lg" variant="secondary" className="font-bold">
                    <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('enrollNow')}</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold">{t('downloadSyllabus')}</Button>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                <main className="lg:col-span-2 space-y-16">
                    {/* Overview Section */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{course.course_name}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground font-body" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {keyFeatures.map((feature, index) => (
                                <Card key={index} className="bg-card/50">
                                    <CardContent className="p-6 text-center">
                                        <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                                            <feature.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-headline font-semibold text-foreground">{t(feature.title as any)}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{t(feature.description as any)}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    
                     {/* Assessment Method */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('assessmentMethod')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed mb-8">{t('assessmentMethodDesc')}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <Card className="bg-card/50 text-center">
                                <CardContent className="p-6">
                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <span className="font-headline font-bold text-primary text-2xl">{course.assessments}</span>
                                    </div>
                                    <h3 className="font-headline font-semibold text-foreground">{t('assessmentMethodTitle1')}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{t('assessmentMethodDesc1')}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50 text-center">
                                <CardContent className="p-6">
                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <span className="font-headline font-bold text-primary text-2xl">{course.quizzes}</span>
                                    </div>
                                    <h3 className="font-headline font-semibold text-foreground">{t('assessmentMethodTitle2')}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{t('assessmentMethodDesc2')}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Certification */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('certification')}</h2>
                         <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <p className="text-muted-foreground font-body leading-relaxed mb-6">{t('certificationDesc')}</p>
                                <ul className="space-y-3">
                                    {certificationRequirements.map((req, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-foreground">{t(req as any)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="border-2 border-primary rounded-lg p-6 text-center w-64">
                                    <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-3" />
                                    <p className="font-headline font-bold text-foreground">{t('certificate')}</p>
                                    <p className="text-sm text-muted-foreground">{course.course_name}</p>
                                    <div className="my-3 border-t-2 border-dashed"></div>
                                    <p className="text-xs text-muted-foreground">Recognized Internationally</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card>
                            <CardHeader className="p-0 overflow-hidden">
                                <div className="relative aspect-video">
                                     <Image 
                                        src={`https://content-provider.pharmacollege.lk/courses/${course.course_code}/${course.course_img}`}
                                        alt={course.course_name}
                                        fill 
                                        className="object-cover" 
                                        data-ai-hint="student pharmacist" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-3xl font-headline font-bold text-primary">LKR {parseFloat(course.course_fee).toLocaleString()}</p>
                                    <Badge variant="secondary">{t('limitedSeats')}</Badge>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span><span className="font-semibold text-foreground">{t('duration')}:</span> {course.course_duration} Months</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        <span><span className="font-semibold text-foreground">{t('level')}:</span> {course.skill_level}</span>
                                    </div>
                                </div>
                                
                                <Button asChild className="w-full mt-6 font-bold text-lg" size="lg">
                                  <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('enrollNow')}</a>
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-2">{t('enrollNowSubtext')}</p>
                            </CardContent>
                        </Card>
                    </div>
                </aside>
            </div>
        </div>
      </section>
      
      {/* How to Enroll */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-headline font-bold">{t('howToEnroll')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="p-4 bg-primary-foreground/10 rounded-full inline-block mb-3">
                        <FileText className="w-8 h-8"/>
                    </div>
                    <h3 className="font-headline font-semibold text-xl">{t('enrollStep1Title')}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">{t('enrollStep1Desc')}</p>
                </div>
                <div className="text-center">
                     <div className="p-4 bg-primary-foreground/10 rounded-full inline-block mb-3">
                        <ClipboardCheck className="w-8 h-8"/>
                    </div>
                    <h3 className="font-headline font-semibold text-xl">{t('enrollStep2Title')}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">{t('enrollStep2Desc')}</p>
                </div>
                <div className="text-center">
                     <div className="p-4 bg-primary-foreground/10 rounded-full inline-block mb-3">
                        <UserCheck className="w-8 h-8"/>
                    </div>
                    <h3 className="font-headline font-semibold text-xl">{t('enrollStep3Title')}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">{t('enrollStep3Desc')}</p>
                </div>
            </div>
            <p className="mt-12 font-headline text-lg">{t('startYourCareer')}</p>
            <Button asChild size="lg" variant="secondary" className="mt-4 font-bold">
              <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('applyNow')}</a>
            </Button>
        </div>
      </section>
    </div>
  );
}

    
