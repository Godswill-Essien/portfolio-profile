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
    },
];

export default function ViewMoreProjects() {
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(null);

    // Fetch API safely
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/content")
            .then((res) => {
                setContent(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API fetch error:", err);
                setLoading(false); // ensure loader disappears even if API fails
            });
    }, []);

    // 🌗 Load theme safely
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
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow mb-5" />
                {/* <p className="text-white/60 mt-4">Loading projects...</p> */}
            </div>
        );
    }

    return (
        <section className="relative py-2 px-2 overflow-hidden bg-gray-100 dark:bg-black transition-colors  duration-500">
            {/* ===== BLURRED BACKGROUND ===== */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-24 left-1/4 w-[420px] h-[420px] bg-blue-600/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-24 right-1/4 w-[420px] h-[420px] bg-purple-600/30 rounded-full blur-[150px]" />
            </div>

            {/* ===== GLASS NAVBAR (SEARCH + TOGGLE) ===== */}
            <div className="max-w-6xl mx-auto mb-10">
                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl sticky top-4 z-50 bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/20 shadow-xl">
                    <div className="flex items-center gap-3 flex-1">
                        <FaSearch className="text-gray-700 dark:text-white/60" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-white/50"
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
            <motion.div className="max-w-6xl mx-auto flex flex-col gap-3">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col gap-6 md:items-center ${project.reverse ? "md:flex-row-reverse" : "md:flex-row"
                            } rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl  p-6 md:p-12 shadow-2xl`}
                    >
                        {/* Image */}
                        <div data-aos="fade-down" className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden bg-black/5">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-scale-down opacity-70 hover:opacity-100 hover:scale-110 transition duration-700"
                            />
                        </div>

                        {/* Text */}
                        <div data-aos="fade-up" className="md:w-1/2 text-gray-800 dark:text-white flex flex-col justify-center gap-3">
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                                {project.title}
                            </h3>
                            <p className="text-sm md:text-lg opacity-80">{project.description}</p>
                            <p className="text-sm text-gray-500 opacity-60">{project.tech}</p>

                            <div className="flex gap-2 font-bold mt-7">
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-1 bg-gradient-to-r from-orange-800 to-green-700 bg-clip-text animate-pulse text-transparent"
                                >
                                    Live <IoIosLink className="text-2xl text-green-700" />
                                </Link>
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-1 bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text animate-pulse text-transparent"
                                    >
                                        Github <FaGithub className="text-xl text-blue-800" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                 <Link
                             href="/#home"
                             className="
                               
                               text-gray-800 dark:text-white
                               text-center
                               font-bold
                               px-6 animate-pulse 
                               rounded-full
                               text-5xl 
                               hover:scale-105 
                               transition-transform
                               
                             "
                           >
                              <IoReturnUpBack />
                           </Link>

            </motion.div>

            <p className="text-xs sm:text-sm py-2 text-gray-500 text-center">
                &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </section>
    );
}
