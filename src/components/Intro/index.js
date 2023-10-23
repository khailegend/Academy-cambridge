import CASectionTitle from '@/common/CASectionTitle';
import HomeCarousel from '@/common/Carousel';
import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PlaneFly = styled.div`
  @media (max-width: 768px) {
    & svg {
      width: 65%;
    }
  }
`;
export default function Intro() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleCheckIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
      return;
    };
    window.addEventListener('resize', handleCheckIsMobile);
    handleCheckIsMobile();
    return () => {
      window.removeEventListener('resize', handleCheckIsMobile);
    };
  });
  return (
    <>
      <Container maxWidth={false} className="px-0 pb-16">
        <Box
          sx={{
            height: 275,
            '@media (min-width: 768px)': {
              height: '50vh',
            },
            '@media (min-width: 1023px)': {
              height: '85vh',
            },
            padding: 0,
          }}
        >
          <HomeCarousel />
        </Box>
        <Container
          maxWidth={false}
          className="bg-[#0C134F] flex flex-col pt-8 pb-12 items-center m-0 w-full relative"
        >
          <Box className="flex flex-col text-center">
            <CASectionTitle label="CAMBRIDGE ACADEMY" classList="text-white" />
            <CASectionTitle
              label="cùng học sinh chinh phục từng cột mốc tri thức"
              classList="text-white"
            />
          </Box>
          <Box className="absolute bottom-[-25px] md:right-[10%] hover:scale-115 transition-all">
            <Link
              style={{ boxShadow: '0px 10px 5px 0px rgba(0, 0, 0, 0.5)' }}
              href="/dang-ky-khoa-hoc"
              className="bg-[#E19F20] text-white py-3 px-6 uppercase font-black text-[28px] md:text-3xl rounded "
            >
              KIỂM TRA NĂNG LỰC
            </Link>
          </Box>
        </Container>
      </Container>
      <Container maxWidth={false} className="relative p-0">
        <Container
          maxWidth="lg"
          className="flex flex-col md:flex-row justify-between py-16"
        >
          <Box className="w-full md:w-1/2">
            <CASectionTitle
              fontPrimary={false}
              label="Chúng tôi cung cấp lớp học cá nhân hoá, gia sư phù hợp với mục tiêu của từng học viên. "
            />
            <Typography className="text-justify">
              Chúng tôi chuẩn bị hành trang kiến thức cho học viên đáp ứng yêu
              cầu của các trường Đại học hàng đầu tại Việt Nam, Anh Quốc, Mỹ,
              Úc, Canada,...
            </Typography>
          </Box>

          <Box className="flex md:block justify-center">
            <Image
              src="/images/homepage/intro-2.png"
              width={472}
              height={522}
              alt="Cung cấp lớp học cá nhân hoá, phù hợp với mục tiêu của từng học viên."
            />
          </Box>
        </Container>
        <PlaneFly className="absolute bottom-16 max-w-[639px]">
          <Box className="w-auto relative">
            <svg
              width="639"
              height="112"
              viewBox="0 0 639 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                d="M1 111.5C42 92.6667 139.705 56.6751 180.5 63C245 73 267.448 86.2983 303 95.5C388 117.5 438.607 94.643 480.5 82.5C515 72.5 609 18.8333 638.5 1"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8 8"
              />
            </svg>
            <Box
              sx={{
                transform: 'rotate(-7.652deg)',
              }}
              className="relative md:absolute top-0 right-0 md:top-[-80px] md:right-[-65px]"
            >
              <Image
                src="/images/plane.svg"
                width={148}
                height={100}
                alt="plane"
              />
            </Box>
          </Box>
        </PlaneFly>
      </Container>
    </>
  );
}
