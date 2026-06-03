"use client"
import { CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {

  const [email,setEmail] = useState("");

  function  handleEmail(e:React.ChangeEvent<HTMLInputElement>):void{
    setEmail(e.target.value);
  }

  function handleEmailSubcription():void{
    console.log(`email sent to ${email}`)
  }
  
  const features = [
    "Secure & Reliable",
    "Access Anywhere",
    "Easy to Use",
    "Dedicated Support",
  ];

  return (
    <footer className="bg-[#f7f7f7] px-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 ">
          {/* Logo + Description */}
          <div className="flex flex-col items-center lg:items-baseline ">
            <h2 className="text-5xl font-black tracking-tight">
              casezo
              <span className="text-[#B68A43]">.in</span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed max-w-md">
              casezo.in is an all-in-one case management platform for advocates
              and law firms. Organize cases, manage documents, track deadlines,
              and grow your practice with ease.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-10 ">
            {/* Product */}
            <div className="flex flex-col items-center lg:items-baseline">
              <h4 className="font-semibold text-2xl mb-8">Product</h4>

              <ul className="space-y-4 text-gray-800">
                <li>Features</li>
                <li>Pricing</li>
                <li>Updates</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-center lg:items-baseline">
              <h4 className="font-semibold text-2xl mb-8">Resources</h4>

              <ul className="space-y-4 text-gray-800">
                <li>Help Center</li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col items-center lg:items-baseline">
              <h4 className="font-semibold text-2xl mb-8">Resources</h4>

              <ul className="space-y-4 text-gray-800">
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col lg:items-baseline items-center">

            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e)=>handleEmail(e)}
                className="w-full h-14 border border-gray-300 bg-white pl-12 pr-4 outline-none"
              />
            </div>
            

            <button onClick={handleEmailSubcription} className="w-full lg:w-full h-12 mt-3 bg-[#B68A43] text-white font-medium hover:opacity-90 transition">
              Subscribe Now
            </button>

            <p className="text-center text-sm text-gray-500 mt-3">
              No spam. Unsubscribe anytime
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-6">
              {[
                <FaFacebookF key="fb" />,
                <FaLinkedinIn key="li" />,
                <FaXTwitter key={"x"} />,
                <FaInstagram key="ig" />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-14 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-gray-700">
              © {new Date().getFullYear()} casezo.in. All rights reserved
            </p>

            <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-gray-800">
              <span>Privacy Policy</span>
              <span className="hidden lg:block">|</span>

              <span>Terms of Service</span>
              <span className="hidden lg:block">|</span>

              <span>Refund Policy</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
