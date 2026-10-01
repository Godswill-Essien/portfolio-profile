
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { IoIosLink, IoMdArrowRoundBack } from "react-icons/io";
import {
  FaAward,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  /* =========================================================
     THEME
  ========================================================= */

  useEffect(() => {
    setMounted(true);

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
      setDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  /* =========================================================
     CERTIFICATE DATA
  ========================================================= */

  const certificate = {
    title: "Website Development Certificate",
    institution: "LOCTECH",
    year: "2025",
    description:
      "Successfully completed professional training in website development, covering modern frontend technologies, responsive design, and deployment workflows.",
    image: "/cert.jpg",
    link: "https://www.loctechng.com/",
  };

  /* =========================================================
     SEARCH
  ========================================================= */

  const matchesSearch = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      certificate.title.toLowerCase().includes(query) ||
      certificate.institution.toLowerCase().includes(query) ||
      certificate.year.toLowerCase().includes(query) ||
      certificate.description.toLowerCase().includes(query)
    );
  }, [search]);

  /* =========================================================
     WAIT FOR THEME
  ========================================================= */

  if (!mounted) {
    return null;
  }

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#f5f5f5]
        text-black
        transition-colors
        duration-500
        dark:bg-[#030303]
        dark:text-white
      "
    >
      {/* ===================================================
          TOP NAVIGATION
      =================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-black/[0.07]
          bg-[#f5f5f5]/90
          backdrop-blur-xl
          dark:border-white/[0.07]
          dark:bg-[#030303]/90
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            gap-3
            px-4
            py-3
            sm:px-6
            lg:px-8
          "
        >
          {/* HOME */}

          <Link
            href="/"
            aria-label="Return home"
            className="
              group
              flex
              h-10
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-black/[0.08]
              bg-white
              px-4
              font-mono
              text-[9px]
              uppercase
              tracking-wider
              text-black/60
              transition-all
              hover:bg-black
              hover:text-white
              dark:border-white/[0.08]
              dark:bg-[#0b0b0b]
              dark:text-white/60
              dark:hover:bg-white
              dark:hover:text-black
            "
          >
            <IoMdArrowRoundBack
              size={15}
              className="
                transition-transform
                group-hover:-translate-x-0.5
              "
            />

            <span className="hidden sm:inline">
              Home
            </span>
          </Link>

          {/* SEARCH */}

          <div className="relative mx-auto w-full max-w-md">
            <FaSearch
              size={12}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-black/30
                dark:text-white/25
              "
            />

            <input
              type="text"
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search certificate"
              className="
                h-10
                w-full
                rounded-full
                border
                border-black/[0.08]
                bg-white
                pl-10
                pr-4
                text-xs
                text-black
                outline-none
                transition-all
                placeholder:text-black/25
                focus:border-black/20
                dark:border-white/[0.08]
                dark:bg-[#0b0b0b]
                dark:text-white
                dark:placeholder:text-white/20
                dark:focus:border-white/20
              "
            />
          </div>

          {/* THEME */}

          <motion.button
            whileTap={{
              scale: 0.88,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-black/[0.08]
              bg-white
              text-black/60
              transition-all
              hover:bg-black
              hover:text-white
              dark:border-white/[0.08]
              dark:bg-[#0b0b0b]
              dark:text-white/60
              dark:hover:bg-white
              dark:hover:text-black
            "
          >
            {darkMode ? (
              <FaSun size={13} />
            ) : (
              <FaMoon size={13} />
            )}
          </motion.button>
        </div>
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-12
          pt-20
          sm:px-8
          md:pb-16
          md:pt-28
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                font-mono
                text-[8px]
                dark:border-white/10
              "
            >
              03
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-black/40
                dark:text-white/30
              "
            >
              Credentials
            </span>
          </div>

          <h1
            className="
              text-[clamp(3rem,8vw,7rem)]
              font-semibold
              leading-[0.85]
              tracking-[-0.075em]
            "
          >
            My
            <br />
            <span className="text-black/20 dark:text-white/20">
              certificate.
            </span>
          </h1>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-6
              text-black/45
              dark:text-white/35
            "
          >
            A record of professional training and
            continuous development in modern web
            development.
          </p>
        </motion.div>
      </section>

      {/* ===================================================
          CERTIFICATE
      =================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-20
          sm:px-8
          md:pb-28
        "
      >
        {matchesSearch ? (
          <motion.article
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              max-w-5xl
              overflow-hidden
              rounded-[28px]
              border
              border-black/[0.08]
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.07)]
              transition-all
              duration-500
              hover:border-black/15
              hover:shadow-[0_35px_110px_rgba(0,0,0,0.1)]
              dark:border-white/[0.08]
              dark:bg-[#080808]
              dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              dark:hover:border-white/15
            "
          >
            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="group relative overflow-hidden">
              <div className="relative aspect-[16/9] w-full bg-black/[0.03] dark:bg-white/[0.02]">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    1024px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />
              </div>

              {/* IMAGE LABEL */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-black/55
                  px-3
                  py-2
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-md
                "
              >
                <FaAward size={11} />
                Verified achievement
              </div>

              {/* IMAGE NUMBER */}

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/50
                  font-mono
                  text-[9px]
                  text-white
                  backdrop-blur-md
                "
              >
                01
              </div>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                {/* LEFT */}

                <div className="max-w-2xl">
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-3
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-black/30
                      dark:text-white/25
                    "
                  >
                    <span>{certificate.institution}</span>

                    <span className="h-1 w-1 rounded-full bg-current" />

                    <span>{certificate.year}</span>
                  </div>

                  <h2
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.04em]
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    {certificate.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-sm
                      leading-7
                      text-black/50
                      dark:text-white/40
                    "
                  >
                    {certificate.description}
                  </p>
                </div>

                {/* RIGHT META */}

                <div
                  className="
                    shrink-0
                    border-l
                    border-black/[0.08]
                    pl-5
                    dark:border-white/[0.08]
                  "
                >
                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-black/25
                      dark:text-white/20
                    "
                  >
                    Institution
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    {certificate.institution}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-black/40
                      dark:text-white/30
                    "
                  >
                    2025
                  </p>
                </div>
              </div>

              {/* =================================================
                  ACTION
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-black/[0.08]
                  pt-7
                  dark:border-white/[0.08]
                  sm:flex-row
                  sm:items-center
                "
              >
                <Link
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-black
                    px-6
                    py-3
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    dark:bg-white
                    dark:text-black
                  "
                >
                  <IoIosLink
                    size={13}
                    className="
                      transition-transform
                      group-hover:translate-x-0.5
                    "
                  />

                  Visit Institution

                  <TbArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-black/25
                    dark:text-white/20
                  "
                >
                  Professional training
                </span>
              </div>
            </div>
          </motion.article>
        ) : (
          /* ===================================================
             EMPTY SEARCH
          =================================================== */

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              rounded-[24px]
              border
              border-black/[0.08]
              py-24
              text-center
              dark:border-white/[0.08]
            "
          >
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-black/35
                dark:text-white/25
              "
            >
              No certificate found
            </p>

            <button
              onClick={() => setSearch("")}
              className="
                mt-4
                font-mono
                text-[9px]
                uppercase
                tracking-wider
                underline
                underline-offset-4
                text-black/50
                dark:text-white/40
              "
            >
              Clear search
            </button>
          </motion.div>
        )}
      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          border-t
          border-black/[0.08]
          px-5
          py-7
          dark:border-white/[0.08]
          sm:px-8
        "
      >
        <p
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-black/25
            dark:text-white/20
          "
        >
          © {new Date().getFullYear()} Godswill Essien
        </p>

        <p
          className="
            hidden
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-black/20
            dark:text-white/15
            sm:block
          "
        >
          Credentials
        </p>
      </footer>
    </main>
  );
}

