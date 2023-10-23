import { Box } from '@mui/material';
import React from 'react';

export default function ServiceWrapperItem({ children }) {
  return <Box className="rounded bg-white p-12">{children}</Box>;
}
