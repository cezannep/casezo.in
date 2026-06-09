"use client";
import Link from "next/link";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAdminLogin } from "@/app/hooks/useAdminLogin";

export default function AdvocateLogin() {
  const { form, onSubmit } = useAdminLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex flex-1 bg-[#f5f5f5] items-center justify-center">
        <Link href={"/"}>
          <h1 className="text-[120px] font-black leading-none">
            casezo
            <span className="text-[#A78344]">.in</span>
          </h1>
        </Link>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[42%] bg-black text-white flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center">
            <Link href={"/"}>
              <h1 className=" lg:hidden text-5xl font-black leading-none">
                casezo
                <span className="text-[#A78344]">.in</span>
              </h1>
            </Link>
            <p className="hidden lg:flex lg:text-2xl font-serif leading-relaxed mt-2">
              Login Today.
              <br />
              Lead Every Case with Confidence.
            </p>
            <h2 className="mt-5 lg:mt-12 text-2xl lg:text-5xl font-serif ">
              Advocate Login
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 lg:mt-10 space-y-4"
            noValidate
          >
            <Input
              type="email"
              placeholder="Email"
              className="outline-none focus:border-[#A78344]"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              type="password"
              placeholder="Password"
              className="outline-none focus:border-[#A78344]"
              error={errors.password?.message}
              {...register("password")}
            />

            <Button className="mt-3" type="submit">
              LOGIN
            </Button>
          </form>

          {/* Login */}
          <p className="text-center mt-10 text-gray-400">
            Not Registered yet? {"  "}
            <Link href="/advocate-signup" className="text-white font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
