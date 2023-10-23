import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';

const BackContent = styled.div`
  background: linear-gradient(180deg, rgba(255, 184, 76, 0.7) 0%, #fff 100%);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function StudentAchievementItem({ item }) {
  return (
    <Card className="shadow-none">
      <CardContent sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Box className="flip-container flip-active" id={item.id}>
          <Box className="flipable flippy-front">
            <Image
              alt={item.name}
              src={item.img}
              width={320}
              height={320}
              style={{
                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '50%',
              }}
            />
          </Box>
          <Box className="flipable flippy-back">
            <BackContent>
              <Typography className="w-full md:p-8">{item.desc}</Typography>
            </BackContent>
          </Box>
        </Box>
        <Box className="flex flex-col justify-start text-left">
          <Typography variant="h6" className="font-bold">
            {item.name}
          </Typography>
          <Typography>{item.school}</Typography>
          <Typography>{item.title}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
