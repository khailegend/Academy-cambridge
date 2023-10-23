import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import required modules
import * as swiperModules from 'swiper';
import HomePageSlider from './HomeCarousel';

//check this document:
//https://v8.swiperjs.com/react
const carouselOptions = {
  loop: true,
  centeredSlides: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    // el: '.student-achievement-pagination',
  },
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  navigation: true,
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
const sliderList = [
  {
    id: 1,
    title: 'Placing a positioned element',
    url: '/images/homepage/intro.png',
    positionClassList: ['top-0', 'left-0'],
  },
  {
    id: 2,
    title:
      'To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.',
    url: '/images/homepage/Homepage-1.png',
    positionClassList: ['top-0', 'right-0'],
  },
  {
    id: 3,
    title:
      'For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.',
    url: '/images/homepage/Homepage-2.png',
    positionClassList: ['bottom-0', 'left-0'],
  },
  {
    id: 4,
    title:
      'For more control, you can also use the LTR and RTL modifiers to conditionally apply specific styles depending on the current text direction.',
    url: '/images/homepage/Homepage3.png',
    positionClassList: ['bottom-0', 'right-0'],
  },
];
export default function HomeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={carouselOptions.spaceBetween ?? 30}
        centeredSlides={carouselOptions.centeredSlides ?? true}
        navigation={carouselOptions.navigation ?? true}
        autoplay={
          carouselOptions.autoplay ?? {
            delay: 3000,
            disableOnInteraction: false,
          }
        }
        pagination={
          carouselOptions.pagination ?? {
            clickable: true,
          }
        }
        speed={carouselOptions.speed || 1000}
        className="mySwiper relative p-0"
        modules={
          carouselOptions.modules ?? [
            swiperModules.Autoplay,
            swiperModules.Pagination,
            swiperModules.Navigation,
          ]
        }
      >
        {sliderList.map((item, index) => (
          <SwiperSlide
            key={index}
            className={carouselOptions.classList?.join(' ')}
          >
            <HomePageSlider item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
