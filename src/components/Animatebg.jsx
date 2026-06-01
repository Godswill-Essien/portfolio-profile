"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; // ✅ FIXED

export default function AnimatedBackground() {
  const [isDark, setIsDark] = useState(false);

  // Detect Tailwind dark class
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // ✅ FIXED
  }, []);

  const options = useMemo(() => {
    return {
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: isDark ? 70 : 40,
        },
        color: {
          value: isDark ? "#ffffff" : "#64748b",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
        move: {
          enable: true,
          speed: 0.4,
        },
        opacity: {
          value: 0.5,
        },
        links: {
          enable: isDark,
          distance: 120,
          color: "#888",
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles init={particlesInit} options={options} />

      {/* Glow Effects */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-30 transition-colors duration-500
        ${
          isDark
            ? "bg-purple-600 top-[-200px] left-[-200px]"
            : "bg-blue-300 top-[-200px] left-[-200px]"
        }`}
      />

      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 transition-colors duration-500
        ${
          isDark
            ? "bg-indigo-500 bottom-[-200px] right-[-200px]"
            : "bg-pink-200 bottom-[-200px] right-[-200px]"
        }`}
      />
    </div>
  );
}