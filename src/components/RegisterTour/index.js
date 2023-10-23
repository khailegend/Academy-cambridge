import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import { Container } from '@mui/material';
import CALinkButton from '@/common/CAButton';

export default function RegisterTour() {
  return (
    <Container
      maxWidth={false}
      className="relative"
      sx={{
        backgroundImage: 'url("/circle-left.svg")',
        backgroundRepeat: 'no-repeat',
        padding: '120px 0',
      }}
    >
      <Container maxWidth="lg" className="flex w-full">
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Image
                src="/images/CA_IMG/IMG_0149.png"
                alt="student"
                width={516}
                height={351}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className="pt-4 text-center md:text-justify">
              <Typography variant="h4">
                Tiếp bước cùng Cambridge Academy
              </Typography>
              <Typography variant="body1">
                Chúng tôi rất hoan nghênh sự quan tâm và niềm tin mà quý vị dành
                cho khóa học này. <br />
                Chúng tôi hiểu rằng việc chọn một khóa học phù hợp cho con em
                mình là một quyết định quan trọng và quý vị đã đặt niềm tin vào
                chúng tôi. <br />
                Chúng tôi cam kết đem đến cho con em quý vị một môi trường học
                tập an toàn, đầy đủ và đáng tin cậy.
                <br />
                Khóa học này đã được chuẩn bị kỹ lưỡng và phát triển dựa trên
                những nghiên cứu và phương pháp giảng dạy tiên tiến nhất.
              </Typography>
            </Box>
            <Box className="pt-4 flex justify-center md:block">
              <CALinkButton href="/dang-ky-khoa-hoc" label="ĐĂNG KÍ NGAY" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
