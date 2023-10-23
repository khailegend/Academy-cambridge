import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import './index.css';

export default function CardItem({ props, index, handleClick }) {
  return (
    <Card
      sx={{ minWidth: 275, maxWidth: 626 }}
      style={
        props.id === 3
          ? { backgroundColor: props.backgroundColor, borderRadius: '50px' }
          : {}
      }
      className={`card-show-more-item magic-card relative cursor-pointer shadow-none bg-transparent`}
      id={`card-item-${props.id}`}
      onClick={() => {
        handleClick(props.id);
      }}
    >
      <Box
        className={`flex items-center card-header gap-2`}
        sx={{ background: props.backgroundColor }}
      >
        <Box
          sx={{ width: 45, height: 45 }}
          className="flex justify-center items-center"
        >
          <Image src={props.img} width={35} height={35} alt={props.title} />
        </Box>
        <Typography
          sx={{
            color: props.textColor,
            fontSize: '18px',
            '@media (min-width:768px)': {
              fontSize: '30px',
            },
            lineHeight: '40px',
            marginBottom: 0,
          }}
          className="font-extrabold"
          gutterBottom
        >
          {props.title}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        component="div"
        className={`card-content transition-all duration-500 ${
          props.id == 3 ? 'rounded-[50px] h-36' : 'card-item-hide'
        }`}
        sx={{
          color: props.textColor,
          fontSize: 18,
          background: props.backgroundColor,
          padding: '0px 36px',
        }}
      >
        {props.content}
      </Typography>
    </Card>
  );
}
