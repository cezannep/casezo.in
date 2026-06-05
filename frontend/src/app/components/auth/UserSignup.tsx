"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/app/schemas/auth.schema";

export default function UserSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex flex-1 bg-[#f5f5f5] items-center justify-center">
        <h1 className="text-[120px] font-black leading-none">
          casezo
          <span className="text-[#A78344]">.in</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[42%] bg-black text-white flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center">
            <p className="text-2xl  font-serif leading-relaxed">
              Sign Up Today.
              <br />
              Lead Every Case with Confidence.
            </p>

            <h2 className="mt-12 text-5xl font-serif font-bold">Sign Up</h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-4"
            noValidate
          >
            <Input
              type="text"
              placeholder="Full Name"
              className="outline-none focus:border-[#A78344]"
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <Input
              type="email"
              placeholder="Email"
              className="outline-none focus:border-[#A78344]"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              type="tel"
              placeholder="Phone Number"
              className="outline-none focus:border-[#A78344]"
              error={errors.phoneNumber?.message}
              {...register("phoneNumber")}
            />

            <Input
              type="password"
              placeholder="Password"
              className="outline-none focus:border-[#A78344]"
              error={errors.password?.message}
              {...register("password")}
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              className="outline-none focus:border-[#A78344]"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <Button className="" type="submit">
              CREATE ACCOUNT
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-600" />
            <span className="text-sm text-gray-300">Or register with</span>
            <div className="flex-1 h-px bg-gray-600" />
          </div>

          {/* Google */}
          <Button
            className="bg-[#A78344] hover:bg-[#97763c] transition py-4 rounded-xl flex items-center justify-center gap-3"
            type="submit"
          >
            <FcGoogle size={20} />
            <span className="font-medium ">Google</span>
          </Button>

          {/* Login */}
          <p className="text-center mt-10 text-gray-400">
            Already a User?{" "}
            <Link href="/user-login" className="text-white font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
