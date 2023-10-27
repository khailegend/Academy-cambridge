import FAQItem from './FAQItem';

import './index.css';
import {Box, Container, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import {FAQQuestion as defaultQuestion} from '@/libs/common';

export default function FAQAndContact() {
  return (
    <div className="flex justify-between items-center w-full">
      <Grid container>
        <Grid item md={5} className="mt-12 flex items-center justify-end">
          <Image src="/images/faqs.png"
             alt="faqs" width={500} height={500}
                 className="hidden lg:block"
          />

          <Image src="/images/faqs.png"
                 alt="faqs" width={350} height={350}
                 className="hidden md:block lg:hidden"
          />
        </Grid>

        <Grid item md={6} lg={6} className="p-4">
          <Box>
            <Typography
              variant="h4"
              className="text-left text-lg md:text-2xl"
              sx={{color: 'rgba(0, 0, 0, 0.25);'}}
            >
              FAQs
            </Typography>
            <Typography className="font-extrabold text-left text-xl md:text-4xl">
              Frequently Asked Questions
            </Typography>
          </Box>
          <section className="mt-5 md:mt-16">
            {defaultQuestion.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </section>
        </Grid>
      </Grid>
    </div>
  );
}
