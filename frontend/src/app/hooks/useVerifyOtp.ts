import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  VerifyOtpFormData,
  verifyOtpSchema,
} from "../schemas/auth.verifyOtpSchema";

export const useVerifyOtp = () => {
  const form = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    mode: "all",
  });

  const onSubmit = (data: VerifyOtpFormData) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
