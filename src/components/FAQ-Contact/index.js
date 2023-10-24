import FAQItem from './FAQItem';

import './index.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FAQQuestion as defaultQuestion } from '@/libs/common';

export default function FAQAndContact() {
  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} className="mt-12 hidden md:block">
            <Image src="/images/faqs.png" width={530} height={425} alt="FAQ" />
          </Grid>
          <Grid item md={6}>
            <div className="container">
              <Box>
                <Typography
                  variant="h4"
                  className="text-left text-lg"
                  sx={{ color: 'rgba(0, 0, 0, 0.25);' }}
                >
                  FAQs
                </Typography>
                <Typography variant="h4" className="font-extrabold text-left">
                  Frequently Asked Questions
                </Typography>
              </Box>
              <section className="faq">
                {defaultQuestion.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </section>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
