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
          className="flex-wrap justify-center gap-4  md:gap-10 py-14 md:flex "
        >
          <Card
            sx={{ maxWidth: 400 }}
            className="py-1 px-1 my-2 md:py-4 md:px-2 bg-white rounded-3xl flex items-center justify-center"
          >
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                className="font-bold text-center lg:text-lg"
              >
                Tuyển chọn kỹ càng và nghiêm ngặt
                {/* <br /> */}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center text-xs"
              >
                Tuyển chọn giáo viên không chỉ giỏi về kiến thức chuyên môn, kỹ
                năng giảng dạy mà còn sự nhiệt huyết và đạo đức công việc.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ maxWidth: 400 }}
            className="py-4 px-4 bg-white rounded-3xl flex items-center justify-center"
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-bold text-center"
              >
                Đào tạo và phát triển liên tục
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center"
              >
                Giáo viên được đào tạo định kỳ, nâng cao kỹ năng và cập nhật
                chương trình
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ maxWidth: 400 }}
            className="py-4 px-4 bg-white rounded-3xl flex items-center justify-center"
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-bold text-center"
              >
                Đánh giá đảm bảo và chất lượng
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center"
              >
                Chất lượng giáo viên được giám sát liên tục và đánh giá khách
                quan thông quan phản hồi của phụ huynh, học viên.
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 5, md: 5 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="pt-10"
        >
          {teachers.map((teacher, index) => (
            <Grid
              item
              spacing={{ xs: 2, md: 1 }}
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
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
