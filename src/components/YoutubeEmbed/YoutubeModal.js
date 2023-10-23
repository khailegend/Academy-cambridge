import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
};
const mobileStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
};

export default function YoutubeModal({ children, thumbnailImg }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleCheckIsMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
      return;
    };
    handleCheckIsMobile();
    window.addEventListener('resize', handleCheckIsMobile);

    return () => {
      window.removeEventListener('resize', handleCheckIsMobile);
    };
  }, []);
  return (
    <div>
      <Box onClick={handleOpen}>
        <Image
          src={thumbnailImg}
          width={698}
          height={337}
          alt="Cambridge academy"
        />
      </Box>
      <Modal open={open} onClose={handleClose}>
        <>
          <Box sx={isMobile ? mobileStyle : style}>{children}</Box>
          <Box
            className="p-4 bg-white flex justify-center items-center absolute right-0 cursor-pointer bg-white"
            sx={{ width: 40, height: 40 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
        </>
      </Modal>
    </div>
  );
}
