import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";

const StarBackground = () => {
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🌌 Parallax
  const rawStarsY = useTransform(
    scrollY,
    [0, 3000],
    isMobile ? [0, -80] : [0, -250]
  );

  const rawStarsX = useTransform(
    scrollY,
    [0, 3000],
    isMobile ? [0, -20] : [0, -60]
  );

  const rawNebulaY = useTransform(
    scrollY,
    [0, 3000],
    isMobile ? [0, -30] : [0, -120]
  );

  const rawPlanetY = useTransform(
    scrollY,
    [0, 3000],
    isMobile ? [0, -15] : [0, -50]
  );

  // 🧈 Smooth Springs
  const starsY = useSpring(rawStarsY, {
    stiffness: isMobile ? 10 : 20,
    damping: isMobile ? 50 : 35,
  });

  const starsX = useSpring(rawStarsX, {
    stiffness: isMobile ? 10 : 20,
    damping: isMobile ? 50 : 35,
  });

  const nebulaY = useSpring(rawNebulaY, {
    stiffness: 12,
    damping: 45,
  });

  const planetY = useSpring(rawPlanetY, {
    stiffness: 10,
    damping: 50,
  });

  // ⭐ Stars
  const stars = useMemo(
    () =>
      Array.from({ length: isMobile ? 90 : 200 }, () => {
        const types = ["circle", "diamond", "square", "glow"];
        const type = types[Math.floor(Math.random() * types.length)];

        return {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 5 + 1}px`,
          opacity: Math.random(),
          type,
        };
      }),
    [isMobile]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 🌌 Nebula + Planets */}
      <motion.div
        style={{ y: nebulaY }}
        className="absolute inset-0"
      >
      

        {/* Nebula Cloud 2 */}
       

        {/* 🌍 Blue Planet */}
        <motion.div
          style={{ y: planetY }}
          className="
          animate-spin-slow
            absolute top-[8%] right-[8%]
            w-28 h-28
            md:w-64 md:h-64
            opacity-20
          "
        >
          <div
            className="
              relative w-full h-full rounded-full
              bg-gradient-to-br
              from-cyan-200
              via-blue-400
              to-indigo-900
              shadow-[0_0_60px_rgba(59,130,246,0.3)]
            "
          >

            <div
              className="
                absolute top-[15%] left-[20%]
                w-[25%] h-[25%]
                rounded-full
                bg-white/40
                blur-md
              "
            />

            


          </div>
        </motion.div>

        {/* 🪐 Saturn Planet */}
        <motion.div
          style={{ y: planetY }}
          className="
            absolute bottom-[15%] left-[5%]
            w-20 h-20 animate-spin-slow
            md:w-48 md:h-48
            opacity-15
          "
        >
          <div
            className="
              relative w-full h-full rounded-full
              bg-gradient-to-br
              from-orange-200
              via-orange-400
              to-orange-700
            "
          >
            <div
              className="
                absolute top-1/2 left-1/2
                w-[150%] h-[20%]
                border border-orange-100/50
                rounded-full
                -translate-x-1/2 -translate-y-1/2
                rotate-[-20deg]
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ✨ Stars */}
      <motion.div
        style={{
          y: starsY,
          x: starsX,
        }}
        className="absolute inset-0"
      >
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          >
            {star.type === "circle" && (
              <span className="block w-full h-full rounded-full bg-white shadow-sm" />
            )}

            {star.type === "diamond" && (
              <span className="block w-full h-full bg-cyan-300 rotate-45 shadow-sm" />
            )}

            {star.type === "square" && (
              <span className="block w-full h-full bg-violet-300 rotate-12 shadow-sm" />
            )}

            {star.type === "glow" && (
              <span className="block w-full h-full rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StarBackground;