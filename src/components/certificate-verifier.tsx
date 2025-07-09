
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Image from 'next/image';
import { verifyCertificate } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XCircle, Search, Loader2 } from "lucide-react";
import { useTranslation } from "@/context/language-context";
import CertificateResultCard from "./certificate-result-card";

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
  const [state, formAction] = useActionState(verifyCertificate, { message: "", status: "", errors: null, data: null });
  const { t } = useTranslation();

  return (
    <section id="verify" className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mb-6">
              <Image
                src="https://pharmacollege.lk/assets/logo/logo-cpc.png"
                alt="Ceylon Pharma College Logo"
                width={200}
                height={62}
                className="brightness-0 invert mx-auto"
                priority
              />
            </div>
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
            
            <div className="mt-6 max-w-xl mx-auto">
              {state.status === 'success' && state.data && <CertificateResultCard data={state.data} />}

              {state.status === 'error' && state.message && (
                  <div className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-red-500/20">
                      <XCircle className="h-5 w-5" />
                      <p className="font-body text-base font-medium text-primary-foreground">
                          {state.message}
                      </p>
                  </div>
              )}
            </div>


            <p className="mt-8 max-w-3xl mx-auto text-primary-foreground/80 text-sm font-body leading-relaxed">
                {t('certVerifierDescription')}
            </p>
        </div>
    </section>
  );
}
