import * as React from 'react';
import Container from '@mui/material/Container';
import HomePage from '@/components/HomePage';
import Tutor from '@/components/Tutor';
import About from '@/components/About';
import PrivateTutor from '@/components/PrivateTutor';
import FullWidthContainer from '@/common/Container/FullWidthContainer';

export default function Index() {
  return (
    <FullWidthContainer>
      <HomePage />
    </FullWidthContainer>
  );
}
