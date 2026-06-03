"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Color from "@/components/Color";
import { BsGlobe } from "react-icons/bs";
import axios from "axios";
import { motion } from "framer-motion";

export default function About() {
 return (
  <motion.section
    id="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="
      relative overflow-hidden
      w-full
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
      py-12 md:py-16
      flex flex-col lg:flex-row
      items-center
      justify-center
      gap-8 lg:gap-12
      font-serif
    "
  >
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-purple-600/10 blur-[100px] rounded-full" />
    </div>

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px]"
    >
      <div className="absolute inset-0 rounded-3xl blur-xl opacity-30" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group">
        <Image
          src="/willsaint.jpg"
          alt="Godswill Essien"
          fill
          priority
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>

    {/* CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-2xl"
    >
      <span className="text-blue-500 font-semibold uppercase tracking-widest text-xs sm:text-sm">
        Get To Know Me
      </span>

      <h2
        className="
          mt-2 mb-4
          text-3xl sm:text-4xl lg:text-5xl
          font-extrabold
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          
          bg-clip-text
          text-transparent
        "
      >
        More
      </h2>

      <Color />

      <div
        className="
          mt-5
          p-5 sm:p-6
          rounded-3xl
          bg-white/5
          dark:bg-black/5
      
          backdrop-blur-xl
          border border-white/10
          shadow-xl
          text-sm sm:text-base
          leading-7
          dark:text-black
        "
      >
        <p>
          Hello, I'm{" "}
          <span className="font-bold text-blue-500">
            God'swill Essien
          </span>
          , a passionate freelance web developer focused on building modern,
          responsive, and high-performing digital experiences.
        </p>

        <p className="mt-4">
          I specialize in creating clean user interfaces and interactive web
          applications using HTML, CSS, JavaScript, TypeScript, React.js and
          Next.js.
        </p>

        <p className="mt-4">
          My goal is to transform ideas into beautiful, functional and scalable
          websites that deliver excellent user experiences.
        </p>

        <p className="mt-4">
          Beyond coding, I enjoy reading manga, watching anime, exploring new
          technologies and playing football.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-3 mt-6">
        <div className="rounded-2xl p-3 bg-white/5 border dark:bg-black/5 border-white/10 text-center">
          <h3 className="text-xl font-bold text-blue-500">10+</h3>
          <p className="text-xs">Projects</p>
        </div>

        <div className="rounded-2xl p-3 bg-white/5 border dark:bg-black/5 border-white/10 text-center">
          <h3 className="text-xl font-bold text-purple-500">React</h3>
          <p className="text-xs">Frontend</p>
        </div>

        <div className="rounded-2xl p-3 bg-white/5 border dark:bg-black/5 border-white/10 text-center">
          <h3 className="text-xl font-bold text-cyan-500">UI/UX</h3>
          <p className="text-xs">Design</p>
        </div>

        <div className="rounded-2xl p-3 bg-white/5 border dark:bg-black/5 border-white/10 text-center">
          <h3 className="text-xl font-bold text-green-500">100%</h3>
          <p className="text-xs">Responsive</p>
        </div>
      </div>
    </motion.div>
  </motion.section>
);
}
