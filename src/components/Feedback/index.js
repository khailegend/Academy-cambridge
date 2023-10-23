import * as React from 'react';

import ReviewItem from './FeedbackItem';
import Carousel from '@/common/Carousel/Carousel';
import { Box, Container, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CASectionTitle from '@/common/CASectionTitle';
import { feedbackList as reviewList } from '@/libs/common';

const carouselOptions = {
  loop: true,
  centeredSlides: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  autoplay: false,
  pagination: {
    clickable: true,
    // el: '.student-achievement-pagination',
  },
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  navigation: false,
  navigation: {
    nextEl: '.custom-next-swiper',
    prevEl: '.custom-prev-swiper',
  },
  _720: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
  },
};

export default function FeedbackList() {
  return (
    <Container maxWidth={false} className="py-12 relative">
      <Box sx={{ width: '100%' }} className="feedback-carousel">
        <Box>
          <CASectionTitle
            label="Phụ huynh cùng Cambridge Academy"
            classList="text-center"
          />
          <CASectionTitle
            label="giúp con khơi dậy say mê học tập"
            classList="text-center"
          />
        </Box>
        <Container maxWidth="lg">
          <Carousel carouselOptions={carouselOptions}>
            {reviewList.map((reviewItem) => (
              <SwiperSlide
                key={reviewItem.id}
                className="py-4"
                style={{ background: 'transparent' }}
              >
                <ReviewItem reviewItem={reviewItem} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Container>
      </Box>
      <Box className="absolute top-[55%] left-0 right-0 w-11/12 m-auto">
        <Box className="custom-prev-swiper swiper-button-prev !text-black"></Box>
        <Box className="custom-next-swiper swiper-button-next !text-black"></Box>
      </Box>
    </Container>
  );
}
