import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Providers } from '@/components/Providers';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </Providers>
  );
}
