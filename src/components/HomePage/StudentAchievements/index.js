import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import StudentAchievementItem from './StudentAchievementItem';
import Carousel from '@/common/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import './index.css';
import { studentAchievementsList } from '@/libs/common';
const carouselOptions = {
  centeredSlides: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    clickable: true,
    el: '.student-achievement-pagination',
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.custom-next-swiper',
    prevEl: '.custom-prev-swiper',
  },
};

export default function StudentAchievements() {
  return (
    <Container maxWidth={false} className="py-12">
      <Box>
        <Box className="w-full flex flex-wrap md:flex-nowrap">
          <Box className="md:w-1/2">
            <Typography className="text-[28px] md:text-5xl font-extrabold leading-[60px]">
              Học tập thường xuyên đem đến{' '}
              <span className="text-[#E19F20]">kết quả vượt bậc</span>
            </Typography>
          </Box>
          <Box className="flex flex-col mt-5 md:w-1/2">
            <Box className="w-full bg-[#0C134F80] h-1"></Box>
            <Typography variant="body1" className="text-left md:text-right">
              Con đường học tập là một hành trình dài xuyên suốt.
              <br /> Cảm ơn bạn đã nỗ lực và chọn Cambridge Academy <br /> đồng
              hành một phần chặng đường.
            </Typography>
          </Box>
        </Box>

        <Carousel carouselOptions={carouselOptions}>
          {studentAchievementsList.map((item) => (
            <SwiperSlide
              key={item.id}
              className="py-4 h-fit"
              style={{ background: 'transparent' }}
            >
              <StudentAchievementItem item={item} />
            </SwiperSlide>
          ))}
        </Carousel>
        <Box className="relative w-1/2 sm:w-1/4 m-auto">
          <Box className="custom-prev-swiper swiper-button-prev !text-black"></Box>
          <Box className="flex justify-center student-achievement-pagination"></Box>
          <Box className="custom-next-swiper swiper-button-next !text-black"></Box>
        </Box>
      </Box>
    </Container>
  );
}
