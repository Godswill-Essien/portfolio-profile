"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { BsGlobe } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { IoReturnUpBack } from "react-icons/io5";
import Starbackground from "@/components/Starbackground";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function CVSection() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "godswillessien880@gmail.com";

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Copy email for both desktop & mobile
  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // fallback for older mobile browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen  bg-white dark:bg-black">
        <BsGlobe className="w-20 h-20 text-blue-800 dark:text-blue-700 animate-spin-slow" />
      </div>
    );
  }

 return (
  <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-24 bg-gray-100 dark:bg-black transition-colors duration-500">

    <Starbackground />

    {/* Grid Background */}
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Glow Effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px] -z-10" />

    <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px] -z-10" />

    {/* THEME TOGGLE */}
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-xl border border-white/20 shadow-xl"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-blue-600 text-lg" />
      )}
    </button>

    {/* CV CARD */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        mx-auto
        w-full
        max-w-4xl
        rounded-3xl
        border
        border-white/10
        bg-white/70
        dark:bg-white/5
        backdrop-blur-2xl
        shadow-2xl
        shadow-blue-500/10
        p-6
        sm:p-8
        md:p-12
        text-gray-900
        dark:text-white
      "
    >
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700  bg-clip-text text-transparent">
          God'swill Essien
        </h1>

        <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-400">
          Frontend Developer • React.js • Next.js
        </p>

        <div className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-1">
          <p>#5 Gotheg Avenue, Artillery, Woji Junction</p>
          <p>Off Okporo Road, Rumuogba</p>
          <p>Port Harcourt, Rivers State, Nigeria</p>
        </div>

        {/* EMAIL */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="break-all text-gray-700 dark:text-gray-300">
            {email}
          </span>

          <button
            onClick={copyEmail}
            className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-blue-700
              to-indigo-700
              text-white
              font-medium
              hover:scale-105
              transition-all
            "
          >
            Copy Email
          </button>
        </div>

        {copied && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
            Email copied successfully!
          </div>
        )}
      </motion.div>

      {/* CONTENT */}
      <div className="mt-10 space-y-5">
        {[
          {
            title: "Profile",
            text: "Frontend developer passionate about building modern, responsive and user-friendly web applications."
          },
          {
            title: "Education",
            text: "Estate Management,  Rivers State University"
          },
          {
            title: "Technical Skills",
            text: "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="
              p-5
              rounded-2xl
              bg-white/50
              dark:bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:-translate-y-1
              hover:border-blue-500/30
              hover:shadow-lg
              hover:shadow-blue-500/10
              transition-all
              duration-500
            "
          >
            <h2 className="font-semibold text-xl mb-2">
              {item.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* INFO */}
      <div className="mt-6">
        <p className="text-center p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/10 text-gray-700 dark:text-gray-300">
          Download my resume for complete experience.🚀
        </p>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="mt-8 flex justify-center">
        <a
          href="/GOD'SWILL ESSIEN resume.pdf"
          download
          className="
            flex
            items-center
            gap-2
            px-8
            py-4
            rounded-2xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-blue-700
            to-indigo-700
            hover:scale-105
            transition-all
            shadow-lg
            hover:shadow-blue-500/30
          "
        >
          Download Resume
          <TbDownload />
        </a>
      </div>
    </motion.div>

    {/* HOME BUTTON */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href="/#home"
        className="
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-full
          bg-white/80
          dark:bg-black/60
          backdrop-blur-xl
          border
          border-white/20
          shadow-xl
        "
      >
        <IoReturnUpBack className="text-2xl text-blue-700 dark:text-white" />
      </Link>
    </motion.div>

    {/* Floating Dots */}
    <div className="pointer-events-none">
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-1000" />
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-float delay-2000" />
    </div>

    {/* Footer */}
    <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Portfolio. All rights reserved.
    </p>

  </section>
);
}
