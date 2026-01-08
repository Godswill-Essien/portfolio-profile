"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";
import { FaGithub, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import axios from "axios";
import { BsGlobe } from "react-icons/bs";
import { IoReturnUpBack } from "react-icons/io5";

const projects = [
  {
    id: 1,
    title: "Netflixx",
    image: "/netflixx.png",
    description:
      "A fully responsive Netflix clone built with React, Tailwind CSS, JavaScript, and TypeScript. It includes categories, authentication, and smooth cinematic interaction.",
    tech: "TailwindCSS • Next.js • JS • TS",
    live: "https://netflix-ashen-beta.vercel.app",
    github: "https://github.com/Godswill-Essien/netflix",
    reverse: false,
    differences: [
      "Built custom movie category logic",
      "Handled authentication flow manually",
      "Optimized images with Next.js Image",
      "Added cinematic hover & transition effects",
    ],
  },
  {
    id: 2,
    title: "Novacrust",
    image: "/nova.png",
    description:
      "Built Novacrust’s responsive landing page, allowing global payments, fund management, and crypto transactions with a clean, user-friendly design.",
    tech: "TailwindCSS • Next.js • JS • TS",
    live: "https://Novacrust.com",
    reverse: true,
    differences: [
      "Focused on conversion-driven UI",
      "Designed reusable Tailwind components",
      "Optimized layout for fintech trust",
      "Ensured full mobile responsiveness",
    ],
  },
];

export default function ViewMoreProjects() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // ✅ JS version

  // Fetch content
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  // Load saved theme
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

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow" />
      </div>
    );
  }

  return (
    <section className="relative pt-32 px-2 bg-gray-100 dark:bg-black transition-colors duration-500">
      {/* ===== FIXED SEARCH & THEME BAR ===== */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[80%]">
        <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/15 dark:bg-black/40 backdrop-blur-2xl border border-white/20 shadow-xl">
          <div className="flex items-center gap-3 flex-1">
            <FaSearch className="text-black dark:text-white/60" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/30 dark:bg-black/40 border border-white/20"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-blue-500" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ===== PROJECTS ===== */}
      <motion.div className="max-w-6xl mx-auto shadow-black  flex flex-col gap-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col gap-6 md:items-center ${
              project.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl p-6 shado shadow-lg md:p-12`}
          >
            <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-scale-down opacity-70 hover:opacity-100 hover:scale-110 transition duration-700"
              />
            </div>

            <div className="md:w-1/2 flex flex-col gap-3">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="opacity-80 dark:text-white text-black">{project.description}</p>
              <p className="text-sm opacity-60 text-gray-900 dark:text-gray-500">{project.tech}</p>

              {/* ===== DROPDOWN ===== */}
              <div className="mt-2">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === project.id ? null : project.id)
                  }
                  className="text-sm font-semibold text-indigo-500 hover:underline"
                >
                  {openDropdown === project.id
                    ? "Hide details ▲"
                    : "What I did differently ▼"}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openDropdown === project.id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-2 text-sm opacity-80">
                    {project.differences.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-500">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="flex gap-4 mt-6 font-bold dark:text-white text-black animate-pulse text-xl">
                <Link className="flex justify-start items-center bg-gradient-to-r from-green-700 to-red-700 bg-clip-text text-transparent gap-2" href={project.live} target="_blank">
                  Live < IoIosLink className="text-green-700" />
                </Link>
                {project.github && (
                  <Link className="flex justify-start bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent items-center gap-2" href={project.github} target="_blank">
                    Github <FaGithub className="text-blue-700" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>


        <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex justify-star   w-5  mt-2 animate-pulse  "
                  >
                      <Link
                          href="/#home"
                          className="text-gray-800 dark:text-white  text-center font-bold px-6 rounded-full text-5xl"
                      >
                          <motion.span
                              initial={{ x: 32 }}
                              animate={{ x: 16 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="inline-block"
                          >
                              <IoReturnUpBack />
                          </motion.span>
                      </Link>
                  </motion.div>

      <p className="text-xs text-center opacity-60 mt-6">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </section>
  );
}
