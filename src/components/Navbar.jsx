"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import Viewc from "@/components/Viewc";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const timerRef = useRef(null);

  // 🌗 Load theme safely
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
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

  // 🔹 Navbar scroll effect
  useEffect(() => {
    if (dropDown) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dropDown]);

  // 🔹 Lock background scroll when dropdown is open
  useEffect(() => {
    document.body.style.overflow = dropDown ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [dropDown]);

  // 🔹 Dropdown open + auto close
  const toggleDropdown = () => {
    setDropDown(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDropDown(false), 5000);
  };

  const closeDropdown = () => {
    setDropDown(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };
  return (
  <header
    className={`
      fixed top-3 left-1/2 -translate-x-1/2
      z-50
      w-[95%] lg:w-[98%]
      rounded-3xl
      transition-all duration-500
      ${
        scrolled
          ? "backdrop-blur-3xl bg-black/20 dark:bg-white/10 border  border-blue-700/30 shadow-2xl"
          : "bg-transparent"
      }
    `}
  >
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl text-white dark:text-black"
          onClick={dropDown ? closeDropdown : toggleDropdown}
        >
          {dropDown ? <AiOutlineClose /> : <TbListDetails />}
        </button>

        {/* LOGO */}
        <Link
          href="/"
          className="
            text-lg md:text-xl
            font-bold
            bg-gradient-to-r
            from-blue-700
            via-indigo-700
            to-purple-700
            bg-clip-text
            text-transparent
          "
        >
          Will.dev
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 font-medium text-white dark:text-black">
        <Link
          href="#about"
          className="hover:text-blue-500 transition"
        >
          About
        </Link>

        <Link
          href="#work"
          className="hover:text-blue-500 transition"
        >
          Projects
        </Link>

        <Link
          href="#hire"
          className="hover:text-blue-500 transition"
        >
          Contact
        </Link>

        <Link
          href="/cert"
          className="hover:text-blue-500 transition"
        >
          Certification
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        
        <Link
          href="/Resume"
          className="
            hidden sm:flex
            items-center
            justify-center
            px-5 py-2
            rounded-full
            text-sm font-medium

            bg-gradient-to-r
            from-blue-600
            to-indigo-600

            text-white

            shadow-lg
            shadow-blue-500/30

            hover:scale-105
            transition-all duration-300
          "
        >
          Resume
        </Link>

        <Viewc />

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="
            p-2.5
            rounded-full
            border border-white/10
            backdrop-blur-xl
            bg-white/10
            dark:bg-black/20
          "
        >
          {darkMode ? (
            <FaMoon className="text-blue-500" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </motion.button>
      </div>
    </nav>

    {/* MOBILE MENU */}
     {dropDown && (
      <>
        {/* Overlay */}
        <div
          onClick={closeDropdown}
          className="fixed inset-0 z-40 rounded-3xl bg-black/10 backdrop-blur-sm"
        />

        {/* Sidebar */}
        <aside
          className="
            fixed
            top-20
            left-3
            z-50
            w-[290px]
            overflow-hidden
            rounded-3xl
            bg-black/80
            dark:bg-white/50
            backdrop-blur-3xl
            border border-white/20
            shadow-2xl
          "
        >
          {/* Glow Effects */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 -left-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />

          <nav className="relative flex flex-col gap-3 p-6 text-white dark:text-black">
            <Link
              href="#home"
              onClick={closeDropdown}
              className="rounded-2xl px-4 py-3 bg-white/5  dark:bg-black/10 border border-white/10 hover:bg-white/15 transition"
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={closeDropdown}
              className="rounded-2xl px-4 py-3 bg-white/5 border  dark:bg-black/10 border-white/10 hover:bg-white/15 transition"
            >
              About
            </Link>

            <Link
              href="#work"
              onClick={closeDropdown}
              className="rounded-2xl px-4 py-3 bg-white/5 border  dark:bg-black/10 border-white/10 hover:bg-white/15 transition"
            >
              My Projects
            </Link>

            <Link
              href="#hire"
              onClick={closeDropdown}
              className="rounded-2xl px-4 py-3 bg-white/5 border  dark:bg-black/10 border-white/10 hover:bg-white/15 transition"
            >
              Reach Me
            </Link>

            <Link
              href="/cert"
              onClick={closeDropdown}
              className="rounded-2xl px-4 py-3 bg-white/5 border  dark:bg-black/10 border-white/10 hover:bg-white/15 transition"
            >
              View Certification
            </Link>

            <Link
              href="/Resume"
              onClick={closeDropdown}
              className="
                mt-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-700
                via-indigo-7000
                to-blue-700
                py-3
                text-center
                font-semibold
                text-white
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              View Resume
            </Link>
          </nav>
        </aside>
      </>
    )}
  </header>
  
);
}
