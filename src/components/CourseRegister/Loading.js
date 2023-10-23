import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading({ open = false }) {
  return (
    <Modal keepMounted open={open} className="flex justify-center items-center">
      <CircularProgress />
    </Modal>
  );
}
