
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbX } from "react-icons/tb";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Foter from "@/components/Foter";
import { useLanguage } from "@/context/LanguageContext";
import ProjectBrief from "@/components/ProjectBrief";
import CommandPalette from "@/components/CommandPalette";

export default function Page() {
  const { t } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [showMusicHint, setShowMusicHint] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const audioRef = useRef(null);

  /* =========================================================
     INITIAL LOADING
  ========================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================================
     MUSIC HINT
  ========================================================= */

  useEffect(() => {
    const hasSeenHint = sessionStorage.getItem("musicHintSeen");

    if (hasSeenHint) return;

    const showTimer = setTimeout(() => {
      setShowMusicHint(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowMusicHint(false);
      sessionStorage.setItem("musicHintSeen", "true");
    }, 11000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  /* =========================================================
     SCROLL + MUSIC
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      setScrolled(scroll > 30);

      const audio = audioRef.current;

      if (!audio) return;

      /*
       * Slowly increase volume while scrolling.
       * Maximum volume = 0.45
       */
      const maxScroll = 600;
      const volume = Math.min(scroll / maxScroll, 0.45);

      audio.volume = volume;

      /*
       * Automatically start music after scrolling,
       * unless the user manually paused it.
       */
      if (scroll > 50 && !isPlaying && !userPaused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Browser may block autoplay.
          });
      }

      /*
       * Return to silence when the user comes back
       * to the top of the page.
       */
      if (scroll < 10 && isPlaying && !userPaused) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying, userPaused]);

  /* =========================================================
     MUSIC TOGGLE
  ========================================================= */

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setUserPaused(true);
      return;
    }

    try {
      await audio.play();

      setIsPlaying(true);
      setUserPaused(false);
    } catch (error) {
      console.warn("Music playback was blocked:", error);
    }
  };

  /* =========================================================
     MUSIC WAVE
  ========================================================= */

  const waveBars = [
    {
      idle: 5,
      playing: [7, 18, 11, 22, 14, 9],
      duration: 0.8,
    },
    {
      idle: 7,
      playing: [15, 8, 22, 12, 19, 10],
      duration: 0.65,
    },
    {
      idle: 4,
      playing: [20, 11, 8, 18, 13, 23],
      duration: 0.9,
    },
    {
      idle: 6,
      playing: [10, 21, 14, 8, 20, 12],
      duration: 0.7,
    },
    {
      idle: 5,
      playing: [17, 9, 20, 13, 7, 19],
      duration: 0.85,
    },
    {
      idle: 4,
      playing: [8, 18, 11, 22, 14, 9],
      duration: 0.75,
    },
    {
      idle: 6,
      playing: [19, 12, 7, 16, 21, 10],
      duration: 0.95,
    },
  ];

  /* =========================================================
     LOADING SCREEN
  ========================================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] text-black dark:bg-[#030303] dark:text-white">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative h-10 w-10">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-full rounded-full border border-black/10 border-t-black dark:border-white/10 dark:border-t-white"
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/30 dark:text-white/25"
          >
            {t("loading.portfolio")}
          </motion.span>
        </motion.div>
      </main>
    );
  }

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f5f5f5] text-black transition-colors duration-500 dark:bg-[#030303] dark:text-white">
      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src="/Hans_Zimmer_-_Interstellar_Main_Theme_OST_INTERSTELLER_(mp3.pm).mp3"
        loop
        preload="auto"
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#f5f5f5]/90 backdrop-blur-xl dark:bg-[#030303]/90"
          : "bg-transparent"
          }`}
      >
        <Navbar />
      </div>

      {/* =====================================================
          MUSIC CONTROL
      ===================================================== */}

      <div className="fixed bottom-5 right-5 z-[70]">
        <motion.button
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={toggleMusic}
          aria-label={
            isPlaying
              ? t("music.pause")
              : t("music.play")
          }
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white text-black shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#0b0b0b] dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          {/* AUDIO WAVE */}

          <div className="flex h-7 items-center justify-center gap-[2px]">
            {waveBars.map((bar, index) => (
              <motion.span
                key={index}
                animate={
                  isPlaying
                    ? {
                      height: bar.playing,
                    }
                    : {
                      height: bar.idle,
                    }
                }
                transition={
                  isPlaying
                    ? {
                      duration: bar.duration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: index * 0.06,
                    }
                    : {
                      duration: 0.3,
                      ease: "easeOut",
                    }
                }
                className="w-[2px] rounded-full bg-current"
              />
            ))}
          </div>

          {/* PAUSED INDICATOR */}

          {!isPlaying && (
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[5px] uppercase tracking-widest opacity-40"
            >
              OFF
            </motion.span>
          )}

          {/* PLAYING DOT */}

          {isPlaying && (
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-current"
            />
          )}
        </motion.button>
      </div>

      {/* =====================================================
          MUSIC HINT
      ===================================================== */}

      <AnimatePresence>
        {showMusicHint && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              x: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            className="fixed bottom-[82px] right-5 z-[65] w-[calc(100vw-40px)] max-w-[300px] rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#0d0d0d] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-start gap-3">
              {/* MINI WAVE */}

              <div className="flex h-8 w-8 shrink-0 items-center justify-center gap-[2px] rounded-full border border-black/10 dark:border-white/10">
                {[10, 16, 7, 13].map((height, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      height: [height, height + 5, height],
                    }}
                    transition={{
                      duration: 0.8 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                    className="w-[2px] rounded-full bg-current opacity-60"
                  />
                ))}
              </div>

              <div className="pr-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35 dark:text-white/25">
                  {t("music.title")}
                </p>

                <p className="mt-2 text-xs leading-5 text-black/55 dark:text-white/45">
                  {t("music.description")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowMusicHint(false);
                  sessionStorage.setItem(
                    "musicHintSeen",
                    "true"
                  );
                }}
                aria-label={t("music.close")}
                className="shrink-0 text-black/30 transition-colors hover:text-black dark:text-white/25 dark:hover:text-white"
              >
                <TbX size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home">
        <Navbar />
      </section>

      <section id="home">
        <Hero />
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about">
        <About />
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills">
        <Skill />
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects">
        <Project />
      </section>

      <section id="project-brief">
        <ProjectBrief />
      </section>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Foter />

      <CommandPalette />
    </main>
  );
}

