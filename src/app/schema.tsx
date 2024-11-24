import { z } from "zod";

// Schema for Step 1
export const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().min(1, "Invalid phone number"),
});

// Schema for Step 2
export const step2Schema = z.object({
  plan: z.string().min(1, "Please select a plan"),
  price: z.string(),
  billingType: z.enum(["monthly", "yearly"]),
  
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
