import { Box, Container } from '@mui/material';
import React from 'react';
import CoursesLayout from '@/components/Courses/CoursesLayout';
import CambridgeCertification from './chung-chi-cambridge';
import { usePathname, useRouter } from 'next/navigation';
import CambridgePrograms from './chuong-trinh-cambridge';
import FAQAndContact from '@/components/FAQ-Contact';
import MenuTabs from '@/components/TabMenu';

export default function Courses() {
  return (
    <Container maxWidth={false} sx={{ padding: '0!important' }}>
      <CambridgePrograms />
      <Box className="w-full">
      </Box>
    </Container>
  );
}
