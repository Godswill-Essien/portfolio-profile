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
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt- flex    flex-col md:flex-row-reverse items-stretch   md:py-6 md:bg-w-full  gap-8">

      {/* Image Section */}
      <div data-aos="fade-down" id="cert" className="flex-shrink-0  w-full md:w-1/2 h-full md:mt-20  px-3 py-2 rounded-xl  bg-gradient-to-r from-gray-900/50 via-indigo-800/50 to-green-700/50 animate-gradient">

        <img
          src={content.imageUrl || "/cert.jpg"}
          alt="Template"
          className="rounded-xl shadow-xl w-full h-full object-cover hover:cursor-pointer opacity-5 hover:opacity-100  transition-all duration-1000 ease-in-out 
                         hover:scale-110 "
        />

        <div className="text-center mt-2">
          <p className="text-mono font-bold">Website Development Certificate</p>

          <Link href="https://www.loctechng.com/" target="_blank" rel="noopener noreferrer"
            className="flex justify-center border rounded-2xl animate-pulse border-black/100  items-center gap-2 hover:scale-105 transition-all ease-in-out duration-700  text-[15px] md:text-[20px]">
            <IoIosLink className="text-green-700 text-center text-[23px] " />
            <p>Issued by LOCTECH · 2025</p>




          </Link>
          {/* <p className="animate-pulse">🍾🎗️</p> */}
        </div>
      </div>

      {/* Text & Skills Section */}
      <div data-aos="fade-up" className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-2xl md:text-3xl font-bold  bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700 text-transparent">
          My Skill Sets
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 sm:p-5 bg-gray-900/50 dark:bg-gray-700 dark:hover:border-white/5 hover:border-white/20  hover:border rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="flex gap-1 justify-center text-[1.5rem] animate-pulse sm:text-[2rem]">
                {skill.icon}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white animate-pulse font-semibold">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
