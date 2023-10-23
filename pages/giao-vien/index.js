import React from 'react';
import Grid from "@mui/material/Grid";
import {Box, Container, Typography} from "@mui/material";
import {teachers} from "@/constant";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export default function Tutor() {
  return (
    <Box className="px-12 py-8">
      <Container
        maxWidth={false}
        className="flex-wrap justify-center gap-4 md:gap-10 py-14 md:flex"
      >
        <Card sx={{ maxWidth: 400 }} className="py-4 px-4 bg-white rounded-3xl flex items-center justify-center">
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="font-bold text-center">
              Tuyển chọn kỹ càng và<br/>nghiêm ngặt
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-center">
              Tuyển chọn giáo viên không chỉ giỏi về kiến thức chuyên môn, kỹ năng giảng dạy mà còn sự nhiệt huyết và đạo đức công việc.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 400 }} className="py-4 px-4 bg-white rounded-3xl flex items-center justify-center">
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="font-bold text-center">
              Đào tạo và phát triển liên tục
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-center">
              Giáo viên được đào tạo định kỳ, nâng cao kỹ năng và cập nhật chương <trình className=""></trình>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 400 }} className="py-4 px-4 bg-white rounded-3xl flex items-center justify-center">
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="font-bold text-center">
              Đánh giá đảm bảo và chất lượng
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-center">
              Chất lượng giáo viên được giám sát liên tục và đánh giá khách quan thông quan phản hồi của phụ huynh, học viên.
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Grid
        container spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 5, md: 5 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="pt-10"
      >
        {teachers.map((teacher, index) => (
          <Grid item spacing={{ xs: 2, md: 1 }} xs={2} sm={4} md={1} key={index}
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
  )
}
