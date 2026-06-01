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
      className={`fixed    transition-all duration-300  top-1 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[99%]  rounded-2xl 
        ${scrolled ? "backdrop-blur-xl   dark:bg-white/5 border-[1px] border-blue-700/20   " : "bg-transparent "}
      `}
    >
      <nav className="max-w-7xl mx-auto  flex items-center justify-between px-3 sm:px-6 md:px-10  py-3  ">
        {/* ===== Hamburger / Close Button ===== */}
        <button
          className="md:hidden text-2xl text-white dark:text-black "
          onClick={dropDown ? closeDropdown : toggleDropdown}
        >
          {dropDown ? <AiOutlineClose /> : <TbListDetails />}
        </button>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex gap-10 text-white dark:text-black font-bold text-[18px]">
          <Link className="hover:underline" href="#about">About</Link>
          <Link className="hover:underline" href="#work">Work</Link>
          <Link className="hover:underline" href="#hire">Contact</Link>
          <Link className="hover:underline" href="#cert">Certification</Link>
        </div>

        {/* ===== Right Side: Resume + Views + Theme Toggle ===== */}
        <div className="flex items-center gap-3">
          <Link
            href="/Resume"
            className="
    hidden sm:inline-block
    px-8 py-2 rounded-full text-sm
    backdrop-blur-md backdrop-saturate-150
    bg-white/20 dark:bg-black/20
   dark:border-black/40
    dark:text-black text-white
    shadow-lg shadow-black/20
    hover:bg-white/30 dark:hover:bg-black/30
    hover:-translate-y-1 hover:shadow-xl
    transition-all duration-500 ease-out 
    animate-pulse
  "
          >
            View Resume
          </Link>



          <Viewc />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full  bg-gradient-to-r from-white/5 via-black/45 to-white/5 animate-grad dark:text-black dark:bg-white border border-white/20 ml-2"
          >
            {darkMode ? <FaMoon className="text-blue-500" /> : <FaSun className="text-yellow-500" />}
          </motion.button>
        </div>
      </nav>

   {dropDown && (
  <>
    {/* Overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeDropdown}
      className="fixed inset-0 z-40 bg-black/10 rounded-2xl  backdrop-blur-sm"
    />

    {/* Mobile Sidebar */}
    <motion.aside
    
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -220, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="
        fixed
        top-20
        left-3
        z-50

        w-[290px]
        overflow-hidden
        rounded-3xl

        bg-black/80
        dark:bg-white/80

        backdrop-blur-3xl
        backdrop-saturate-200

        border border-white/20
        dark:border-white/10

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Glow effect */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="relative flex flex-col gap-3 p-6 text-white dark:text-black"
      >
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#work", label: "My Projects" },
          { href: "#hire", label: "Reach Me" },
          { href: "#cert", label: "View Certification" },
        ].map((item) => (
          <motion.div
            key={item.href}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 6 }}
          >
            <Link
              href={item.href}
              onClick={closeDropdown}
              className="
                block
                rounded-2xl
                px-4
                py-3
                font-medium

                bg-white/5
                dark:bg-black/5

                border border-white/10

                hover:bg-white/15
                dark:hover:bg-black/15

                backdrop-blur-md

                transition-all duration-300
              "
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

        <Link
          href="/Resume"
          onClick={closeDropdown}
          className="
            mt-4
            rounded-2xl

            bg-gradient-to-r
            from-blue-600
            via-indigo-500
            to-blue-600

            py-3
            text-center
            font-semibold
            text-white

            shadow-lg shadow-blue-500/30

            backdrop-blur-xl
            border border-white/20

            hover:scale-[1.04]
            transition-all duration-300
          "
        >
          View Resume
        </Link>
      </motion.nav>
    </motion.aside>
  </>
)}


    </header>
  );
}
