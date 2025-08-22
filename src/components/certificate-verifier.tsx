
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
        <div className="mt-4 space-y-2 max-h-80 overflow-y-auto animate-in fade-in-50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {students.map((student) => {
                 const resultUrl = `/result-view?CourseCode=${student.batch_id}&LoggedUser=${student.username}`;
                 return (
                    <Link href={resultUrl} key={student.id} className="flex items-center gap-4 p-3 rounded-lg bg-background text-foreground hover:bg-muted transition-colors">
                        <Avatar className="h-10 w-10 border-2 border-border">
                            <AvatarImage src={`https://placehold.co/100x100.png`} alt={`${student.fname} ${student.lname}`} />
                            <AvatarFallback>
                                <User className="text-muted-foreground" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow flex items-center gap-4">
                            <p className="font-bold w-24">{student.username}</p>
                            <div className="w-px h-6 bg-border"></div>
                            <p className="font-bold">{`${student.fname} ${student.lname}`}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                 )
            })}
        </div>
    );
};


export default function CertificateVerifier() {
  const [query, setQuery] = useState('');
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchAllStudents() {
        try {
            const response = await fetch('https://qa-api.pharmacollege.lk/users');
            const data: Student[] = await response.json();
            setAllStudents(data);
        } catch (error) {
            console.error("Failed to fetch students:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchAllStudents();
  }, []);

  const filterStudents = useCallback((searchQuery: string) => {
    if (searchQuery.trim().length < 2) {
      setFilteredStudents([]);
      return;
    }
    
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results: Student[] = [];
    const reversedStudents = [...allStudents].reverse();

    for (const student of reversedStudents) {
        if (results.length >= 10) {
            break;
        }
        const fullName = `${student.fname || ''} ${student.lname || ''}`.toLowerCase();
        const username = (student.username || '').toLowerCase();

        if (fullName.includes(lowerCaseQuery) || username.includes(lowerCaseQuery)) {
            results.push(student);
        }
    }
    setFilteredStudents(results);
  }, [allStudents]);
  
  const debouncedFilterStudents = useCallback(debounce(filterStudents, 300), [filterStudents]);

  useEffect(() => {
    debouncedFilterStudents(query);
    return () => {
      debouncedFilterStudents.cancel();
    };
  }, [query, debouncedFilterStudents]);


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
                    className="h-14 w-full rounded-lg border-2 border-primary-foreground/50 bg-primary-foreground/90 pl-14 pr-14 text-base text-primary placeholder:text-primary/70 focus:border-primary-foreground focus:bg-primary-foreground focus:ring-2 focus:ring-primary-foreground/50 uppercase"
                    onChange={(e) => setQuery(e.target.value.toUpperCase())}
                    value={query}
                    disabled={loading}
                  />
                  <Search className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-primary/70" />
                   {loading && <Loader2 className="h-6 w-6 absolute right-5 top-1/2 -translate-y-1/2 text-primary/70 animate-spin" />}
                </div>
                {query && <SearchResults students={filteredStudents} loading={false} />}
            </div>

            <p className="mt-8 max-w-3xl mx-auto text-primary-foreground/80 text-sm font-body leading-relaxed">
                {t('certVerifierDescription')}
            </p>
        </div>
    </section>
  );
}
