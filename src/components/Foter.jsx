"use client";

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaTelegramPlane, FaLongArrowAltUp, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative  bg-gradient-to-b from-[#0a0a0a] to-black border-t border-gray-900/50  backdrop-blur-lg rounded-2xl py-10 px-6 sm:px-16 mt-16 shadow-2xl gap-5 flex flex-col overflow-hidden text-white">

      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-24 h-24 animate-spin-slow sm:w-32 sm:h-32 bg-indigo-600 opacity-20 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 animate-spin-slow sm:h-40 bg-blue-700 opacity-15 rounded-full"></div>

      {/* Heading */}
      <div className="text-center flex flex-col ">
        <h3 className="text-2xl sm:text-3xl  font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Get In Contact With Me
        </h3>
        <p
          className="
    mx-auto
    max-w-md
    text-center
    text-[12px] sm:text-[13px] md:text-sm
    leading-relaxed
    text-white/60
  "
        >
          Have some work you need done? Hit the message button or reach me through any
          of the social links below.
          <span className="block mt-2 text-white/80">
            I’d love to hear from you.
          </span>
        </p>

      </div>

      {/* Contact Button */}
      <div className="flex flex-col items-center sm:gap-6">
        <Link
          href="mailto:godswillessien880@gmail.com"
          className="px-8 py-2 rounded-3xl bg-black border text-sm animate-pulse shadow-blue-950 shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
        >
          Hire Me
        </Link>

        {/* Social Links */}
        <div className="flex  gap-6 sm:gap-10 justify-center items-center mt-4 flex-wrap">
          <Link href="https://wa.me/+2348143399082" className="text-lg  sm:text-3xl animate-pulse">
            <IoLogoWhatsapp color="blue" />
          </Link>

          <Link href="https://www.facebook.com/gongflamez.jack" className="text-lg sm:text-3xl animate-pulse">
            <FaFacebook color="blue" />
          </Link>

          <Link href="https://t.me/+2348143399082" className="text-lg sm:text-3xl animate-pulse">
            <FaTelegramPlane color="blue" />
          </Link>

          <Link href="https://www.linkedin.com/in/god-swill-essien-727006284" className="text-lg sm:text-3xl animate-pulse">
            <FaLinkedin color="blue" />
          </Link>

          <Link href="tel:+2348143399082" className="text-lg sm:text-3xl animate-pulse">
            <FaPhone color="blue" />
          </Link>
        </div>

        {/* Scroll to Top */}
        <div className="mt-3">
          <Link href="#top" className="inline-flex items-center   gap-2 text-sm sm:text-base text-blue-900 hover:text-indigo-600 transition-colors">
            <FaLongArrowAltUp className='' /> Back to Top
          </Link>
        </div>

        <p className=" text-xs sm:text-sm mt-2 text-white/50">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>





      {/* Animated orbiting element */}
      <div className="absolute bottom-20 right-20 w-64 h-64">
        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-float delay-2000"></div>
    </footer>
  );
}
