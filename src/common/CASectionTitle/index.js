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
      className={`text-[28px] md:text-5xl font-extrabold md:leading-[60px] ${classList}`}
    >
      {label}
    </Typography>
  );
}
