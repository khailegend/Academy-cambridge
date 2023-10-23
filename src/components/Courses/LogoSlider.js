import CASectionTitle from '@/common/CASectionTitle';
import Carousel from '@/common/Carousel/Carousel';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const carouselOptions = {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: false,
  loop: true,
  autoplay: {
    delay: 2000,
    reverseDirection: true,
    disableOnInteraction: false,
  },
};

export default function LogoSlider({ list }) {
  return (
    <Container maxWidth="lg">
      <Box
        className="flex justify-start md:justify-around items-center my-8 md:py-24"
        sx={{
          flexDirection: 'column',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
          <Carousel carouselOptions={carouselOptions}>
            {list.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Box
                    sx={{
                      width: 300,
                      height: 300,
                    }}
                    className="flex justify-center items-center md:flex-col-reverse"
                  >
                    <Image
                      src={item.url}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Carousel>
        </Box>
        <Box className="text-center md:text-left">
          <CASectionTitle label="ĐỪNG BỎ QUA" classList="text-red-500" />
          <CASectionTitle label="CƠ HỘI ĐẶT CHÂN" />
          <CASectionTitle label="VÀO NGÔI TRƯỜNG MƠ ƯỚC " />
        </Box>
      </Box>
    </Container>
  );
}
