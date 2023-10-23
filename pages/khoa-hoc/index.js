import { Box, Container } from '@mui/material';
import React from 'react';
import CambridgePrograms from './chuong-trinh-cambridge';

export default function Courses() {
  return (
    <Container maxWidth={false} sx={{ padding: '0!important' }}>
      <CambridgePrograms />
    </Container>
  );
}
