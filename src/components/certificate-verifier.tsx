
"use client";

import { useState, useMemo, ChangeEvent } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Search, User, ChevronRight } from "lucide-react";
import { useTranslation } from "@/context/language-context";
import { studentResultsData } from "@/lib/student-data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Student {
    studentId: string;
    studentName: string;
    userName: string;
    avatar: string;
    courseName: string;
    batchCode: string;
}

const SearchResults = ({ students }: { students: Student[] }) => (
    <div className="mt-4 space-y-2 max-h-80 overflow-y-auto animate-in fade-in-50">
        {students.map((student) => {
             const resultUrl = `/result-view?CourseCode=${student.batchCode}&LoggedUser=${student.userName}`;
             return (
                <Link href={resultUrl} key={student.studentId} className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
                    <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
                        <AvatarImage src={student.avatar} alt={student.studentName} />
                        <AvatarFallback>
                            <User className="text-primary-foreground/50" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <p className="font-bold">{student.studentId}</p>
                        <p className="text-sm text-primary-foreground/80">{student.studentName}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-primary-foreground/70" />
                </Link>
             )
        })}
    </div>
);


export default function CertificateVerifier() {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const filteredStudents = useMemo(() => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    return studentResultsData.filter(student => 
        student.studentName.toLowerCase().includes(lowerCaseQuery) || 
        student.studentId.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
  }

  return (
    <section id="verify" className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mb-6">
              <Image
                src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
                alt="Ceylon Pharma College Logo"
                width={200}
                height={62}
                className="brightness-0 invert mx-auto"
                priority
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">
                {t('certVerifierTitle')}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                {t('certVerifierSubtitle')}
            </p>

            <div className="mt-8 max-w-xl mx-auto">
                <div className="relative">
                  <Input 
                    name="certificateNumber" 
                    placeholder={t('certVerifierInputPlaceholder')} 
                    aria-label={t('certVerifierButton')}
                    className="h-14 w-full rounded-lg border-2 border-primary-foreground/50 bg-primary-foreground/90 pl-14 pr-6 text-base text-primary placeholder:text-primary/70 focus:border-primary-foreground focus:bg-primary-foreground focus:ring-2 focus:ring-primary-foreground/50"
                    onChange={handleInputChange}
                    value={query}
                  />
                  <Search className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-primary/70" />
                </div>
                {query && <SearchResults students={filteredStudents} />}
            </div>

            <p className="mt-8 max-w-3xl mx-auto text-primary-foreground/80 text-sm font-body leading-relaxed">
                {t('certVerifierDescription')}
            </p>
        </div>
    </section>
  );
}
