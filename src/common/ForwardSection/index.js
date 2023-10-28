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
      sx={{ minHeight: 378, height: 'auto' }}
      className="my-3 md:my-7 p-0"
    >
      <Box
        sx={{
          width: '100%',
          height: '378px',
          backgroundImage: `url("${imgUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex flex-col justify-end"
      >
        <Container maxWidth={isFullWidth ? false : 'lg'}>
          <Box className="flex flex-col justify-end pb-4">
            {noSubtitle ? (
              <CASectionTitle label={subtitle} classList="text-white" />
            ) : (
              <Typography className={`text-white`}>{subtitle}</Typography>
            )}
            <CASectionTitle label={title} classList="text-white" />
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
