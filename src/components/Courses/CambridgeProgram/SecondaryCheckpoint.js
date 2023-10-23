import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function SecondaryCheckpoint() {
  return (
    <Container
      maxWidth="lg"
      className="flex flex-col md:flex-row justify-between"
    >
      <Box className="w-full md:w-[60%]">
        <Typography>
          Chứng chỉ Secondary School Checkpoint là một chương trình kiểm tra
          quốc tế được tổ chức bởi Cambridge Assessment International Education
          (CAIE). Tương tự như Primary Checkpoint, chương trình này đánh giá sự
          tiến bộ và kết quả học tập của học sinh ở mức trung học cơ sở
          (Secondary School) trong các môn học cơ bản. Chứng chỉ này kiểm tra
          kiến thức của học sinh một cách tổng quan, từ đó đưa ra những nhận xét
          chi tiết cho học sinh. Kết quả của chứng chỉ Secondary Checkpoint là
          nền tảng để học sinh tiếp tục chương trình IGCSE cũng như A Level.
        </Typography>
        <br />
        <Typography>
          Các môn học trong chứng chỉ Secondary School Checkpoint bao gồm:
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
            Tiếng Anh (English): Kiểm tra khả năng sử dụng tiếng Anh để đọc,
            viết, nghe và nói. Học sinh sẽ thực hành sử dụng tiếng Anh trong các
            tình huống thực tế.
          </ListItem>
          <ListItem>
            Toán học (Mathematics): Kiểm tra khả năng giải quyết vấn đề, tính
            toán và hiểu biết về các khái niệm toán học cơ bản. Học sinh sẽ vận
            dụng những kiến thức đã học để giải các bài toán cơ bản và nâng cao.
          </ListItem>
          <ListItem>
            Khoa học (Science): Kiểm tra kiến thức cảu học sinh về các khái niệm
            khoa học cơ bản, bao gồm các nguyên tắc vật lý, hóa học và sinh học.
            Học sinh sẽ áp dụng kiến thức lý thuyết đã vào những bài tập thực
            hành liên quan.
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
