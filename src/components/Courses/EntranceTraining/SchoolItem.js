import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const Tag = styled.div`
  border-radius: 70px;
  background: #d9d9d9;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  width: fit-content;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 2px 6px;
`;

export default function SchoolItem({ school }) {
  return (
    <Card className="group w-full">
      <CardMedia
        sx={{
          width: '100%',
          height: 200,
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
        md={{
          width: '100%',
          height: 360,
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
        image={school.img}
        title={school.name}
        className="group-hover:scale-110 transition-all duration-700"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="min-h-[96px]"
        >
          {school.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {school.desc}
        </Typography>
        <Box className="flex gap-3 flex-wrap">
          {school.type.map((type, index) => {
            return <Tag key={index}>{type}</Tag>;
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
