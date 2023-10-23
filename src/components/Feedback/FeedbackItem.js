import * as React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import RatingStars from '@/common/RatingStars';
import { Box } from '@mui/material';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageReviewWrapper = styled.div`
  margin: auto;
  max-height: 600px;
  overflow: hidden;
  border-radius: 20px;
`;
const CardWrapper = styled.div``;

export default function FeedbackItem({ reviewItem }) {
  return (
    <CardWrapper className="group cursor-default tracking-wide h-fit relative">
      <Box
        sx={{ maxWidth: 546 }}
        className="shadow-[0px_4px_31px_0px_rgba(0, 0, 0, 0.15)] transition-all border-2 border-black  p-3 pb-2 rounded-[20px]"
      >
        <Box className="flex gap-4">
          <ImageWrapper className="relative border-solid w-fit rounded-[50%] flex justify-center items-center">
            <Image
              src={reviewItem.avatarUlr ?? '/images/avatar/unknown-user.png'}
              alt={reviewItem.parentName}
              width={80}
              height={80}
              className="rounded-[50%] block"
            />
          </ImageWrapper>
          <Box>
            <Typography align="left" variant="h6" className="font-bold pt-2">
              {reviewItem.parentName}
            </Typography>
            <Typography align="left" className="m-0">
              {reviewItem.job}
            </Typography>
            <RatingStars
              rating={reviewItem.rating}
              type="readOnly"
              classStyle="justify-start"
            />
          </Box>
        </Box>
        <Box className="px-0">
          <Typography align="left" className="p-0" sx={{ minHeight: 90 }}>
            {reviewItem.comment}
          </Typography>
        </Box>
        <Box className="flex justify-center gap-2 pb-4">
          {reviewItem.feedBackMsg.map((item, index) => (
            <ImageReviewWrapper key={index} className="">
              <Image
                src={item}
                width={221}
                height={376}
                alt="Feedback từ phụ huynh"
                className="rounded-lg"
                style={{ border: '1px solid rgba(0, 0, 0, 0.50)' }}
              />
            </ImageReviewWrapper>
          ))}
        </Box>
      </Box>
    </CardWrapper>
  );
}
