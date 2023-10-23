import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';

const NewsItem = styled.div`
  background-color: white;
  position: relative;
  cursor: pointer;
  &:hover {
    div {
      color: white;
      background-color: #0e5f93;
    }
  }
`;

const NewItemTitle = styled.div`
  background: white;
  color: black;
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: bold;
  font-size: 16px;
  padding: 16px;
  width: 95%;
  text-align: left;
`;

const news = [
  {
    title:
      'Video: UCLA celebrates Class of 2023 at Pauley Pavilion Pride Month 2023: Read, watch, listen',
    url: 'link',
    img: '/images/news-img/featurenew.jpeg',
  },
  {
    title: 'Pride Month 2023: Read, watch, listen',
    url: 'link',
    img: '/images/news-img/featurenew.jpeg',
  },
  {
    title: 'UCLA celebrates Class of 2023 at Pauley Pavilion',
    url: 'link',
    img: '/images/news-img/featurenew.jpeg',
  },
];

export default function HomePageNews() {
  return (
    <Container
      maxWidth={false}
      align="center"
      style={{ background: '#0e5f93' }}
      className="py-12"
    >
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }} className="py-10">
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} md={8}>
              <NewsItem>
                <Image src={news[0].img} alt="img" width={725} height={525} />
                <NewItemTitle className="text-lg w-9/12 ">
                  {news[0].title}
                </NewItemTitle>
              </NewsItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={{ xs: 1, md: 2 }}>
                {news.map((item, index) => {
                  return index == 0 ? (
                    false
                  ) : (
                    <Grid item xs={12} md={4}>
                      <NewsItem>
                        <Image
                          src={item.img}
                          alt="img"
                          width={725}
                          height={525}
                        />
                        <NewItemTitle>{item.title}</NewItemTitle>
                      </NewsItem>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
