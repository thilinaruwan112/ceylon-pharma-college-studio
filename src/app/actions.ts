"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitInquiry(prevState: any, formData: FormData) {
  const validatedFields = inquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }
  
  console.log("New Inquiry:", validatedFields.data);

  return { message: "Thank you for your inquiry! We will get back to you shortly.", errors: null };
}


const certificateSchema = z.object({
    certificateNumber: z.string().regex(/^[A-Z0-9]{8,12}$/, { message: "Please enter a valid certificate number (8-12 alphanumeric characters)." }),
});

const validCertificates = ["CPC2023001", "CPC2022105", "CPC2021050"];

export async function verifyCertificate(prevState: any, formData: FormData) {
  const validatedFields = certificateSchema.safeParse({
    certificateNumber: formData.get("certificateNumber"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
      status: 'error'
    };
  }

  const { certificateNumber } = validatedFields.data;

  if (validCertificates.includes(certificateNumber.toUpperCase())) {
    return { message: `Certificate ${certificateNumber} is valid and authentic.`, status: 'success', errors: null };
  } else {
    return { message: `Certificate ${certificateNumber} is not valid or could not be found.`, status: 'error', errors: null };
  }
}
