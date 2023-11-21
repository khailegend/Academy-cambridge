import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import CASectionTitle from '../CASectionTitle';

export default function ForwardSection({
  isFullWidth = false,
  title,
  subtitle,
  imgUrl,
  noSubtitle = false,
}) {
  return (
    <Container
      maxWidth={false}
      sx={{ minHeight: 200, height: 'auto' }}
      className="my-3 md:my-7 p-0"
    >
      <Box
        sx={{
          width: '100%',
          backgroundImage: `url("${imgUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex flex-col justify-end h-[200px] md:h-[300px]"
      >
        <Container maxWidth={isFullWidth ? false : 'lg'}>
          <Box className="flex flex-col justify-end pb-4">
            {noSubtitle ? (
              <CASectionTitle label={subtitle} classList="text-red-500  text-shadow-xl shadow-[#0c134f]" />
            ) : (
              <Typography className={`text-white text-shadow-xl shadow-[#0c134f]`}>{subtitle}</Typography>
            )}
            <CASectionTitle label={title} classList="text-white text-shadow-sm shadow-[#0c134f]" />
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
