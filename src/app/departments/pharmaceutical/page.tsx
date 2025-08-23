
"use client";

import DepartmentPage from '@/components/department-template';

const departmentData = {
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
};

export default function PharmaceuticalDepartmentPage() {
    return <DepartmentPage departmentData={departmentData} />;
}
