"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FaAward, FaHome, FaMoon, FaSun, FaSearch } from "react-icons/fa";
import StarBackground from "@/components/Starbackground";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

 return (
  <div className="bg-slate-100 dark:bg-black/5 min-h-screen transition-all duration-500">

    {/* Header */}
    <header className="sticky top-2 z-50 border-b border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-row gap-4 items-center justify-between">

        {/* Home */}
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-black/10 border border-gray-600 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
        >
          <FaHome />
          Home
        </Link>

        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 dark:border-black/10 bg-white dark:bg-black/10 text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:scale-105 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-slate-700 text-xl" />
          )}
        </button>
      </div>
    </header>

    {/* Main */}
    <main className="max-w-7xl mx-auto px-4 py-14">

      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          My Certificate
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Professional achievement in Website Development
        </p>
      </div>

      {/* Certificate Card */}
      <div
        id="cert"
        data-aos="fade-up"
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 max-w-2xl mx-auto"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-t-3xl">
          <Image
            src="/cert.jpg"
            alt="Website Development Certificate"
            width={900}
            height={500}
            className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <FaAward className="text-yellow-400 text-xl" />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Website Development Certificate
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                LOCTECH • 2025
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Successfully completed professional training in website development,
            covering modern frontend technologies, responsive design, and deployment workflows.
          </p>

          <div className="mt-6">
            <Link
              href="https://www.loctechng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black/10 border border-gray-400 px-5 py-3 dark:text-white font-medium transition-all duration-500 hover:scale-[1.03]"
            >
              <IoIosLink className="text-lg" />
              Visit Institution
            </Link>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm mt-14 text-center text-black/50 dark:text-white/50">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </main>
    
            <StarBackground/>
  </div>
);
}