
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  TbArrowDownRight,
  TbDownload,
  TbMapPin,
  TbCode,
  TbPalette,
  TbBolt,
} from "react-icons/tb";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 25,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 25,
    mass: 0.8,
  });

  const orbX = useTransform(smoothX, [-500, 500], [-35, 35]);
  const orbY = useTransform(smoothY, [-500, 500], [-35, 35]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;

      mouseX.set(x);
      mouseY.set(y);

      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        group/hero
        relative
        w-full
        overflow-hidden
        bg-[#f5f5f5]
        text-black
        transition-colors
        duration-700
        mt-3
        dark:bg-[#050505]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-black/[0.035]
            blur-[130px]
            dark:bg-white/[0.035]
          "
        />

        <motion.div
          style={{
            x: orbX,
            y: orbY,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[8%]
            top-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-black/[0.06]
            blur-[100px]
            dark:bg-white/[0.055]
          "
        />

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[5%]
            right-[3%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-black/[0.045]
            blur-[120px]
            dark:bg-white/[0.04]
          "
        />

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "70px 70px"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            opacity-[0.07]
            [background-image:linear-gradient(rgba(0,0,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.25)_1px,transparent_1px)]
            [background-size:70px_70px]
            dark:opacity-[0.055]
            dark:[background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]
          "
        />
      </div>

      {/* =====================================================
          MOUSE FOLLOWING LIGHT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          z-30
          hidden
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/[0.035]
          blur-[90px]
          dark:bg-white/[0.035]
          lg:block
        "
        animate={{
          left: mouse.x,
          top: mouse.y,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 25,
        }}
      />

      {/* =====================================================
          TOP INFORMATION
      ====================================================== */}

      <div
        className="
          absolute
          left-5
          right-5
          top-24
          z-20
          flex
          items-center
          justify-between
          sm:left-8
          sm:right-8
          md:left-12
          md:right-12
          lg:left-16
          lg:right-16
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-black/[0.08]
            bg-white/[0.55]
            px-3
            py-2
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-black/45
            shadow-sm
            backdrop-blur-xl
            dark:border-white/[0.09]
            dark:bg-white/[0.045]
            dark:text-white/40
          "
        >
          <TbMapPin size={12} />
          <span>Port Harcourt, Nigeria</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-black/[0.08]
            bg-white/[0.55]
            px-3
            py-2
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-black/45
            shadow-sm
            backdrop-blur-xl
            dark:border-white/[0.09]
            dark:bg-white/[0.045]
            dark:text-white/40
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-black/40
                dark:bg-white/50
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-black/70
                dark:bg-white/80
              "
            />
          </span>

          {t("hero.available")}
        </motion.div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          max-w-[1450px]
          items-center
          justify-center
          px-5
          pb-16
          pt-28
          sm:min-h-[740px]
          sm:px-8
          md:min-h-[760px]
          md:px-12
          md:pb-16
          md:pt-28
          lg:min-h-[800px]
          lg:px-16
          lg:pb-14
          lg:pt-24
        "
      >
        <div className="relative w-full max-w-6xl">

          {/* =================================================
              FLOATING GLASS CARD - LEFT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-0
              top-[22%]
              hidden
              w-44
              rounded-2xl
              border
              border-black/[0.08]
              bg-white/[0.55]
              p-4
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              dark:border-white/[0.1]
              dark:bg-white/[0.045]
              dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              lg:block
            "
          >
            <div className="mb-3 flex items-center justify-between">
              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-black/35
                  dark:text-white/30
                "
              >
                Focus
              </span>

              <TbCode
                size={14}
                className="text-black/35 dark:text-white/35"
              />
            </div>

            <p className="text-sm font-semibold">
              Digital
              <br />
              Experiences
            </p>

            <div className="mt-4 h-px bg-black/10 dark:bg-white/10" />

            <p
              className="
                mt-3
                font-mono
                text-[8px]
                leading-4
                text-black/35
                dark:text-white/30
              "
            >
              DESIGN × CODE
            </p>
          </motion.div>

          {/* =================================================
              FLOATING GLASS CARD - RIGHT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1 },
              x: { duration: 0.8, delay: 1 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              right-0
              top-[45%]
              hidden
              w-48
              rounded-2xl
              border
              border-black/[0.08]
              bg-white/[0.55]
              p-4
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              dark:border-white/[0.1]
              dark:bg-white/[0.045]
              dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              lg:block
            "
          >
            <div className="flex items-center gap-2">
              <TbBolt
                size={15}
                className="text-black/50 dark:text-white/50"
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-black/35
                  dark:text-white/30
                "
              >
                Current stack
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["React", "Next.js", "JS", "Tailwind", "AI"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-black/[0.08]
                      bg-black/[0.035]
                      px-2
                      py-1
                      font-mono
                      text-[7px]
                      text-black/50
                      dark:border-white/[0.08]
                      dark:bg-white/[0.04]
                      dark:text-white/45
                    "
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* =================================================
              PROFILE
          ================================================== */}

          <div className="mb-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-28 w-28 sm:h-30 sm:w-30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-5
                  rounded-full
                  border
                  border-dashed
                  border-black/10
                  dark:border-white/10
                "
              >
                <span
                  className="
                    absolute
                    -right-1
                    top-1/2
                    h-2
                    w-2
                    -translate-y-1/2
                    rounded-full
                    bg-black/60
                    dark:bg-white/70
                  "
                />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-8
                  rounded-full
                  border
                  border-black/[0.05]
                  dark:border-white/[0.06]
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    -top-1
                    h-1.5
                    w-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-black/50
                    dark:bg-white/60
                  "
                />
              </motion.div>

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-full
                  border
                  border-black/[0.12]
                  bg-white/[0.45]
                  p-1
                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                  dark:border-white/[0.14]
                  dark:bg-white/[0.06]
                  dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                "
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/saint.jpg"
                    alt="Godswill Essien"
                    fill
                    priority
                    sizes="128px"
                    className="
                      object-cover
                      grayscale-[15%]
                      transition-all
                      duration-700
                      hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/20
                      via-transparent
                      to-black/20
                    "
                  />
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-black
                  dark:border-black
                  dark:bg-white
                "
              >
                <span className="h-2 w-2 rounded-full bg-white dark:bg-black" />
              </div>
            </motion.div>
          </div>

          {/* =================================================
              INTRO
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="
              mb-4
              text-center
              font-mono
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-black/40
              dark:text-white/35
              sm:text-xs
            "
          >
            {t("hero.greeting")}{" "}
            <span className="text-black/80 dark:text-white/80">
              Godswill Essien
            </span>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              max-w-5xl
              text-center
              text-[clamp(3rem,8.5vw,8rem)]
              font-semibold
              leading-[0.86]
              tracking-[-0.065em]
            "
          >
            {t("hero.headlineLine1")}
            <br />

            <span className="text-black/25 dark:text-white/25">
              {t("hero.headlineAccent")}
            </span>{" "}
            {t("hero.headlineLine2")}
            <span className="text-black/25 dark:text-white/25">.</span>
          </motion.h1>

          {/* =================================================
              TYPEWRITER
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="
              mt-6
              flex
              min-h-[24px]
              items-center
              justify-center
              text-center
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-black/45
              dark:text-white/45
              sm:text-xs
            "
          >
            <span className="mr-2 opacity-30">[</span>

            <Typewriter
              words={[
                t("hero.role1"),
                t("hero.role2"),
                t("hero.role3"),
                t("hero.role4"),
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={65}
              deleteSpeed={35}
              delaySpeed={1700}
            />

            <span className="ml-2 opacity-30">]</span>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-black/45
              dark:text-white/40
              sm:text-base
              sm:leading-8
            "
          >
            {t("hero.description")}
          </motion.p>

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="#work"
              className="
                group
                relative
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-black
                bg-black
                px-6
                py-3.5
                text-xs
                font-semibold
                text-white
                shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                dark:border-white
                dark:bg-white
                dark:text-black
              "
            >
              <span className="relative z-10">
                {t("hero.viewWork")}
              </span>

              <TbArrowDownRight
                size={17}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />

              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-white/10
                  transition-transform
                  duration-300
                  group-hover:translate-y-0
                  dark:bg-black/10
                "
              />
            </Link>

            <a
              href="/GOD'SWILL ESSIEN resume.pdf"
              download
              className="
                group
                flex
                items-center
                gap-2.5
                rounded-full
                border
                border-black/[0.1]
                bg-white/[0.55]
                px-6
                py-3.5
                text-xs
                font-medium
                text-black/65
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-black/20
                hover:bg-white/[0.75]
                hover:text-black
                dark:border-white/[0.1]
                dark:bg-white/[0.045]
                dark:text-white/65
                dark:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                dark:hover:border-white/20
                dark:hover:bg-white/[0.08]
                dark:hover:text-white
              "
            >
              <TbDownload
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              {t("hero.downloadResume")}
            </a>
          </motion.div>

          {/* =================================================
              MOBILE GLASS DETAILS
          ================================================== */}

          <div className="mt-8 flex justify-center gap-2 lg:hidden">
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-black/[0.08]
                bg-white/[0.5]
                px-3
                py-2
                font-mono
                text-[8px]
                text-black/40
                backdrop-blur-xl
                dark:border-white/[0.08]
                dark:bg-white/[0.04]
                dark:text-white/35
              "
            >
              <TbCode size={12} />
              {t("hero.development")}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-black/[0.08]
                bg-white/[0.5]
                px-3
                py-2
                font-mono
                text-[8px]
                text-black/40
                backdrop-blur-xl
                dark:border-white/[0.08]
                dark:bg-white/[0.04]
                dark:text-white/35
              "
            >
              <TbPalette size={12} />
              {t("hero.design")}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION BAR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-20
          flex
          items-center
          justify-between
          font-mono
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-black/25
          dark:text-white/20
          sm:left-8
          sm:right-8
          md:left-12
          md:right-12
          lg:left-16
          lg:right-16
        "
      >
        <span>01 / {t("hero.introduction")}</span>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-2"
        >
          <span>{t("hero.scroll")}</span>
          <span>↓</span>
        </motion.div>

        <span>2026</span>
      </div>

      {/* =====================================================
          SIDE DECORATIVE LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[7%]
          hidden
          h-20
          w-px
          bg-gradient-to-b
          from-transparent
          via-black/10
          to-transparent
          dark:via-white/10
          md:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[7%]
          hidden
          h-20
          w-px
          bg-gradient-to-b
          from-transparent
          via-black/10
          to-transparent
          dark:via-white/10
          md:block
        "
      />
    </section>
  );
}

