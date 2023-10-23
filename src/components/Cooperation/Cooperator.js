import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Cooperator({ item }) {
  return (
    <Box className="flex justify-center items-center">
      <Image src={item.url} alt={item.name} width={240} height={120} />
    </Box>
  );
}
