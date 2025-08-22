
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Search, User, ChevronRight, Loader2 } from "lucide-react";
import { useTranslation } from "@/context/language-context";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import debounce from 'lodash.debounce';

interface Student {
    id: string;
    userid: string;
    fname: string;
    lname: string;
    username: string;
    batch_id: string;
}

const SearchResults = ({ students, loading }: { students: Student[]; loading: boolean; }) => {
    if (loading) {
      return (
        <div className="mt-4 text-center text-primary-foreground/80">
          <p>Loading...</p>
        </div>
      );
    }

    if (students.length === 0) {
      return (
        <div className="mt-4 text-center text-primary-foreground/80">
          <p>No students found.</p>
        </div>
      );
    }
    
    return (
        <div className="mt-4 space-y-2 max-h-80 overflow-y-auto animate-in fade-in-50">
            {students.map((student) => {
                 const resultUrl = `/result-view?CourseCode=${student.batch_id}&LoggedUser=${student.username}`;
                 return (
                    <Link href={resultUrl} key={student.id} className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
                        <Avatar className="h-10 w-10 border-2 border-primary-foreground/20">
                            <AvatarImage src={`https://placehold.co/100x100.png`} alt={`${student.fname} ${student.lname}`} />
                            <AvatarFallback>
                                <User className="text-primary-foreground/50" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                            <p className="font-bold">{`${student.fname} ${student.lname}`}</p>
                            <p className="text-sm text-primary-foreground/80">{student.username}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary-foreground/70" />
                    </Link>
                 )
            })}
        </div>
    );
};


export default function CertificateVerifier() {
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const fetchStudents = useCallback(async (searchQuery: string) => {
    if (searchQuery.trim().length < 2) {
      setStudents([]);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://qa-api.pharmacollege.lk/users');
      const data: Student[] = await response.json();
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = data.filter(student =>
        (student.fname && student.fname.toLowerCase().includes(lowerCaseQuery)) ||
        (student.lname && student.lname.toLowerCase().includes(lowerCaseQuery)) ||
        (student.username && student.username.toLowerCase().includes(lowerCaseQuery))
      );
      setStudents(filtered);
    } catch (error) {
      console.error("Failed to fetch students:", error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  }, []);
  
  const debouncedFetchStudents = useCallback(debounce(fetchStudents, 300), [fetchStudents]);

  useEffect(() => {
    debouncedFetchStudents(query);
    // Cleanup debounce on component unmount
    return () => {
      debouncedFetchStudents.cancel();
    };
  }, [query, debouncedFetchStudents]);


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
                    className="h-14 w-full rounded-lg border-2 border-primary-foreground/50 bg-primary-foreground/90 pl-14 pr-14 text-base text-primary placeholder:text-primary/70 focus:border-primary-foreground focus:bg-primary-foreground focus:ring-2 focus:ring-primary-foreground/50"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                  <Search className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-primary/70" />
                   {loading && <Loader2 className="h-6 w-6 absolute right-5 top-1/2 -translate-y-1/2 text-primary/70 animate-spin" />}
                </div>
                {query && <SearchResults students={students} loading={loading} />}
            </div>

            <p className="mt-8 max-w-3xl mx-auto text-primary-foreground/80 text-sm font-body leading-relaxed">
                {t('certVerifierDescription')}
            </p>
        </div>
    </section>
  );
}
