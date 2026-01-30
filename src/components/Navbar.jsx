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
      className={`fixed top-0 w-full    z-30 transition-all duration-300
        ${scrolled ? "backdrop-blur-xl   dark:bg-black/30 border-b border-blue-700/95 " : "bg-transparent "}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        {/* ===== Hamburger / Close Button ===== */}
        <button
          className="md:hidden text-2xl text-white dark:text-black"
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
  href="/CV"
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


      {/* mobile drop */}

      {/* ===== Mobile Dropdown ===== */}
      {dropDown && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          data-aos="fade-dow"
          className="fixed left-0 right-0 h-[calc(100vh-70px)] bg-black/85 dark:bg-white/95 rounded-md mt-[1px] backdrop-blur-xl flex justify-center translate-y-[-40px] items-start z-40"
        >
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              },
            }}
            className="w-[85%] flex flex-col items-center gap-5 text-white dark:text-black font-serif py-5 px-5 font-bold"
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
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link onClick={closeDropdown} href={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <Link
  href="/CV"
  onClick={closeDropdown}
  className="
    mt-5 px-10 py-2 rounded-3xl
    backdrop-blur-md backdrop-saturate-150
    bg-white/20 dark:bg-black/20
     dark:border-black/40
    dark:text-black text-white
    shadow-lg shadow-black/20
    hover:bg-white/30 dark:hover:bg-black/30
    hover:-translate-y-1 hover:shadow-xl
    transition-all duration-300 ease-out animate-pulse
  "
>
  View Resume
</Link>

              
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

    </header>
  );
}
