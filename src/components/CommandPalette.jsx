
"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbArrowRight,
  TbBrain,
  TbCommand,
  TbFileText,
  TbLanguage,
  TbLayoutGrid,
  TbMail,
  TbMoon,
  TbMusic,
  TbSearch,
  TbSparkles,
  TbSun,
  TbUser,
  TbX,
} from "react-icons/tb";

import { useLanguage } from "@/context/LanguageContext";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef(null);

  const { languages, setLanguage } = useLanguage();

  // --------------------------------------------------
  // OPEN / CLOSE
  // --------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isCommand =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k";

      if (isCommand) {
        event.preventDefault();
        setOpen((previous) => !previous);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  // --------------------------------------------------
  // FOCUS INPUT
  // --------------------------------------------------
  useEffect(() => {
    if (!open) return;

    setQuery("");
    setSelectedIndex(0);

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 80);

    return () => clearTimeout(timer);
  }, [open]);

  // --------------------------------------------------
  // COMMANDS
  // --------------------------------------------------
  const commands = useMemo(
    () => [
      {
        id: "about",
        label: "Go to About",
        description: "Learn more about Godswill",
        icon: TbUser,
        action: () => {
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          setOpen(false);
        },
      },

      {
        id: "projects",
        label: "View Projects",
        description: "Explore selected projects",
        icon: TbLayoutGrid,
        action: () => {
          document
            .getElementById("projects")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          setOpen(false);
        },
      },

      {
        id: "skills",
        label: "View Skills",
        description: "See the tools and technologies",
        icon: TbBrain,
        action: () => {
          document
            .getElementById("skills")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          setOpen(false);
        },
      },

      {
        id: "resume",
        label: "Open Resume",
        description: "View Godswill's resume",
        icon: TbFileText,
        action: () => {
          window.location.href = "/Resume";
        },
      },

      {
        id: "contact",
        label: "Contact Godswill",
        description: "Start a project conversation",
        icon: TbMail,
        action: () => {
          document
            .getElementById("hire")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          setOpen(false);
        },
      },

      {
        id: "language",
        label: "Change Language",
        description: "Choose your preferred language",
        icon: TbLanguage,
        action: () => {
          const languageButton =
            document.querySelector(
              "[data-language-switcher]"
            );

          if (languageButton) {
            languageButton.click();
          } else {
            setOpen(false);
          }
        },
      },

      {
        id: "theme",
        label: "Toggle Theme",
        description: "Switch between dark and light mode",
        icon: TbMoon,
        action: () => {
          const themeButton =
            document.querySelector(
              'button[aria-label="Toggle theme"]'
            );

          if (themeButton) {
            themeButton.click();
          }

          setOpen(false);
        },
      },

      {
        id: "music",
        label: "Play Music",
        description: "Control portfolio background music",
        icon: TbMusic,
        action: () => {
          const musicButton =
            document.querySelector(
              "[data-music-toggle]"
            );

          if (musicButton) {
            musicButton.click();
          }

          setOpen(false);
        },
      },
    ],
    [setLanguage]
  );

  // --------------------------------------------------
  // SEARCH
  // --------------------------------------------------
  const filteredCommands = useMemo(() => {
    const value = query
      .trim()
      .toLowerCase();

    if (!value) {
      return commands;
    }

    return commands.filter((command) => {
      return (
        command.label
          .toLowerCase()
          .includes(value) ||
        command.description
          .toLowerCase()
          .includes(value)
      );
    });
  }, [commands, query]);

  // --------------------------------------------------
  // KEYBOARD NAVIGATION
  // --------------------------------------------------
  const handleInputKeyDown = (event) => {
    if (!filteredCommands.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((current) =>
        current + 1 >= filteredCommands.length
          ? 0
          : current + 1
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((current) =>
        current - 1 < 0
          ? filteredCommands.length - 1
          : current - 1
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      filteredCommands[selectedIndex]?.action();
    }
  };

  // Keep selection valid when search changes.
  useEffect(() => {
    if (
      selectedIndex >= filteredCommands.length
    ) {
      setSelectedIndex(0);
    }
  }, [
    filteredCommands.length,
    selectedIndex,
  ]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[9000]
              bg-black/55
              backdrop-blur-md
            "
          />

          {/* PALETTE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -16,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            className="
              fixed
              left-1/2
              top-[15vh]
              z-[9100]
              w-[calc(100%-24px)]
              max-w-xl
              -translate-x-1/2
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.12]
              bg-black/85
              shadow-[0_30px_120px_rgba(0,0,0,0.65)]
              backdrop-blur-3xl
            "
          >
            {/* TOP LIGHT */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-[70%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            {/* SEARCH */}
            <div
              className="
                flex
                items-center
                gap-3
                border-b
                border-white/[0.08]
                px-4
                py-4
              "
            >
              <TbSearch
                size={19}
                className="shrink-0 text-white/35"
              />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                onKeyDown={handleInputKeyDown}
                placeholder="Search portfolio..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                "
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-white/35
                  transition-all
                  hover:bg-white/[0.08]
                  hover:text-white
                "
                aria-label="Close command palette"
              >
                <TbX size={15} />
              </button>
            </div>

            {/* COMMANDS */}
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map(
                  (command, index) => {
                    const Icon = command.icon;
                    const active =
                      index === selectedIndex;

                    return (
                      <button
                        key={command.id}
                        type="button"
                        onMouseEnter={() =>
                          setSelectedIndex(index)
                        }
                        onClick={command.action}
                        className={`
                          group
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          py-3
                          text-left
                          transition-all
                          duration-200

                          ${
                            active
                              ? "bg-white/[0.08]"
                              : "bg-transparent hover:bg-white/[0.05]"
                          }
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition-all

                            ${
                              active
                                ? "border-white/[0.14] bg-white/[0.08] text-white"
                                : "border-white/[0.07] bg-white/[0.025] text-white/35"
                            }
                          `}
                        >
                          <Icon size={17} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className={`
                              block
                              text-[13px]
                              font-medium
                              ${
                                active
                                  ? "text-white"
                                  : "text-white/70"
                              }
                            `}
                          >
                            {command.label}
                          </span>

                          <span
                            className="
                              mt-0.5
                              block
                              truncate
                              text-[11px]
                              text-white/25
                            "
                          >
                            {command.description}
                          </span>
                        </span>

                        {active && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: -4,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            className="text-white/40"
                          >
                            <TbArrowRight
                              size={16}
                            />
                          </motion.span>
                        )}
                      </button>
                    );
                  }
                )
              ) : (
                <div className="px-4 py-10 text-center">
                  <TbSparkles
                    size={22}
                    className="
                      mx-auto
                      mb-2
                      text-white/20
                    "
                  />

                  <p className="text-sm text-white/45">
                    No commands found
                  </p>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/[0.07]
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <kbd
                    className="
                      rounded-md
                      border
                      border-white/[0.08]
                      bg-white/[0.04]
                      px-1.5
                      py-0.5
                      font-mono
                      text-[9px]
                      text-white/35
                    "
                  >
                    ↑
                  </kbd>

                  <kbd
                    className="
                      rounded-md
                      border
                      border-white/[0.08]
                      bg-white/[0.04]
                      px-1.5
                      py-0.5
                      font-mono
                      text-[9px]
                      text-white/35
                    "
                  >
                    ↓
                  </kbd>

                  <span className="ml-1 text-[9px] text-white/20">
                    Navigate
                  </span>
                </span>

                <span className="hidden items-center gap-1.5 sm:flex">
                  <kbd
                    className="
                      rounded-md
                      border
                      border-white/[0.08]
                      bg-white/[0.04]
                      px-1.5
                      py-0.5
                      font-mono
                      text-[9px]
                      text-white/35
                    "
                  >
                    Enter
                  </kbd>

                  <span className="text-[9px] text-white/20">
                    Select
                  </span>
                </span>
              </div>

              <span className="flex items-center gap-1.5 text-[9px] text-white/20">
                <TbCommand size={12} />
                Command
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
