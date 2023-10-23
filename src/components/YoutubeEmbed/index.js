import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import YoutubeIframe from './YoutubeIframe';
import CASectionTitle from '@/common/CASectionTitle';
import YoutubeModal from './YoutubeModal';

const YoutubeEmbed = () => {
  const mainIframeSize = {
    width: 636,
    height: 337,
  };
  const subIframeSize = {
    width: 350,
    height: 196,
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      return window.innerWidth <= 600;
    }
    window.addEventListener;
  }, []);
  return (
    <Container maxWidth={false} className="bg-[#537FE77D]">
      <Container maxWidth="lg" className="py-8">
        <Typography
          variant="h3"
          className="hidden md:block md:w-2/3 font-bold mb-4"
        >
          Những câu chuyện về <br />
          chặng đường học tập suốt đời
        </Typography>
        <CASectionTitle
          label="Những câu chuyện về chặng đường học tập suốt đời"
          classList="block md:hidden text-center"
        />
        <Box className="flex justify-center md:justify-between flex-wrap">
          <Box className="flex flex-col justify-center lg:justify-start lg:items-start mb-8 md:mb-0 w-full md:w-2/3 h-auto">
            <YoutubeModal thumbnailImg="/images/thumbnail/main.png">
              <YoutubeIframe embedId="vVhKA9Av6vA" size={mainIframeSize} />
            </YoutubeModal>
            <Typography variant="h5" className="font-bold mt-4">
              Những nụ cười không bao giờ tắt
            </Typography>
          </Box>
          <Box className="flex flex-col gap-y-8 w-full md:w-1/3">
            <Box>
              <YoutubeModal thumbnailImg="/images/thumbnail/thumb2.png">
                <YoutubeIframe embedId="vVhKA9Av6vA" size={subIframeSize} />
              </YoutubeModal>
              <Typography variant="h6" className="font-bold mt-4">
                Hành trình học tập của con yêu
              </Typography>
            </Box>
            <Box>
              <YoutubeModal thumbnailImg="/images/thumbnail/thumb2.png">
                <YoutubeIframe embedId="vVhKA9Av6vA" size={subIframeSize} />
              </YoutubeModal>
              <Typography variant="h6" className="font-bold mt-4">
                Nổ lực được đền đáp xứng đáng
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default YoutubeEmbed;
