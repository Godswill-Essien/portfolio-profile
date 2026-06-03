"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiReact, SiMongodb, SiGooglecloud, SiGithub } from "react-icons/si";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";



export default function TextImageComponent() {
  const [content, setContent] = useState({ text: "", imageUrl: "" });
  const [loading, setLoading] = useState(true);

  // Add official website links for each skill
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML & CSS", icon: <><SiHtml5 className="text-orange-500 w-8 h-8" /><SiCss3 className="text-blue-500 w-8 h-8" /></>, url: "https://developer.mozilla.org/en-US/docs/Web" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />, url: "https://tailwindcss.com/" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-8 h-8" />, url: "https://nodejs.org/" },
    { name: "React.js", icon: <SiReact className="text-sky-500 w-8 h-8" />, url: "https://reactjs.org/" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-8 h-8" />, url: "https://www.mongodb.com/" },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500 w-8 h-8" />, url: "https://cloud.google.com/" },
    { name: "Git & GitHub", icon: <SiGithub className="text-gray-200 w-8 h-8" />, url: "https://github.com/" },
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/api/content")
      .then(res => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow mb-5" />
        {/* <div className="loader"></div> */}
      </div>
    );
  }return (
  <section className="relative  overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Smaller Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-blue-500/10 blur-[100px] -z-10" />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via--400 to-indigo-700 bg-clip-text text-transparent">
          My Skill Sets
        </h2>

        <p className="mt-4 max-w-xl text-sm sm:text-base dark:text-black text-gray-400">
          Technologies and tools I use to build modern, scalable and responsive
          web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div
        data-aos="fade-up"
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          max-w-5xl
          mx-auto
        "
      >
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-gray-900/40
              backdrop-blur-xl
              p-5
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-blue-500/30
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-1 text-4xl md:text-5xl">
                {skill.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white text-center">
                {skill.name}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* About Text */}
      {content.text && (
        <div
          data-aos="fade-up"
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {content.text}
          </p>
        </div>
      )}
    </div>
  </section>
);
}
