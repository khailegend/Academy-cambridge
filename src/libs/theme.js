import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Nunito_Sans, Source_Serif_4 } from '@next/font/google';
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
export const nunito = Nunito_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  // fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
export const sourceSerif = Source_Serif_4({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  // fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C134F',
    },
    secondary: {
      main: '#E19F20',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    allVariants: {
      color: '#0C134F',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '500',
      '@media (min-width:768px)': {
        fontSize: '18px',
      },
    },
  },
  container: {
    zIndex: 2,
    position: 'relative',
  },
});

export default theme;
