import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AdvoateSignupFormData,
  advocateSignupSchema,
} from "../schemas/auth.advocateSignUpSchema";

export const useAdvocateSignup = () => {
  const form = useForm<AdvoateSignupFormData>({
    resolver: zodResolver(advocateSignupSchema),
    mode: "all",
  });

  const onSubmit = (data: AdvoateSignupFormData) => {
    console.log(data);
  };
  return { form, onSubmit };
};
