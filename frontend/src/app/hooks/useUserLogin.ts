import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginFormData, userLoginSchema } from "../schemas/auth.userLoginSchema";



export const useUserLogin = () => {
  const form = useForm<UserLoginFormData>({
    resolver: zodResolver(userLoginSchema),
    mode: "all",
  });

  const onSubmit = (data: UserLoginFormData) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
