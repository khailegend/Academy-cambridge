import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function StandardProgram() {
  return (
    <Box className="flex flex-col justify-center items-center gap-y-8  bg-white  py-8 md:py-12 px-12 h-full">
      <Typography className="font-bold text:xl md:text-2xl lg:text-3xl text-center whitespace-nowrap">
        Chương trình <br /> Bộ Giáo dục & Đào tạo
      </Typography>
      <Image
        src="/images/logos/gd.png"
        width={257}
        height={132}
        alt="Bộ giáo dục và đào tạo"
      />
    </Box>
  );
}
