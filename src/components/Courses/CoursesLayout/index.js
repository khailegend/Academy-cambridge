import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import FAQAndContact from '../../FAQ-Contact';
import TabsMenu from '../../TabMenu';
import Cooperation from '../../Cooperation';
import CourseRegister from '../../CourseRegister';
import Image from 'next/image';

export default function CoursesLayout({ children }) {
  return (
    <Container maxWidth={false} className="p-0">
      <Box sx={{ width: '100%', height: '100vh' }} className="relative">
        <Image
          src="/images/homepage/khoahoc.png"
          alt="Khoa hoc"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <TabsMenu />
      {children}
      <CourseRegister />

      <Cooperation />

    </Container>
  );
}
