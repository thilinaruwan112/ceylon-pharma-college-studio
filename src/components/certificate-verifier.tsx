"use client";

import { useFormState, useFormStatus } from "react-dom";
import { verifyCertificate } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? "Verifying..." : "Verify Certificate"}
    </Button>
  );
}

export default function CertificateVerifier() {
  const [state, formAction] = useFormState(verifyCertificate, { message: "", status: "", errors: null });

  return (
    <div id="verify">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Certificate Verification</CardTitle>
          <CardDescription className="font-body">Enter a certificate number to verify its authenticity online.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div>
              <Input name="certificateNumber" placeholder="e.g., CPC2023001" required aria-label="Certificate Number" />
              {state.errors?.certificateNumber && <p className="text-sm font-medium text-destructive pt-1">{state.errors.certificateNumber[0]}</p>}
            </div>
            <SubmitButton />
          </form>
          {state.message && state.status && (
            <Alert className="mt-4" variant={state.status === 'success' ? 'default' : 'destructive'}>
              {state.status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              <AlertTitle className="font-headline">{state.status === 'success' ? 'Verification Successful' : 'Verification Failed'}</AlertTitle>
              <AlertDescription className="font-body">
                {state.message}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
