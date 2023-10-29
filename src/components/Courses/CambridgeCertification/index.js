import CASectionTitle from '@/common/CASectionTitle';
import {Box, Container, Typography} from '@mui/material';
import React from 'react';
import LearningProgress from './LearningProgress';
import CambridgeCertificationCarousel from './CambridgeCertificationCarousel';
import ForwardSection from '@/common/ForwardSection';
import ILCertification from './ILCertification';
import Blogs from '@/common/BlogItem/Blogs';
import {SATBlogs, levelBlogs} from '@/libs/common';

export default function CambridgeCertification() {
  return (
    <>
      <Container maxWidth="lg mt-14 py-2">
        <Box className="flex flex-col justify-center items-center mt-5">

          <Typography
            style={{fontFamily: 'sourceSerif'}}
            className="text-5xl font-semibold leading-[60px]"
          >
            Chinh phục{' '}
            <span className="ca-secondary-color">chứng chỉ Cambridge</span>
          </Typography>


          <CASectionTitle
            label="Mở đường những ước mơ"
            fontPrimary={false}
            classList="font-semibold"
          />
          <Typography className="my-6">
            Ước mơ sẽ thành hiện thực nếu bạn đủ sẵn sàng
          </Typography>
        </Box>
      </Container>
      <Container maxWidth={false}>
        <LearningProgress/>
      </Container>

      <Box className="w-full md:w-4/6 m-auto text-center mt-16">
        <CASectionTitle
          label="Chứng chỉ học thuật Cambridge"
          classList="text-center font-semibold"
          fontPrimary={false}
        />
        <Typography>
          Những chứng chỉ học thuật do Hội đồng Khảo thí Quốc tế (CIE) cấp
          được công nhận rộng rãi trên thế giới và được xem là tấm vé thông
          hành cho học sinh xin vào học tại các trường đại học hàng đầu trên
          thế giới tại các quốc gia như Anh, Mỹ, Úc, Canada, Singapore, Hà
          Lan, New Zealand…
        </Typography>
      </Box>

      <CambridgeCertificationCarousel/>

      <ForwardSection
        title="CHỨNG CHỈ IELTS"
        subtitle="Khóa học - IELTS"
        imgUrl="/images/il-bg.jpeg"
      />
      <ILCertification/>

      <ForwardSection
        title="CHỨNG CHỈ A - LEVEL"
        subtitle="Khóa học - A level"
        imgUrl="/images/a-level.jpeg"
      />

      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-start"
      >
        <Box className="w-full md:w-9/12">
          <Typography>
            Chương trình A Level (Cambridge Advanced) là chương trình Tú tài
            Nâng cao dành cho học sinh 16 – 19 tuổi do Hội đồng Khảo thí Quốc tế
            Cambridge (CAIE) – thành viên của Đại học Cambridge xây dựng.
          </Typography>
          <br/>
          <Typography>
            A levels được công nhận như là "tiêu chuẩn vàng" của giáo dục Trung
            học phổ thông. Kết quả tốt trong kỳ thi A level sẽ giúp bạn đạt được
            cơ hội nhập học vào các trường đại học tốt nhất ở Anh và Hoa Kỳ,
            cũng như các trường đại học trên toàn thế giới.
          </Typography>
          <br/>
          <Typography>
            Học sinh sẽ bắt đầu chương trình A Level sau khi hoàn thành chứng
            chỉ Phổ thông Quốc tế Cambridge IGCSE. Tương tự như IGCSE, việc lựa
            chọn các môn học ở A Level sẽ có ảnh hưởng trực tiếp đến ngành học
            tương lai của các bạn sau này. Mỗi học sinh được quyền chọn 3 - 5
            môn học phù hợp nhất với bản thân.
          </Typography>
        </Box>
      </Container>

      <Blogs blogs={levelBlogs}/>

      <ForwardSection
        title="CHỨNG CHỈ SAT"
        subtitle="Khóa học - SAT"
        imgUrl="/images/sat.jpeg"
      />
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-start"
      >
        <Box className="w-full md:w-9/12">
          <Typography>
            SAT (Scholastic Assessment Test) là một bài kiểm tra chuẩn hóa tiếng
            Anh dùng để đánh giá năng lực học thuật của học sinh trung học và là
            yêu cầu đầu vào cho nhiều đại học và cao đẳng tại Mỹ.
          </Typography>
          <br/>
          <Typography>
            Bài kiểm tra SAT kiểm tra các kỹ năng ngôn ngữ, đọc hiểu, viết và
            toán học của thí sinh. Bài kiểm tra này cũng đánh giá khả năng phân
            tích, suy luận và giải quyết vấn đề của học sinh.
          </Typography>
          <br/>
          <Typography>
            Sở hữu chứng chỉ SAT mang đến lợi thế vượt trội, mở ra cơ hội tiếp
            tục học tập và phát triển trong môi trường giáo dục hàng đầu tại Mỹ.
          </Typography>
        </Box>
      </Container>
      <Blogs blogs={SATBlogs}/>
    </>
  );
}
