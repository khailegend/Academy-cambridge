import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SchoolItem from './SchoolItem';

export default function SchoolList({ schools }) {
  return (
    <Container
      maxWidth={false}
      className="flex flex-wrap justify-between gap-y-8"
    >
      {schools.map((school, index) => (
        <SchoolItem key={index} school={school} />
      ))}
    </Container>
  );
}
