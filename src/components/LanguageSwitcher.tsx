"use client";

import { useLanguage } from '@/context/useLanguage';
import type { Language } from '@/utils/translation';

const options: Array<{ value: Language; label: string }> = [
  { value: 'fr', label: 'FR' },
  { value: 'en', label: 'EN' },
  { value: 'bm', label: 'BM' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="rounded-lg border border-neutral-200/70 bg-white/90 px-2 py-1 text-sm text-neutral-700 shadow-sm transition-colors hover:border-[#D4AF37] focus:border-[#D4AF37] focus:outline-none dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-200"
        aria-label="Select language"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
