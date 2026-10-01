
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveSphere() {
  const [active, setActive] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [messageVisible, setMessageVisible] = useState(false);

  const sphereRef = useRef(null);
  const rippleId = useRef(0);
  const activeTimer = useRef(null);
  const messageTimer = useRef(null);
  const rippleTimers = useRef([]);

  /*
   * ---------------------------------------------------------
   * GLOBAL TOUCH / CLICK RIPPLE
   * ---------------------------------------------------------
   */
  useEffect(() => {
    const handleInteraction = (event) => {
      if (sphereRef.current?.contains(event.target)) return;

      createRipple(event.clientX, event.clientY);
    };

    window.addEventListener("pointerdown", handleInteraction);

    return () => {
      window.removeEventListener("pointerdown", handleInteraction);

      clearTimeout(activeTimer.current);
      clearTimeout(messageTimer.current);

      rippleTimers.current.forEach((timer) => {
        clearTimeout(timer);
      });

      rippleTimers.current = [];

      document.body.classList.remove("energy-mode");
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * CREATE TOUCH RIPPLE
   * ---------------------------------------------------------
   */
  const createRipple = (x, y) => {
    const id = rippleId.current++;

    setRipples((prev) => [
      ...prev.slice(-2),
      {
        id,
        x,
        y,
      },
    ]);

    const timer = setTimeout(() => {
      setRipples((prev) =>
        prev.filter((ripple) => ripple.id !== id)
      );

      rippleTimers.current = rippleTimers.current.filter(
        (currentTimer) => currentTimer !== timer
      );
    }, 1000);

    rippleTimers.current.push(timer);
  };

  /*
   * ---------------------------------------------------------
   * ACTIVATE 3-SECOND ENERGY MODE
   * ---------------------------------------------------------
   */
  const activateEnergy = () => {
    setActive(true);

    document.body.classList.add("energy-mode");

    clearTimeout(activeTimer.current);

    activeTimer.current = setTimeout(() => {
      setActive(false);
      document.body.classList.remove("energy-mode");
    }, 3000);
  };

  /*
   * ---------------------------------------------------------
   * OPEN WILL AI
   * ---------------------------------------------------------
   */
  const handleSphereClick = (event) => {
    event.stopPropagation();

    // Trigger the existing sphere energy animation.
    activateEnergy();

    // Show the small Will AI label beside the sphere.
    setMessageVisible(true);

    clearTimeout(messageTimer.current);

    messageTimer.current = setTimeout(() => {
      setMessageVisible(false);
    }, 2200);

    // Tell Assistant.jsx to open the AI interface.
    window.dispatchEvent(
      new CustomEvent("open-will-ai")
    );
  };

  return (
    <>
      {/* =====================================================
          TOUCH RIPPLE
      ===================================================== */}
      <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="
              absolute
              rounded-full
              border
              border-white/30
              dark:border-white/20
            "
            initial={{
              width: 3,
              height: 3,
              left: ripple.x - 1.5,
              top: ripple.y - 1.5,
              opacity: 0.7,
            }}
            animate={{
              width: 110,
              height: 110,
              left: ripple.x - 55,
              top: ripple.y - 55,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CENTER LEFT ORB
      ===================================================== */}
      <div
        className="
          fixed
          left-3
          top-1/2
          z-[9999]
          -translate-y-1/2
          sm:left-5
        "
      >
        {/* WILL AI LABEL */}
        <AnimatePresence>
          {messageVisible && (
            <motion.div
              initial={{
                opacity: 0,
                x: -8,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -8,
                scale: 0.9,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                absolute
                left-10
                top-1/2
                -translate-y-1/2
                whitespace-nowrap
                rounded-full
                border
                border-white/20
                bg-white/60
                px-3
                py-1.5
                text-[9px]
                font-medium
                tracking-wide
                text-black
                shadow-lg
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-black/40
                dark:text-white
              "
            >
              ✦ Will AI
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================================
            SPHERE
        ================================================= */}
        <motion.button
          ref={sphereRef}
          type="button"
          onClick={handleSphereClick}
          aria-label="Open Will AI"
          animate={{
            scale: active
              ? [1, 1.18, 1]
              : [1, 1.025, 1],
          }}
          transition={{
            duration: active ? 0.6 : 3,
            repeat: active ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            overflow-visible
            rounded-full
            border
            border-white/40
            bg-white/[0.08]
            shadow-[0_4px_25px_rgba(0,0,0,0.16)]
            backdrop-blur-xl
            outline-none
            transition-transform
            dark:border-white/20
            dark:bg-white/[0.05]
          "
        >
          {/* ===============================================
              OUTER RING
          =============================================== */}
          <motion.span
            className="
              absolute
              inset-[-5px]
              rounded-full
              border
              border-white/20
              dark:border-white/10
            "
            animate={{
              scale: active
                ? [1, 1.6, 1]
                : [1, 1.1, 1],
              opacity: active
                ? [0.9, 0, 0.5]
                : [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: active ? 0.8 : 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* ===============================================
              COLORED ENERGY CORE
          =============================================== */}
          <motion.span
            className="
              absolute
              inset-[2px]
              overflow-hidden
              rounded-full
              bg-black
            "
            animate={{
              rotate: active ? 360 : 0,
            }}
            transition={{
              duration: active ? 1.5 : 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* PINK */}
            <motion.span
              className="
                absolute
                -left-2
                top-0
                h-7
                w-5
                rounded-full
                bg-fuchsia-500
                blur-[7px]
              "
              animate={{
                x: active
                  ? [-2, 12, -4, 8]
                  : [-2, 6, -2],
                y: active
                  ? [2, -5, 7, 2]
                  : [2, -2, 2],
                scale: active
                  ? [1, 1.6, 0.8, 1]
                  : [1, 1.2, 1],
              }}
              transition={{
                duration: active ? 0.65 : 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* BLUE */}
            <motion.span
              className="
                absolute
                right-[-3px]
                top-1
                h-6
                w-5
                rounded-full
                bg-blue-500
                blur-[7px]
              "
              animate={{
                x: active
                  ? [3, -8, 4, 3]
                  : [3, -4, 3],
                y: active
                  ? [-2, 8, -5, -2]
                  : [-2, 4, -2],
              }}
              transition={{
                duration: active ? 0.7 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* CYAN */}
            <motion.span
              className="
                absolute
                bottom-[-4px]
                left-1
                h-5
                w-7
                rounded-full
                bg-cyan-400
                blur-[7px]
              "
              animate={{
                x: active
                  ? [0, 8, -4, 0]
                  : [0, 5, 0],
                y: active
                  ? [3, -6, 4, 3]
                  : [3, -2, 3],
              }}
              transition={{
                duration: active ? 0.8 : 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ORANGE */}
            <motion.span
              className="
                absolute
                bottom-0
                right-0
                h-4
                w-4
                rounded-full
                bg-orange-400
                blur-[6px]
              "
              animate={{
                scale: active
                  ? [1, 1.7, 1]
                  : [1, 1.2, 1],
              }}
              transition={{
                duration: active ? 0.5 : 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.span>

          {/* ===============================================
              GLASS REFLECTION
          =============================================== */}
          <span
            className="
              absolute
              left-[7px]
              top-[5px]
              z-20
              h-[6px]
              w-[13px]
              rotate-[-25deg]
              rounded-full
              bg-white/50
              blur-[2px]
            "
          />

          {/* ===============================================
              WHITE CORE
          =============================================== */}
          <motion.span
            className="
              relative
              z-30
              h-[4px]
              w-[4px]
              rounded-full
              bg-white
              shadow-[0_0_9px_rgba(255,255,255,1)]
            "
            animate={{
              scale: active
                ? [1, 2, 1]
                : [1, 1.3, 1],
            }}
            transition={{
              duration: active ? 0.35 : 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>
    </>
  );
}

