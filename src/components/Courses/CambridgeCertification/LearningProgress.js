import CASectionTitle from '@/common/CASectionTitle';
import { Box } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
const LearningProgress = (props) => (
  <>
    <Box className="relative m-auto w-full">
      <Image
        src="/images/courses/roadmap.png"
        width={1103}
        height={468}
        alt="Road map"
        style={{ margin: 'auto' }}
      />
    </Box>
    <Box className="py-24">
      <CASectionTitle
        label="Chứng chỉ Young Learner English Test "
        classList="text-center mb-12 text-semibold"
        fontPrimary={false}
      />
      <Box className="flex justify-around">
        <Box>
          <Image
            src="/images/starters.png"
            width={255}
            height={352}
            alt="staters"
          />
        </Box>
        <Box>
          <Image
            src="/images/movers.png"
            width={255}
            height={352}
            alt="movers"
          />
        </Box>
        <Box>
          <Image
            src="/images/flyers.png"
            width={255}
            height={352}
            alt="flyers"
          />
        </Box>
      </Box>
    </Box>
  </>
);
export default LearningProgress;
