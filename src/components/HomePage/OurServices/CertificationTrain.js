import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function CertificationTrain() {
  return (
    <Box className="flex flex-col justify-center items-center gap-y-8 bg-white p-12">
      <Typography className="font-bold text-3xl text-center">
        Luyện thi chứng chỉ
      </Typography>
      <Box className="flex gap-2">
        <Box className="flex items-center">
          <Image
            src="/images/logos/all-certification.png"
            width={293}
            height={200}
            alt="luyện thi chứng chỉ"
          />
        </Box>
        <Box className="flex flex-col gap-4">
          <Image
            src="/images/logos/chung_chi_IGCSE .png"
            width={126}
            height={75}
            alt="cambridge programs"
          />
          <Image
            src="/images/logos/IL.png"
            width={165}
            height={87}
            alt="IL programs"
          />
          <Image
            src="/images/logos/alevel.png"
            width={181}
            height={80}
            alt="alevel programs"
          />
        </Box>
      </Box>
    </Box>
  );
}
