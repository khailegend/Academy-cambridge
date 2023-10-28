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
  navigation: true,
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
};
export default function CambridgeCertificationCarousel() {
  return (
    <Container
      className="h-300px] md:h-[400px] mt-3 w-full"
      maxWidth={false}
      sx={{
        background: 'url("/images/global-bg.png")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box className="flex h-[300px] md:h-[400px] py-0 md:py-5">
        <Carousel carouselOptions={carouselOptions}>
          {CambridgeCertificationCarouselData.map((item) => (
            <SwiperSlide key={item.id} style={{ background: 'transparent' }}>
              <Box className="py-2 h-fit flex flex-col">
                <Box
                  className="h-[150px] md:h-[200px]"
                  sx={{
                    background: `url("${item.url}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </Box>
                <Typography className="text-md text-center py-2 mb-3 md:mb-5">{item.desc}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
