import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { MenuDropDown } from './MenuDropDown';
import MenuMobile from './MenuMobile';
import Link from 'next/link';

const pages = [
  {
    name: 'Trang Chủ',
    url: '/',
  },
  {
    name: 'Khóa Học',
    url: '/khoa-hoc',
  },

  { name: 'Đăng ký khóa học', url: '/dang-ky-khoa-hoc' },
  {
    name: 'Giáo Viên',
    url: '/tutor',
  },
  { name: 'Liên Hệ & FAQ', url: '/contact' },
];

function Header() {

  return (
    <AppBar className="bg-white h-[60px] md:h-auto top-0 sticky" id="header">
      <Container maxWidth={false}>
        <Toolbar disableGutters className="justify-between">
          <Link href="/">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/logos/Logo-CA.png"
                alt="Cambridge academy"
                width={35}
                height={43}
              />
              <Box className="block xl:hidden">
                <Typography
                  sx={{ fontSize: '14px!important' }}
                  className="font-extrabold"
                >
                  Cambridge
                </Typography>
                <Typography
                  sx={{ fontSize: '14px!important' }}
                  className="font-extrabold"
                >
                  Academy
                </Typography>
              </Box>
              <Box className="hidden xl:block">
                <svg
                  width="2"
                  height="34"
                  viewBox="0 0 2 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="-4.37114e-08"
                    x2="1"
                    y2="34"
                    stroke="#0C134F"
                    strokeWidth="2"
                  />
                </svg>
              </Box>
              <Typography className="hidden xl:block font-bold whitespace-nowrap text-3xl">
                Cambridge Academy
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              color: 'black',
            }}
          >
            <MenuMobile pages={pages} />
          </Box>
          <MenuDropDown items={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
