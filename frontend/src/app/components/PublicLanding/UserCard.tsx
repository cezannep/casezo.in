"use client";

import Image from "next/image";
import { User, BriefcaseBusiness, CheckCircle } from "lucide-react";
import { useSignupNavigation } from "../../hooks/useSignupNavigation"

interface Props {
  type: "user" | "advocate";
  data: string[];
}

export default function UserCard({ type, data }: Props) {

  const navigateToSignup = useSignupNavigation();

  const isUser = type === "user";

  return (
    <div className="flex flex-col  bg-white rounded-4xl border border-[#F1ECE5] p-8">
      <div
        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
          isUser ? "bg-purple-800" : "bg-[#B78134]"
        }`}
      >
        {isUser ? (
          <User className="text-white" />
        ) : (
          <BriefcaseBusiness className="text-white" />
        )}
      </div>

      <h3 className="text-center text-3xl md:text-4xl font-bold mt-6">
        {isUser ? (
          <>
            I am a <span className="text-purple-800">User</span>
          </>
        ) : (
          <>
            I am an <span className="text-[#B78134]">Advocate</span>
          </>
        )}
      </h3>

      <p className="text-center text-gray-600 mt-4 px-10">
        {isUser
          ? "Manage your legal matters, track cases, appointments and documents with ease."
          : "Run your practice, manage clients, cases and streamline your workflow."}
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <ul className="mt-8 space-y-4">
          {data.map((item, ind) => (
            <li key={ind} className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className={isUser ? "text-purple-600" : "text-[#B78134]"}
              />
              {item}
            </li>
          ))}
        </ul>

        <Image
          src={isUser ? "/assets/publicLandingPage/user-card.webp" : "/assets/publicLandingPage/advocate-card.webp"}
          alt={isUser ? "User Card" : "Advocate Card"}
          width={230}
          height={170}
          className="mx-auto mt-8 w-auto h-auto"
        />

      </div>
      <div className="mt-auto">
      <button
        className={`w-full cursor-pointer py-4 rounded-xl mt-5 text-white font-semibold ${
          isUser ? "bg-purple-900" : "bg-[#B78134] "
        }`}
        onClick={() => navigateToSignup({type})}
      >
        {isUser ? "Continue as User" : "Continue as Advocate"}
      </button>

      <p className="text-center mt-4 text-gray-500 text-sm">
        {isUser
          ? "For individuals, clients and businesses"
          : "For lawyers and legal professionals"}
      </p>
      </div>
    </div>
  );
}
