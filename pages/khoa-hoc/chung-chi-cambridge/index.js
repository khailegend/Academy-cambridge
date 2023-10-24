import React from 'react';
import CoursesLayout from '@/components/Courses/CoursesLayout';
import CambridgeCertification from '@/components/Courses/CambridgeCertification';
import {NextSeo} from "next-seo";

export default function index() {
  return (
    <CoursesLayout>
      <NextSeo
        title="Luyện thi chứng chỉ Cambridge tại Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <CambridgeCertification />
    </CoursesLayout>
  );
}
