"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Color from "@/components/Color";
import { BsGlobe } from "react-icons/bs";
import axios from "axios";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // ✅ Loading effect
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow mb-5" />
        
      </div>
    );
  }

  return (
    <section
      id="about"
      className="
        px-6 md:px-20
        mt-10
        flex flex-col md:flex-row
        items-center md:items-stretch
        gap-10 md:gap-16
        font-serif
      "
    >
      {/* IMAGE */}
      <div
        data-aos="fade-down"
        className="
          relative
          w-full max-w-[360px]
          h-[360px] sm:h-[420px]
          md:h-auto md:w-[380px]
          flex-shrink-0
        "
      >
        <div
          className="
            absolute inset-0
            translate-x-3 translate-y-3
            bg-black/30
            rounded-2xl
            hidden md:block
          "
        />

        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl">
          <Image
            src="/willsaint.jpg"
            alt="Godswill Essien"
            fill
            priority
            className="object-cover transition-transform duration-700 opacity-80 backdrop-blur-md hover:opacity-100 hover:scale-125"
            sizes="(max-width: 640px) 100vw, 380px"
          />
        </div>
      </div>

      {/* TEXT */}
      <div
        className="
          flex flex-col justify-center
          gap-4 max-w-[720px]
          text-[13px] sm:text-[14px] md:text-[16px]
          leading-relaxed md:leading-loose
          text-center md:text-left
        "
      >
        <h2
          className="text-2xl sm:text-3xl text-start md:text-4xl font-bold
            bg-gradient-to-r from-indigo-700 to-blue-700
            bg-clip-text text-transparent"
        >
          About Me
        </h2>

        <div className="flex flex-col gap-4">
          <Color />

          <p className="px-5 py-4 text-start rounded-2xl bg-black/60 backdrop-blur-xl">
            Hello, I’m God’swill, a freelance web developer specializing in
            modern, responsive, and high-performing websites. I help individuals
            and businesses bring their ideas to life with clean, user-friendly
            interfaces using HTML, CSS, JavaScript, TypeScript, and modern
            frameworks.
            <br />
            <br />
            I focus on creating visually appealing, fast, and seamless websites,
            with clear communication, attention to detail, and timely delivery.
            From landing pages to full web solutions, I’m committed to delivering
            results that meet your goals.
            <br />
            <br />
            Outside of work, I enjoy reading manga, watching anime, and playing
            football activities that keep me inspired and creative.
          </p>
        </div>
      </div>
    </section>
  );
}
