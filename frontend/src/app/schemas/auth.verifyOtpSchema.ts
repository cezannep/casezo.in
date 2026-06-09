import { z } from "zod";

export const verifyOtpSchema = z.object({
  otp1: z.string().length(1, "Required"),
  otp2: z.string().length(1, "Required"),
  otp3: z.string().length(1, "Required"),
  otp4: z.string().length(1, "Required"),
});

export type VerifyOtpFormData = z.infer<typeof verifyOtpSchema>;