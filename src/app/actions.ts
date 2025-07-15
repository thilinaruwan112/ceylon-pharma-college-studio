
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

  return { message: "Thank you for your inquiry! We will get back to you shortly.", errors: null, data: null };
}


const certificateSchema = z.object({
    certificateNumber: z.string().min(1, { message: "Please enter a valid certificate number." }),
});

// Mock database of certificates
const validCertificates: Record<string, any> = {
  "CPC2023001": {
    studentName: "A. K. D. Jayesinghe",
    grade: "Distinction",
    course: "Diploma in Pharmacy Practice",
    rating: 5,
    batchCode: "DPP2023JAN",
    userName: "akd.jayesinghe",
  },
  "CPC2022105": {
    studentName: "Nimali Fernando",
    grade: "Merit",
    course: "Advanced Community Pharmacy",
    rating: 4,
    batchCode: "ACP2022JUL",
    userName: "n.fernando",
  },
  "CPC2021050": {
    studentName: "Sanjay Kumar",
    grade: "Pass",
    course: "Certificate in Pharmacy Practice",
    rating: 3,
    batchCode: "CPP2021MAY",
    userName: "s.kumar",
  },
};

export async function verifyCertificate(prevState: any, formData: FormData) {
  const validatedFields = certificateSchema.safeParse({
    certificateNumber: formData.get("certificateNumber"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
      status: 'error',
      data: null,
    };
  }

  const { certificateNumber } = validatedFields.data;
  const upperCaseCertNumber = certificateNumber.toUpperCase();

  if (Object.keys(validCertificates).includes(upperCaseCertNumber)) {
    const studentData = validCertificates[upperCaseCertNumber];
    return { 
      message: `Certificate ${upperCaseCertNumber} is valid.`, 
      status: 'success', 
      errors: null,
      data: studentData
    };
  } else {
    return { 
      message: `Certificate ${certificateNumber} is not valid or could not be found.`, 
      status: 'error', 
      errors: null,
      data: null,
    };
  }
}

const reviewSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  role: z.string().min(3, { message: "Role must be at least 3 characters." }),
  rating: z.coerce.number().min(1, { message: "Please select a rating." }).max(5),
  review: z.string().min(15, { message: "Review must be at least 15 characters." }),
});

export async function submitReview(prevState: any, formData: FormData) {
  const validatedFields = reviewSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    rating: formData.get("rating"),
    review: formData.get("review"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }
  
  // In a real application, you would save this to a database for moderation.
  console.log("New Review Submitted:", validatedFields.data);

  return { message: "Thank you for your review! It has been submitted for approval.", errors: null, data: validatedFields.data };
}
