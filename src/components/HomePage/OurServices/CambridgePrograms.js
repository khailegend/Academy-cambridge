import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function CambridgePrograms() {
  return (
    <Box className="flex flex-col justify-center h-full items-center gap-y-8 bg-white py-8 md:py-12 px-12 lg:px-24">
      <Typography className="font-bold text:xl md:text-2xl lg:text-3xl text-center">
        Chương trình <br /> Quốc tế/Cambridge
      </Typography>
      <Image
        src="/images/logos/ca.png"
        width={326}
        height={98}
        alt="Bộ giáo dục và đào tạo"
      />
    </Box>
  );
}
