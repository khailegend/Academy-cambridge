import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Analytics />
    </>
  );
}
