
"use client";

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, XCircle } from 'lucide-react';
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
            <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                <Card className="overflow-hidden shadow-lg">
                    <CardHeader className="bg-card p-6 border-b">
                         <div className="flex justify-between items-start">
                            <div>
                                <Image
                                    src="https://pharmacollege.lk/assets/images/logo.png"
                                    alt="Ceylon Pharma College Logo"
                                    width={180}
                                    height={56}
                                    className="h-auto w-40 dark:hidden"
                                />
                                <Image
                                    src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
                                    alt="Ceylon Pharma College Logo"
                                    width={180}
                                    height={56}
                                    className="h-auto w-40 hidden dark:block dark:brightness-0 dark:invert"
                                />
                                <CardTitle className="font-headline text-2xl mt-4">{t('resultsTitle')}</CardTitle>
                                <CardDescription>{t('resultsSubtitle')}</CardDescription>
                            </div>
                            <Avatar className="h-24 w-24 border-4 border-secondary">
                                <AvatarImage src={studentData.avatar} alt={studentData.studentName} data-ai-hint="student portrait" />
                                <AvatarFallback>{studentData.studentName.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 text-center space-y-6">
                        {isSuccess ? (
                            <div className="flex flex-col items-center gap-4 text-green-600">
                                <CheckCircle className="h-16 w-16" />
                                <p className="text-xl font-bold">Course Successfully Completed</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-4 text-red-600">
                                <XCircle className="h-16 w-16" />
                                <p className="text-xl font-bold">Course Not Completed</p>
                            </div>
                        )}

                        <div className="border-t pt-6 space-y-4">
                             <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentName')}</p>
                                <p className="font-semibold text-xl">{studentData.studentName}</p>
                            </div>
                             <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentId')}</p>
                                <p className="font-semibold text-xl">{studentData.studentId}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
