import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

export default function IGCSE() {
  return (
    <Container
      maxWidth='lg'
      className="flex flex-col md:flex-row justify-start"
    >
      <Box className="w-full md:w-9/12">
        <Typography>
          IGCSE là kỳ thi phổ biến nhất toàn cầu dành cho học sinh 14-16 tuổi và
          chứng chỉ Cambridge IGCSE được công nhận bởi các trường đại học và nhà
          tuyển dụng trên toàn thế giới. Khi sở hữu chứng chỉ IGCSE sẽ mở ra
          nhiều cơ hội để bạn tiếp tục học tập trong môi trường giáo dục hiện
          đại và chuyên nghiệp cả trong và ngoài nước.
        </Typography>
        <Typography>
          Quyết định về việc lựa chọn các môn học IGCSE sẽ tác động đến hành
          trình học vấn và sự nghiệp của học sinh trong tương lai. Những môn học
          phù hợp sẽ đặt nền tảng kiến thức và kỹ năng vững chắc bạn.
        </Typography>
        <Typography>
          {' '}
          Để đảm bảo việc lựa chọn các môn học được cẩn thận và hợp lý hơn, hãy
          để Cambridge Academy đồng hành và hỗ trợ bạn tại đây.
        </Typography>
      </Box>
    </Container>
  );
}
