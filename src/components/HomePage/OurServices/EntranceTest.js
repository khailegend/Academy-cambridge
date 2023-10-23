import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function EntranceTest() {
  return (
    <Box className="flex flex-col justify-center items-center gap-y-8  bg-white px-12 h-full py-12 lg:py-0">
      <Typography className="font-bold text-3xl text-center">
        Luyện thi đầu vào
      </Typography>
      <Box className="flex flex-col gap-4 flex-wrap">
        <Box className="flex justify-between items-center gap-8">
          <Box>
            <Image
              src="/images/logos/logo-LHPpng.png"
              width={103}
              height={92}
              alt="THPT Lê Hồng Phong"
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/tdn.png"
              width={88}
              height={83}
              alt="IL programs"
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/NTH.png"
              width={99}
              height={97}
              alt="THPT Nguyễn Thượng Hiền"
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/logo_dtl.png"
              width={123}
              height={81}
              alt="THPT Trần Đại Nghĩa"
            />
          </Box>
        </Box>
        <Box className="flex justify-between items-center gap-8">
          <Box>
            <Image
              src="/images/logos/vin.png"
              width={110}
              height={88}
              alt="Vinschools"
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/vai.png"
              width={140}
              height={49}
              alt="VietNam Australia International school "
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/noname.png"
              width={74}
              height={62}
              alt="VietNam Australia International school "
            />
          </Box>
          <Box>
            <Image
              src="/images/logos/wi.png"
              width={145}
              height={62}
              alt="Wellspring school "
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
