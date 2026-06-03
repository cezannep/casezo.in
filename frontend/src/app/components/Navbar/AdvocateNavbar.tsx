"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdvocateNavbar() {
  const router = useRouter();
  function hanldeLogin() {
    router.push("/login");
  }
  function handleSigup() {
    router.push("/signup");
  }
  return (
    <nav className="px-20 py-8 flex justify-between items-center gap-20">
      <h1 className="text-4xl font-black">
        casezo<span className="text-[#B78134]">.in</span>
      </h1>

      <div className="hidden md:flex items-center gap-10  font-bold">
        <Link href="/howItWorks">How it works</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/features">Features</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/contacts">Contacts</Link>
      </div>

      <div className="flex gap-5">
        <button
          onClick={hanldeLogin}
          className="border px-7 py-2 rounded-md font-bold hover:bg-black hover:text-white cursor-pointer"
        >
          login
        </button>
        <button
          onClick={handleSigup}
          className="border px-10 py-2 rounded-md bg-[#967740] font-bold text-white hover:bg-[#967740]/90 hover:text-black cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
