import { Box, Collapse, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import './index.css';

const list = [
  {
    id: 1,
    content:
      'Tuyển chọn giáo viên không chỉ giỏi về kiến thức chuyên môn, kỹ năng giảng dạy mà còn sự nhiệt huyết và đạo đức công việc. ',
    title: 'Tuyển chọn kỹ càng và nghiêm ngặt',
  },
  {
    id: 2,
    content:
      'Giáo viên được đào tạo định kỳ, nâng cao kỹ năng và cập nhật chương trình. ',
    title: 'Đào tạo và phát triển liên tục',
  },
  {
    id: 3,
    content:
      'Chất lượng giáo viên được giám sát liên tục và đánh giá khách quan thông quan phản hồi của phụ huynh, học viên. ',
    title: 'Đánh giá và đảm bảo chất lượng',
  },
];

const Item = ({ data }) => {
  return (
    <Box
      className="text-center cursor-pointer p-12 bg-white relative h-auto wrapper-item"
      sx={{
        width: 260,
        height: 188,
        boxShadow: '3px 8px 10px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box className="">
        <Typography className="text-2xl font-bold flex justify-center items-center h-full">
          {data.title}
        </Typography>
      </Box>

      <Box className="item-content overflow-hidden">
        <Typography>{data.content}</Typography>
      </Box>

      <Box className="cursor-pointer expand-more absolute right-[-5px] bottom-[-30px] group">
        <Image
          src="/images/show-more-v2.png"
          width={68}
          height={68}
          alt="show more"
        />
        <Box className="no-expand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default function YourPartner() {
  return (
    <Container maxWidth={false} className="p-0 h-auto md:h-[800px]">
      <Box className="py-12">
        <Box className="w-full">
          <Typography className="text-[28px] md:text-5xl font-extrabold leading-[60px] text-center">
            <span className="text-[#E19F20]">Giáo viên</span> tại Cambridge
            Academy
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
          className="pt-10"
        >
          <Box sx={{ height: 375 }} className="relative">
            <Image
              src="/images/homepage/ca-teacher.png"
              layout="fill"
              objectFit="cover"
              alt="Giáo viên của CA"
            />
          </Box>
          <Container maxWidth="lg">
            <Box
              className="flex justify-around items-start relative gap-10 flex-wrap md:flex-nowrap"
              sx={{ bottom: '60px' }}
            >
              {list.map((data) => (
                <Item key={data.id} data={data} />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}
