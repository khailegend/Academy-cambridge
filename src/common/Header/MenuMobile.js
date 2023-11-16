import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
export default function MenuMobile({ pages }) {
  const [state, setState] = React.useState({
    top: false,
  });
  const defaultLinkClasses =
    'cursor-pointer relative font-bold p-2 flex items-center';
  const pathName = usePathname();
  const menuPosition = 'top';
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleShowMenuList = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        height: '100vh',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        className="flex justify-between items-center relative p-2"
        sx={{
          height: 60,
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
        }}
      >
        <Box className="flex gap-2 items-center">
          <Image
            src="/images/logos/Logo-CA.png"
            alt="Cambridge academy"
            width={35}
            height={43}
          />
          <Box>
            <Typography
              className="font-extrabold !text-[17px]"
            >
              Cambridge Academy
            </Typography>
          </Box>
        </Box>
        <Box className="p-2">
          <CloseIcon />
        </Box>
      </Box>
      <List className="flex flex-col pl-4">
        {pages.map((item, index) => {
          const isActive =
            item.url === pathName || pathName.startsWith(`${item.url}/`);

          return (
            <React.Fragment key={index}>
              <Link
                className={`${defaultLinkClasses} ${
                  isActive ? ` group` : 'text-black '
                } hover:ca-primary-bg-color group group-hover:`}
                href={item.url}
              >
                {item.name}
              </Link>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Box onClick={toggleDrawer(menuPosition, true)}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <Menu />
        </IconButton>
      </Box>
      <SwipeableDrawer
        sx={{ top: '100px', position: 'relative' }}
        anchor={menuPosition}
        open={state[menuPosition]}
        onClose={toggleDrawer(menuPosition, false)}
        onOpen={toggleDrawer(menuPosition, true)}
      >
        {handleShowMenuList(menuPosition)}
      </SwipeableDrawer>
    </>
  );
}
