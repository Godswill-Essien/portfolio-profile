
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  IoIosLink,
  IoMdArrowRoundBack,
} from "react-icons/io";

import {
  FaGithub,
  FaSearch,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { BsGlobe } from "react-icons/bs";

import {
  TbArrowUpRight,
  TbChevronDown,
} from "react-icons/tb";

/* =========================================================
   ANIMATION
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

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Netflixx",
    image: "/netflixx.png",
    description:
      "A fully responsive Netflix-inspired streaming experience built with React, Tailwind CSS, JavaScript and TypeScript.",
    tech: "TailwindCSS • Next.js • JS • TS",
    live: "https://willview.vercel.app/",
    github: "https://github.com/Godswill-Essien/netflix",
    reverse: false,
    number: "01",
    differences: [
      "Built custom movie category logic",
      "Handled authentication flow manually",
      "Optimized images with Next.js Image",
      "Added cinematic hover and transition effects",
    ],
  },
  {
    id: 2,
    title: "Novacrust",
    image: "/nova.png",
    description:
      "A responsive fintech landing page focused on global payments, fund management and crypto transactions.",
    tech: "TailwindCSS • Next.js • JS • TS",
    live: "https://Novacrust.com",
    github: "",
    reverse: true,
    number: "02",
    differences: [
      "Focused on conversion-driven UI",
      "Designed reusable Tailwind components",
      "Created a trustworthy fintech visual language",
      "Optimized the experience for mobile devices",
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ViewMoreProjects() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  /* =======================================================
     THEME
  ======================================================= */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    setLoading(false);
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
     SEARCH
  ======================================================= */

  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.toLowerCase().includes(query) ||
      project.differences.some((item) =>
        item.toLowerCase().includes(query)
      )
    );
  });

  /* =======================================================
     LOADING SCREEN
  ======================================================= */

  if (loading) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f5f5f5]
          text-black
          dark:bg-[#030303]
          dark:text-white
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            border-t-black
            dark:border-white/10
            dark:border-t-white
          "
        >
          <BsGlobe size={16} />
        </motion.div>
      </div>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

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
          SEARCH BAR
      =================================================== */}

      <div
        className="
          fixed
          left-1/2
          top-4
          z-50
          w-[calc(100%-32px)]
          max-w-[620px]
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-black/[0.08]
            bg-white/75
            px-4
            py-2.5
            shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
            dark:border-white/[0.08]
            dark:bg-black/65
            dark:shadow-[0_15px_50px_rgba(0,0,0,0.3)]
          "
        >
          <FaSearch
            size={13}
            className="
              shrink-0
              text-black/40
              dark:text-white/35
            "
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search projects"
            className="
              min-w-0
              flex-1
              bg-transparent
              text-sm
              outline-none
              placeholder:text-black/30
              dark:placeholder:text-white/25
            "
          />

          <motion.button
            whileTap={{
              scale: 0.88,
            }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-black/[0.08]
              bg-black/[0.04]
              transition
              hover:bg-black
              hover:text-white
              dark:border-white/[0.08]
              dark:bg-white/[0.05]
              dark:hover:bg-white
              dark:hover:text-black
            "
          >
            {darkMode ? (
              <FaSun size={12} />
            ) : (
              <FaMoon size={12} />
            )}
          </motion.button>
        </div>
      </div>

      {/* ===================================================
          HEADER
      =================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pb-14
          pt-32
          sm:px-8
          md:pb-20
          md:pt-40
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
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
              04
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
              Selected work
            </span>
          </div>

          <h1
            className="
              text-[clamp(3.2rem,9vw,8rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
            "
          >
            More
            <br />
            <span className="text-black/20 dark:text-white/20">
              projects.
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
            A collection of digital experiences, interfaces and
            experiments built with intention.
          </p>
        </motion.div>
      </section>

      {/* ===================================================
          PROJECTS
      =================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-5
          pb-20
          sm:px-8
          md:pb-28
        "
      >
        <div className="space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  group
                  grid
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-black/[0.08]
                  bg-white
                  transition-all
                  duration-500
                  hover:border-black/15
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                  dark:border-white/[0.08]
                  dark:bg-[#080808]
                  dark:hover:border-white/15
                  dark:hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                  md:grid-cols-2
                "
              >
                {/* IMAGE */}

                <div
                  className={`
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-black/[0.03]
                    dark:bg-white/[0.02]
                    ${
                      project.reverse
                        ? "md:order-2"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    priority={project.id === 1}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      opacity-90
                      transition-all
                      duration-700
                      group-hover:scale-[1.04]
                      group-hover:opacity-100
                      dark:opacity-65
                      dark:group-hover:opacity-95
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/30
                      via-transparent
                      to-transparent
                      opacity-60
                      transition-opacity
                      group-hover:opacity-30
                    "
                  />

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      font-mono
                      text-[8px]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {project.number}
                  </div>
                </div>

                {/* CONTENT */}

                <div
                  className={`
                    flex
                    flex-col
                    justify-center
                    p-6
                    sm:p-8
                    lg:p-10
                    ${
                      project.reverse
                        ? "md:order-1"
                        : ""
                    }
                  `}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-black/30
                        dark:text-white/25
                      "
                    >
                      Project {project.number}
                    </span>

                    <TbArrowUpRight
                      size={16}
                      className="
                        text-black/25
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-black
                        dark:text-white/20
                        dark:group-hover:text-white
                      "
                    />
                  </div>

                  <h2
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      sm:text-4xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-lg
                      text-sm
                      leading-6
                      text-black/50
                      dark:text-white/40
                    "
                  >
                    {project.description}
                  </p>

                  {/* TECH */}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech
                      .split("•")
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="
                            rounded-full
                            border
                            border-black/[0.08]
                            bg-black/[0.025]
                            px-2.5
                            py-1
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wide
                            text-black/45
                            dark:border-white/[0.08]
                            dark:bg-white/[0.025]
                            dark:text-white/40
                          "
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>

                  {/* DETAILS */}

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === project.id
                            ? null
                            : project.id
                        )
                      }
                      aria-expanded={
                        openDropdown === project.id
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.12em]
                        text-black/45
                        transition
                        hover:text-black
                        dark:text-white/40
                        dark:hover:text-white
                      "
                    >
                      {openDropdown === project.id
                        ? "Hide details"
                        : "What I did differently"}

                      <TbChevronDown
                        size={13}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            openDropdown === project.id
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={
                        openDropdown === project.id
                          ? {
                              height: "auto",
                              opacity: 1,
                              marginTop: 12,
                            }
                          : {
                              height: 0,
                              opacity: 0,
                              marginTop: 0,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2">
                        {project.differences.map(
                          (item, index) => (
                            <li
                              key={index}
                              className="
                                flex
                                gap-2
                                text-xs
                                leading-5
                                text-black/50
                                dark:text-white/40
                              "
                            >
                              <span className="text-black dark:text-white">
                                +
                              </span>

                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  </div>

                  {/* LINKS */}

                  <div className="mt-7 flex items-center gap-5">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-wider
                        text-black/60
                        transition
                        hover:text-black
                        dark:text-white/55
                        dark:hover:text-white
                      "
                    >
                      Live

                      <IoIosLink
                        size={13}
                        className="
                          transition-transform
                          group-hover/link:translate-x-0.5
                        "
                      />
                    </Link>

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-wider
                          text-black/60
                          transition
                          hover:text-black
                          dark:text-white/55
                          dark:hover:text-white
                        "
                      >
                        GitHub
                        <FaGithub size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div
              className="
                rounded-2xl
                border
                border-black/[0.08]
                py-20
                text-center
                dark:border-white/[0.08]
              "
            >
              <p
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  text-black/35
                  dark:text-white/30
                "
              >
                No projects found
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          BOTTOM
      =================================================== */}

      <div
        className="
          mx-auto
          flex
          max-w-6xl
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
            tracking-[0.16em]
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
            tracking-[0.16em]
            text-black/20
            dark:text-white/15
            sm:block
          "
        >
          Selected work
        </p>
      </div>

      {/* ===================================================
          FLOATING HOME BUTTON
      =================================================== */}

      <motion.div
        className="
          fixed
          bottom-5
          right-5
          z-50
        "
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <Link
          href="/#home"
          aria-label="Return home"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-black/[0.1]
            bg-white/70
            text-black/60
            shadow-lg
            backdrop-blur-xl
            transition-all
            hover:bg-black
            hover:text-white
            dark:border-white/[0.1]
            dark:bg-black/60
            dark:text-white/60
            dark:hover:bg-white
            dark:hover:text-black
          "
        >
          <IoMdArrowRoundBack size={19} />
        </Link>
      </motion.div>
    </main>
  );
}

