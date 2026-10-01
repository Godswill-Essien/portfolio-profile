
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { FaSun, FaMoon } from "react-icons/fa";
import { TbDownload, TbArrowUpRight } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   CV SECTION
========================================================= */

export default function CVSection() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "godswillessien880@gmail.com";

  /* =======================================================
     THEME
  ======================================================= */

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
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

  /* =======================================================
     COPY EMAIL
  ======================================================= */

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");

        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  /* =======================================================
     WAIT FOR CLIENT
  ======================================================= */

  if (!mounted) return null;

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] text-black dark:bg-[#030303] dark:text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-10 w-10 rounded-full border border-black/10 border-t-black dark:border-white/10 dark:border-t-white" />

          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/30 dark:text-white/25">
            Loading profile
          </span>
        </motion.div>
      </main>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] px-4 py-6 text-black transition-colors duration-500 dark:bg-[#030303] dark:text-white sm:px-6 sm:py-8 lg:px-8">
      {/* ===================================================
          TOP CONTROLS
      =================================================== */}

      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        {/* BACK */}
        <motion.div
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          <Link
            href="/#home"
            aria-label="Return home"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow-sm transition-all hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#0b0b0b] dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
          >
            <IoMdArrowRoundBack
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* PAGE LABEL */}
        <div className="hidden items-center gap-3 sm:flex">
          <span className="h-px w-8 bg-black/15 dark:bg-white/15" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/35 dark:text-white/25">
            Profile / Resume
          </span>
        </div>

        {/* THEME */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow-sm transition-all hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#0b0b0b] dark:text-white/60 dark:hover:bg-white dark:hover:text-black"
        >
          {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
        </motion.button>
      </div>

      {/* ===================================================
          CV CONTAINER
      =================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-6 w-full max-w-5xl overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#080808] dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
      >
        {/* =================================================
            HEADER BAR
        ================================================= */}

        <header className="flex items-center justify-between border-b border-black/[0.07] px-5 py-4 dark:border-white/[0.07] sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 font-mono text-[8px] dark:border-white/10">
              CV
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35 dark:text-white/25">
              Curriculum Vitae
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25 dark:text-white/20">
            2026
          </span>
        </header>

        {/* =================================================
            HERO
        ================================================= */}

        <div className="px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/35 dark:text-white/25"
            >
              Frontend Developer / Designer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.85] tracking-[-0.075em]"
            >
              God&apos;swill
              <br />
              <span className="text-black/35 dark:text-white/30">
                Essien.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black/50 dark:text-white/40 sm:text-base"
            >
              Frontend Developer specializing in React.js, Next.js and
              modern responsive web experiences with a strong focus on
              interface design and user experience.
            </motion.p>

            {/* LOCATION */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <span className="h-px w-6 bg-black/15 dark:bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/35 dark:text-white/25">
                Port Harcourt · Rivers State · Nigeria
              </span>

              <span className="h-px w-6 bg-black/15 dark:bg-white/15" />
            </motion.div>

            {/* EMAIL */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <span className="max-w-full break-all text-sm text-black/55 dark:text-white/45">
                {email}
              </span>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyEmail}
                className="rounded-full bg-black px-5 py-2.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white transition-shadow hover:shadow-lg dark:bg-white dark:text-black"
              >
                Copy Email
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =================================================
              COPY NOTIFICATION
          ================================================= */}

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                  x: "-50%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: "-50%",
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  x: "-50%",
                }}
                className="fixed left-1/2 top-5 z-[100] rounded-full border border-black/10 bg-white px-5 py-3 font-mono text-[8px] uppercase tracking-[0.15em] text-black shadow-2xl dark:border-white/10 dark:bg-[#111] dark:text-white"
              >
                Email copied successfully
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              INFORMATION
          ================================================= */}

          <div className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/30 dark:text-white/20">
                Information
              </span>

              <span className="font-mono text-[8px] text-black/20 dark:text-white/15">
                01 — 03
              </span>
            </div>

            <div className="grid gap-3">
              {[
                {
                  number: "01",
                  title: "Profile",
                  text: "Frontend developer passionate about building modern, responsive and user-friendly web applications with strong attention to interface design and user experience.",
                },
                {
                  number: "02",
                  title: "Education",
                  text: "Estate Management — Rivers State University",
                },
                {
                  number: "03",
                  title: "Technical Skills",
                  text: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Git and responsive web design.",
                },
              ].map((item) => (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="group grid gap-5 rounded-[22px] border border-black/[0.08] bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#0d0d0d] dark:hover:border-white/15 dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:grid-cols-[70px_1fr] sm:p-7"
                >
                  <div className="flex items-start justify-between sm:block">
                    <span className="font-mono text-[9px] text-black/25 dark:text-white/20">
                      {item.number}
                    </span>

                    <TbArrowUpRight
                      size={16}
                      className="text-black/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white/15 sm:hidden"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                        {item.title}
                      </h2>

                      <TbArrowUpRight
                        size={17}
                        className="hidden text-black/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white/15 sm:block"
                      />
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-black/50 dark:text-white/40">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* =================================================
              RESUME DOWNLOAD
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-[22px] border border-black/[0.08] bg-black/[0.025] p-6 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-7"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30 dark:text-white/20">
                  Full document
                </p>

                <p className="mt-2 max-w-lg text-sm leading-6 text-black/50 dark:text-white/40">
                  Download the complete resume for detailed experience,
                  education and professional information.
                </p>
              </div>

              <motion.a
                href="/GOD'SWILL ESSIEN resume.pdf"
                download
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white transition-all hover:shadow-xl dark:bg-white dark:text-black"
              >
                Download Resume
                <TbDownload size={15} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="flex flex-col gap-2 border-t border-black/[0.07] px-6 py-5 text-center dark:border-white/[0.07] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/25 dark:text-white/20">
            God&apos;swill Essien
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/20 dark:text-white/15">
            Frontend / Design
          </span>
        </footer>
      </motion.section>

      {/* ===================================================
          COPYRIGHT
      =================================================== */}

      <p className="mx-auto mt-8 text-center font-mono text-[8px] uppercase tracking-[0.15em] text-black/25 dark:text-white/20">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </main>
  );
}

