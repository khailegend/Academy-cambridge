import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function PrimaryCheckPoint() {
  return (
    <Container
      maxWidth="lg"
      className="flex flex-col md:flex-row justify-between"
    >
      <Box className="w-full md:w-[60%]">
        <Typography>
          Chứng chỉ Primary School Checkpoint là một chương trình kiểm tra quốc
          tế do Cambridge Assessment International Education (CAIE) cung cấp.
          Chương trình học tập này dành cho học sinh ở mức tiểu học (Primary
          School), chứng chỉ nhằm đánh giá và đo lường kết quả học tập của học
          sinh trong các môn học cơ bản ở chương trình Tiểu học, từng bước chuẩn
          bị cho học sinh những kiến thức nền tảng cho những chương trình học
          tập tiếp theo.
        </Typography>
        <br />
        <Typography>
          Trong chứng chỉ này, học sinh sẽ được kiểm tra ở ba môn học chính:
        </Typography>
        <List
          sx={{
            listStyleType: 'decimal',
            pl: 2,
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}
        >
          <ListItem>
            Tiếng Anh (English): Kiểm tra khả năng sử dụng tiếng Anh, từ vựng,
            ngữ pháp, và kỹ năng đọc, viết, nghe và nói.
          </ListItem>
          <ListItem>
            Toán học (Mathematics): Đánh giá khả năng giải quyết vấn đề, tính
            toán, hiểu biết về toán học cơ bản và khả năng áp dụng kiến thức vào
            thực tế.
          </ListItem>
          <ListItem>
            Khoa học (Science): Kiểm tra hiểu biết về các khái niệm khoa học cơ
            bản như thay đổi trong tự nhiên, quy luật vật lý cơ bản và cách các
            hệ thống tương tác trong tự nhiên.
          </ListItem>
        </List>
      </Box>
      <Box className="m-auto md:m-0">
        <Image
          src="/images/ca-primary.png"
          alt="ca-primary"
          width={347}
          height={467}
        />
      </Box>
    </Container>
  );
}
