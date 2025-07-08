
import { en } from './locales/en';
import { si } from './locales/si';
import { ta } from './locales/ta';

export const translations = {
  en,
  si,
  ta,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
