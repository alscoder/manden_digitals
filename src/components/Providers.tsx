"use client";

import type { ReactNode } from 'react';

import { LanguageProvider } from '@/context/useLanguage';
import { ThemeProvider } from '@/context/useTheme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
