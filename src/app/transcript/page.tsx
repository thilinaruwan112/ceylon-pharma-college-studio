
"use client";

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FileDown, Printer } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import { studentResultsData } from '@/lib/student-data';

export default function TranscriptPage() {
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
    
    const overallStatus = studentData.overallGrade === 'Distinction' || studentData.overallGrade === 'Merit' || studentData.overallGrade === 'Pass';

    return (
        <main className="bg-muted/40 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Card className="overflow-hidden shadow-lg">
                    <CardHeader className="bg-card p-6 border-b print:hidden">
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
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentName')}</p>
                                <p className="font-semibold text-lg">{studentData.studentName}</p>
                            </div>
                             <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsStudentId')}</p>
                                <p className="font-semibold text-lg">{studentData.studentId}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsCourseName')}</p>
                                <p className="font-semibold text-lg">{studentData.courseName}</p>
                            </div>
                             <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">{t('resultsBatchCode')}</p>
                                <p className="font-semibold text-lg">{studentData.batchCode}</p>
                            </div>
                        </div>
                        
                        <div className="border-t pt-6">
                            <h3 className="font-headline font-bold text-xl mb-4">{t('resultsSummaryTitle')}</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('resultsModule')}</TableHead>
                                        <TableHead className="text-center">{t('resultsAttempt')}</TableHead>
                                        <TableHead className="text-right">{t('resultsGrade')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {studentData.results.map((result, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{result.module}</TableCell>
                                            <TableCell className="text-center">{result.attempt}</TableCell>
                                            <TableCell className="text-right font-semibold">{result.grade}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex justify-end items-center gap-4 pt-4">
                            <p className="font-body text-muted-foreground">{t('resultsOverallGrade')}</p>
                             <Badge className={`text-lg px-4 py-1 ${overallStatus ? 'bg-green-600' : 'bg-red-600'}`}>
                                {studentData.overallGrade}
                            </Badge>
                        </div>

                    </CardContent>
                    <CardFooter className="bg-card p-6 flex justify-between items-center print:hidden">
                        <div>
                            <p className="text-xs text-muted-foreground">{t('resultsIssueDate')}</p>
                            <p className="text-sm font-medium">{studentData.issueDate}</p>
                        </div>
                         <div className="flex gap-2">
                             <Button variant="outline" size="sm" onClick={() => window.print()}>
                                <Printer />
                                {t('resultsPrint')}
                            </Button>
                            <Button variant="outline" size="sm">
                                <FileDown />
                               {t('resultsDownload')}
                            </Button>
                         </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}
