import React from 'react';
import CoursesLayout from '@/components/Courses/CoursesLayout';
import CambridgeCertification from '@/components/Courses/CambridgeCertification';

export default function index() {
  return (
    <CoursesLayout>
      <CambridgeCertification />
    </CoursesLayout>
  );
}
