import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CALinkButton from '../CAButton';

const FacebookIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="#3C5A99"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z"
      />
      <path
        fill="#fff"
        d="M19.4 27v-8.198h2.763l.414-3.21H19.4V13.55c0-.929.257-1.558 1.586-1.558h1.684V9.13a22.64 22.64 0 0 0-2.468-.126c-2.444 0-4.117 1.49-4.117 4.23v2.362h-2.753v3.21h2.753V27h3.315Z"
      />
    </svg>
  );
};
const YoutubeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={31}
      fill="none"
      {...props}
    >
      <path
        fill="#CD201F"
        d="M18.28 30.962c-8.406-.155-11.277-.294-13.041-.658-1.194-.242-2.232-.778-2.993-1.556-.588-.589-1.055-1.487-1.418-2.733-.311-1.039-.433-1.903-.605-4.013-.265-4.763-.328-8.657 0-13.008.27-2.403.4-5.255 2.196-6.919A5.888 5.888 0 0 1 5.359.588C7.09.26 14.459 0 22.087 0c7.611 0 14.996.26 16.727.588 1.383.26 2.68 1.038 3.442 2.04 1.638 2.577 1.667 5.78 1.833 8.287.069 1.194.069 7.973 0 9.167-.259 3.96-.467 5.362-1.055 6.814-.364.918-.674 1.402-1.211 1.938a5.802 5.802 0 0 1-3.08 1.574c-7.274.547-13.45.666-20.461.554Zm11.14-15.914c-4.047-2.162-7.922-4.168-11.883-6.244v12.42c4.168-2.266 8.563-4.342 11.9-6.193l-.017.017Z"
      />
    </svg>
  );
};
const TiktokIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={38}
      fill="none"
      {...props}
    >
      <path
        fill="#EE1D52"
        d="M6.491 24.49c.228-1.887 1.002-2.944 2.46-4.027 2.087-1.466 4.693-.637 4.693-.637v-4.922c.634-.016 1.268.021 1.895.112v6.335s-2.606-.83-4.693.637c-1.457 1.083-2.233 2.14-2.46 4.027-.007 1.024.185 2.364 1.07 3.522a8.654 8.654 0 0 1-.669-.384c-1.95-1.31-2.305-3.275-2.296-4.663Zm19.81-18.687c-1.435-1.573-1.978-3.161-2.174-4.277h1.806s-.36 2.926 2.264 5.802l.036.039a10.404 10.404 0 0 1-1.932-1.564Zm8.7 4.46v6.206s-2.305-.09-4.01-.524c-2.381-.607-3.912-1.537-3.912-1.537s-1.057-.664-1.143-.71v12.817c0 .714-.195 2.496-.79 3.983-.779 1.945-1.979 3.22-2.2 3.482 0 0-1.46 1.725-4.035 2.887-2.322 1.048-4.36 1.022-4.97 1.048 0 0-3.524.14-6.694-1.92a13.304 13.304 0 0 1-1.912-1.538l.016.012c3.171 2.06 6.694 1.92 6.694 1.92.61-.026 2.649 0 4.97-1.047 2.573-1.162 4.035-2.887 4.035-2.887.219-.261 1.425-1.538 2.2-3.483.593-1.486.79-3.269.79-3.983V12.175c.086.047 1.142.71 1.142.71s1.532.932 3.913 1.538c1.706.433 4.01.524 4.01.524v-4.864c.787.177 1.46.225 1.895.18Z"
      />
      <path
        fill="#000"
        d="M33.105 10.082v4.862s-2.303-.09-4.01-.524c-2.38-.607-3.912-1.537-3.912-1.537s-1.056-.664-1.141-.71V24.99c0 .714-.196 2.497-.792 3.982-.777 1.946-1.978 3.222-2.199 3.483 0 0-1.46 1.725-4.035 2.887-2.321 1.048-4.36 1.022-4.97 1.048 0 0-3.523.14-6.694-1.92l-.016-.012c-.335-.324-.65-.667-.944-1.025C3.38 32.2 2.76 30.74 2.604 30.324v-.005c-.251-.724-.778-2.461-.706-4.144.127-2.97 1.172-4.792 1.448-5.248a12.473 12.473 0 0 1 2.811-3.293 11.858 11.858 0 0 1 3.341-1.896 11.624 11.624 0 0 1 4.147-.834v4.922s-2.607-.826-4.693.637c-1.458 1.083-2.232 2.14-2.46 4.027-.01 1.388.346 3.353 2.295 4.664.227.144.45.272.67.384.34.442.754.828 1.226 1.141 1.904 1.205 3.499 1.29 5.539.507 1.36-.524 2.384-1.703 2.859-3.01.298-.816.294-1.637.294-2.486V1.525h4.748c.196 1.116.74 2.704 2.175 4.277a10.407 10.407 0 0 0 1.931 1.564c.21.216 1.277 1.285 2.649 1.94.709.34 1.456.6 2.227.775Z"
      />
      <path
        fill="#69C9D0"
        d="M.713 28.813v.003l.118.32c-.013-.037-.057-.15-.118-.323Z"
      />
      <path
        fill="#69C9D0"
        d="M9.498 15.738a11.863 11.863 0 0 0-3.341 1.896 12.474 12.474 0 0 0-2.81 3.299c-.277.455-1.321 2.28-1.449 5.248-.072 1.683.455 3.42.706 4.144v.006c.158.412.776 1.871 1.788 3.11.294.358.61.7.944 1.024a12.977 12.977 0 0 1-2.839-2.55C1.494 30.69.875 29.246.714 28.82v-.015c-.252-.723-.78-2.46-.707-4.146.127-2.97 1.172-4.792 1.448-5.248a12.456 12.456 0 0 1 2.81-3.3 11.836 11.836 0 0 1 3.342-1.895 11.832 11.832 0 0 1 2.356-.664 12.213 12.213 0 0 1 3.685-.052v1.403a11.623 11.623 0 0 0-4.15.834Z"
      />
      <path
        fill="#69C9D0"
        d="M24.126 1.526h-4.748V25.69c0 .85 0 1.668-.294 2.487-.48 1.306-1.5 2.485-2.859 3.008-2.04.786-3.636.699-5.539-.506a5.118 5.118 0 0 1-1.23-1.138c1.622.829 3.073.814 4.87.123 1.36-.523 2.381-1.703 2.859-3.01.299-.816.295-1.637.295-2.486V0h6.556s-.074.6.09 1.526Zm8.978 7.21v1.346a10.632 10.632 0 0 1-2.223-.775c-1.372-.656-2.44-1.724-2.649-1.94.243.152.494.29.754.415 1.667.798 3.309 1.036 4.118.955Z"
      />
    </svg>
  );
};
export default function Footer() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElementPosition =
        document.getElementById('footer').offsetTop - 350;
      const position = window.pageYOffset;
      if (sectionElementPosition <= position) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container
      maxWidth={false}
      className="bg-[#D9D9D9] flex flex-col overflow-hidden"
      id="footer"
    >
      <Box className="py-8 flex flex-col md:justify-around md:flex-row gap-3">
        <Box className="flex flex-col items-center basis-2/6 md:gap-[140px]">
          <Box>
            <Box>
              <Image
                src="/images/homepage/footer-logo-ca.png"
                width={300}
                height={200}
                alt="Cambridge Academy"
              />
            </Box>
            <Box className="flex gap-3 justify-center items-center">
              <FacebookIcon />
              <YoutubeIcon />
              <TiktokIcon />
            </Box>
          </Box>
          <Box className="basis-2/6">
            <Box className="whitespace-nowrap ">
              <Typography>
                <strong>Hotline:</strong>{' '}
              </Typography>
              <Typography>034 968 2689 - 036 992 1796</Typography>
            </Box>
            <Box className="whitespace-nowrap ">
              <Typography>
                <strong>Email:</strong>
              </Typography>
              <Typography>info@cambridge-academy.edu.vn</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="md:pt-20 basis-2/6">
          <Box className="mb-8">
            <Typography className=" font-extrabold text-3xl mb-8">
              Khóa học
            </Typography>
            <Box className="flex flex-col flex-wrap gap-2">
              <Link href="/khoa-hoc/chuong-trinh-cambridge">
                Khóa học Chương trình Quốc tế / Cambridge
              </Link>
              <Link href="/khoa-hoc/chung-chi-cambridge">
                Chương trình Bộ Giáo dục & Đào tạo
              </Link>
              <Link href="/khoa-hoc/chung-chi-cambridge">
                Luyện thi chứng chỉ Cambridge
              </Link>
              <Link href="/khoa-hoc/luyen-thi-dau-vao">
                Luyện thi đầu vào trường top{' '}
              </Link>
            </Box>
          </Box>
          <Box className="basis-2/6">
            <Box className="mb-8">
              <Typography className=" font-extrabold text-3xl mb-3">
                Giáo viên
              </Typography>
              <Link href="/">FAQ</Link>
            </Box>
            <Box>
              <Typography className=" font-extrabold text-3xl">
                CA NEWS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex flex-col gap-5 items-center md:pt-20 basis-2/6">
          <Typography className=" font-extrabold text-3xl mb-8">
            Where learning takes flight
          </Typography>
          <CALinkButton
            href="/course"
            label="Test trình độ và học thử miễn phí"
            classStyle={`
            hover:scale-110 ca-try-test text-white relative ca-primary-bg-color font-bold text-center rounded-[25px] transition-all duration-700  !text-2xl px-0 max-w-[289px] ${
              isShow ? 'right-0' : 'right-[-100%]'
            }
            `}
          />
          <Box className="hidden md:flex justify-center basis-2/6 items-center">
            <CALinkButton
              href="/course"
              label="Đăng ký thi chứng chỉ miễn phí"
              classStyle={`
            hover:scale-110 ca-try-test text-white relative ca-primary-bg-color font-bold text-center rounded-[25px] transition-all duration-700  !text-2xl px-0 max-w-[289px] ${
              isShow ? 'right-0' : 'right-[-100%]'
            }
            `}
            />
          </Box>
          <Box className="flex md:hidden justify-center basis-2/6 items-center">
            <CALinkButton
              href="/course"
              label="Đăng ký thi chứng chỉ miễn phí"
              classStyle={`
            hover:scale-110 ca-try-test text-white relative ca-primary-bg-color font-bold text-center rounded-[25px] transition-all duration-700  !text-2xl px-0 max-w-[289px] ${
              isShow ? 'right-0' : 'right-[-100%]'
            }
            `}
            />
          </Box>
        </Box>
      </Box>
      <Box className="text-left m-0 md:m-auto flex justify-around">
        <div className="p-10">
          <div id="DMCA-badge" className="flex">
            <div className="text-white p-1 text-sm" style={{left: '0px', backgroundColor: 'rgb(12, 19, 79)'}}>
              <a href="https://www.dmca.com/r/p274g1k" title="DMCA">DMCA</a>
            </div>
            <div className="text-white p-1 text-sm" style={{backgroundColor: 'rgb(225, 157, 32)'}}>
              <a href="https://www.dmca.com/r/p274g1k" title="DMCA">PROTECTED</a>
            </div>
          </div>
        </div>

        <div >
          <Box className="whitespace-break-spaces md:whitespace-nowrap ">
            <Typography>
              <strong>Cơ sở 1:</strong> Vinhome Central Park - Phường 22 - Bình
              Thạnh - TP Hồ Chí Minh
            </Typography>
          </Box>
          <Box className="whitespace-break-spaces md:whitespace-nowrap ">
            <Typography>
              <strong>Cơ sở 2: </strong>Tháp B Lumiere Boulevard - Quận 9 - TP Hồ
              Chí Minh
            </Typography>
          </Box>
          <Box className="whitespace-break-spaces md:whitespace-nowrap ">
            <Typography>
              <strong>Cơ sở 3: </strong>86 Tân Cảng - Phường 25 - Bình Thạnh - TP
              HCM
            </Typography>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
