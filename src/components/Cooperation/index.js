import Carousel from '@/common/Carousel/Carousel';
import { Box, Container } from '@mui/material';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
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
      <Marquee
        gradient={true}
        loop={0}
      >
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/idp.png"
            alt="idp"
            width={219}
            height={90}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/bgddt.png"
            alt="Bộ giáo dục và đào tạo TPHCM"
            width={162}
            height={163}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/britishcouncil.png"
            alt="idp"
            width={262}
            height={75}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/ca_assessment.png"
            alt="cambridge academy assessment"
            width={254}
            height={148}
          />
        </Box>{' '}
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/rmit.png"
            alt="RMIT University"
            width={218}
            height={77}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/ngoai_thuong.png"
            alt="Đại học ngoại thương"
            width={170}
            height={170}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/HCMIU.png"
            alt="idp"
            width={180}
            height={180}
          />
        </Box>
        <Box className="py-2 px-4">
          <Image
            src="/images/logos/vin.png"
            alt="idp"
            width={177}
            height={142}
          />
        </Box>
    </Marquee>

      <Container
        maxWidth={false}
        style={{ background: '#D9D9D94D' }}
        className="flex md:hidden flex-wrap justify-center gap-4 md:gap-10 py-14"
      >
        <Carousel carouselOptions={carouselOptions}>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/idp.png"
                alt="idp"
                width={219}
                height={90}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/bgddt.png"
                alt="Bộ giáo dục và đào tạo TPHCM"
                width={162}
                height={163}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/britishcouncil.png"
                alt="idp"
                width={262}
                height={75}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/ca_assessment.png"
                alt="cambridge academy assessment"
                width={254}
                height={148}
              />
            </Box>{' '}
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/rmit.png"
                alt="RMIT University"
                width={218}
                height={77}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/ngoai_thuong.png"
                alt="Đại học ngoại thương"
                width={170}
                height={170}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/HCMIU.png"
                alt="idp"
                width={180}
                height={180}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="py-12 px-8 slide bg-white rounded-3xl flex items-center justify-center w-[288px] h-[263px]">
              <Image
                src="/images/logos/vin.png"
                alt="idp"
                width={177}
                height={142}
              />
            </Box>
          </SwiperSlide>
        </Carousel>
      </Container>
    </>
  );
}
