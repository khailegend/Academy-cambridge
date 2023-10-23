import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import './style.css';
// import required modules
import * as swiperModules from 'swiper';

//check this document:
//https://v8.swiperjs.com/react

export default function Carousel({ children, carouselOptions = {} }) {
  return (
    <>
      <Swiper
        loop={true}
        direction={carouselOptions.direction ?? 'horizontal'}
        modules={[
          swiperModules.Autoplay,
          swiperModules.Pagination,
          swiperModules.Navigation,
          swiperModules.Mousewheel,
        ]}
        autoplay={
          carouselOptions.autoplay ?? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        }
        pagination={
          carouselOptions?.pagination ?? {
            clickable: true,
            el: '.swiper-custom-pagination',
          }
        }
        mousewheel={carouselOptions?.mousewheel ?? false}
        navigation={carouselOptions?.navigation ?? false}
        spaceBetween={carouselOptions?.spaceBetween ?? 0}
        slidesPerView={carouselOptions?.slidesPerView ?? 2}
        slidesPerGroup={carouselOptions?.slidesPerGroup ?? 2}
        centeredSlides={carouselOptions?.centeredSlides ?? true}
        speed={carouselOptions?.speed || 1000}
        breakpoints={{
          960: {
            slidesPerView: carouselOptions.slidesPerView || 3,
            spaceBetween: 20,
          },
          720: carouselOptions._720 ?? {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
        }}
        className="mySwiper relative"
      >
        {children}
      </Swiper>
      <div className="swiper-custom-pagination" />
    </>
  );
}
