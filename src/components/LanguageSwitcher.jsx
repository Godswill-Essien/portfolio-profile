
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Globe2,
  Check,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const languageOptions = [
  {
    code: "en",
    label: "English",
    short: "EN",
  },
  {
    code: "fr",
    label: "Français",
    short: "FR",
  },
  {
    code: "es",
    label: "Español",
    short: "ES",
  },
  {
    code: "de",
    label: "Deutsch",
    short: "DE",
  },
  {
    code: "pt",
    label: "Português",
    short: "PT",
  },
  {
    code: "zh",
    label: "中文",
    short: "ZH",
  },
];

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    ready,
    t,
  } = useLanguage();

  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, []);

  // Close dropdown with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  const currentLanguage =
    languageOptions.find(
      (item) => item.code === language
    ) || languageOptions[0];

  const handleLanguageChange = (code) => {
    if (code === language) {
      setOpen(false);
      return;
    }

    setLanguage(code);
    setOpen(false);
  };

  if (!ready) {
    return (
      <div
        className="
          h-9 w-[42px]
          animate-pulse
          rounded-full
          bg-black/[0.05]
          dark:bg-white/[0.06]
        "
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative z-[99999]"
    >
      {/* LANGUAGE BUTTON */}
      <motion.button
        type="button"
        onClick={() =>
          setOpen((previous) => !previous)
        }
        whileTap={{ scale: 0.94 }}
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="menu"
        className="
          group
          flex
          h-9
          items-center
          gap-2
          rounded-full
          border
          border-black/[0.08]
          bg-white/70
          px-3
          text-[10px]
          font-medium
          tracking-[0.12em]
          text-black
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300

          hover:border-black/20
          hover:bg-white

          dark:border-white/[0.1]
          dark:bg-white/[0.04]
          dark:text-white
          dark:hover:border-white/20
          dark:hover:bg-white/[0.08]
        "
      >
        <Globe2
          size={14}
          strokeWidth={1.7}
          className="
            transition-transform
            duration-500
            group-hover:rotate-12
          "
        />

        <span className="hidden sm:block">
          {currentLanguage.short}
        </span>

        <ChevronDown
          size={12}
          strokeWidth={1.8}
          className={`
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            role="menu"
            className="
              absolute
              right-0
              top-[calc(100%+10px)]
              z-[99999]
              w-[200px]
              overflow-hidden
              rounded-2xl
              border
              border-black/[0.08]
              bg-white/95
              p-1.5
              shadow-[0_20px_60px_rgba(0,0,0,0.14)]
              backdrop-blur-2xl

              dark:border-white/[0.08]
              dark:bg-[#0a0a0a]/95
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            "
          >
            {/* HEADER */}
            <div
              className="
                px-3
                pb-2
                pt-2.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-black/35
                dark:text-white/35
              "
            >
              {t("language.title")}
            </div>

            {/* LANGUAGES */}
            <div className="space-y-0.5">
              {languageOptions.map((item) => {
                const active =
                  item.code === language;

                return (
                  <motion.button
                    key={item.code}
                    type="button"
                    role="menuitem"
                    onClick={() =>
                      handleLanguageChange(
                        item.code
                      )
                    }
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-3
                      py-2.5
                      text-left
                      transition-all
                      duration-200

                      ${
                        active
                          ? "bg-black/[0.07] dark:bg-white/[0.09]"
                          : "hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {/* LANGUAGE CODE */}
                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          border
                          text-[8px]
                          font-bold
                          tracking-wider
                          transition-all
                          duration-200

                          ${
                            active
                              ? "border-black/15 bg-black text-white dark:border-white/15 dark:bg-white dark:text-black"
                              : "border-black/[0.08] text-black/45 dark:border-white/[0.08] dark:text-white/45"
                          }
                        `}
                      >
                        {item.short}
                      </span>

                      {/* LANGUAGE NAME */}
                      <span
                        className={`
                          text-[11px]
                          transition-colors
                          duration-200

                          ${
                            active
                              ? "font-medium text-black dark:text-white"
                              : "text-black/60 dark:text-white/60"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* ACTIVE CHECK */}
                    <AnimatePresence>
                      {active && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.5,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.5,
                          }}
                        >
                          <Check
                            size={13}
                            strokeWidth={2}
                            className="text-black dark:text-white"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

