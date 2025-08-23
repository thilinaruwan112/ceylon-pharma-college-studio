
"use client";

import { notFound } from 'next/navigation';
import DepartmentPage from '@/components/department-template';

const departmentsData: { [key: string]: any } = {
  pharmaceutical: {
    nameKey: 'deptNamePharmaceutical',
    descriptionKey: 'deptDescPharmaceutical',
    image: 'https://images.unsplash.com/photo-1583324113620-91542302de3e?q=80&w=2070&auto=format&fit=crop',
    contact: {
      phone: '011 2 345 678',
      email: 'pharma@pharmacollege.lk',
    },
    faculty: [
      { name: 'Dr. Nimali Fernando', titleKey: 'facultyTitleHOD', image: 'https://placehold.co/150x150.png', hint: 'female hod' },
      { name: 'Prof. Rohan Silva', titleKey: 'facultyTitleSeniorLecturer', image: 'https://placehold.co/150x150.png', hint: 'male senior lecturer' },
      { name: 'Ms. Fathima Rizwan', titleKey: 'facultyTitleLecturer', image: 'https://placehold.co/150x150.png', hint: 'female lecturer' },
    ],
    programs: [
      { nameKey: 'courseTitleDPP', descriptionKey: 'programDescPharma', slug: 'diploma-in-pharmacy-practice' },
      { nameKey: 'courseTitleACP', descriptionKey: 'programDescPharma', slug: 'advanced-community-pharmacy-practice' },
    ]
  },
  english: {
    nameKey: 'deptNameEnglish',
    descriptionKey: 'deptDescEnglish',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop',
    contact: {
      phone: '011 2 345 679',
      email: 'english@pharmacollege.lk',
    },
    faculty: [
      { name: 'Mr. David Smith', titleKey: 'facultyTitleHOD', image: 'https://placehold.co/150x150.png', hint: 'male hod english' },
      { name: 'Ms. Sarah Johnson', titleKey: 'facultyTitleSeniorLecturer', image: 'https://placehold.co/150x150.png', hint: 'female senior lecturer' },
    ],
    programs: [
      { nameKey: 'programNameEnglishFree', descriptionKey: 'programDescEnglishFree', slug: '#' },
      { nameKey: 'programNameEnglishProf', descriptionKey: 'programDescComingSoon', slug: '#' },
      { nameKey: 'programNameEnglishBusiness', descriptionKey: 'programDescComingSoon', slug: '#' },
    ]
  },
  ict: {
    nameKey: 'deptNameIct',
    descriptionKey: 'deptDescIct',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    contact: {
      phone: '011 2 345 680',
      email: 'ict@pharmacollege.lk',
    },
    faculty: [
      { name: 'Mr. Roshan Fernando', titleKey: 'facultyTitleHOD', image: 'https://placehold.co/150x150.png', hint: 'male hod ict' },
      { name: 'Ms. Anusha Kumar', titleKey: 'facultyTitleInstructor', image: 'https://placehold.co/150x150.png', hint: 'female instructor' },
    ],
    programs: [
      { nameKey: 'programNameIctDip', descriptionKey: 'programDescComingSoon', slug: '#' },
      { nameKey: 'programNameIctWeb', descriptionKey: 'programDescComingSoon', slug: '#' },
    ]
  }
};


export default function DepartmentSlugPage({ params }: { params: { slug: string } }) {
    const departmentData = departmentsData[params.slug];

    if (!departmentData) {
        notFound();
    }

    return <DepartmentPage departmentData={departmentData} />;
}
