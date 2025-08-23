
"use client";

import DepartmentPage from '@/components/department-template';

const departmentData = {
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
};

export default function EnglishDepartmentPage() {
    return <DepartmentPage departmentData={departmentData} />;
}
