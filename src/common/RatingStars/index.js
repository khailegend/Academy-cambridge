import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function RatingStars({ rating, type, classStyle }) {
  const [value, setValue] = React.useState(rating);

  const handleRenderRatingType = (type = 'readOnly', value) => {
    switch (type) {
      case 'readOnly':
        return <Rating name="read-only" value={value} readOnly />;
      case 'controlled':
        return (
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        );
      default:
        return <Rating name="no-value" value={null} />;
    }
  };
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      className={`flex ${classStyle ? classStyle : 'justify-center'}`}
    >
      {handleRenderRatingType(type, value)}
    </Box>
  );
}
