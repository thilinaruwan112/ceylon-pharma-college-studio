
"use client";

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Book, Star, Award } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import { Suspense, useEffect, useState } from 'react';
import StarRating from '@/components/star-rating';

// This is a placeholder type. In a real app, this should be defined
// based on the actual API response for a single student's full details.
interface StudentDetails {
    studentName: string;
    studentId: string;
    avatar: string;
    courseName: string;
    courseCode: string;
    overallGrade: string;
    rating: number;
}


function ResultsViewComponent() {
    const searchParams = useSearchParams();
    const courseCode = searchParams.get('CourseCode');
    const loggedUser = searchParams.get('LoggedUser');
    const { t } = useTranslation();

    // The student data would be fetched from an API based on the params
    // For now, we'll use a placeholder structure.
    const [studentData, setStudentData] = useState<StudentDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // In a real app, you would fetch student details here.
      // Simulating a fetch with a placeholder.
      if (loggedUser && courseCode) {
         setStudentData({
            studentName: "K. Hansika Madumali",
            studentId: "PA19001", 
            avatar: "https://placehold.co/100x100.png",
            courseName: "Not Available",
            courseCode: courseCode,
            overallGrade: "Not Submitted",
            rating: 0,
        });
      }
      setLoading(false);
    }, [loggedUser, courseCode]);


    if (loading) {
        return <div className="container mx-auto text-center py-24">Loading student results...</div>;
    }

    if (!studentData) {
        return notFound();
    }

    return (
        <main className="bg-muted/40 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                <div className="text-center mb-8">
                    <Image
                        src="https://pharmacollege.lk/assets/images/logo.png"
                        alt="Ceylon Pharma College Logo"
                        width={200}
                        height={62}
                        className="h-auto w-48 mx-auto dark:hidden"
                    />
                    <Image
                        src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
                        alt="Ceylon Pharma College Logo"
                        width={200}
                        height={62}
                        className="h-auto w-48 mx-auto hidden dark:block dark:brightness-0 dark:invert"
                    />
                    <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary mt-6">{t('certResultTitle')}</h1>
                    <p className="text-muted-foreground">{t('certResultSubtitle')}</p>
                </div>
                
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex-row items-center gap-4">
                            <User className="w-6 h-6 text-primary"/>
                            <CardTitle className="font-headline text-xl">{t('studentInfo')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certStudentName')}</span>
                                <span className="font-semibold">{studentData.studentName}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certIndexNo')}</span>
                                <span className="font-semibold">{studentData.studentId}</span>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader className="flex-row items-center gap-4">
                            <Book className="w-6 h-6 text-primary"/>
                            <CardTitle className="font-headline text-xl">{t('courseDetails')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certCourseName')}</span>
                                <span className="font-semibold">{studentData.courseName}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certCourseCode')}</span>
                                <span className="font-semibold">{studentData.courseCode}</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex-row items-center gap-4">
                            <Award className="w-6 h-6 text-primary"/>
                            <CardTitle className="font-headline text-xl">{t('resultsTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certFinalGrade')}</span>
                                <span className="font-semibold">{studentData.overallGrade}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certRating')}</span>
                                {studentData.rating > 0 ? (
                                    <StarRating rating={studentData.rating} />
                                ) : (
                                    <span className="font-semibold">{t('certNoGrade')}</span>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default function ResultsViewPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <ResultsViewComponent />
        </Suspense>
    )
}
