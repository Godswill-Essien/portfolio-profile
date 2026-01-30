"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { BsGlobe } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { IoReturnUpBack } from "react-icons/io5";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export default function CVSection() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    // 🌗 Load theme safely
    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
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

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/content")
            .then((res) => {
                setContent(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (!mounted) return null;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
                <BsGlobe className="w-20 h-20 text-blue-800 dark:text-blue-700 animate-spin-slow" />
            </div>
        );
    }

    return (
        <section className="relative min-h-screen w-full py-24 px-4 overflow-hidden   bg-gradient-to-r from-white/5 via-black/55 to-white/5  animate-grad    bg-gray-100 dark:bg-black transition-colors">

            {/* 🌗 THEME TOGGLE */}
            <button
                onClick={toggleTheme}
                className="
          fixed top-6 right-6 z-50
          p-3 rounded-full
          bg-white dark:bg-black
          border border-gray-300 dark:border-white/20
          shadow-lg
        "
            >
                {darkMode ? (
                    <FaSun className="text-yellow-400" />
                ) : (
                    <FaMoon className="text-blue-600" />
                )}
            </button>

            {/* ===== BACKGROUND ===== */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute  inset-0 bg-gradient-to-br
          from-white via-gray-200 to-white
          dark:from-black dark:via-gray-900 dark:to-black"
                />
                <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[160px]" />
                <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />
            </div>

            {/* ===== GLASS CARD ===== */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
          mx-auto w-full max-w-md md:max-w-lg lg:max-w-3xl
          rounded-3xl p-6 md:p-10
          bg-white/70 dark:bg-white/10
          backdrop-blur-md
          border border-gray-200 dark:border-white/20
          shadow-2xl
          text-gray-900 dark:text-white
        "
            >
                {/* HEADER */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        God'swill Essien
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        #5 Gotheg Avenue, Artillery, Woji Junction
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Off Okporo Road, Rumuogba,
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        port-harcourt, Rivers state, Nigeria.
                    </p>
                </motion.div>

                {/* CONTENT */}
                <motion.div className="mt-8 space-y-5">
                    {[
                        { title: "Profile", text: "Aspiring web developer passionate about creating functional and visually appealing websites." },
                        { title: "Education", text: "Estate Management – Rivers State University" },
                        { title: "Technical Skills", text: "HTML, CSS, JavaScript, Responsive Design" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="
                p-4 rounded-xl
                bg-gray-100 dark:bg-black/40
                border border-gray-200 dark:border-white/10
              "
                        >
                            <h2 className="font-semibold text-lg">{item.title}</h2>
                            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>


                <p className="text-gray-700 dark:text-gray-300 animate-float   p-4 rounded-xl bg-gray-100 dark:bg-black/40  border border-gray-200 dark:border-white/10 mt-2 ">
                    Pls download resume for more content 😊😊
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3">

                    <div className="   bg-gray-100 dark:bg-black/40
                border border-gray-200 dark:border-white/10  animate-pulse items-center justify-center gap-2 px-6 py-2  shadow-lg   shadow-slate-500/10 rounded-full hover:scale-105 transition flex   ">

                        <a
                            href="/GOD'SWILL ESSIEN resume.pdf"
                            download

                        >

                            Download Resume
                        </a>

                        <TbDownload />
                    </div>



                </div>


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




            {/* Floating elements */}

            <div className=' animate-spin-slow -z-5 '>
                <div className="absolute hover:animate-ping top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float"></div>
                <div className="absolute hover:animate-ping bottom-1/3 right-32 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-1000"></div>
                <div className="absolute hover:animate-ping top-1/2 left-32 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-float delay-2000"></div>

            </div>


            <p className="text-xs translate-y-[80px] text-gray-500 text-center ">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </section>
    );
}
