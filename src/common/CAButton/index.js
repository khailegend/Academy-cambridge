import Link from 'next/link';
import React from 'react';

export default function CALinkButton({
  href,
  label,
  children,
  classStyle = null,
}) {
  return (
    <Link
      href={href}
      className={`text:xl md:text-2xl lg:text-3xl py-3 px-6 rounded text-white font-bold text-base ${classStyle}`}
    >
      {children}
      {label}
    </Link>
  );
}
