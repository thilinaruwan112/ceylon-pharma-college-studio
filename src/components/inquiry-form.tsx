"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";

import { submitInquiry } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export default function InquiryForm() {
  const [state, formAction] = useActionState(submitInquiry, { message: "", errors: null });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div id="inquire">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Have a Question?</CardTitle>
          <CardDescription className="font-body">Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <div>
              <Input name="name" placeholder="Your Name" required aria-label="Your Name"/>
              {state.errors?.name && <p className="text-sm font-medium text-destructive pt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Input name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
              {state.errors?.email && <p className="text-sm font-medium text-destructive pt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Input name="subject" placeholder="Subject" required aria-label="Subject"/>
              {state.errors?.subject && <p className="text-sm font-medium text-destructive pt-1">{state.errors.subject[0]}</p>}
            </div>
            <div>
              <Textarea name="message" placeholder="Your Message" required aria-label="Your Message"/>
              {state.errors?.message && <p className="text-sm font-medium text-destructive pt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
