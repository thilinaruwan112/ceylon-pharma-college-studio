
"use client";

import DepartmentPage from '@/components/department-template';

const departmentData = {
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
};

export default function IctDepartmentPage() {
    return <DepartmentPage departmentData={departmentData} />;
}

    