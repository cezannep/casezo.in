"use client";
import Link from "next/link";

export default function UserNavbar () {

  return (
    <nav className="max-w-7xl mx-auto py-8 flex justify-between items-center gap-20">
      <h1 className="text-4xl font-black">
        casezo<span className="text-[#B78134]">.in</span>
      </h1>

      <div className="hidden md:flex items-center gap-10  font-bold">
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/contacts">Contacts</Link>
      </div>


    </nav>
  );
}
