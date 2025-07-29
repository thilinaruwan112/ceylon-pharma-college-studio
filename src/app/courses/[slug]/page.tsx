
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
} from "lucide-react";

import { useTranslation } from "@/context/language-context";

// Mock data - In a real app, this would come from a CMS or database
const coursesData: any = {
  "diploma-in-pharmacy-practice": {
    titleKey: "courseTitleDPP",
    slug: "diploma-in-pharmacy-practice",
    descriptionKey: "courseDescriptionDPP",
    price: "2,500.00",
    duration: "2 Years",
    schedule: "Weekends, 9 AM - 4 PM",
    level: "Diploma",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    requirements: [
      "reqDPP1",
      "reqDPP2",
    ],
    whatYoullLearn: [
      "wyllDPP1",
      "wyllDPP2",
      "wyllDPP3",
      "wyllDPP4",
      "wyllDPP5",
      "wyllDPP6",
    ],
    courseTopics: [
      {
        title: "topicTitleDPP1",
        modules: [
          "topicModuleDPP1_1",
          "topicModuleDPP1_2",
          "topicModuleDPP1_3",
        ],
      },
      {
        title: "topicTitleDPP2",
        modules: [
          "topicModuleDPP2_1",
          "topicModuleDPP2_2",
          "topicModuleDPP2_3",
        ],
      },
    ],
    materials: [
      { text: "Primary study materials", icon: Book },
      { text: "Tutorials", icon: Video },
      { text: "E-book", icon: BookOpen },
    ]
  },
  "advanced-community-pharmacy": {
    titleKey: "courseTitleACP",
    slug: "advanced-community-pharmacy",
    descriptionKey: "courseDescriptionACP",
    price: "15,000.00",
    duration: "6 Months",
    schedule: "Weekdays, 6 PM - 8 PM",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
    requirements: [
      "reqACP1",
      "reqACP2",
      "reqACP3",
    ],
    whatYoullLearn: [
      "wyllACP1",
      "wyllACP2",
      "wyllACP3",
      "wyllACP4",
      "wyllACP5",
      "wyllACP6",
    ],
    courseTopics: [
      {
        title: "topicTitleACP1",
        modules: [
            "topicModuleACP1_1",
            "topicModuleACP1_2",
            "topicModuleACP1_3",
        ]
      },
      {
        title: "topicTitleACP2",
        modules: [
            "topicModuleACP2_1",
            "topicModuleACP2_2",
            "topicModuleACP2_3",
        ]
      },
      {
        title: "topicTitleACP3",
        modules: [
            "topicModuleACP3_1",
            "topicModuleACP3_2",
        ]
      },
      {
        title: "topicTitleACP4",
        modules: [
            "topicModuleACP4_1",
            "topicModuleACP4_2",
        ]
      },
      {
        title: "topicTitleACP5",
        modules: [
            "topicModuleACP5_1",
            "topicModuleACP5_2",
        ]
      },
      {
        title: "topicTitleACP6",
        modules: [
            "topicModuleACP6_1",
            "topicModuleACP6_2",
            "topicModuleACP6_3",
        ]
      }
    ],
     materials: [
      { text: "Primary study materials", icon: Book },
      { text: "Tutorials", icon: Video },
      { text: "E-book", icon: BookOpen },
      { text: "Past papers", icon: FileText },
      { text: "Quizzes", icon: FileQuestion },
    ]
  },
};

const keyFeatures = [
    { icon: Library, title: "keyFeatureTitle1", description: "keyFeatureDesc1" },
    { icon: UserCheck, title: "keyFeatureTitle2", description: "keyFeatureDesc2" },
    { icon: Target, title: "keyFeatureTitle3", description: "keyFeatureDesc3" },
];

const assessmentMethods = [
    { count: "2", title: "assessmentMethodTitle1", description: "assessmentMethodDesc1", icon: Laptop },
    { count: "24", title: "assessmentMethodTitle2", description: "assessmentMethodDesc2", icon: FileQuestion },
    { count: "1", title: "assessmentMethodTitle3", description: "assessmentMethodDesc3", icon: ClipboardCheck },
];

const certificationRequirements = [
    "certReq1",
    "certReq2",
    "certReq3",
    "certReq4",
];


export default function CoursePage({ params }: { params: { slug: string } }) {
  const { t } = useTranslation();
  const course = coursesData[params.slug];

  if (!course) {
    notFound();
  }
  
  const NumberedCircle = ({ number }: { number: number }) => (
    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="font-bold text-primary text-sm">{number}</span>
    </div>
  );

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm font-body mb-4">
                <Link href="/" className="hover:underline">{t('home')}</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/courses" className="hover:underline">{t('courses')}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="opacity-80">{t(course.titleKey as any)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{t(course.titleKey as any)}</h1>
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
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t(course.titleKey as any)}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed">{t(course.descriptionKey as any)}</p>
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

                     {/* What you'll learn */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('whatYouWillLearn')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed mb-8">{t('whatYouWillLearnDesc')}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {course.whatYoullLearn.map((item: string, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <NumberedCircle number={index + 1} />
                                    <p className="text-foreground font-medium flex-1">{t(item as any)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Topics */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('courseTopics')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                         <Accordion type="single" collapsible className="w-full">
                            {course.courseTopics.map((topic: any, index: number) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-left hover:no-underline">
                                      <div className="flex items-center gap-3">
                                        <NumberedCircle number={index + 1} />
                                        <span className="font-headline font-semibold text-lg">{t(topic.title as any)}</span>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-12">
                                        <ul className="space-y-2">
                                        {topic.modules.map((module: string, modIndex: number) => (
                                            <li key={modIndex} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                <span className="text-muted-foreground">{t(module as any)}</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Assessment Method */}
                    <div>
                        <h2 className="text-3xl font-headline font-bold text-foreground">{t('assessmentMethod')}</h2>
                        <div className="w-20 h-1 bg-primary mt-2 mb-4" />
                        <p className="text-muted-foreground font-body leading-relaxed mb-8">{t('assessmentMethodDesc')}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {assessmentMethods.map((method, index) => (
                                <Card key={index} className="bg-card/50 text-center">
                                    <CardContent className="p-6">
                                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <span className="font-headline font-bold text-primary text-2xl">{method.count}</span>
                                        </div>
                                        <h3 className="font-headline font-semibold text-foreground">{t(method.title as any)}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{t(method.description as any)}</p>
                                    </CardContent>
                                </Card>
                            ))}
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
                                    <p className="text-sm text-muted-foreground">{t(course.titleKey as any)}</p>
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
                                    <Image src={course.image} alt={t(course.titleKey as any)} fill className="object-cover" data-ai-hint="student pharmacist" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-3xl font-headline font-bold text-primary">LKR {course.price}</p>
                                    <Badge variant="secondary">{t('limitedSeats')}</Badge>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span><span className="font-semibold text-foreground">{t('duration')}:</span> {course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CalendarDays className="w-5 h-5 text-primary" />
                                        <span><span className="font-semibold text-foreground">{t('schedule')}:</span> {course.schedule}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        <span><span className="font-semibold text-foreground">{t('level')}:</span> {course.level}</span>
                                    </div>
                                </div>
                                <div className="my-6 border-t"></div>
                                <div>
                                    <h4 className="font-headline font-semibold text-foreground mb-3">{t('entryRequirements')}</h4>
                                    <ul className="space-y-2">
                                        {course.requirements.map((req: string, index: number) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                                <span className="text-muted-foreground text-sm">{t(req as any)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button asChild className="w-full mt-6 font-bold text-lg" size="lg">
                                  <a href="https://portal.pharmacollege.lk/register" target="_blank" rel="noopener noreferrer">{t('enrollNow')}</a>
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-2">{t('enrollNowSubtext')}</p>

                                <div className="my-6 border-t"></div>

                                <div>
                                    <h4 className="font-headline font-semibold text-foreground mb-3">{t('materialsProvided')}</h4>
                                    <ul className="space-y-3">
                                        {course.materials.map((mat: any, index: number) => (
                                            <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                                                <mat.icon className="w-4 h-4 text-primary" />
                                                <span>{mat.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

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
