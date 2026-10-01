
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiGooglecloud,
  SiGithub,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import {
  TbArrowUpRight,
  TbCode,
  TbServer,
  TbDatabase,
  TbCloud,
  TbGitBranch,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";

export default function TextImageComponent() {
  const { t } = useLanguage();

  const skills = [
    {
      name: "JavaScript",
      category: "Language",
      icon: <SiJavascript />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description: "Interactive web experiences",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org/",
      description: "Typed JavaScript development",
    },
    {
      name: "React",
      category: "Frontend",
      icon: <SiReact />,
      url: "https://react.dev/",
      description: "Component-based interfaces",
    },
    {
      name: "Next.js",
      category: "Framework",
      icon: <SiNextdotjs />,
      url: "https://nextjs.org/",
      description: "Modern full-stack React",
    },
    {
      name: "HTML & CSS",
      category: "Web",
      icon: (
        <div className="flex items-center gap-1.5">
          <SiHtml5 />
          <SiCss3 />
        </div>
      ),
      url: "https://developer.mozilla.org/en-US/docs/Web",
      description: "Semantic responsive layouts",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: <SiTailwindcss />,
      url: "https://tailwindcss.com/",
      description: "Utility-first interfaces",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <SiNodedotjs />,
      url: "https://nodejs.org/",
      description: "Server-side JavaScript",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <SiMongodb />,
      url: "https://www.mongodb.com/",
      description: "Flexible data storage",
    },
    {
      name: "Git & GitHub",
      category: "Workflow",
      icon: <SiGithub />,
      url: "https://github.com/",
      description: "Version control & collaboration",
    },
    {
      name: "Google Cloud",
      category: "Cloud",
      icon: <SiGooglecloud />,
      url: "https://cloud.google.com/",
      description: "Cloud infrastructure",
    },
  ];

  const categories = [
    {
      icon: <TbCode size={18} />,
      title: t("skills.categories.frontend.title"),
      text: t("skills.categories.frontend.text"),
    },
    {
      icon: <TbServer size={18} />,
      title: t("skills.categories.backend.title"),
      text: t("skills.categories.backend.text"),
    },
    {
      icon: <TbDatabase size={18} />,
      title: t("skills.categories.data.title"),
      text: t("skills.categories.data.text"),
    },
    {
      icon: <TbCloud size={18} />,
      title: t("skills.categories.cloud.title"),
      text: t("skills.categories.cloud.text"),
    },
  ];

  return (
    <section
      id="skills"
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
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-black/[0.035]
            blur-[130px]
            dark:bg-white/[0.035]
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-10
            h-[480px]
            w-[480px]
            rounded-full
            bg-black/[0.03]
            blur-[140px]
            dark:bg-white/[0.025]
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.35)_1px,transparent_1px)]
            [background-size:70px_70px]
            dark:opacity-[0.035]
            dark:[background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.06)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]
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
          max-w-[1450px]
          px-5
          py-24
          sm:px-8
          md:px-12
          md:py-28
          lg:px-16
          lg:py-32
        "
      >
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mb-14
            flex
            items-end
            justify-between
            gap-6
            border-b
            border-black/[0.08]
            pb-6
            dark:border-white/[0.08]
          "
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
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
                  bg-white/50
                  font-mono
                  text-[9px]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              >
                03
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-black/40
                  dark:text-white/30
                "
              >
                {t("sectionLabel")}
              </span>
            </div>

            <h2
              className="
                text-[clamp(2.8rem,7vw,6.5rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.065em]
              "
            >
              {t("My")}
              <br />
              <span className="text-black/25 dark:text-white/25">
                {t("skills")}
              </span>
            </h2>
          </div>

          <div className="hidden max-w-xs text-right md:block">
            <p
              className="
                text-sm
                leading-7
                text-black/35
                dark:text-white/30
              "
            >
              {t("description")}
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            CAPABILITY ROW
        ======================================================= */}

        <div className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.08]
                bg-white/[0.45]
                p-5
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:border-black/[0.15]
                hover:bg-white/[0.65]
                dark:border-white/[0.08]
                dark:bg-white/[0.035]
                dark:hover:border-white/[0.15]
                dark:hover:bg-white/[0.055]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-black/[0.04]
                  blur-2xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  dark:bg-white/[0.05]
                "
              />

              <div
                className="
                  mb-7
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/[0.08]
                  bg-black/[0.035]
                  text-black/55
                  dark:border-white/[0.08]
                  dark:bg-white/[0.04]
                  dark:text-white/55
                "
              >
                {category.icon}
              </div>

              <h3 className="text-sm font-semibold">
                {category.title}
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-5
                  text-black/35
                  dark:text-white/30
                "
              >
                {category.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            TECHNOLOGIES HEADER
        ======================================================= */}

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TbGitBranch
              size={15}
              className="text-black/30 dark:text-white/25"
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-black/30
                dark:text-white/25
              "
            >
              {t("technologies")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
                hidden
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-black/20
                dark:text-white/20
                sm:block
              "
            >
              {t("swipe")}
            </span>

            <div className="flex gap-1.5">
              <button
                className="
                  skills-prev
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.09]
                  bg-white/[0.45]
                  text-black/45
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-black/20
                  hover:bg-white/[0.7]
                  hover:text-black
                  dark:border-white/[0.09]
                  dark:bg-white/[0.04]
                  dark:text-white/40
                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-white
                "
                aria-label={t("previous")}
              >
                <TbChevronLeft size={15} />
              </button>

              <button
                className="
                  skills-next
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.09]
                  bg-white/[0.45]
                  text-black/45
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-black/20
                  hover:bg-white/[0.7]
                  hover:text-black
                  dark:border-white/[0.09]
                  dark:bg-white/[0.04]
                  dark:text-white/40
                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-white
                "
                aria-label={t("skills.next")}
              >
                <TbChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* =======================================================
            SWIPER
        ======================================================= */}

        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          navigation={{
            prevEl: ".skills-prev",
            nextEl: ".skills-next",
          }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={750}
          spaceBetween={12}
          grabCursor={true}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
            },
            480: {
              slidesPerView: 1.7,
            },
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 2.6,
            },
            1024: {
              slidesPerView: 3.4,
            },
            1280: {
              slidesPerView: 4.5,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          className="!overflow-visible"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.name} className="!h-auto">
              <motion.a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  relative
                  block
                  h-full
                  min-h-[245px]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-black/[0.08]
                  bg-white/[0.45]
                  p-5
                  shadow-[0_15px_50px_rgba(0,0,0,0.035)]
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:border-black/[0.16]
                  hover:bg-white/[0.7]
                  hover:shadow-[0_20px_70px_rgba(0,0,0,0.07)]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.035]
                  dark:shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                  dark:hover:border-white/[0.16]
                  dark:hover:bg-white/[0.055]
                  dark:hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]
                "
              >
                {/* Top shine */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-black/15
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    dark:via-white/20
                  "
                />

                {/* Icon + link */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-black/[0.08]
                      bg-black/[0.025]
                      text-2xl
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                    "
                  >
                    {skill.icon}
                  </div>

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/[0.07]
                      text-black/25
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:border-black/15
                      group-hover:text-black/60
                      dark:border-white/[0.07]
                      dark:text-white/20
                      dark:group-hover:border-white/15
                      dark:group-hover:text-white/60
                    "
                  >
                    <TbArrowUpRight size={13} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-sm font-semibold">
                      {skill.name}
                    </h3>

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-black/20
                        dark:bg-white/20
                      "
                    />
                  </div>

                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.13em]
                      text-black/25
                      dark:text-white/20
                    "
                  >
                    {t(`skills.technologyCategories.${skill.name}`)}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      leading-5
                      text-black/35
                      dark:text-white/30
                    "
                  >
                    {t(`skills.technologyDescriptions.${skill.name}`)}
                  </p>
                </div>

                {/* Bottom line */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    h-px
                    overflow-hidden
                    bg-black/[0.06]
                    dark:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      w-0
                      bg-black/30
                      transition-all
                      duration-700
                      group-hover:w-full
                      dark:bg-white/40
                    "
                  />
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* =======================================================
            SWIPER PROGRESS / FOOTER
        ======================================================= */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-black/[0.08]
            pt-5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/20 dark:bg-white/20" />

            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-black/30
                dark:text-white/25
              "
            >
              {t("bottomText")}
            </p>
          </div>

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.15em]
              text-black/20
              dark:text-white/20
            "
          >
            {skills.length} {t("skills.technologiesCount")}
          </span>
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#projects"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-black/[0.1]
              bg-white/[0.45]
              px-5
              py-3
              font-mono
              text-[8px]
              uppercase
              tracking-[0.13em]
              text-black/50
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-black/20
              hover:bg-white/[0.7]
              hover:text-black
              dark:border-white/[0.1]
              dark:bg-white/[0.04]
              dark:text-white/45
              dark:hover:border-white/20
              dark:hover:bg-white/[0.07]
              dark:hover:text-white
            "
          >
            {t("viewWork")}

            <TbArrowUpRight
              size={13}
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
