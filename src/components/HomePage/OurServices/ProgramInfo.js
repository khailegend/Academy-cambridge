import CALinkButton from '@/common/CAButton';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ProgramInfo({ info, className = '', url = '' }) {
  return (
    <Box
      className={`h-full flex justify-center items-center flex-col text-center py-3 md:py-8 px-3 md:px-6 gap-4 ${
        className ?? ''
      }`}
    >
      <Typography className="text:xl md:text-2xl lg:text-3xl font-extrabold">
        {info}
      </Typography>
      <CALinkButton
        href={`${url}#quickRegisterForm`}
        label="Đăng ký"
        classStyle="ca-primary-bg-color"
      />
    </Box>
  );
}
