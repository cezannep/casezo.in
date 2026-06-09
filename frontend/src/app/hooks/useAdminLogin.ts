import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AdminLoginFormData,
  adminLoginSchema,
} from "../schemas/auth.adminLoginSchema";

export const useAdminLogin = () => {
  const form = useForm({
    resolver: zodResolver(adminLoginSchema),
    mode: "all",
  });

  const onSubmit = (data: AdminLoginFormData) => {
    console.log({ data });
  };

  return { form, onSubmit };
};
