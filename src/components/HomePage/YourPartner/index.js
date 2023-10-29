import { Box, Collapse, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import './index.css';
import Grid from "@mui/material/Grid";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import styled from "@emotion/styled";

const list = [
  {
    id: 1,
    content:
      'Tuyển chọn giáo viên không chỉ giỏi về kiến thức chuyên môn, kỹ năng giảng dạy mà còn sự nhiệt huyết và đạo đức công việc. ',
    title: 'Tuyển chọn kỹ càng và nghiêm ngặt',
  },
  {
    id: 2,
    content:
      'Giáo viên được đào tạo định kỳ, nâng cao kỹ năng và cập nhật chương trình. ',
    title: 'Đào tạo và phát triển liên tục',
  },
  {
    id: 3,
    content:
      'Chất lượng giáo viên được giám sát liên tục và đánh giá khách quan thông quan phản hồi của phụ huynh, học viên. ',
    title: 'Đánh giá và đảm bảo chất lượng',
  },
];

const Item = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={!expanded ? (
        <Box sx={{minWidth: 10}} className="hidden md:block">
          <Image
            src="/images/show-more-icon.png"
            width={25}
            height={25}
            alt="show more icon"
          />
        </Box>

      ) : (
        <Box sx={{minWidth: 10}} className="hidden md:block">
          <Image
            src="/images/show-less-icon.png"
            width={25}
            height={25}
            alt="show less icon"
          />
        </Box>
      )}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      // transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));


  return (
    <Accordion
      expanded={expanded === 'yp-panel1'} onChange={handleChange('yp-panel1')}
      sx={{top: "-50px"}}
    >
      <AccordionSummary
        aria-controls="yp-panel1bh-content"
        id="panel1bh-header"
        className="w-full h-[100px] p-1 md:p-2"
      >
        <Typography className="text-md md:text-lg lg:text-xl">
          {data.title}
        </Typography>


      </AccordionSummary>
      <AccordionDetails
      >
        <Typography className="text-sm md:text-md lg:text-lg">{data.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default function YourPartner() {
  return (
    <Box className="pt-5 md:pt-8">
      <Box className="w-full">
        <Typography className="text-[28px] md:text-5xl font-extrabold leading-[60px] text-center">
          <span className="text-[#E19F20]">Giáo viên</span> tại Cambridge
          Academy
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
        className="pt-10"
      >
        <Box sx={{ height: 375 }} className="relative">
          <Image
            src="/images/homepage/ca-teacher.png"
            layout="fill"
            objectFit="cover"
            alt="Giáo viên của CA"
          />
        </Box>

        <Box  className="mx-1 md:mx-10">
          <Grid container spacing={{ xs: 0.2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            {list.map((data, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Item key={data.id} data={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
