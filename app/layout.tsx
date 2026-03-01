import { ReactNode } from 'react';
import { Providers } from './providers';
import NavClient from '../components/NavClient';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavClient />
          {children}
        </Providers>
      </body>
    </html>
  );
}