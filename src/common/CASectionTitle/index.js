import { Typography } from '@mui/material';
import React from 'react';

export default function CASectionTitle({
  label,
  classList = '',
  fontPrimary = true,
}) {
  return (
    <Typography
      fontFamily={fontPrimary ? '' : 'sourceSerif'}
      className={`text-xl md:text-2xl lg:text-3xl font-extrabold md:leading-[40px] ${classList}`}
    >
      {label}
    </Typography>
  );
}
