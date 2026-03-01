'use client';

import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Nav'), {
  ssr: false,
});

export default function NavClient() {
  return <Nav />;
}