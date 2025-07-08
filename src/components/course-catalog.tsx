
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, BookOpen } from "lucide-react";
import { useTranslation } from "@/context/language-context";

const courses = [
  {
    title: "Diploma in Pharmacy",
    description: "A comprehensive program covering the fundamentals of pharmaceutical sciences.",
    duration: "2 Years",
    requirements: "A/L in Science stream",
    faculty: "Dr. Anura Perera",
  },
  {
    title: "Advanced Diploma in Pharmacology",
    description: "Explore advanced topics in drug action, metabolism, and therapeutic use.",
    duration: "1 Year",
    requirements: "Diploma in Pharmacy or equivalent",
    faculty: "Prof. Sunitha Silva",
  },
  {
    title: "Certificate in Pharmacy Practice",
    description: "A short-term course focused on practical skills for community pharmacy settings.",
    duration: "6 Months",
    requirements: "O/L with Science",
    faculty: "Mr. Gamini Jayasundara",
  },
  {
    title: "B.Pharm (Top-Up)",
    description: "Upgrade your diploma to a full Bachelor of Pharmacy degree.",
    duration: "1.5 Years",
    requirements: "Advanced Diploma in Pharmacy",
    faculty: "Dr. Fatima Iqbal",
  },
];

export default function CourseCatalog() {
  const { t } = useTranslation();

  return (
    <section id="courses" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t('courseCatalogTitle')}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
            {t('courseCatalogSubtitle')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className="hover:shadow-xl transition-shadow duration-300 flex flex-col bg-background">
              <CardHeader>
                <CardTitle className="font-headline">{course.title}</CardTitle>
                <CardDescription className="font-body pt-1">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>{course.requirements}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <User className="h-4 w-4 text-primary" />
                    <span>Lead Faculty: {course.faculty}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Badge variant="secondary">{t('courseCatalogEnrollmentOpen')}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
