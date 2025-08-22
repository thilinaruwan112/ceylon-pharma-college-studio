
"use client";

import { useSearchParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Book, Award } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import { Suspense, useEffect, useState } from 'react';
import StarRating from '@/components/star-rating';

// --- New Interfaces for the API response ---

interface StudentInfo {
    id: string;
    student_id: string;
    username: string;
    full_name: string;
    name_on_certificate: string;
}

interface Assignment {
    assignment_id: string;
    assignment_name: string;
    grade: string;
}

interface AssignmentGrades {
    assignments: Assignment[];
    average_grade: string;
}

interface Enrollment {
    id: string;
    course_code: string;
    batch_name: string;
    parent_course_name: string;
    assignment_grades: AssignmentGrades;
    certificate_eligibility: boolean;
}

interface ApiResponse {
    title: string;
    studentInfo: StudentInfo;
    studentEnrollments: {
        [key: string]: Enrollment;
    };
}

// --- Component to display the results ---

function ResultsViewComponent() {
    const searchParams = useSearchParams();
    const courseCode = searchParams.get('CourseCode');
    const loggedUser = searchParams.get('LoggedUser');
    const { t } = useTranslation();

    const [studentData, setStudentData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loggedUser) {
            setLoading(false);
            return;
        }

        async function fetchStudentDetails() {
            try {
                setLoading(true);
                const response = await fetch(`https://qa-api.pharmacollege.lk/get-student-full-info?loggedUser=${loggedUser}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const data: ApiResponse = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error("Error fetching student details:", error);
                setStudentData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchStudentDetails();
    }, [loggedUser]);
    
    if (loading) {
        return <div className="container mx-auto text-center py-24">Loading student results...</div>;
    }

    if (!studentData || !courseCode || !studentData.studentEnrollments[courseCode]) {
        // This will show a 404 if the student or the specific course enrollment doesn't exist
        return notFound();
    }

    const enrollment = studentData.studentEnrollments[courseCode];
    const averageGrade = parseFloat(enrollment.assignment_grades.average_grade);
    
    const getFinalGrade = () => {
        if (!enrollment.certificate_eligibility) {
            return "Referred";
        }
        if (averageGrade >= 85) return "Distinction";
        if (averageGrade >= 75) return "Merit";
        if (averageGrade >= 60) return "Pass";
        return "Referred";
    };

    const getRating = () => {
        if (!enrollment.certificate_eligibility) return 0;
        if (averageGrade >= 85) return 5; // Distinction
        if (averageGrade >= 75) return 4; // Merit
        if (averageGrade >= 60) return 3; // Pass
        return 0; // Referred
    };
    
    const finalGrade = getFinalGrade();
    const rating = getRating();

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
                                <span className="font-semibold">{studentData.studentInfo.name_on_certificate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certIndexNo')}</span>
                                <span className="font-semibold">{studentData.studentInfo.username}</span>
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
                                <span className="font-semibold">{enrollment.parent_course_name}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certCourseCode')}</span>
                                <span className="font-semibold">{enrollment.course_code}</span>
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
                                <span className="font-semibold">{finalGrade}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">{t('certRating')}</span>
                                {rating > 0 ? (
                                    <StarRating rating={rating} />
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
