import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Book({ bookData }) {
  return (
    <>
      <Box className="left book-wrapper">
        <Box className="l-front">
          <Image
            src={bookData.imageUrl}
            width={305}
            height={385}
            alt={bookData.name}
          />
        </Box>
        <Box className="l-back"></Box>
        <Box className="right">
          <Typography align="center" className="font-extrabold py-2">
            {bookData.name}
          </Typography>
          {bookData.content.map((item, index) => {
            return <Typography key={index}>{item}</Typography>;
          })}
        </Box>
      </Box>
    </>
  );
}
