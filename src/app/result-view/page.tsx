
"use client";

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, XCircle, Award, Star } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import { studentResultsData } from '@/lib/student-data';

export default function ResultsViewPage() {
    const searchParams = useSearchParams();
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
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                {isSuccess ? (
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
                                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-6">{t('certCompletionTitle')}</h1>
                            </div>
                            
                            <div className="text-center space-y-4 my-10">
                                <p className="text-lg text-muted-foreground">{t('certThisCertifies')}</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline tracking-wide">{studentData.studentName}</h2>
                                <p className="text-lg text-muted-foreground">{t('certSuccessfullyCompleted')}</p>
                                <h3 className="text-2xl md:text-3xl font-semibold text-primary">{studentData.courseName}</h3>
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
                ) : (
                    <Card className="overflow-hidden shadow-lg p-8 md:p-12 text-center">
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
                        </div>
                    </Card>
                )}
            </div>
        </main>
    )
}
