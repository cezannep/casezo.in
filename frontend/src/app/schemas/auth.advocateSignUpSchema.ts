import { z } from "zod";

export const advocateSignupSchema = z
  .object({
    enrollmentNumber: z
      .string()
      .trim()
      .min(3, "Enrollment number is required")
      .max(50, "Enrollment number should be within 50 characters")
      .regex(/^[A-Za-z0-9/-]+$/, "Only letters, numbers, / and - are allowed"),
    fullName: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters")
      .max(50, "Full name cannot exceed 50 characters")
      .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

    email: z.email("Please enter a valid email address"),

    phoneNumber: z
      .string()
      .regex(/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password cannot exceed 32 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export type AdvoateSignupFormData = z.infer<typeof advocateSignupSchema>;
