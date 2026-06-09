import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  AdvocateLoginFormData,
  advocateLoginSchema,
} from "../schemas/auth.advocateLoginSchema";

export const useAdvocateSignup = () => {
  const form = useForm<AdvocateLoginFormData>({
    resolver: zodResolver(advocateLoginSchema),
    mode: "all",
  });

  const onSubmit = (data: AdvocateLoginFormData) => {
    console.log(data);
  };
  return { form, onSubmit };
};
