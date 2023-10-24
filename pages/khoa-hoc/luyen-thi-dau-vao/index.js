import CoursesLayout from '@/components/Courses/CoursesLayout';
import EntranceTraining from '@/components/Courses/EntranceTraining/EntranceTraining';
import React from 'react';
import {NextSeo} from "next-seo";

export default function EntranceTrain() {
  return (
    <CoursesLayout>
      <NextSeo
        title="Luyện thi đầu vào trường top tại Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <EntranceTraining />
    </CoursesLayout>
  );
}
