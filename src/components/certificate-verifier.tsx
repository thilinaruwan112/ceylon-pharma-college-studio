
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { verifyCertificate } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Search, Loader2 } from "lucide-react";
import { useTranslation } from "@/context/language-context";

const VerifierLogo = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center gap-3 mb-6 text-primary-foreground">
            <div className="p-2 border-2 border-primary-foreground rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                </svg>
            </div>
            <div className="text-left font-headline">
                <p className="text-xs tracking-widest">{t('heroLogoLine1')}</p>
                <p className="text-sm font-semibold tracking-wider">{t('heroLogoLine2')}</p>
            </div>
        </div>
    );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();
  return (
    <Button type="submit" disabled={pending} size="icon" className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
      <span className="sr-only">{t('certVerifierButton')}</span>
    </Button>
  );
}

export default function CertificateVerifier() {
  const [state, formAction] = useActionState(verifyCertificate, { message: "", status: "", errors: null });
  const { t } = useTranslation();

  return (
    <section id="verify" className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <VerifierLogo />
            <h2 className="text-4xl md:text-5xl font-headline font-bold">
                {t('certVerifierTitle')}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                {t('certVerifierSubtitle')}
            </p>

            <form action={formAction} className="mt-8 max-w-xl mx-auto">
                <div className="relative">
                  <Input 
                    name="certificateNumber" 
                    placeholder={t('certVerifierInputPlaceholder')} 
                    required 
                    aria-label={t('certVerifierButton')}
                    className="h-14 w-full rounded-lg border-2 border-primary-foreground/50 bg-primary-foreground/90 pl-6 pr-16 text-base text-primary placeholder:text-primary/70 focus:border-primary-foreground focus:bg-primary-foreground focus:ring-2 focus:ring-primary-foreground/50"
                  />
                  <SubmitButton />
                </div>
                {state.errors?.certificateNumber && <p className="text-sm font-medium text-yellow-300 pt-2">{state.errors.certificateNumber[0]}</p>}
            </form>
            
            {state.message && state.status && (
              <div className="mt-6">
                <div className={`inline-flex items-center gap-2 rounded-md px-4 py-2 ${state.status === 'success' ? 'bg-primary-foreground/10' : 'bg-red-500/20'}`}>
                    {state.status === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                    <p className="font-body text-base font-medium text-primary-foreground">
                        {state.message}
                    </p>
                </div>
              </div>
            )}

            <p className="mt-8 max-w-3xl mx-auto text-primary-foreground/80 text-sm font-body leading-relaxed">
                {t('certVerifierDescription')}
            </p>
        </div>
    </section>
  );
}
