import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import CambridgePrimary from './CambridgePrimary';
import CambridgeSecondary_1 from './CambridgeSecondary_1';
import CambridgeSecondary_2 from './CambridgeSecondary_2';
import CambridgeAdvanced from './CambridgeAdvanced';
import RoadMapDesktop from './RoadMapDesktop';
import LearningPath from '../../LearningPath';
import CASectionTitle from '@/common/CASectionTitle';

export default function RoadMap() {
  return (
    <Container maxWidth={false} className="py-8 md:md-12">
      <Box className="flex items-start flex-col">
        <Typography className="text-2xl md:text-3xl font-extrabold leading-[60px] ">
          Lộ trình học tập <span className="ca-secondary-color">chuẩn</span>
        </Typography>
        <CASectionTitle label=" của chương trình Cambridge" />
      </Box>
      <Box className="flex md:hidden overflow-auto">
        <Box className="flex">
          <Box>
            <CambridgePrimary />
          </Box>
          <Box>
            <CambridgeSecondary_1 />
          </Box>
          <Box>
            <CambridgeSecondary_2 />
          </Box>
          <Box>
            <CambridgeAdvanced />
          </Box>
        </Box>
      </Box>
      <Box className="overflow-auto hidden md:block">
        <Box>
          <LearningPath />
        </Box>
        <RoadMapDesktop props={'margin: auto'} />
      </Box>
    </Container>
  );
}
