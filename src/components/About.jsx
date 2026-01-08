"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Color from "@/components/Color";
import { BsGlobe } from "react-icons/bs";
import axios from "axios";
import { motion } from "framer-motion";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        {/* <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow mb-5" /> */}
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 md:px-20  md:py-20 py-10 flex flex-col md:flex-row    dark:bg-white items-center md:items-stretch gap-10 md:gap-16 font-serif"
    >
      {/* IMAGE CARD WITH GLASS EFFECT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[360px] h-[360px] sm:h-[420px] md:h-auto md:w-[380px] flex-shrink-0"
      >
        {/* Glass overlay shadow */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black/30 rounded-2xl hidden md:block" />

        {/* Image container */}
        <div data-aos="fade-down" className="relative w-full h-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <Image
            src="/willsaint.jpg"
            alt="Godswill Essien"
            fill
            priority
            className="object-cover transition-transform duration-700 opacity-80 hover:opacity-100 hover:scale-110"
            sizes="(max-width: 640px) 100vw, 380px"
          />
        </div>
      </motion.div>

      {/* TEXT CARD WITH GLASSMORPHISM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center gap-4 max-w-[720px]"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent">
          About Me
        </h2>

        <div data-aos="fade-up" className="flex flex-col gap-4">
          <Color />

          <p className="px-6 py-5 rounded-3xl bg-white/5 backdrop-blur-3xl border dark:border-black dark:text-black hover:bg-white/10 border-white/20 shadow-lg text-gray-200 transition-all duration-500  hover:shadow-2xl">
            Hello, I’m God’swill, a freelance web developer specializing in modern,
            responsive, and high-performing websites. I help individuals and
            businesses bring their ideas to life with clean, user-friendly
            interfaces using HTML, CSS, JavaScript, TypeScript, and modern frameworks.
            <br />
            <br />
            I focus on creating visually appealing, fast, and seamless websites,
            with clear communication, attention to detail, and timely delivery.
            From landing pages to full web solutions, I’m committed to delivering
            results that meet your goals.
            <br />
            <br />
            Outside of work, I enjoy reading manga, watching anime, and playing
            football-activities that keep me inspired and creative.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
