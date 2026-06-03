"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { IoIosLink } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {



  return (
    <section id="work" className="relative py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-up"
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-blue-700
            via-indigo-700
            
            bg-clip-text
            text-transparent
          "
          >
            My Projects
          </h2>

          <p className="mt-4 dark:text-black text-gray-400 max-w-xl mx-auto">
            A collection of projects showcasing my frontend development,
            responsive design, and modern web application skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ================= PROJECT 1 ================= */}
          <div
            data-aos="fade-up"
            className="
            group
            
            rounded-3xl
            overflow-hidden
            dark:bg-black/10
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:border-indigo-500/30
            hover:shadow-xl
            hover:shadow-indigo-500/10
            transition-all
            duration-500
          "
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/shoelayers.png"
                alt="Shoelayers project"
                fill
                priority
                className="
                dark:opacity-100
              opacity-30 hover:opacity-100
                object-cover
                transition-all
                duration-700
                px-5
                py-5

                rounded-3xl
                group-hover:scale-105
              "
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Shoelayers
              </h3>

              <p className="text-gray-300 dark:text-black leading-relaxed">
                Shoelayers is a stylish and user-friendly website focused on
                showcasing shoes and clothing with a clean and attractive UI.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm">
                  HTML
                </span>

                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                  CSS
                </span>
              </div>

              <div className="flex gap-5 pt-2">
                <Link
                  href="https://godswill-essien.github.io/shoelayer-clone/shoelayers.html"
                  target="_blank"
                  className="flex items-center gap-2 text-green-600 hover:text-blue-400 transition"
                >
                  <IoIosLink size={22} />
                  Live Demo
                </Link>

                <Link
                  href="https://github.com/Godswill-Essien/shoelayer-clone"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                >
                  <FaGithub size={22} />
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div
            data-aos="fade-up"
            className="

            dark:bg-black/10
            group
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:border-indigo-500/30
            hover:shadow-xl
            hover:shadow-indigo-500/10
            transition-all
            duration-500
          "
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/coach.png"
                alt="CoachClone project"
                fill
                className="
                dark:opacity-100
                opacity-30 hover:opacity-100
                object-cover
                transition-all
                 px-5
                py-5

                rounded-3xl
                duration-700
                group-hover:scale-105
              "
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                CoachClone
              </h3>

              <p className="text-gray-300  dark:text-black leading-relaxed">
                A fitness membership platform built with Next.js, Tailwind CSS
                and JavaScript featuring modern UI, class scheduling and
                responsive layouts.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                  Next.js
                </span>

                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm">
                  TailwindCSS
                </span>

                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">
                  JavaScript
                </span>
              </div>

              <div className="flex dark:text-black items-center gap-2 text-gray-400">
                <IoIosLink size={22} />
                Offline
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <motion.a
          href="/mproject"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="
          max-w-xs
          mx-auto
          mt-12
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          px-6
          py-4
          border
            border-white/10
            bg-white/5
            backdrop-blur-xl animate-pulse
            dark:bg-black/10
          text-white
          font-semibold
          shadow-lg
          hover:shadow-indigo-500/30
          transition-all
        "
        >
          View More Projects
          <FiExternalLink />
        </motion.a>
      </div>
    </section>
  );
}
