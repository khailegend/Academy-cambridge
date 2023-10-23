import React from 'react';
import CardItem from './CardItem';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { magicCardContent as data } from '@/libs/common';

export default function MagicCard() {
  function handleClick(id) {
    const allEl = document.querySelectorAll('.card-content');
    const el = document.querySelector(`#card-item-${id}`);
    const child = el.querySelector('.card-content');

    const allCard = document.querySelectorAll('.magic-card');
    console.log(allCard);
    allCard.forEach((item, index) => {
      item.classList.remove('magic-card-active');
    });
    el.classList.add('magic-card-active');

    allEl.forEach((item, index) => {
      item.classList.add('card-item-hide');
    });
    child.classList.remove('card-item-hide');
  }

  return (
    <Container maxWidth="lg" className="px-0 py-12 md:p-auto">
      <Box className="flex flex-col-reverse md:flex-row justify-between items-start gap-x-12 py-12">
        <Box className="magic-card-wrapper">
          {data.map((item, index) => {
            return (
              <CardItem
                key={item.id}
                index={index}
                props={item}
                handleClick={handleClick}
                style={{ position: 'relative', top: '-30px' }}
                className="relative"
              />
            );
          })}
        </Box>
        <Box className="hidden md:flex justify-center items-center">
          <Image
            src="/images/magic-card-bg.jpeg"
            width={582}
            height={432}
            alt="book"
          />
        </Box>
      </Box>
    </Container>
  );
}
