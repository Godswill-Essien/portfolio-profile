
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TbArrowDownRight,
  TbCode,
  TbPalette,
  TbBolt,
  TbBrandReact,
  TbWorld,
} from "react-icons/tb";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <TbCode size={18} />,
      title: t("about.skills.development.title"),
      text: t("about.skills.development.text"),
    },
    {
      icon: <TbPalette size={18} />,
      title: t("about.skills.design.title"),
      text: t("about.skills.design.text"),
    },
    {
      icon: <TbBolt size={18} />,
      title: t("about.skills.automation.title"),
      text: t("about.skills.automation.text"),
    },
  ];

  const stats = [
    {
      value: "10+",
      label: t("about.stats.projects"),
    },
    {
      value: "2+",
      label: t("about.stats.experience"),
    },
    {
      value: "React",
      label: t("about.stats.frontend"),
    },
    {
      value: "100%",
      label: t("about.stats.responsive"),
    },
  ];

  return (
    <section
      id="about"
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
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-black/[0.035]
            blur-[120px]
            dark:bg-white/[0.035]
          "
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-black/[0.035]
            blur-[130px]
            dark:bg-white/[0.03]
          "
        />

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
          SECTION CONTENT
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
            TOP LABEL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mb-16
            flex
            items-center
            justify-between
            border-b
            border-black/[0.08]
            pb-5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-3">
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
              02
            </span>

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-black/40
                dark:text-white/35
                sm:text-[10px]
              "
            >
              {t("about.sectionLabel")}
            </span>
          </div>

          <span
            className="
              hidden
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-black/25
              dark:text-white/20
              sm:block
            "
          >
            {t("about.topNote")}
          </span>
        </motion.div>

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =====================================================
              IMAGE SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0"
          >
            <div
              className="
                absolute
                -left-2
                -top-5
                z-20
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-black/30
                dark:text-white/25
              "
            >
              01 — {t("about.identity")}
            </div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="
                group
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[28px]
                border
                border-black/[0.1]
                bg-white/[0.45]
                p-2
                shadow-[0_30px_100px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                dark:border-white/[0.1]
                dark:bg-white/[0.04]
                dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/willsaint.jpg"
                  alt="Godswill Essien"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="
                    object-cover
                    grayscale-[10%]
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.045]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/25
                    via-transparent
                    to-black/20
                    opacity-70
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/20
                    bg-black/30
                    px-4
                    py-3
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <div>
                    <p className="text-xs font-semibold">
                      Godswill Essien
                    </p>

                    <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/55">
                      {t("about.creativeDeveloper")}
                    </p>
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
                      border-white/20
                      bg-white/10
                    "
                  >
                    <TbArrowDownRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>

            <div
              className="
                absolute
                -bottom-8
                left-1/2
                hidden
                h-16
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-black/20
                to-transparent
                dark:from-white/20
                sm:block
              "
            />

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -right-3
                hidden
                rounded-2xl
                border
                border-black/[0.08]
                bg-white/[0.6]
                px-4
                py-3
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                dark:border-white/[0.09]
                dark:bg-white/[0.05]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                sm:block
              "
            >
              <div className="flex items-center gap-2">
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
                    tracking-[0.15em]
                    text-black/45
                    dark:text-white/40
                  "
                >
                  {t("about.alwaysLearning")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              TEXT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <p
                className="
                  mb-4
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-black/35
                  dark:text-white/30
                  sm:text-[10px]
                "
              >
                {t("about.eyebrow")}
              </p>

              <h2
                className="
                  max-w-3xl
                  text-[clamp(2.8rem,6vw,5.8rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.065em]
                "
              >
                {t("about.headingLine1")}
                <br />
                <span className="text-black/25 dark:text-white/25">
                  {t("about.headingLine2")}
                </span>
              </h2>
            </div>

            <div className="mt-9 max-w-2xl">
              <p
                className="
                  text-base
                  leading-8
                  text-black/55
                  dark:text-white/45
                  sm:text-lg
                "
              >
                {t("about.paragraph1Start")}{" "}
                <span className="font-medium text-black dark:text-white">
                  Godswill Essien
                </span>
                {t("about.paragraph1End")}
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-black/40
                  dark:text-white/35
                  sm:text-base
                  sm:leading-8
                "
              >
                {t("about.paragraph2")}
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-black/40
                  dark:text-white/35
                  sm:text-base
                  sm:leading-8
                "
              >
                {t("about.paragraph3")}
              </p>
            </div>

            {/* ===================================================
                SKILL CARDS
            =================================================== */}

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-black/[0.08]
                    bg-white/[0.5]
                    p-4
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                    hover:border-black/[0.16]
                    hover:bg-white/[0.7]
                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:hover:border-white/[0.16]
                    dark:hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      mb-5
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
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      dark:border-white/[0.08]
                      dark:bg-white/[0.04]
                      dark:text-white/55
                    "
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-xs font-semibold">
                    {skill.title}
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
                    {skill.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            STATS
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mt-24
            grid
            grid-cols-2
            overflow-hidden
            rounded-[24px]
            border
            border-black/[0.08]
            bg-white/[0.4]
            backdrop-blur-2xl
            dark:border-white/[0.08]
            dark:bg-white/[0.035]
            sm:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group
                relative
                p-5
                transition-colors
                duration-300
                hover:bg-black/[0.025]
                dark:hover:bg-white/[0.025]
                sm:p-7
                ${
                  index !== stats.length - 1
                    ? "border-b border-black/[0.07] dark:border-white/[0.07] sm:border-b-0 sm:border-r"
                    : ""
                }
                ${
                  index === 0
                    ? "border-r sm:border-r"
                    : index === 2
                    ? "sm:border-r"
                    : ""
                }
              `}
            >
              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-black/25
                    dark:text-white/20
                  "
                >
                  0{index + 1}
                </span>

                {index === 0 && (
                  <TbWorld size={15} className="opacity-25" />
                )}

                {index === 1 && (
                  <TbCode size={15} className="opacity-25" />
                )}

                {index === 2 && (
                  <TbBrandReact size={15} className="opacity-25" />
                )}

                {index === 3 && (
                  <TbBolt size={15} className="opacity-25" />
                )}
              </div>

              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-3xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.13em]
                  text-black/30
                  dark:text-white/25
                  sm:text-[9px]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* =======================================================
            BOTTOM PERSONAL NOTE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-black/[0.08]
            pt-6
            dark:border-white/[0.08]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/20 dark:bg-white/20" />

            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.17em]
                text-black/30
                dark:text-white/25
              "
            >
              {t("about.bottomLabel")}
            </p>
          </div>

          <p
            className="
              max-w-md
              text-left
              text-xs
              leading-6
              text-black/30
              dark:text-white/25
              sm:text-right
            "
          >
            {t("about.bottomText")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

