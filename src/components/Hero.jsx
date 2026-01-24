"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { BsGlobe } from "react-icons/bs";
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { TbDownload } from "react-icons/tb";

export default function Hero() {
  

  // scroll → smooth inertia
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, 120]);
  const smoothY = useSpring(rawY, {stiffness: 40,damping: 20,  mass: 1,

  });


  return (
    // ✅ FIX: top spacing + stop vertical centering
    <section className="relative min--screen flex items-start  dark:text-black dark:bg-white justify-center  bg-animated-gradient overflow-hidden px-6 pt-16 md:py-24">

      {/* ===== FLOATING GLOBE (SUPER SMOOTH) ===== */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute top-[20%] left-1/2 -translate-x-3 opacity-20 z-0"
      >
        <BsGlobe className="w-40 h-40 md:w-56 md:h-56 animate-spin-slow" />
      </motion.div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center md:dark:bg-black/10 md:shadow-xl md:shadow-black/55 gap-6 md:hover:scale-110 transition-all duration-1000  ease-in-out rounded-2xl    max-w-4xl py-5 "
      >
        {/* ===== PROFILE IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -6 }}
          className="bg-gradient-to-r from-green-700 via-red-700 to-blue-700  animate-gradient hover:opacity-20 rounded-full p-[3px]"
        >
          <div className="relative  w-[270px] hover:opacity-60 h-[270px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden bg-black">
            <Image
              src="/saint.jpg"
              alt="Godswill Essien"
              fill
              priority
              className="object-cover   "
            />
          </div>
        </motion.div>

        {/* ===== GREETING ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-serif font-extrabold text-white dark:text-black text-sm md:text-lg"
        >
          Hi 👋 there,&nbsp;
          <span className="font-bold">
            <Typewriter
              words={["Digital wanderer", "I am Godswill Essien"]}
              loop={500}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1800}
            />
          </span>
        </motion.h1>

        {/* ===== TITLE ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
          className="font-serif font-bold uppercase bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent text-[25px] md:text-5xl"
        >
          Website Developer
        </motion.h2>

        {/* ===== DESCRIPTION ===== */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          className="font-serif text-gray-300 max-w-2xl dark:text-black  text-xs md:text-lg"
        >
          A passionate Front-End Developer with experience in building responsive 
          website applications using HTML, CSS, JAVASCRIPT, and REACT.JS.
          <br />
          Skilled in creating user friendly UI/UX, and optimizing web performance.
        </motion.p>

        {/* ===== CTA ===== */}
     <motion.a
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
  whileHover={{ scale: 1.05 }}
  href="/GOD'SWILL ESSIEN resume.pdf"
  download
  className="
    flex items-center justify-center gap-1
    px-6 py-2 rounded-full
    backdrop-blur-md bg-white/20 dark:bg-black/20
     dark:border-white/10
     dark:text-black text-white
    shadow-lg shadow-black/20
    hover:translate-y-[-5px]
    hover:bg-white/30 dark:hover:bg-black/30
    transition-all duration-500 ease-out border dark:border-black dark:border animate-pulse
  "
>
     <TbDownload className="flex justify-center  items-center " />
     Download Resume
      </motion.a>

        
      </motion.div>

      
    </section>
  );
}
