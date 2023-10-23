// components/MenuTabs.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import MenuTabsMB from './MenuTabsMb';

const customTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'inherit',
            borderColor: 'transparent',
            borderBottom: 'none',
          },
        },
        indicator: {
          display: 'none',
        },
      },
    },
  },
});

const MenuTabs = () => {
  const router = useRouter();

  const handleTabChange = (tab) => {
    router.push(`/khoa-hoc/${tab}`, undefined, { shallow: true });
  };
  const handleActiveTab = (tab) => {
    return router.asPath.includes(tab.link)
      ? 'ca-primary-bg-color text-white'
      : '';
  };
  
  const tabs = [
    {
      id: 'Chương trình  Quốc tế/ Cambridge',
      label: 'Chương trình \n Quốc tế/ Cambridge',
      link: 'chuong-trinh-cambridge',
    },
    {
      id: 'Luyện thi chứng chỉ Cambridge',
      label: 'Luyện thi \n chứng chỉ Cambridge',
      link: 'chung-chi-cambridge',
    },
    {
      id: 'Chương trình Giáo dục phổ thông',
      label: 'Chương trình \n Giáo dục phổ thông',
      link: 'chuong-trinh-pho-thong',
    },
    {
      id: 'Luyện thi đầu vào trường top',
      label: 'Luyện thi \n đầu vào trường top',
      link: 'luyen-thi-dau-vao',
    },
  ];
  useEffect(() => {
    if (router.route === '/khoa-hoc') {
      router.push(`/khoa-hoc/chuong-trinh-cambridge`, undefined, {
        shallow: true,
      });
    }
  }, []);
  return (
    <Box sx={{ width: '100%', padding: '24px 0' }}>
      <ThemeProvider theme={customTheme}>
        <Box className="hidden lg:flex justify-center gap-8 overflow-auto">
          {tabs.map((tab) => (
            <Tab
              sx={{ width: 315, padding: '24px' }}
              key={tab.id}
              label={tab.label.split('\n').map((line, index) => (
                <Box key={index}>
                  {line}
                  <br />
                </Box>
              ))}
              onClick={() => handleTabChange(tab.link)}
              className={`text-black font-extrabold bg-[#537FE745] opacity-100 rounded-3xl ${handleActiveTab(
                tab
              )}`}
            >
              {tab.content}
            </Tab>
          ))}
        </Box>
        <Box className="block lg:hidden">
          <MenuTabsMB>
            <Box className="flex flex-wrap justify-center gap-8 overflow-auto mt-8">
              {tabs.map((tab) => (
                <Tab
                  sx={{ width: 315, padding: '24px' }}
                  key={tab.id}
                  label={tab.label.split('\n').map((line, index) => (
                    <Box key={index}>
                      {line}
                      <br />
                    </Box>
                  ))}
                  onClick={() => handleTabChange(tab.link)}
                  className={`text-black font-extrabold bg-[#537FE745] opacity-100 rounded-3xl ${handleActiveTab(
                    tab
                  )}`}
                >
                  {tab.content}
                </Tab>
              ))}
            </Box>
          </MenuTabsMB>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default MenuTabs;
