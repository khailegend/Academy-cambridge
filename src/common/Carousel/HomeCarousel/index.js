import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

export default function HomePageSlider({ item }) {
  const { title, url } = item;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleCheckIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
      return;
    };
    window.addEventListener('resize', handleCheckIsMobile);

    return () => {
      window.removeEventListener('resize', handleCheckIsMobile);
    };
  });
  const positionClassList = [
    'absolute',
    'fit-content',
    'text-white',
    'px-4 py-28',
    ...item.positionClassList,
  ];
  return (
    <>
      <Image
        src={url}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/* <Typography variant="h2" className={positionClassList.join(' ')}>
        {title}
      </Typography> */}
    </>
  );
}
