import { Box, Container } from '@mui/material';
import React from 'react';
import CambridgePrograms from './chuong-trinh-cambridge';
import {NextSeo} from "next-seo";

export default function Courses() {
  return (
    <Container maxWidth={false} sx={{ padding: '0!important' }}>
      <NextSeo
        title="Khóa học tại Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <CambridgePrograms />
    </Container>
  );
}
