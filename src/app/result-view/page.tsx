
"use client";

import { useSearchParams, notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, XCircle, FileText, GraduationCap } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import { studentResultsData } from '@/lib/student-data';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function ResultsViewComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseCode = searchParams.get('CourseCode');
    const loggedUser = searchParams.get('LoggedUser');
    const { t } = useTranslation();

    const studentData = studentResultsData.find(
        (student) => student.userName === loggedUser && student.batchCode === courseCode
    );

    if (!studentData) {
        return notFound();
    }
    
    const isSuccess = ['Distinction', 'Merit', 'Pass'].includes(studentData.overallGrade);

    return (
        <main className="bg-muted/40 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                     {isSuccess ? (
                        <>
                            <div className="lg:col-span-2">
                                <Card className="h-full">
                                    <CardContent className="p-8 space-y-6">
                                        <h1 className="text-2xl font-headline font-bold text-primary">{t('certCompletionTitle')}</h1>
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-16 w-16 border-2 border-primary">
                                                <AvatarImage src={studentData.avatar} alt={studentData.studentName} data-ai-hint="student portrait" />
                                                <AvatarFallback>{studentData.studentName.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-bold text-xl">{studentData.studentName}</p>
                                                <p className="text-muted-foreground">{t('resultsStudentId')}: {studentData.studentId}</p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">{t('resultsCourseName')}</p>
                                            <p className="font-semibold">{studentData.courseName}</p>
                                            <p className="text-sm text-muted-foreground mt-1">{studentData.courseDescription}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">{t('resultsOverallGrade')}</p>
                                             <p className="font-semibold">{studentData.overallGrade}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">{t('resultsIssueDate')}</p>
                                            <p className="font-semibold">{studentData.issueDate}</p>
                                        </div>

                                        <Button asChild className="w-full">
                                            <Link href={`/courses/${studentData.courseSlug}`}>
                                                <GraduationCap className="mr-2 h-4 w-4" />
                                                {t('viewCourseDetails')}
                                            </Link>
                                        </Button>

                                    </CardContent>
                                </Card>
                            </div>
                            <div className="lg:col-span-3">
                                 <Card className="overflow-hidden shadow-2xl border-4 border-primary/20 bg-background">
                                    <CardContent className="p-8 md:p-12 relative">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-5"></div>
                                        <div className="absolute top-8 right-8">
                                            <Avatar className="h-28 w-28 border-4 border-amber-400 shadow-md">
                                                <AvatarImage src={studentData.avatar} alt={studentData.studentName} data-ai-hint="student portrait" />
                                                <AvatarFallback>{studentData.studentName.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                        </div>
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
                                            <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary mt-6">{t('certCompletionTitle')}</h1>
                                        </div>
                                        
                                        <div className="text-center space-y-4 my-10">
                                            <p className="text-lg text-muted-foreground">{t('certThisCertifies')}</p>
                                            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline tracking-wide">{studentData.studentName}</h2>
                                            <p className="text-lg text-muted-foreground">{t('certSuccessfullyCompleted')}</p>
                                            <h3 className="text-xl md:text-2xl font-semibold text-primary">{studentData.courseName}</h3>
                                            <p className="text-muted-foreground">{t('certOnDate', { date: studentData.issueDate })}</p>
                                        </div>

                                        <div className="flex justify-between items-end mt-16">
                                            <div className="text-center">
                                                <p className="font-serif italic text-lg border-b border-foreground/50 pb-1 px-8">Director</p>
                                                <p className="text-sm text-muted-foreground mt-1">{t('certDirector')}</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded-full">
                                                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                                                </div>
                                                <p className="font-bold text-green-600 dark:text-green-400 mt-2">{t('certVerified')}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="font-serif italic text-lg border-b border-foreground/50 pb-1 px-8">Registrar</p>
                                                <p className="text-sm text-muted-foreground mt-1">{t('certRegistrar')}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    ) : (
                        <div className="lg:col-span-5">
                            <Card className="overflow-hidden shadow-lg p-8 md:p-12 text-center max-w-lg mx-auto">
                                <div className="flex flex-col items-center gap-4 text-destructive">
                                    <XCircle className="h-16 w-16" />
                                    <p className="text-2xl font-bold font-headline">{t('certNotCompleted')}</p>
                                </div>
                                <div className="border-t pt-6 mt-6 space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentName')}</p>
                                        <p className="font-semibold text-xl text-foreground">{studentData.studentName}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentId')}</p>
                                        <p className="font-semibold text-xl text-foreground">{studentData.studentId}</p>
                                    </div>
                                    <Button onClick={() => router.push(`/transcript?CourseCode=${courseCode}&LoggedUser=${loggedUser}`)} variant="secondary" className="w-full">
                                        <FileText className="mr-2 h-4 w-4" />
                                        {t('viewTranscript')}
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default function ResultsViewPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultsViewComponent />
        </Suspense>
    )
}
