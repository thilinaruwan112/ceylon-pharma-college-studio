
"use client";

import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/context/language-context';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/60 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://content-provider.pharmacollege.lk/logo/logo-cpc.png"
              alt="Ceylon Pharma College Logo"
              width={180}
              height={56}
              className="h-auto w-40 dark:hidden"
            />
            <Image
              src="https://content-provider.pharmacollege.lk/logo/logo-cpc.png"
              alt="Ceylon Pharma College Logo"
              width={180}
              height={56}
              className="h-auto w-40 hidden dark:block dark:brightness-0 dark:invert"
            />
          </Link>
          <p className="text-sm font-body">
            {t('footerSlogan')}
          </p>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">{t('quickLinks')}</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-body">
            <Link href="/" className="hover:text-primary transition-colors">{t('footerHome')}</Link>
            <Link href="/about" className="hover:text-primary transition-colors">{t('footerAbout')}</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">{t('footerCourses')}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">{t('footerContact')}</Link>
            <Link href="#verify" className="hover:text-primary transition-colors">{t('footerVerify')}</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">{t('footerContactUs')}</h4>
          <div className="text-sm font-body space-y-2">
            <div>
              <p className="font-semibold text-foreground">{t('contactHeadOffice')}</p>
              <p>{t('contactHeadOfficeAddress')}</p>
            </div>
             <div>
              <p className="font-semibold text-foreground">{t('contactOperationsBranch')}</p>
              <p>{t('contactOperationsBranchAddress')}</p>
            </div>
             <p>{t('footerEmail')}<a href="mailto:info@pharmacollege.lk" className="hover:text-primary transition-colors">info@pharmacollege.lk</a></p>
            <p>{t('footerPhone')}<a href="tel:0117494335" className="hover:text-primary transition-colors">011 74 94 335</a></p>
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
