import { Box, Container } from '@mui/material';
import React from 'react';
import CASectionTitle from '../CASectionTitle';

export default function RegisterNow() {
  return (
    <Container
      maxWidth={false}
      className="ca-primary-bg-color relative"
      id="quickRegisterForm"
    >
      <Box className="text-center py-12">
        <CASectionTitle
          fontPrimary={false}
          label="Cambridge Academy"
          classList="ca-secondary-color"
        />
        <CASectionTitle
          fontPrimary={false}
          label="cùng học sinh chinh phục từng cột mốc tri thức."
          classList="text-white"
        />
      </Box>
    </Container>
  );
}
