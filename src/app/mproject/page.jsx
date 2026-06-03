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
import Starbackground from "@/components/Starbackground";

const projects = [
    {
        id: 1,
        title: "Netflixx",
        image: "/netflixx.png",
        description:
            "A fully responsive Netflix clone built with React, Tailwind CSS, JavaScript, and TypeScript. It includes categories, authentication, and smooth cinematic interaction.",
        tech: "TailwindCSS • Next.js • JS • TS",
        live: "https://willview.vercel.app/",
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
  <section className="relative   overflow-hidden pt-32 px-4 sm:px-6 pb-10 bg-white dark:bg-black transition-colors duration-500">

    {/* Grid Background */}
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full bg-indigo-500/10 blur-[120px] -z-10" />

    <Starbackground />

    {/* SEARCH + THEME */}
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%]  md:w-[75%] lg:w-[650px]">

      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm md:text-base text-black dark:text-white placeholder:text-gray-500"
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black/5 dark:bg-white/10"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-blue-500" />
          )}
        </motion.button>

      </div>
    </div>

    {/* PROJECTS */}
    <motion.div className="max-w-5xl mx-auto flex flex-col  gap-8">
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`group flex flex-col gap-6 md:items-center ${
            project.reverse ? "md:flex-row-reverse" : "md:flex-row"
          }
          rounded-3xl
          border border-white/10
          bg-white/5
          dark:bg-white/[0.03]
    
          backdrop-blur-xl
          p-5 md:p-8
          hover:border-indigo-500/20
          hover:shadow-xl
          hover:shadow-indigo-500/10
          transition-all duration-500`}
        >

          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl  overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
              dark:opacity-50
                dark:hover:opacity-95
                object-cover
                group-hover:scale-105
                transition-all
                duration-700
              "
            />
          </div>

          {/* CONTENT */}
          <div className="md:w-1/2 flex flex-col  gap-4">

            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.split("•").map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            {/* DROPDOWN */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === project.id ? null : project.id
                  )
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
                <ul className="mt-3 dark:text-gray-300 text-gray-700 space-y-2 text-sm">
                  {project.differences.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-500">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-5 pt-3 font-semibold">

              <Link
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-green-500 hover:text-green-400 transition"
              >
                Live
                <IoIosLink />
              </Link>

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
                >
                  GitHub
                  <FaGithub />
                </Link>
              )}
            </div>

          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* FLOATING HOME BUTTON */}
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href="/#home"
        className="
          flex items-center justify-center
          h-14 w-14
          rounded-full
           border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          text-white
          shadow-xl
          hover:bg-blue-700
          transition-all
        "
      >
        <IoReturnUpBack size={26} />
      </Link>
    </motion.div>

    {/* FLOATING PARTICLES */}
    <div className="animate-pulse">
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-1000" />
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-float delay-2000" />
    </div>

    {/* FOOTER */}
    <footer className=" text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} portfolio. all rights reserved.
    </footer>

  </section>
);
}
