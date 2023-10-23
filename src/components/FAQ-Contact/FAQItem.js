import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
export default function FAQItem(props) {
  const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
  return (
    <div className="question-wrapper mb-7">
      <div className="question" id={props.id}>
        <button
          className="flex items-center w-full justify-between gap-8"
          onClick={() => handleClick(props.id)}
        >
          <Typography
            variant="paragraph"
            className="font-bold text-left"
            sx={{ maxWidth: '80%' }}
          >
            {props.question}
          </Typography>
          {!isActive ? (
            <Box className="mt-[5.5px] w-10">
              <Image
                src="/images/show-more-icon.png"
                width={40}
                height={40}
                alt="show more icon"
              />
            </Box>
          ) : (
            <Box className="mt-[5.5px] w-10">
              <Image
                src="/images/show-less-icon.png"
                width={40}
                height={40}
                alt="show less icon"
              />
            </Box>
          )}
        </button>
      </div>
      <Typography
        variant="body1"
        className={isActive ? 'answer active text-base' : 'answer'}
      >
        {props.answer}
      </Typography>
    </div>
  );
}
