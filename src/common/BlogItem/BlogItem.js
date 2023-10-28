import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogItem({ blog }) {
  return (
    <Link
      href={blog.link}
      className="group overflow-hidden cursor-pointer"
      sx={{ maxWidth: 366 }}
    >
      <Box>
        <Box className="overflow-hidden">
          <Image
            src={blog.img}
            width={366}
            height={274}
            alt={blog.title}
            className="desktop transition-all duration-500 group-hover:scale-115"
          />

          <Image
            src={blog.img}
            width={200}
            height={100}
            alt={blog.title}
            className="mobile transition-all duration-500 group-hover:scale-115"
          />
        </Box>
        <Typography
          className="font-semibold text-md md:text-xl lg:text-3xl text-black whitespace-normal"
          sx={{ fontStyle: 'normal', fontFamily: 'sourceSerif' }}
        >
          {blog.title}
        </Typography>
      </Box>
    </Link>
  );
}
