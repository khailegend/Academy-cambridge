import CASectionTitle from '@/common/CASectionTitle';
import CoursesLayout from '@/components/Courses/CoursesLayout';
import LogoSlider from '@/components/Courses/LogoSlider';
import SchoolTable from '@/components/Courses/StandardProgram/SchoolTable';
import { schoolListLogo, standardSchoolListLogo } from '@/libs/common';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const data1 = [
  'Học kèm 1-1 cùng với Gia sư giàu kinh nghiệm',
  'Tư vấn và kiểm tra đầu vào miễn phí tại nhà',
  'Lộ trình học tập phù hợp và có mục tiêu rõ ràng',
  'Gia sư chủ động củng cổ kiến thức, tăng cường ôn tập trước mỗi kỳ thi',
  'Quá trình học tập trên lớp được theo dõi sát sao',
  'Cập nhật báo cáo học tập hàng tuần',
];
const data2 = [
  'Ôn luyện tham gia các kỳ thi Học sinh Giỏi các cấp',
  'Nâng cao điểm thi, làm đẹp học bạ ',
  'Nắm vững kiến thức cơ bản và trọng tâm trong từng môn học ',
  'Giải tốt các bài tập nâng cao ',
  'Cải thiện khả năng phân bổ thời gian làm bài thi',
];

export default function StandardPrograms() {
  return (
    <CoursesLayout>
      <LogoSlider list={standardSchoolListLogo} />
      <Box className="text-center pt-12 pb-24">
        <CASectionTitle
          label="Nâng cao điểm số - Tiến bộ vượt bậc "
          fontPrimary={false}
        />
        <Typography className="hidden md:block">
          Các khóa học dành cho học viên từ lớp 1 đến lớp 12 muốn đạt điểm 8+,
          9+ các
        </Typography>
        <Typography className="hidden md:block">
          bài kiểm tra tại lớp và nâng cao thành tích năm học theo chương trình
          chuẩn{' '}
        </Typography>
        <Typography className="hidden md:block">
          Bộ Giáo dục & Đào tạo
        </Typography>
        <Typography className="block md:hidden">
          Các khóa học dành cho học viên từ lớp 1 đến lớp 12 muốn đạt điểm 8+,
          9+ các bài kiểm tra tại lớp và nâng cao thành tích năm học theo chương
          trình chuẩn Bộ Giáo dục & Đào tạo
        </Typography>
      </Box>
      <Container maxWidth={false} className="py-24">
        <Box className="relative flex flex-col md:flex-row justify-around items-center w-full">
          <Box className="relative hidden md:block">
            <Image
              src="/images/subjects.png"
              width={283}
              height={283}
              alt="Chương trình Giáo dục phổ thông"
              className="hidden md:block"
              style={{
                transform: 'rotate(-18.604deg)',
                borderRadius: '30px',
              }}
            />
            <Box className="absolute" sx={{ right: '-50%', top: '20%' }}>
              <Image
                src="/images/subject-2.png"
                width={283}
                height={283}
                alt="Chương trình Giáo dục phổ thông"
                className="hidden md:block"
                style={{ transform: 'rotate(8.728deg)', borderRadius: '30px' }}
              />
            </Box>
          </Box>

          <Box
            className="relative flex md:hidden"
            sx={{ paddingBottom: '24px' }}
          >
            <Box>
              <Image
                src="/images/subjects.png"
                width={180}
                height={180}
                alt="Chương trình Giáo dục phổ thông"
                style={{
                  transform: 'rotate(-18.604deg)',
                  borderRadius: '30px',
                }}
              />
            </Box>
            <Box>
              <Image
                src="/images/subject-2.png"
                width={180}
                height={180}
                alt="Chương trình Giáo dục phổ thông"
                style={{ transform: 'rotate(8.728deg)', borderRadius: '30px' }}
              />
            </Box>
          </Box>
          <Box className={'w-full md:w-1/2 flex flex-col gap-4'}>
            {data1.map((item, index) => {
              return (
                <Box key={index} className="flex gap-2 w-full">
                  <Box className="flex justify-center items-center">
                    <Image
                      src="/images/checked.png"
                      width={22}
                      height={22}
                      alt="checked"
                    />
                  </Box>
                  <Typography>{item}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>

      <Container maxWidth={false} className="py-24">
        <Box
          className="relative flex justify-around items-center w-full"
          sx={{
            flexDirection: 'column',
            '@media (min-width: 768px)': {
              flexDirection: 'row-reverse',
            },
          }}
        >
          <Image
            src="/images/award.jpeg"
            width={492}
            height={277}
            alt="Chương trình Giáo dục phổ thông"
            style={{
              borderRadius: '30px',
            }}
          />
          <Box className="flex flex-col gap-4">
            {data2.map((item, index) => {
              return (
                <Box
                  key={index}
                  className="flex gap-2 w-full"
                  sx={{
                    flexDirection: 'row',
                    '@media (min-width: 768px)': {
                      flexDirection: 'row-reverse',
                    },
                  }}
                >
                  <Box className="flex justify-center items-center">
                    <Image
                      src="/images/checked.png"
                      width={22}
                      height={22}
                      alt="checked"
                    />
                  </Box>
                  <Typography>{item}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
      <Container maxWidth={false}>
        <CASectionTitle
          label="Kỳ thi đánh giá năng lực"
          fontPrimary={false}
          classList="text-red-500"
        />
        <CASectionTitle
          label="Thêm một cơ hội đặt chân vào trường Đại học mơ ước"
          fontPrimary={false}
        />
        <Box
          className="flex flex-col md:flex-row justify-center"
          sx={{ gap: '60px' }}
        >
          <Box>
            <Image
              src="/images/dhqgTPHCM.png"
              width={441}
              height={330}
              alt="đại học quốc gia"
            />
            <Image
              src="/images/dhqg-1.jpeg"
              width={441}
              height={330}
              alt="đại học quốc gia"
            />
          </Box>
          <Box className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <Typography>
              Kỳ thi đánh giá năng lực là kỳ thi do Bộ Giáo dục & Đào tạo kết
              hợp cùng Đại học Quốc Gia tổ chức.
            </Typography>

            <Typography>
              Kỳ thi nhằm đánh giá kiến thức và kỹ năng của thí sinh. Nội dung
              thường bao gồm các kiến thức và tư duy từ nhiều lĩnh vực khác
              nhau, chẳng hạn như toán học, khoa học tự nhiên, ngôn ngữ, logic,
              suy luận,...
            </Typography>
            <br />
            <Typography>
              Kỳ thi này được tổ chức trước kỳ thi Trung học Phổ Thông Quốc gia.
              Trong khi chờ đợi kỳ thi Trung học Phổ Thông Quốc gia, thí sinh có
              thể tham gia kỳ thi Đánh giá năng lực. Điều này cũng đồng nghĩa
              rằng phương thức thi Đánh giá năng lực sẽ giúp các thí sinh tăng
              cơ hội được vào các trường Đại học mình mong muốn.
            </Typography>
            <br />
            <Typography>
              Hiện nay, các trường Đại học hàng đầu cả nước đều có tiêu chí
              tuyển sinh cho thí sinh tham gia kỳ thi Đánh giá năng lực. Đặc
              biệt là các trường Đại học đang có xu hướng gia tăng chỉ tiêu cho
              phương thức xét tuyển này.
            </Typography>
            <br />
            <Typography>
              Kết quả của kỳ thi Đánh giá năng lực tạo ưu thế nổi bật cho học
              sinh trong việc xét tuyển vào các trường Đại học hàng đầu cả nước.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" className="pt-8 pb-20">
        <SchoolTable />
      </Container>
    </CoursesLayout>
  );
}
