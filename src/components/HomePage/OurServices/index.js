import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import StandardProgram from './StandardProgram';
import CambridgePrograms from './CambridgePrograms';
import CertificationTrain from './CertificationTrain';
import EntranceTest from './EntranceTest';
import 'public/assets/css/flip-card.css';
import ProgramInfo from './ProgramInfo';
import './index.css';
export default function OurServices() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #0C134F 50%, rgba(255, 255, 255, 0.00) 100%);',
      }}
    >
      <Container maxWidth="lg" className="flex flex-wrap py-12 gap-y-6">
        <Box className="flex flex-wrap md:flex-nowrap gap-6 w-full justify-between">
          <Box className="w-full ca-course group" id="card-2">
            <Box className="relative h-full overflow-hidden">
              <CambridgePrograms />
              <ProgramInfo
                info="Ngôn ngữ không còn là trở ngại khi con bước đầu học chương trinh Cambridge."
                className="ca-course-item absolute bg-white text-[#0C134F]"
                url="/khoa-hoc/chuong-trinh-cambridge"
              />
            </Box>
          </Box>
          <Box className="w-full md:w-2/3 ca-course group" id="card-1">
            <Box className="relative overflow-hidden">
              <StandardProgram />
              <ProgramInfo
                info="Học sinh được khuyến khích đặt ra nhiều câu hỏi và đi sâu vào kiến thức."
                className="bg-white ca-course-item text-[28px] ca-course-item text-[#0C134F] absolute"
                url="/khoa-hoc/chuong-trinh-pho-thong"
              />
            </Box>
          </Box>
        </Box>

        <Box className="flex flex-wrap md:flex-nowrap gap-6 w-full">
          <Box
            className="w-full md:w-2/3 ca-course overflow-hidden group"
            id="card-3"
          >
            <Box className="relative">
              <CertificationTrain />
              <ProgramInfo
                info="Giúp con vươn lên từng cấp độ để trở thành nhà vô địch."
                className="bg-white text-[#0C134F] absolute ca-course-item group-hover:flex"
                url="/khoa-hoc/chung-chi-cambridge"
              />
            </Box>
          </Box>
          <Box
            className="group ca-course overflow-hidden w-full md:w-2/3"
            id="card-4"
          >
            <Box className="relative h-full">
              <EntranceTest />
              <ProgramInfo
                info="Cùng con vượt qua thử thách để bước vào môi trường lý tưởng"
                className="bg-white text-[#0C134F] absolute ca-course-item group-hover:flex"
                url="/khoa-hoc/luyen-thi-dau-vao"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
