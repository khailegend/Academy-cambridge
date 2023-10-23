import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CALinkButton from '../CAButton';

export const MenuDropDown = ({ items }) => {
  const pathname = usePathname() || '';
  const defaultLinkClasses =
    'cursor-pointer relative font-bold p-2 flex items-center';
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex', gap: '4px' },
        }}
        className="justify-end relative menu gap-2"
      >
        {items.map((item) => {
          const isActive =
            item.url === pathname || pathname.startsWith(`${item.url}/`);

          return (
            <Link
              key={item.name}
              href={item.url}
              className={`${defaultLinkClasses} ${
                isActive ? `ca-primary-bg-color  group` : 'text-black '
              } hover:ca-primary-bg-color group group-hover:`}
            >
              {item.name}
            </Link>
          );
        })}
        <CALinkButton
          href="tel:0356711663"
          label="Tư vấn ngay"
          classStyle="text-white ca-primary-bg-color uppercase rounded-[50px]"
        />
      </Box>
    </>
  );
};
