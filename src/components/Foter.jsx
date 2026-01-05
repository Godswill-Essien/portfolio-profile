"use client";

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaTelegramPlane, FaLongArrowAltUp, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative dark:bg-white   dark:text-white bg-black/30 backdrop-blur-2xl rounded-2xl border border-white/10 py-12 px-6 sm:px-16 dark:rounded-none  shadow-2xl flex flex-col items-center overflow-hidden ">

      {/* ===== Decorative Blurred Circles ===== */}
      <motion.div 
        className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-44 h-44 sm:w-40 bg-blue-700/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
      />

      {/* ===== Heading ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col"
      >
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
          Get In Contact With Me
        </h3>
        <p className="mx-auto dark:text-black max-w-md text-[12px] sm:text-[13px] md:text-sm leading-relaxed text-white/60">
          Have some work you need done? Hit the message button or reach me through any of the social links below.
          <span className="block mt-2 dark:text-black text-white/80">
            I’d love to hear from you.
          </span>
        </p>
      </motion.div>

      {/* ===== Contact Button ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center sm:gap-6 mt-6"
      >
        <Link
        id='hire'
          href="mailto:godswillessien880@gmail.com"
          className="px-8 py-2 rounded-3xl bg-black/10 backdrop-blur-sm border dark:bg-white dark:text-black dark:border  border-white text-sm animate-pulse shadow-lg shadow-blue-950 hover:scale-105 transition-transform duration-300 font-semibold"
        >
          Hire Me
        </Link>

        {/* Social Links */}
        <div className="flex gap-6 sm:gap-10 justify-center items-center mt-4 flex-wrap">
          <Link href="https://wa.me/+2348143399082" className="text-lg sm:text-3xl">
            <IoLogoWhatsapp color="cyan" className="animate-pulse" />
          </Link>
          <Link href="https://www.facebook.com/gongflamez.jack" className="text-lg sm:text-3xl">
            <FaFacebook color="blue" className="animate-pulse" />
          </Link>
          <Link href="https://t.me/+2348143399082" className="text-lg sm:text-3xl">
            <FaTelegramPlane color="blue" className="animate-pulse" />
          </Link>
          <Link href="https://www.linkedin.com/in/god-swill-essien-727006284" className="text-lg sm:text-3xl">
            <FaLinkedin color="blue" className="animate-pulse" />
          </Link>
          <Link href="tel:+2348143399082" className="text-lg sm:text-3xl">
            <FaPhone color="green" className="animate-pulse" />
          </Link>
        </div>

        {/* Scroll to Top */}
        <div className="mt-3">
          <Link href="#top" className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 hover:text-indigo-500 transition-colors">
            <FaLongArrowAltUp /> Back to Top
          </Link>
        </div>

        <p className="text-xs sm:text-sm mt-2 dark:text-black text-white/50">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </motion.div>

      {/* ===== Animated Orbiting Elements ===== */}
      <motion.div 
        className="absolute bottom-20 right-20 w-64 h-64 "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1000, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 hover:animate-ping bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br hover:animate-ping from-purple-500 to-pink-500 rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br hover:animate-ping from-green-500 to-emerald-500 rounded-full"></div>
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br hover:animate-ping from-yellow-500 to-orange-500 rounded-full"></div>
        </div>
      </motion.div>
    </footer>
  );
}
