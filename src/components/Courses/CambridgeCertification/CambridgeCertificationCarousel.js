import Carousel from '@/common/Carousel/Carousel';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { CambridgeCertificationCarouselData } from '@/libs/common';

const carouselOptions = {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  autoplay: false,
  pagination: {
    clickable: true,
  },
  navigation: true
};
export default function CambridgeCertificationCarousel() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: 'url("/images/global-bg.png")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: '70vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box className="flex h-full">
        <Carousel carouselOptions={carouselOptions}>
          {CambridgeCertificationCarouselData.map((item) => (
            <SwiperSlide key={item.id} style={{ background: 'transparent' }}>
              <Box className="py-4 h-fit flex flex-col" sx={{ width: 348 }}>
                <Box
                  sx={{ width: 348, height: 197, overflow: 'hidden' }}
                  className="mb-8"
                >
                  <Image
                    src={item.url}
                    alt={item.name}
                    width={348}
                    height={197}
                  />
                </Box>
                <Typography>{item.desc}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
