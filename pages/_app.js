import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/libs/theme';
import createEmotionCache from '../src/libs/createEmotionCache';
import Header from '@/common/Header';
import Footer from '@/common/Footer';
import { DefaultSeo } from 'next-seo';

import '../src/app/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />

        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'vi_VN',
            url: 'https://www.cambridge-academy.edu.vn',
            siteName: 'SiteName',
            title: 'Cambridge Academy',
            description: 'CAMBRIDGE ACADEMY - cùng học sinh chinh phục từng cột mốc tri thức',
            images: [
              {
                url: 'https://cambridge-academy.edu.vn/_next/image?url=%2Fimages%2Fhomepage%2Fintro.png&w=3840&q=75',
                width: 800,
                height: 600,
                alt: 'Cambridge Academy - vui chơi cùng trẻ',
              },
              {
                url: 'https://cambridge-academy.edu.vn/_next/image?url=%2Fimages%2Fhomepage%2FHomepage-1.png&w=3840&q=75',
                width: 800,
                height: 600,
                alt: 'Cambridge Academy - vui chơi cùng trẻ',
              },
              {
                url: 'https://cambridge-academy.edu.vn/_next/image?url=%2Fimages%2Fhomepage%2FHomepage3.png&w=3840&q=75',
                width: 800,
                height: 600,
                alt: 'Cambridge Academy - vui chơi cùng trẻ',
              },
            ],
          }}
          facebook={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}

        />

        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
