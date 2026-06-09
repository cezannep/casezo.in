"use client";
import Link from "next/link";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useVerifyOtp } from "@/app/hooks/useVerifyOtp";

export default function VerifyOtp() {
  const { form, onSubmit } = useVerifyOtp();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const otpFields = ["otp1", "otp2", "otp3", "otp4"] as const;

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex flex-1 bg-[#f5f5f5] items-center justify-center">
        <Link href={"/"}>
          <h1 className="text-[120px] font-black leading-none">
            casezo
            <span className="text-[#A78344]">.in</span>
          </h1>
        </Link>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-8">
        <div className="w-full max-w-md text-center">
          <Link href={"/"}>
            <h1 className=" lg:hidden text-5xl text-white leading-none mb-20">
              casezo
              <span className="text-[#A78344]">.in</span>
            </h1>
          </Link>

          <h1 className="text-white text-5xl font-bold mb-4">Enter OTP</h1>

          <p className="text-gray-400 text-sm mb-1">
            We sent a verification code to
          </p>

          <p className="text-gray-300 mb-10">xxxx@gmail.com</p>

          {/* OTP Inputs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between gap-3 mb-4">
              {otpFields.map((field) => (
                <Input
                  key={field}
                  type="text"
                  maxLength={1}
                  className="
                      w-16 h-20
                      p-5
                      text-center
                      text-white
                      text-2xl
                      font-semibold
                      bg-[#2A2A2A]
                      border
                      border-white
                      rounded-xl
                      outline-none
                      focus:border-[#967740]
                      focus:ring-2
                      focus:ring-[#967740]
                    "
                  error={errors[field]?.message}
                  {...register(field)}
                />
              ))}
            </div>
          
          {/* Submit Button */}
          <Button
            className="
              mt-3 w-full
              h-14
              border
              border-white
              rounded-xl
              text-white
              text-xl
              font-semibold
              hover:bg-white
              hover:text-black
              transition"
            type="submit"
          >
            Submit
          </Button>
          
          </form>

          {/* Resend OTP */}
          <p className="text-gray-400 text-sm mt-10">
            {"Didn't get the code?"}{" "}
            <Link href={"/resend-otp"}>
              <span className="text-white">{" click here to resend OTP"}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
