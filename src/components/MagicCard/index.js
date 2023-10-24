import React from 'react';
import CardItem from './CardItem';
import {Accordion, AccordionSummary, Box, Container, Typography} from '@mui/material';
import Image from 'next/image';
import './index.css';
import { magicCardContent as data } from '@/libs/common'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const bgColor = {
    0: '',
    1: '#007AD8',
    2: '#FFB84C',
    3: '#17249A',
  }

  return (
    <Container maxWidth="lg" className="px-0 md:p-auto">
      <Box className="flex flex-col-reverse md:flex-row justify-between items-start gap-x-12 border-none">
        <div
          className="magic-cards xs:w-full md:2/3 lg:w-1/2 p-5"
        >
          {
            data.map((item, index) => {
              return (
                <Accordion
                  sx={{
                    border: 'none',
                    background: bgColor[`${index}`],
                    borderRadius: index === 3 ? '0 0 50px 50px' : ''
                }}
                  key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                >

                  <AccordionSummary
                    aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}
                    className={`flex items-center gap-2`}
                    sx={{
                      background: item.backgroundColor,
                      border: 'none',
                      transition: (index === 3 && expanded === 'panel3') ? '' : '0.9s !important',
                      borderRadius: (index === 3 && expanded !== 'panel3') ? '50px 50px' : '50px 50px 0 0',
                      padding: '20px 36px'
                    }}
                  >
                    <Box
                      sx={{ width: 45, height: 45, border: 'none',  }}
                      className="flex justify-center items-center"
                    >
                      <Image src={item.img} width={35} height={35} alt={item.title} />
                    </Box>
                    <Typography
                      sx={{
                        color: item.textColor,
                        fontSize: '18px',
                        '@media (min-width:768px)': {
                          fontSize: '30px',
                        },
                        lineHeight: '40px',
                        marginBottom: 0,
                        border: 'none',
                      }}
                      className="font-extrabold"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>

                  </AccordionSummary>

                  <div className='border-none'>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        color:  item.textColor,
                        fontSize: 18,
                        background:item.backgroundColor,
                        padding: '20px 36px',
                        margin: 0,
                        border: 'none',
                        borderRadius: index === 3 ? '0 0 50px 50px' : ''
                      }}
                    >
                      {item.content}
                    </Typography>
                  </div>
                </Accordion>
              )
            })
          }
        </div>

        <Box className="hidden sm:flex justify-center items-center">
          <Image
            src="/images/magic-card-bg.jpeg"
            width={582}
            height={432}
            alt="book"
          />
        </Box>
      </Box>
    </Container>
    );
};
