import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SchoolTable from './SchoolTable';
import ForwardSection from '@/common/ForwardSection';

export default function ILCertification() {
  return (
    <>
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-between"
      >
        <Box className="w-full md:w-[60%]">
          <Typography>
            Chứng chỉ IELTS (International English Language Testing System) là
            một trong những chứng chỉ phổ biến nhất thế giới hiện nay. Đặc biệt
            tại Việt Nam, mỗi năm hàng nghìn thí sinh tham gia kỳ thi chứng chỉ
            IELTS với nhiều mục đích khác nhau, nổi bật nhất là dùng để nhập học
            đại học. Chứng chỉ IELTS mở ra cơ hội đặt chân vào các trường đại
            học hàng đầu Việt Nam, cũng như du học nước ngoài.
          </Typography>
          <br />
          <Typography>
            Để tạo ra một tương lai rộng mở và tươi sáng cho học sinh, học viên
            nên bắt đầu học chứng chỉ IELTS từ lớp 7. Đây là thời gian thích hợp
            nhất để xây dựng nền tảng vững chắc cho những kỹ năng Tiếng Anh của.
            Đặc biệt, trong khoảng thời gian này, học viên có đủ thời gian để
            chuẩn bị mình một cách hoàn thiện và hiệu quả nhất cho kỳ thi IELTS,
            nhằm đạt được số điểm cao nhất có thể.
          </Typography>
        </Box>
        <Box className="m-auto md:m-0">
          <Image
            src="/images/ILs.png"
            alt="ca-primary"
            width={345}
            height={466}
          />
        </Box>
      </Container>
      <Container maxWidth="lg" align="center">
        <Typography className="my-4">
          Dưới đây là những trường Đại học tại Việt Nam và Quốc Tế có thể dùng
          chứng chỉ IELTS để xét tuyển thẳng:
        </Typography>
        <Box sx={{ maxWidth: '808px' }}>
          <SchoolTable />
        </Box>
      </Container>
    </>
  );
}
