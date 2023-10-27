import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import './index.css';

import Marquee from "react-fast-marquee";


export default function Cooperation() {
  return (
    <>
      <div
        className="desktop py-4"
      >
        <Typography variant="h4" className="font-extrabold text-center mt-12 mb-10">
          Đối tác của Cambridge Academy
        </Typography>

        <Marquee
          gradient={true}
          loop={0}
        >
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/idp.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/bgddt.png"
              alt="Bộ giáo dục và đào tạo TPHCM"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/britishcouncil.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ca_assessment.png"
              alt="cambridge academy assessment"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/rmit.png"
              alt="RMIT University"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ngoai_thuong.png"
              alt="Đại học ngoại thương"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/HCMIU.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/vin.png"
              alt="idp"
              width={150}
              height={150}
            />
          </Box>
        </Marquee>
      </div>

      <div
        className="mobile py-4"
      >
        <Typography variant="h6" className="font-extrabold text-center  my-5">
          Đối tác của Cambridge Academy
        </Typography>

        <Marquee
          gradient={true}
          loop={0}
        >
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/idp.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/bgddt.png"
              alt="Bộ giáo dục và đào tạo TPHCM"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/britishcouncil.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ca_assessment.png"
              alt="cambridge academy assessment"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/rmit.png"
              alt="RMIT University"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/ngoai_thuong.png"
              alt="Đại học ngoại thương"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/HCMIU.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
          <Box className="py-2 px-4">
            <Image
              src="/images/logos/vin.png"
              alt="idp"
              width={100}
              height={100}
            />
          </Box>
        </Marquee>
      </div>
    </>
  );
}
