import * as React from 'react';

import styled from '@emotion/styled';
import ReviewList from '../Feedback';

import StudentAchievements from './StudentAchievements';
import Intro from '../Intro';
import FAQAndContact from '../FAQ-Contact';
import Cooperation from '../Cooperation';
import MagicCard from '../MagicCard';
import OurServices from './OurServices';
import YoutubeEmbed from '../YoutubeEmbed';
import OurQuality from './OurQuality';
import YourPartner from './YourPartner';
import FeedbackList from '../Feedback';

import HomeCarousel from '@/common/Carousel';
import { Container } from '@mui/material';

const menuSubList = [
  { name: 'Home', url: 'home' },
  { name: 1, url: '1' },
  { name: 2, url: '2' },
  { name: 3, url: '3' },
];

const FullScreenCarouselWrapper = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
`;

export default function HomePage() {
  return (
    <>
      {/* <HomeCarousel /> */}
      <Intro />
      <OurServices />
      <OurQuality />
      <MagicCard />
      <YourPartner />
      <FeedbackList />
      <StudentAchievements />

      <FAQAndContact />

      <Cooperation />
    </>
  );
}
