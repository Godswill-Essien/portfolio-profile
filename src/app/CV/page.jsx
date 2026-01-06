"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function CVSection() {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      {/* ===== BLURRED BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* blur blobs */}
        <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-blue-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-purple-600/30 rounded-full blur-[160px]" />
      </div>

      {/* ===== GLASS CARD ===== */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          mx-auto
          w-full max-w-md md:max-w-lg lg:max-w-3xl
          rounded-3xl
          bg-white/10
          backdrop-blur-2xl
          border border-white/20
          shadow-2xl
          p-6 md:p-10
          text-white
        "
      >
        {/* ===== HEADER ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            God'swill Sampson Essien
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            #5 Gotheg Avenue, Artillery, Woji Junction
          </p>
          <p className="text-sm md:text-base text-gray-300">
            Off Okporo Road, Rumuogba
          </p>

          <div className="flex flex-col gap-2 mt-4 text-sm md:text-base">
            <p className="border-b border-white/20 pb-1">
              Phone:{" "}
              <Link
                href="tel:+2348143399082"
                className="text-green-400 hover:underline"
              >
                08143399082
              </Link>
            </p>
            <p className="border-b border-white/20 pb-1">
              Email:{" "}
              <Link
                href="mailto:godswillessien880@gmail.com"
                className="text-blue-400 hover:underline"
              >
                godswillessien880@gmail.com
              </Link>
            </p>
          </div>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
          className="mt-8 space-y-5 text-sm md:text-base"
        >
          {[
            {
              title: "Profile",
              text: "Aspiring web developer passionate about creating functional and visually appealing websites. Currently training at LOCTECH with focus on front-end and back-end development.",
            },
            {
              title: "Education",
              text: "– Estate Management\n– Rivers State University (RSU)",
            },
            {
              title: "Technical Skills",
              text:
                "– Website Development\n– Web Design\n– HTML, CSS, JavaScript (Basic)\n– Responsive Design\n– Debugging",
            },
            {
              title: "Experience",
              text:
                "– Learnt web development at LOCTECH\n– Building personal projects",
            },
            {
              title: "Certificate ",
              text: "– LOCTECH Website Development ",
            },
            {
              title: "Hobbies & Interests",
              text: "– Designing Websites\n– Dancing\n– Crafting",
            },
            {
              title: "Reference",
              text: "Available upon request",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                bg-black/40
                backdrop-blur-md
                rounded-xl
                p-4
                border border-white/10
                shadow-md
                whitespace-pre-line
              "
            >
              <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== BUTTONS ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex flex-col gap-3"
        >
          <a
            href="/GOD'SWILL ESSIEN CV.pdf"
            download
            className="
              bg-black/80
              text-white
              text-center
              font-semibold
              px-6 py-2
              rounded-full
              border border-white/20
              hover:scale-105
              transition-transform
            "
          >
            Download CV
          </a>

          <Link
            href="/#home"
            className="
              bg-black/80
              text-white
              text-center
              font-bold
              px-6 py-2
              rounded-full
              border border-white/20
              hover:scale-105
              transition-transform
              
            "
          >
            Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
