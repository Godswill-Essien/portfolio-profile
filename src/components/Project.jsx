
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import {
  TbArrowUpRight,
  TbArrowLeft,
  TbArrowRight,
  TbExternalLink,
  TbSparkles,
} from "react-icons/tb";

import "swiper/css";
import "swiper/css/navigation";

import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    number: "01",
    title: "Netflixx",
    category: "Streaming Experience",
    description:
      "A responsive streaming interface focused on cinematic presentation, clean navigation and immersive content discovery.",
    image: "/netflixx.png",
    stack: ["Next.js", "Tailwind", "JavaScript", "TypeScript"],
    live: "https://willview.vercel.app/",
  },
  {
    number: "02",
    title: "Novacrust",
    category: "Fintech Experience",
    description:
      "A modern fintech interface designed around clarity, trust and a smooth experience across desktop and mobile.",
    image: "/nova.png",
    stack: ["Next.js", "Tailwind", "JavaScript", "TypeScript"],
    live: "https://Novacrust.com",
  },
];

export default function Project() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f5f5f5]
        text-black
        transition-colors
        duration-700
        dark:bg-[#050505]
        dark:text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
            dark:opacity-[0.025]
            dark:[background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          "
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-220px]
            top-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-black/[0.035]
            blur-[140px]
            dark:bg-white/[0.025]
          "
        />

        <motion.div
          animate={{
            y: [0, 35, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-180px]
            right-[-160px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-black/[0.035]
            blur-[140px]
            dark:bg-white/[0.02]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          py-24
          sm:px-8
          md:px-12
          md:py-32
          lg:px-16
        "
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
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
                  text-[9px]
                  dark:border-white/10
                "
              >
                04
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-black/40
                  dark:text-white/30
                "
              >
                Selected work
              </span>
            </div>

            <h2
              className="
                max-w-4xl
                text-[clamp(3.5rem,8vw,8rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
              "
            >
              Things
              <br />
              <span className="text-black/20 dark:text-white/20">
                I've built.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xs md:pb-2"
          >
            <p className="text-sm leading-7 text-black/45 dark:text-white/40">
              A small selection of interfaces and digital experiences built
              through design, frontend development and creative technology.
            </p>
          </motion.div>
        </div>

        {/* =======================================================
            PROJECT REEL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            navigation={{
              prevEl: ".project-prev",
              nextEl: ".project-next",
            }}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            speed={900}
            spaceBetween={28}
            slidesPerView={1}
            className="project-showcase-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.number}>
                <article className="group">
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      aspect-[16/9]
                      w-full
                      overflow-hidden
                      rounded-[28px]
                      bg-black
                      sm:rounded-[36px]
                    "
                  >
                    {/* Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-[1200ms]
                        ease-out
                        group-hover:scale-[1.035]
                      "
                    />

                    {/* Image shade */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/15
                        to-black/5
                      "
                    />

                    {/* Top metadata */}
                    <div
                      className="
                        absolute
                        left-5
                        right-5
                        top-5
                        flex
                        items-start
                        justify-between
                        sm:left-8
                        sm:right-8
                        sm:top-8
                      "
                    >
                      <div
                        className="
                          rounded-full
                          border
                          border-white/15
                          bg-black/20
                          px-3
                          py-1.5
                          font-mono
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          text-white/70
                          backdrop-blur-md
                        "
                      >
                        {project.category}
                      </div>

                      <div
                        className="
                          font-mono
                          text-[10px]
                          tracking-[0.2em]
                          text-white/50
                        "
                      >
                        {project.number}
                      </div>
                    </div>

                    {/* Project title */}
                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        sm:bottom-8
                        sm:left-8
                        sm:right-8
                      "
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h3
                            className="
                              text-[clamp(2.8rem,7vw,6.5rem)]
                              font-semibold
                              leading-[0.82]
                              tracking-[-0.07em]
                              text-white
                            "
                          >
                            {project.title}
                          </h3>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className="
                                  rounded-full
                                  border
                                  border-white/15
                                  bg-white/[0.08]
                                  px-3
                                  py-1.5
                                  text-[8px]
                                  uppercase
                                  tracking-[0.12em]
                                  text-white/60
                                  backdrop-blur-md
                                "
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                            transition-transform
                            duration-300
                            hover:scale-110
                            sm:h-14
                            sm:w-14
                          "
                          aria-label={`Open ${project.title}`}
                        >
                          <TbArrowUpRight
                            size={21}
                            className="
                              transition-transform
                              duration-300
                              group-hover/link:translate-x-0.5
                              group-hover/link:-translate-y-0.5
                            "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div
                    className="
                      mt-6
                      grid
                      gap-5
                      border-b
                      border-black/[0.08]
                      pb-7
                      dark:border-white/[0.08]
                      md:grid-cols-[0.8fr_1.2fr]
                      md:items-end
                    "
                  >
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.14em]
                        text-black/30
                        dark:text-white/25
                      "
                    >
                      {project.category}
                    </p>

                    <p
                      className="
                        max-w-2xl
                        text-sm
                        leading-7
                        text-black/45
                        dark:text-white/40
                        md:ml-auto
                      "
                    >
                      {project.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* =====================================================
              SWIPER CONTROLS
          ===================================================== */}

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="
                  project-prev
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/60
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-white
                  dark:hover:text-black
                "
                aria-label="Previous project"
              >
                <TbArrowLeft size={17} />
              </button>

              <button
                type="button"
                className="
                  project-next
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-white/60
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                  dark:hover:bg-white
                  dark:hover:text-black
                "
                aria-label="Next project"
              >
                <TbArrowRight size={17} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <TbSparkles
                size={14}
                className="text-black/25 dark:text-white/20"
              />

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
                Swipe to explore
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            EXPERIENCE STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            grid
            gap-8
            border-t
            border-black/[0.08]
            pt-10
            dark:border-white/[0.08]
            md:grid-cols-[1fr_auto]
            md:items-center
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-black
                  dark:bg-white
                "
              />

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
                Open for meaningful projects
              </span>
            </div>

            <p
              className="
                mt-4
                max-w-2xl
                text-xl
                font-medium
                leading-8
                tracking-[-0.03em]
                text-black/65
                dark:text-white/60
                sm:text-2xl
              "
            >
              Have an idea that needs to become a real digital experience?
            </p>
          </div>

          <Link
            href="/mproject"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-black
              px-6
              py-3.5
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
              dark:bg-white
              dark:text-black
              dark:hover:shadow-[0_18px_45px_rgba(255,255,255,0.08)]
            "
          >
            Explore all projects

            <TbExternalLink
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

