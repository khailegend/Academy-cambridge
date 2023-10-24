import * as React from 'react';
import HomePage from '@/components/HomePage';
import FullWidthContainer from '@/common/Container/FullWidthContainer';
import Head from "next/head";
import { NextSeo } from 'next-seo';


export default function Index() {
  return (
    <FullWidthContainer>
      <Head>
        <meta name="google" content="nositelinkssearchbox" />
      </Head>

      <NextSeo
        title="Cambridge Academy"
        description="CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức"
      />

      <HomePage />
    </FullWidthContainer>
  );
}
