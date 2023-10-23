import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
export default function MenuTabsMB({ children }) {
  const [checked, setChecked] = React.useState(false);
  const router = useRouter();
  const handleShowCurrentTabTitle = (router) => {
    const tab = router.asPath;
    switch (tab) {
      case '/khoa-hoc/chuong-trinh-pho-thong':
        return 'Chương trình giáo dục phổ thông';
      case '/khoa-hoc/chuong-trinh-cambridge':
        return 'Chương trình quốc tế/Cambridge';
      case '/khoa-hoc/chung-chi-cambridge':
        return 'Luyện thi chứng chỉ cambridge';
      case '/khoa-hoc/luyen-thi-dau-vao':
        return 'Luyện thi đầu vào trường top';
      default:
        return 'Chương trình quốc tế/Cambridge';
    }
  };
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Box
        onClick={handleChange}
        className="p-4 flex justify-between  bg-[#537FE745]"
      >
        <Typography className="text-black font-extrabold opacity-100 rounded-3xl">
          {handleShowCurrentTabTitle(router)}
        </Typography>
        {checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
          },
        }}
      >
        <Collapse in={checked}>{children}</Collapse>
      </Box>
    </Box>
  );
}
