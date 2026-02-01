"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { BsGlobe } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { IoReturnUpBack } from "react-icons/io5";

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
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <BsGlobe className="w-20 h-20 text-blue-800 dark:text-blue-700 animate-spin-slow" />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-r from-white/5 via-black/55 to-white/5 bg-gray-100 dark:bg-black transition-colors">
      {/* THEME TOGGLE */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 shadow-lg"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
      </button>

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black" />
        <div className="absolute top-20 left-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-blue-600/20 rounded-full blur-[120px] sm:blur-[160px]" />
        <div className="absolute bottom-20 right-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-600/20 rounded-full blur-[120px] sm:blur-[160px]" />
      </div>

      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-3xl rounded-3xl p-6 sm:p-10 bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-2xl text-gray-900 dark:text-white"
      >
        {/* HEADER */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center relative">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">God'swill Essien</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">#5 Gotheg Avenue, Artillery, Woji Junction</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Off Okporo Road, Rumuogba,</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Port-Harcourt, Rivers state, Nigeria.</p>

          {/* COPY EMAIL */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 relative">
            <span className="text-gray-700 dark:text-gray-300 break-words text-center sm:text-left">{email}</span>
            <button
              onClick={copyEmail}
              className="px-4 py-2 animate-pulse bg-gradient-to-r from-indigo-700 to- to-blue-700 dark:text-white text-black rounded-full hover:bg-blue-700 transition w-full sm:w-auto text-center"
            >
              Copy Email
            </button>

            {/* Toast */}
            {copied && (
              <div data-aos="fade-up" className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-700 backdrop-blur-md text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
                Email copied to clipboard!
              </div>
            )}
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div className="mt-8 space-y-5">
          {[
            { title: "Profile", text: "Aspiring web developer passionate about creating functional and visually appealing websites." },
            { title: "Education", text: "Estate Management – Rivers State University" },
            { title: "Technical Skills", text: "HTML, CSS, JavaScript, Responsive Design" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="p-4 rounded-xl bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-gray-700 dark:text-gray-300 animate-float p-4 rounded-xl bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 mt-2 text-center">
          Pls download resume for more content 😊😊
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="/GOD'SWILL ESSIEN resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-full shadow-lg hover:scale-105 transition w-full sm:w-auto text-center"
          >
            Download Resume <TbDownload />
          </a>
        </div>
      </motion.div>

      {/* BACK LINK */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className=" mt-6"
      >
        <Link href="/#home" className="text-gray-800 dark:text-white   font-bold text-4xl sm:text-5xl">
          <IoReturnUpBack />
        </Link>
      </motion.div>

      <p className="text-xs translate-y-20 text-gray-500 text-center">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </section>
  );
}
