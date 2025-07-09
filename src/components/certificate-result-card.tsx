
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Star, User, GraduationCap, Award, ChevronRight } from "lucide-react";
import { useTranslation } from "@/context/language-context";

interface ResultCardProps {
    data: {
        studentName: string;
        grade: string;
        course: string;
        rating: number;
        batchCode: string;
        userName: string;
    };
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/50"
        }`}
      />
    ))}
  </div>
);

export default function CertificateResultCard({ data }: ResultCardProps) {
  const { t } = useTranslation();
  const { studentName, grade, course, rating, batchCode, userName } = data;
  const resultUrl = `/results?CourseCode=${batchCode}&LoggedUser=${userName}`;
  
  return (
    <Card className="text-left bg-background/10 border-primary-foreground/20 text-primary-foreground animate-in fade-in-50">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="font-headline text-xl">{t('certResultTitle')}</CardTitle>
                 <p className="text-sm text-primary-foreground/80">{t('certResultSubtitle')}</p>
            </div>
            <div className="text-right">
                <StarRating rating={rating} />
                 <p className="text-xs text-primary-foreground/70 mt-1">{t('certResultRating')}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 font-body pt-0">
         <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-primary-foreground/80" />
            <div>
                <p className="text-xs text-primary-foreground/70">{t('certResultStudentName')}</p>
                <p className="font-semibold text-primary-foreground">{studentName}</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-primary-foreground/80" />
            <div>
                <p className="text-xs text-primary-foreground/70">{t('certResultCourse')}</p>
                <p className="font-semibold text-primary-foreground">{course}</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-primary-foreground/80" />
            <div>
                <p className="text-xs text-primary-foreground/70">{t('certResultGrade')}</p>
                <p className="font-semibold text-primary-foreground">{grade}</p>
            </div>
        </div>
      </CardContent>
      <CardFooter>
          <Button asChild className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold">
            <Link href={resultUrl}>
                {t('certResultViewButton')}
                <ChevronRight />
            </Link>
          </Button>
      </CardFooter>
    </Card>
  )
}
