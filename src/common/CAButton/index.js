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
      className={`py-3 px-6 rounded text-white font-bold text-base ${classStyle}`}
    >
      {children}
      {label}
    </Link>
  );
}
