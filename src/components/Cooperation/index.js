import Carousel from '@/common/Carousel/Carousel';
import {Box, Container} from '@mui/material';
import React from 'react';
import {SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import './index.css';

import Marquee from "react-fast-marquee";


const list = [
  {
    name: 'BM',
    url: '/images/cooperation/bm.svg',
  },
  {
    name: 'DC',
    url: '/images/cooperation/dc.webp',
  },
  {
    name: 'MC',
    url: '/images/cooperation/mc.png',
  },
  {
    name: 'Metro',
    url: '/images/cooperation/metro.svg',
  },
];

export default function Cooperation() {
  const carouselOptions = {
    autoplay: {
      delay: 1500,
    },
  };

  return (
    <>
      <div
        className="web hidden md:block py-4"
      >
        <Marquee
          gradient={true}
          loop={0}
        >
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/idp.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/bgddt.png"
              alt="Bộ giáo dục và đào tạo TPHCM"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/britishcouncil.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ca_assessment.png"
              alt="cambridge academy assessment"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/rmit.png"
              alt="RMIT University"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ngoai_thuong.png"
              alt="Đại học ngoại thương"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/HCMIU.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/vin.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
        </Marquee>
      </div>

      <div
        className="mobile md:hidden py-4"
      >
        <Marquee
          gradient={true}
          loop={0}
        >
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/idp.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/bgddt.png"
              alt="Bộ giáo dục và đào tạo TPHCM"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/britishcouncil.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ca_assessment.png"
              alt="cambridge academy assessment"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/rmit.png"
              alt="RMIT University"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ngoai_thuong.png"
              alt="Đại học ngoại thương"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/HCMIU.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/vin.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
        </Marquee>
      </div>
    </>
  );
}
