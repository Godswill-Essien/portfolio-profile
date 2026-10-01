
"use client";

import Link from "next/link";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const timerRef = useRef(null);

  const { t } = useLanguage();

  // --------------------------------------------------
  // THEME
  // --------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove(
        "dark"
      );
      setDarkMode(false);
    } else {
      document.documentElement.classList.add(
        "dark"
      );
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // --------------------------------------------------
  // SCROLL
  // --------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // --------------------------------------------------
  // MOBILE MENU
  // --------------------------------------------------
  useEffect(() => {
    document.body.style.overflow = dropDown
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [dropDown]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const toggleDropdown = () => {
    setDropDown(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDropDown(false);
    }, 7000);
  };

  const closeDropdown = () => {
    setDropDown(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  // --------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------
  const navItems = [
    {
      number: "01",
      label: t("nav.about"),
      href: "#about",
    },
    {
      number: "02",
      label: t("nav.projects"),
      href: "#projects",
    },
    {
      number: "03",
      label: t("nav.contact"),
      href: "#hire",
    },
    {
      number: "04",
      label: "Certification",
      href: "/cert",
    },
    {
      number: "05",
      label: "Project Brief",
      href: "#project-brief",
    },
  ];

  return (
    <>
      {/* --------------------------------------------------
          AMBIENT NAVBAR ATMOSPHERE
      -------------------------------------------------- */}
      <div
        className={`
          pointer-events-none
          fixed
          left-1/2
          top-0
          z-40
          h-40
          w-[80%]
          -translate-x-1/2
          rounded-full
          blur-[100px]
          transition-all
          duration-1000

          ${
            scrolled
              ? "bg-white/[0.035] opacity-100"
              : "bg-white/[0.02] opacity-60"
          }
        `}
      />

      {/* --------------------------------------------------
          NAVBAR
      -------------------------------------------------- */}
      <header
        className="
          fixed
          left-1/2
          top-3
          z-[5000]
          w-[calc(100%-24px)]
          max-w-[1400px]
          -translate-x-1/2
          transition-all
          duration-500
        "
      >
        <nav
          className={`
            relative
            overflow-visible
            rounded-[22px]
            border
            px-3
            sm:px-4
            md:px-6
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  border-white/[0.12]
                  bg-black/55
                  py-2.5
                  shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/[0.06]
                  bg-black/20
                  py-3
                  backdrop-blur-xl
                `
            }
          `}
        >
          {/* SUBTLE TOP LIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-10
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* INNER AMBIENT LIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              -top-24
              left-1/2
              h-40
              w-72
              -translate-x-1/2
              rounded-full
              bg-white/[0.025]
              blur-3xl
            "
          />

          <div className="relative z-10 flex items-center justify-between">
            {/* --------------------------------------------------
                LEFT
            -------------------------------------------------- */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* MOBILE MENU BUTTON */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.88 }}
                onClick={
                  dropDown
                    ? closeDropdown
                    : toggleDropdown
                }
                aria-label={
                  dropDown
                    ? "Close menu"
                    : "Open menu"
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-white
                  transition-all
                  hover:border-white/[0.18]
                  hover:bg-white/[0.08]
                  md:hidden
                "
              >
                <AnimatePresence mode="wait">
                  {dropDown ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -45,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 45,
                      }}
                    >
                      <AiOutlineClose
                        size={19}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 45,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -45,
                      }}
                    >
                      <TbListDetails
                        size={20}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* LOGO */}
              <Link
                href="/"
                className="
                  group
                  flex
                  select-none
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    text-[15px]
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-base
                  "
                >
                  Will
                </span>

                <span
                  className="
                    font-mono
                    text-[11px]
                    tracking-tight
                    text-white/35
                    transition-colors
                    duration-300
                    group-hover:text-white/60
                  "
                >
                  .dev
                </span>
              </Link>

              {/* AVAILABILITY */}
              <div
                className="
                  hidden
                  items-center
                  gap-2
                  border-l
                  border-white/[0.08]
                  pl-4
                  sm:flex
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-white/40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-white/80
                    "
                  />
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-white/35
                  "
                >
                  {t("hero.available")}
                </span>
              </div>
            </div>

            {/* --------------------------------------------------
                DESKTOP NAVIGATION
            -------------------------------------------------- */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-3.5
                    py-2.5
                    text-[13px]
                    font-medium
                    text-white/55
                    transition-all
                    duration-300
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[8px]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover:text-white/45
                    "
                  >
                    {item.number}
                  </span>

                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* --------------------------------------------------
                RIGHT
            -------------------------------------------------- */}
            <div className="relative flex items-center gap-2">
              {/* LANGUAGE */}
              <LanguageSwitcher />

              {/* RESUME */}
              <Link
                href="/Resume"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.12]
                  bg-white
                  px-4
                  py-2.5
                  text-[12px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/90
                  sm:flex
                "
              >
                <span>Resume</span>

                <span
                  className="
                    text-black/40
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  ↗
                </span>
              </Link>

              {/* VIEW CV / VIEWC */}

              {/* THEME */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.88 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.08]
                "
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.span
                      key="moon"
                      initial={{
                        opacity: 0,
                        rotate: -30,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 30,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <FaMoon className="text-[13px] text-white/65" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: 30,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -30,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <FaSun className="text-[13px] text-black/70" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* --------------------------------------------------
          MOBILE MENU
      -------------------------------------------------- */}
      <AnimatePresence>
        {dropDown && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeDropdown}
              className="
                fixed
                inset-0
                z-[4000]
                bg-black/60
                backdrop-blur-md
              "
            />

            {/* MOBILE PANEL */}
            <motion.aside
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-3
                right-3
                top-[82px]
                z-[4500]
                mx-auto
                max-w-md
                overflow-visible
                rounded-[24px]
                border
                border-white/[0.12]
                bg-black/75
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                backdrop-blur-3xl
              "
            >
              {/* PANEL GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -top-24
                  left-1/2
                  h-48
                  w-64
                  -translate-x-1/2
                  rounded-full
                  bg-white/[0.04]
                  blur-3xl
                "
              />

              <div className="relative p-4">
                {/* MENU HEADER */}
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.08]
                    px-2
                    pb-4
                  "
                >
                  <div>
                    <p
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-white/30
                      "
                    >
                      Navigation
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Explore the portfolio
                    </p>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      text-white/20
                    "
                  >
                    05 ITEMS
                  </span>
                </div>

                {/* LINKS */}
                <div className="space-y-1.5">
                  {navItems.map((item) => (
                    <Link
                      key={item.number}
                      href={item.href}
                      onClick={closeDropdown}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-transparent
                        px-4
                        py-3.5
                        transition-all
                        duration-300
                        hover:border-white/[0.08]
                        hover:bg-white/[0.05]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[9px]
                            text-white/20
                            transition-colors
                            group-hover:text-white/50
                          "
                        >
                          {item.number}
                        </span>

                        <span
                          className="
                            text-sm
                            font-medium
                            text-white/65
                            transition-colors
                            group-hover:text-white
                          "
                        >
                          {item.label}
                        </span>
                      </div>

                      <span
                        className="
                          text-white/20
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-white/60
                        "
                      >
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>

                {/* MOBILE LANGUAGE */}
                <div
                  className="
                    relative
                    z-[100]
                    mt-3
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-3
                  "
                >
                  <div
                    className="
                      mb-2
                      px-1
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    {t("language.title")}
                  </div>

                  <LanguageSwitcher />
                </div>

                {/* MOBILE RESUME */}
                <Link
                  href="/Resume"
                  onClick={closeDropdown}
                  className="
                    group
                    mt-3
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white/90
                  "
                >
                  <span>Resume</span>

                  <span
                    className="
                      text-black/40
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </Link>

                {/* FOOTER DETAIL */}
                <div className="mt-4 flex items-center justify-between px-2">
                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-white/20
                    "
                  >
                    Godswill Essien
                  </span>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      text-white/20
                    "
                  >
                    2026
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

