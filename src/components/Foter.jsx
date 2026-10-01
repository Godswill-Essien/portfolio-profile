
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaLevelUpAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import {
  TbArrowUpRight,
  TbMail,
  TbMapPin,
  TbSparkles,
} from "react-icons/tb";

import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const stars = [
  { left: "4%", top: "12%", size: "2px", delay: 0 },
  { left: "9%", top: "38%", size: "1px", delay: 1 },
  { left: "15%", top: "72%", size: "2px", delay: 2 },
  { left: "21%", top: "25%", size: "1px", delay: 3 },
  { left: "27%", top: "58%", size: "2px", delay: 1.5 },
  { left: "33%", top: "15%", size: "1px", delay: 4 },
  { left: "39%", top: "82%", size: "2px", delay: 2.5 },
  { left: "45%", top: "44%", size: "1px", delay: 0.5 },
  { left: "51%", top: "20%", size: "2px", delay: 3.5 },
  { left: "57%", top: "67%", size: "1px", delay: 1 },
  { left: "63%", top: "35%", size: "2px", delay: 2 },
  { left: "69%", top: "88%", size: "1px", delay: 4 },
  { left: "75%", top: "17%", size: "2px", delay: 1.5 },
  { left: "81%", top: "52%", size: "1px", delay: 3 },
  { left: "87%", top: "28%", size: "2px", delay: 0.5 },
  { left: "93%", top: "74%", size: "1px", delay: 2.5 },
  { left: "7%", top: "90%", size: "1px", delay: 4 },
  { left: "18%", top: "47%", size: "2px", delay: 1 },
  { left: "30%", top: "92%", size: "1px", delay: 3 },
  { left: "42%", top: "70%", size: "2px", delay: 2 },
  { left: "54%", top: "8%", size: "1px", delay: 4 },
  { left: "66%", top: "57%", size: "2px", delay: 1.5 },
  { left: "78%", top: "81%", size: "1px", delay: 3.5 },
  { left: "90%", top: "43%", size: "2px", delay: 0 },
];

export default function Footer() {
  const { t } = useLanguage();

  const socials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/2348143399082",
      icon: IoLogoWhatsapp,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/gongflamez.jack",
      icon: FaFacebook,
    },
    {
      name: "Telegram",
      href: "https://t.me/+2348143399082",
      icon: FaTelegramPlane,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/god-swill-essien-727006284",
      icon: FaLinkedin,
    },
    {
      name: "Phone",
      href: "tel:+2348143399082",
      icon: FaPhone,
    },
  ];

  return (
    <footer
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-black/[0.08]
        bg-[#f4f4f2]
        text-black
        dark:border-white/[0.08]
        dark:bg-[#020204]
        dark:text-white
      "
    >
      {/* =========================================================
          COSMIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-black/[0.025]
            blur-[100px]
            dark:bg-white/[0.045]
          "
        />

        {stars.map((star) => (
          <motion.span
            key={`${star.left}-${star.top}`}
            className="
              absolute
              rounded-full
              bg-black/35
              dark:bg-white
            "
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.15, 0.75, 0.15],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 3 + (star.delay % 3),
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* SHOOTING STAR 1 */}
        <motion.div
          className="
            absolute
            left-[-160px]
            top-[18%]
            h-px
            w-40
            rotate-[28deg]
            bg-gradient-to-r
            from-transparent
            via-black/20
            to-black
            dark:via-white/20
            dark:to-white
          "
          animate={{
            x: ["0vw", "125vw"],
            y: [0, 320],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeIn",
          }}
        />

        {/* SHOOTING STAR 2 */}
        <motion.div
          className="
            absolute
            right-[-180px]
            top-[12%]
            h-px
            w-44
            rotate-[150deg]
            bg-gradient-to-l
            from-transparent
            via-black/20
            to-black
            dark:via-white/20
            dark:to-white
          "
          animate={{
            x: ["0vw", "-125vw"],
            y: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.6,
            delay: 5,
            repeat: Infinity,
            repeatDelay: 12,
            ease: "easeIn",
          }}
        />

        {/* SHOOTING STAR 3 */}
        <motion.div
          className="
            absolute
            left-[30%]
            top-[-80px]
            h-px
            w-32
            rotate-[50deg]
            bg-gradient-to-r
            from-transparent
            via-black/20
            to-black
            dark:via-white/20
            dark:to-white
          "
          animate={{
            x: [0, 500],
            y: [0, 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 9,
            repeat: Infinity,
            repeatDelay: 14,
            ease: "easeIn",
          }}
        />

        {/* HORIZON */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-1/2
            h-60
            w-[120%]
            -translate-x-1/2
            rounded-[50%]
            border-t
            border-black/[0.06]
            dark:border-white/[0.05]
          "
        />

        {/* BOTTOM FADE */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-[#f4f4f2]
            to-transparent
            dark:from-[#020204]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-12
          sm:px-8
          md:py-16
          lg:px-12
        "
      >
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
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
                text-[8px]
                dark:border-white/10
              "
            >
              05
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-black/40
                dark:text-white/35
              "
            >
              {t("footer.contact")}
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <TbSparkles size={12} />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-black/30
                dark:text-white/25
              "
            >
              {t("footer.connect")}
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN CTA
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="
            flex
            flex-col
            gap-7
            border-b
            border-black/[0.08]
            pb-10
            dark:border-white/[0.08]
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                mb-3
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-black/30
                dark:text-white/25
              "
            >
              {t("footer.haveIdea")}
            </p>

            <h2
              className="
                text-[clamp(2.7rem,7vw,5.8rem)]
                font-semibold
                leading-[0.85]
                tracking-[-0.07em]
              "
            >
              {t("letsCreate")}{" "}
              <span className="text-black/20 dark:text-white/20">
                {t("somethingGreat")}
              </span>
            </h2>
          </div>

          <Link
            id="hire"
            href="mailto:godswillessien880@gmail.com"
            className="
              group
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-black
              bg-black
              text-white
              transition-all
              duration-300
              hover:scale-105
              dark:border-white
              dark:bg-white
              dark:text-black
            "
          >
            <span
              className="
                flex
                flex-col
                items-center
                gap-0.5
                font-mono
                text-[7px]
                uppercase
                tracking-wider
              "
            >
              {t("Hire")}

              <TbArrowUpRight
                size={14}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </span>
          </Link>
        </motion.div>

        {/* =======================================================
            CONTACT INFO
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            grid
            gap-3
            border-b
            border-black/[0.08]
            py-7
            dark:border-white/[0.08]
            sm:grid-cols-3
          "
        >
          {/* EMAIL */}

          <a
            href="mailto:godswillessien880@gmail.com"
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-black/[0.07]
              bg-white/[0.35]
              p-3
              backdrop-blur-xl
              transition
              hover:bg-black/[0.04]
              dark:border-white/[0.07]
              dark:bg-white/[0.025]
              dark:hover:bg-white/[0.05]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                dark:border-white/10
              "
            >
              <TbMail size={14} />
            </span>

            <div className="min-w-0">
              <p
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-widest
                  text-black/30
                  dark:text-white/25
                "
              >
                {t("email")}
              </p>

              <p className="mt-1 truncate text-xs font-medium">
                godswillessien880@gmail.com
              </p>
            </div>
          </a>

          {/* LOCATION */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-black/[0.07]
              bg-white/[0.35]
              p-3
              backdrop-blur-xl
              dark:border-white/[0.07]
              dark:bg-white/[0.025]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                dark:border-white/10
              "
            >
              <TbMapPin size={14} />
            </span>

            <div>
              <p
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-widest
                  text-black/30
                  dark:text-white/25
                "
              >
                {t("basedIn")}
              </p>

              <p className="mt-1 text-xs font-medium">
                Port Harcourt, Nigeria
              </p>
            </div>
          </div>

          {/* AVAILABILITY */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-black/[0.07]
              bg-white/[0.35]
              p-3
              backdrop-blur-xl
              dark:border-white/[0.07]
              dark:bg-white/[0.025]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                dark:border-white/10
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-black
                  dark:bg-white
                "
              />
            </span>

            <div>
              <p
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-widest
                  text-black/30
                  dark:text-white/25
                "
              >
                {t("status")}
              </p>

              <p className="mt-1 text-xs font-medium">
                {t("footer.availability")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-black/25
                dark:text-white/20
              "
            >
              © {new Date().getFullYear()} Godswill Essien
            </p>

            <p
              className="
                mt-1
                text-[11px]
                text-black/30
                dark:text-white/20
              "
            >
              {t("built")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Phone" ? undefined : "_blank"
                  }
                  rel={
                    social.name === "Phone"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/[0.08]
                    bg-white/[0.35]
                    text-black/45
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-black
                    hover:text-white
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                    dark:text-white/40
                    dark:hover:bg-white
                    dark:hover:text-black
                  "
                >
                  <Icon
                    size={14}
                    className="
                      transition-transform
                      group-hover:scale-110
                    "
                  />
                </a>
              );
            })}

            <Link
              href="#top"
              aria-label={t("footer.backToTop")}
              className="
                ml-2
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-black/[0.08]
                bg-white/[0.35]
                text-black/45
                backdrop-blur-xl
                transition-all
                hover:-translate-y-1
                hover:bg-black
                hover:text-white
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:text-white/40
                dark:hover:bg-white
                dark:hover:text-black
              "
            >
              <FaLevelUpAlt size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

