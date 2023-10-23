import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const TwoColTextImgWrapper = styled.div`
  background: white;
`;

const ContentBlocks = styled.div``;

const ImageBlocks = styled.div``;
export default function TwoColTextImg({ data }) {
  return (
    <Container>
      <TwoColTextImgWrapper>
        <ContentBlocks>
          <Typography variant="h6">June 05 2023</Typography>
          <Typography variant="h3">
            Study co-led by UCLA finds new drug helps delay progression of
            glioma
          </Typography>
        </ContentBlocks>
        <ImageBlocks>
          <Image
            src="/public/images/news-img/featurenew.jpeg"
            alt="img"
            width={400}
            height={200}
          />
        </ImageBlocks>
      </TwoColTextImgWrapper>
    </Container>
  );
}
