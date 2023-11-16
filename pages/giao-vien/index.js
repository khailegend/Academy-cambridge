import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { teachers } from '@/constant';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function TeacherPage() {
  return (
    <Container maxWidth={false} sx={{ padding: '0!important' }}>
      <NextSeo
        title="Giáo viên tại Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <Box className="px-2 py-5 md:px-12 md:py-5 md:py-8">
        <Container
          maxWidth={false}
          className="flex flex-wrap justify-center py-2 px-1 gap-2  md:gap-6 "
        >
          <Card
            sx={{ maxWidth: 400 }}
            className="
              flex justify-center bg-white rounded-3xl
              py-1 px-1 items-center 
              md:py-4 md:px-2 
              lg:items-start lg:py-1 lg:px-2
            "
          >
            <CardContent  className="px-2">
              <Typography
                gutterBottom
                component="div"
                className="font-bold text-center text-sm lg:text-xl"
              >
                Tuyển chọn kỹ càng và nghiêm ngặt
                {/* <br /> */}
              </Typography>
              <Typography
                // variant="body2"
                color="text.secondary"
                className="text-center text-xs lg:text-sm"
              >
                Tuyển chọn giáo viên không chỉ giỏi về kiến thức chuyên môn, kỹ
                năng giảng dạy mà còn sự nhiệt huyết và đạo đức công việc.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ maxWidth: 400 }}
            className="
              flex justify-center bg-white rounded-3xl
              py-1 px-1 items-center 
              md:py-4 md:px-2 
              lg:items-start lg:py-1 lg:px-2
            "
          >
            <CardContent className="px-2">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-bold text-center text-sm lg:text-xl"
              >
                Đào tạo và phát triển liên tục
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center text-xs lg:text-sm"
              >
                Giáo viên được đào tạo định kỳ, nâng cao kỹ năng và cập nhật
                chương trình
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ maxWidth: 400 }}
            className="
              flex justify-center bg-white rounded-3xl
              py-1 px-1 items-center 
              md:py-4 md:px-2 
              lg:items-start lg:py-1 lg:px-2
            "
          >
            <CardContent className="px-2">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-bold text-center text-sm lg:text-xl"
              >
                Đánh giá đảm bảo và chất lượng
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center text-xs lg:text-sm"
              >
                Chất lượng giáo viên được giám sát liên tục và đánh giá khách
                quan thông quan phản hồi của phụ huynh, học viên.
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 2 }}
          columns={{ xs: 4, md: 5, lg: 6 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="py-7 px-5"
        >
          {teachers.map((teacher, index) => (
            <Grid
              item
              spacing={{ xs: 2, md: 1, lg:1 }}
              xs={2}
              sm={4}
              md={1}
              key={index}
              direction="row"
              justifyContent="center"
              alignItems="center"
              
            >
              <Image
                width={200}
                height={200}
                src={teacher.url}
                alt={teacher.name}
                className="rounded-tl-lg"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
