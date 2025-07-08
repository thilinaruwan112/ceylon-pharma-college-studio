
"use client";

import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/60 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span>Ceylon Pharma College</span>
          </Link>
          <p className="text-sm font-body">
            {t('footerSlogan')}
          </p>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">{t('quickLinks')}</h4>
          <div className="grid grid-cols-2 gap-2 text-sm font-body">
            <Link href="/" className="hover:text-primary transition-colors">{t('footerHome')}</Link>
            <Link href="/about" className="hover:text-primary transition-colors">{t('footerAbout')}</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">{t('footerCourses')}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">{t('footerContact')}</Link>
            <Link href="#verify" className="hover:text-primary transition-colors">{t('footerVerify')}</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">{t('footerContactUs')}</h4>
          <div className="text-sm font-body space-y-1">
            <p>{t('footerAddress')}</p>
            <p>{t('footerEmail')}<a href="mailto:info@ceylonpharma.lk" className="hover:text-primary transition-colors">info@ceylonpharma.lk</a></p>
            <p>{t('footerPhone')}<a href="tel:+94112345678" className="hover:text-primary transition-colors">+94 11 234 5678</a></p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4 text-sm md:px-6 text-center sm:text-left">
          <p className="font-body">{t('copyright', { year: year })}</p>
          <p className="font-body">
            {t('poweredBy')}<a href="https://payshia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">Payshia Software Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
