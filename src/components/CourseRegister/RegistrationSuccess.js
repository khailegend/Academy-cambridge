import { Box, Typography } from '@mui/material';
import React from 'react';

export default function RegistrationSuccess() {
  return (
    <Box>
      <Typography className="text-red-500 text-center font-extrabold mb-8">
        ĐĂNG KÝ THÀNH CÔNG
      </Typography>
      <Box
        className="p-4"
        sx={{
          border: '1px solid #F24822',
          background: 'rgba(217, 217, 217, 0.0)',
        }}
      >
        <Typography>
            Bài ĐÁNH GIÁ NĂNG LỰC sẽ được gửi vào hộp thư Gmail của phụ huynh sau 3 phút . 
            <br/>
            Xin vui lòng kiểm tra và làm theo hướng dẫn. Nếu phụ huynh chưa nhận được thư xin vui lòng liên hệ với Cambridge Academy.
            <br/>
        </Typography>
        <Typography>
          <span className='text-red-500'>Hotline:</span> 0369 921 796
        </Typography>
      </Box>
    </Box>
  );
}
