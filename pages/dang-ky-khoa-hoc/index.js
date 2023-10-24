import React from 'react';
import CourseRegister from '@/components/CourseRegister';
import { Container } from '@mui/material';
import {NextSeo} from "next-seo";
export default function CoursesRegister() {
  return (
    <Container maxWidth={false}>
      <NextSeo
        title="Đăng ký hóa học tại Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <CourseRegister />
    </Container>
  );
}
