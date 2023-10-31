import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CASectionTitle from '@/common/CASectionTitle';
import ImprovementCommit from './ImprovementCommit';
import QualityCommit from './QualityCommit';
import DedicateCommit from './DedicateCommit';

export default function OurQuality() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElementPosition =
        document.getElementById('ca-slogan').offsetTop - 300;
      const position = window.pageYOffset;
      if (sectionElementPosition <= position) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth={false} className="py-16">
      <Box className="flex justify-center">
        <Image
          src="/images/five-star-rate.svg"
          width={200}
          height={40}
          alt="Cambridge Academy đảm bảo chất lượng"
        />
      </Box>
      <CASectionTitle
        label="Cambridge Academy đảm bảo chất lượng"
        classList="text-center"
      />


      <Box className="overflow-x-auto">
        <Box className="flex justify-between py-12 md:py-16 flex-nowrap">
          <ImprovementCommit />
          <QualityCommit />
          <DedicateCommit />
        </Box>
      </Box>


      <Box className="relative py-5 md:py-8 lg:py-10" id="ca-slogan">
        <Box
          sx={{
            background:
              'linear-gradient(270deg, #FFB84C 0%, rgba(255, 255, 255, 0.00) 100%)',
            top: '50%'
          }}
          className={`hidden md:block  md:translate-y-[-25%] z-[1] text-5xl transition-all duration-1000 text-center md:text-left absolute text-white font-bold w-full lg:w-1/2 py-16 px-12 leading-[60px] md:z-[1] ${
            isShow ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <CASectionTitle fontPrimary={false} label="Cambridge Academy" />
          <CASectionTitle fontPrimary={false} label="Sự kết hợp giữa" />
          <CASectionTitle fontPrimary={false} label="sứ mệnh giáo dục" />
          <CASectionTitle fontPrimary={false} label="và tình yêu thương" />
        </Box>

        <Box className="flex justify-end relative">
          <Image
            src="/images/homepage/ca-quality.png"
            width={811}
            height={611}
            alt="Chất lượng đi đầu, tâm huyết theo sau"
          />
        </Box>
        <Box
          sx={{
            background:
              'linear-gradient(180deg, #FFB84C 0%, rgba(255, 255, 255, 0.00) 100%)',
          }}
          className={`block transform translate-y-[-50%] md:hidden absolute text-5xl transition-all duration-1000 text-center text-white font-bold w-full lg:w-1/2 py-8 px-6 leading-[60px] md:z-[1] ${
            isShow ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <CASectionTitle fontPrimary={false} label="Cambridge Academy" />
          <CASectionTitle fontPrimary={false} label="Sự kết hợp giữa" />
          <CASectionTitle fontPrimary={false} label="sứ mệnh giáo dục" />
          <CASectionTitle fontPrimary={false} label="và tình yêu thương" />
        </Box>
      </Box>
    </Container>
  );
}
