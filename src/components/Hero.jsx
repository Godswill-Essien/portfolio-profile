"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { BsGlobe } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

export default function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="
        relative w-full
        min-h-screen
        flex items-center justify-center
        px-4 sm:px-6 md:px-10
        pt-10 sm:pt-14 md:pt-24
        pb-10 sm:pb-14
        bg-animated-gradient
        overflow-hidden
      "
        >
            {/* ===== FLOATING BACKGROUND OBJECT ===== */}
            <div
                className="absolute rounded-full opacity-20 w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
                style={{
                    transform: `translate(-50%, ${offsetY * 0.3}px)`,
                    top: "20%",
                    left: "50%",
                    transition: "transform 0.1s ease-out",
                    zIndex: 0,
                }}
            >
                <BsGlobe className="w-[50%] h-28 md:w-40 md:h-40 animate-spin-slow" />
            </div>

            <div
                className="
          flex flex-col items-center text-center
          gap-5 sm:gap-6 md:gap-10
          max-w-4xl w-full
          relative z-10
        "
            >
                {/* ===== PROFILE CIRCLE ===== */}
                <div
                    className="
                       bg-gradient-to-r from-green-700 via-red-700 to-blue-700
                       animate-gradient rounded-full
                       w-[255px] h-[255px]
                      xs:w-[180px] xs:h-[180px]
                      sm:w-[220px] sm:h-[220px]
                       md:w-[280px] md:h-[280px]
                       p-[3px]
                     flex items-center justify-center
                       transition-all ease-in-out duration-500 hover:-translate-y-1 "   >
                     <div className="relative w-full h-full hover:opacity-75 rounded-full overflow-hidden bg-black">
                        <Image
                            src="/saint.jpg"
                            alt="Godswill Essien"
                            fill
                            priority
                            sizes="
                          (max-width: 320px) 160px,
                         (max-width: 480px) 180px,
                         (max-width: 768px) 220px,
                         280px"   className="object-cover"  />   </div>  </div>

                {/* ===== GREETING ===== */}
                <h1
                    className="font-serif font-extrabold text-white text-[12px] xs:text-[13px]sm:text-base md:text-lg" >
                    Hi 👋 there,&nbsp;
                    <span className="font-bold">
                        <Typewriter
                            words={["Digital wanderer", "I am Godswill Essien"]}
                            loop={500}
                            cursor
                            cursorStyle="|"
                            typeSpeed={120}
                            deleteSpeed={70}
                            delaySpeed={1800}
                        />
                    </span>
                </h1>

                {/* ===== TITLE ===== */}
                <h2
                    className="
                   font-serif font-bold uppercase
                 bg-gradient-to-r from-indigo-700 to-blue-700
                 bg-clip-text text-transparent
                 text-2xl xs:text-xl
                  sm:text-2xl md:text-4xl lg:text-5xl
          "
                >
                    Website Developer
                </h2>

                {/* ===== DESCRIPTION ===== */}
                <p
                    className="
            font-serif text-gray-300
            text-[12px] xs:text-sm
            sm:text-base md:text-lg
            leading-relaxed max-w-2xl
          "
                >
                    A passionate Front-End Developer with experience in building responsive website

                    applications using HTML, CSS, JAVASCRIPT, and REACT.JS. <br /> skilled in

                    creating user friendly UI/UX, and optimizing web performance.
                </p>

                {/* ===== CTA BUTTON ===== */}
                <div className="pt-2 md:pt-4">
                    <a
                        href="/GOD'SWILL ESSIEN CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="
              inline-block
              bg-black border 
              rounded-full px-5 py-2
              text-[15px] sm:text-sm md:text-base
              shadow-lg shadow-slate-500/40
              animate-pulse
              transition hover:scale-105
            "
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
