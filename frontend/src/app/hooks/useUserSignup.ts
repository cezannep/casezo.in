import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSignupFormData, userSignupSchema } from "../schemas/auth.userSignUpSchema";


export const useUserSignup = () => {
  const form = useForm<UserSignupFormData>({
    resolver: zodResolver(userSignupSchema),
    mode: "all",
  });

  const onSubmit = (data: UserSignupFormData) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
