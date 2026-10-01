
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbArrowUpRight,
  TbCheck,
  TbChevronRight,
  TbCode,
  TbPalette,
  TbRobot,
  TbWorld,
} from "react-icons/tb";

const SERVICES = [
  {
    id: "website",
    label: "Website",
    icon: TbWorld,
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: TbCode,
  },
  {
    id: "web-design",
    label: "Web Design",
    icon: TbPalette,
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    icon: TbRobot,
  },
  {
    id: "other",
    label: "Other",
    icon: TbArrowUpRight,
  },
];

const BUDGETS = [
  "$100–300",
  "$300–500",
  "$500+",
  "Let's discuss",
];

const TIMELINES = [
  "ASAP",
  "1–2 weeks",
  "2–4 weeks",
  "Flexible",
];

export default function ProjectBrief() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const canContinue =
    service && budget && timeline && projectDetails.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canContinue || isSending) return;

    setIsSending(true);

    const selectedService =
      SERVICES.find((item) => item.id === service)?.label || service;

    const message = `
Hello Godswill 👋

I'd like to discuss a project with you.

━━━━━━━━━━━━━━━━━━
PROJECT BRIEF
━━━━━━━━━━━━━━━━━━

PROJECT TYPE
${selectedService}

BUDGET
${budget}

TIMELINE
${timeline}

PROJECT DETAILS
${projectDetails.trim()}

━━━━━━━━━━━━━━━━━━
Sent from Godswill Essien's portfolio.
    `.trim();

    const whatsappNumber = "2348143399082";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    /*
     * Direct navigation works better on mobile browsers
     * than opening a new tab/window.
     */
    window.location.href = whatsappUrl;
  };

  const resetForm = () => {
    setService("");
    setBudget("");
    setTimeline("");
    setProjectDetails("");
    setSubmitted(false);
    setIsSending(false);
  };

  return (
    <section
      id="project-brief"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.025]" />

        <div className="absolute bottom-[5%] right-[8%] h-80 w-80 rounded-full bg-black/[0.02] blur-3xl dark:bg-white/[0.02]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40 dark:text-white/35">
              Start a project
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl"
          >
            Tell me what
            <br />
            <span className="text-black/35 dark:text-white/30">
              you're building.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-sm leading-7 text-black/50 dark:text-white/40"
          >
            Give me a quick idea of your project, budget, and timeline.
            It only takes a minute and helps me understand how I can
            help.
          </motion.p>
        </div>

        {/* ===================================================
            FORM CARD
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/55 shadow-[0_25px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent dark:via-white/15" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 lg:p-10"
              >
                {/* SERVICE */}

                <div>
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/30 dark:text-white/25">
                        01 / Service
                      </p>

                      <h3 className="mt-2 text-base font-medium">
                        What do you need?
                      </h3>
                    </div>

                    <span className="hidden font-mono text-[8px] text-black/25 sm:block dark:text-white/20">
                      Choose one
                    </span>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((item) => {
                      const Icon = item.icon;
                      const selected = service === item.id;

                      return (
                        <motion.button
                          key={item.id}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setService(item.id)}
                          className={`group flex min-h-[58px] items-center justify-between rounded-2xl border px-4 text-left transition-all duration-300 ${
                            selected
                              ? "border-black bg-black text-white shadow-lg shadow-black/10 dark:border-white dark:bg-white dark:text-black"
                              : "border-black/[0.07] bg-black/[0.015] text-black/65 hover:border-black/15 hover:bg-black/[0.035] dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-white/60 dark:hover:border-white/15 dark:hover:bg-white/[0.04]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-colors ${
                                selected
                                  ? "border-white/15 bg-white/10 dark:border-black/10 dark:bg-black/10"
                                  : "border-black/[0.06] bg-white/60 dark:border-white/[0.06] dark:bg-white/[0.03]"
                              }`}
                            >
                              <Icon size={16} />
                            </span>

                            <span className="text-xs font-medium">
                              {item.label}
                            </span>
                          </span>

                          {selected && <TbCheck size={16} />}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* DIVIDER */}

                <div className="my-10 h-px bg-black/[0.06] dark:bg-white/[0.06]" />

                {/* BUDGET */}

                <div>
                  <div className="mb-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/30 dark:text-white/25">
                      02 / Budget
                    </p>

                    <h3 className="mt-2 text-base font-medium">
                      What's your budget?
                    </h3>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {BUDGETS.map((item) => {
                      const selected = budget === item;

                      return (
                        <motion.button
                          key={item}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setBudget(item)}
                          className={`rounded-2xl border px-4 py-4 text-xs font-medium transition-all duration-300 ${
                            selected
                              ? "border-black bg-black text-white shadow-lg shadow-black/10 dark:border-white dark:bg-white dark:text-black"
                              : "border-black/[0.07] bg-black/[0.015] text-black/60 hover:border-black/15 hover:bg-black/[0.035] dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-white/60 dark:hover:border-white/15 dark:hover:bg-white/[0.04]"
                          }`}
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* TIMELINE */}

                <div className="mt-10">
                  <div className="mb-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/30 dark:text-white/25">
                      03 / Timeline
                    </p>

                    <h3 className="mt-2 text-base font-medium">
                      When do you need it?
                    </h3>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {TIMELINES.map((item) => {
                      const selected = timeline === item;

                      return (
                        <motion.button
                          key={item}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setTimeline(item)}
                          className={`rounded-2xl border px-4 py-4 text-xs font-medium transition-all duration-300 ${
                            selected
                              ? "border-black bg-black text-white shadow-lg shadow-black/10 dark:border-white dark:bg-white dark:text-black"
                              : "border-black/[0.07] bg-black/[0.015] text-black/60 hover:border-black/15 hover:bg-black/[0.035] dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-white/60 dark:hover:border-white/15 dark:hover:bg-white/[0.04]"
                          }`}
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* PROJECT DETAILS */}

                <div className="mt-10">
                  <div className="mb-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/30 dark:text-white/25">
                      04 / Project
                    </p>

                    <h3 className="mt-2 text-base font-medium">
                      Tell me about your project.
                    </h3>
                  </div>

                  <div className="relative">
                    <textarea
                      value={projectDetails}
                      onChange={(event) =>
                        setProjectDetails(event.target.value)
                      }
                      placeholder="What are you trying to build? What should it do? Share anything that would help me understand the idea..."
                      rows={6}
                      maxLength={1200}
                      className="w-full resize-none rounded-2xl border border-black/[0.07] bg-black/[0.015] px-5 py-5 text-sm leading-7 text-black outline-none placeholder:text-black/25 transition-all duration-300 focus:border-black/20 focus:bg-black/[0.025] dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-white/20 dark:focus:border-white/20 dark:focus:bg-white/[0.035]"
                    />

                    <span className="absolute bottom-4 right-5 font-mono text-[8px] text-black/25 dark:text-white/20">
                      {projectDetails.length}/1200
                    </span>
                  </div>
                </div>

                {/* SUBMIT */}

                <div className="mt-8 flex flex-col gap-4 border-t border-black/[0.06] pt-7 dark:border-white/[0.06] sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[11px] leading-5 text-black/35 dark:text-white/25">
                    No long forms. Just the details I need to understand
                    your project.
                  </p>

                  <motion.button
                    type="submit"
                    disabled={!canContinue || isSending}
                    whileHover={
                      canContinue && !isSending
                        ? { scale: 1.02 }
                        : {}
                    }
                    whileTap={
                      canContinue && !isSending
                        ? { scale: 0.98 }
                        : {}
                    }
                    className={`group flex h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-medium transition-all duration-300 ${
                      canContinue && !isSending
                        ? "bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] dark:bg-white dark:text-black dark:shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
                        : "cursor-not-allowed bg-black/10 text-black/30 dark:bg-white/10 dark:text-white/25"
                    }`}
                  >
                    {isSending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-3.5 w-3.5 rounded-full border border-current border-t-transparent"
                        />

                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        Send Project Brief

                        <TbChevronRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              /* SUCCESS STATE */

              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[500px] flex-col items-center justify-center px-6 py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black text-white shadow-xl dark:border-white/10 dark:bg-white dark:text-black"
                >
                  <TbCheck size={26} strokeWidth={2} />
                </motion.div>

                <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.3em] text-black/30 dark:text-white/25">
                  WhatsApp
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                  Your brief is ready.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/45 dark:text-white/35">
                  Your project details have been prepared for WhatsApp.
                  Send the message there and I'll have everything I need
                  to understand your project.
                </p>

                <motion.button
                  type="button"
                  onClick={resetForm}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-xs font-medium transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                >
                  Send another brief

                  <TbArrowUpRight size={14} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

