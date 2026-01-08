"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { IoIosLink } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import axios from "axios";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {
   const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(null);
  


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
           {/* <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow mb-5" /> */}
           <div className="loader"></div>
         </div>
       );
     }
  
  return (
    <div id="work" className="font-serif px-6 sm:px-6 md:px-5   py-6  dark:text-black dark:bg-white flex-col gap-14">

      {/* TITLE */}
      <p
        
        data-aos="fade-up"  className="bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent
        text-[29px] md:text-[40px] md:px- font-bold text-start"
      >
        My Projects
      </p>

      {/* ================= PROJECT 1 ================= */}
      <div  data-aos="fade-down" className="flex flex-col gap-6 md:flex-row md:items-center">

        <div className="relative w-full max-w-[520px] mx-auto rounded-md overflow-hidden 
           aspect-video">

          <div  className=" ">
            <Image
              src="/shoelayers.png"
              alt="Shoelayers project"
              fill
              className="object-contain hover:scale-110 transition opacity-55 hover:opacity-85   duration-700 px-1"
              sizes="(max-width: 68px) 100vw, 520px"
              priority
            />
            
          </div>

        </div>

        <div  data-aos="fade-up" className="flex project flex-col gap-3 md:w-1/2">
          <h2 className="text-[22px] md:text-[30px] font-bold bg-gradient-to-r from-orange-800 to-blue-700 bg-clip-text text-transparent">
            Shoelayers
          </h2>

          <p className="text-[13px] md:text-[18px] leading-relaxed">
            Shoelayers is a stylish and user-friendly website focused on showcasing shoes and clothing. Built with HTML and CSS, it features a clean and attractive layout that highlights trendy footwear and outfits.
          </p>

          <p className="text-gray-700 text-[13px] md:text-[17px]">HTML & CSS</p>

          <div className="flex gap-5 text-[15px] md:text-[20px]">
            <Link href="https://godswill-essien.github.io/shoelayer-clone/shoelayers.html" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:-translate-y-1 transition">
              <IoIosLink className="text-blue-700 text-[23px]" />
              <span className="bg-gradient-to-r from-orange-800 to-green-700 bg-clip-text animate-pulse text-transparent">
                Live Link
              </span>
            </Link>

            <Link href="https://github.com/Godswill-Essien/shoelayer-clone" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:-translate-y-1 transition">
              <FaGithub className="text-blue-700 text-[23px]" />
              <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text animate-pulse text-transparent">
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= PROJECT 2 ================= */}
      <div className="flex flex-col gap-6 md:flex-row-reverse md:items-center">

        <div  data-aos="fade-down" className="relative w-full max-w-[520px] mx-auto rounded-md overflow-hidden
           aspect-video">
          <Image
            src="/coach.png"
            alt="CoachClone project"
            fill
            className="object-contain hover:scale-110 transition-all ease-in-out duration-700 opacity-55 hover:opacity-85  px-1"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>

        <div  data-aos="fade-up" className="flex flex-col gap-3 md:w-1/2">
          <h2 className="text-[22px] md:text-[30px] font-bold bg-gradient-to-r from-purple-800 to-orange-700 bg-clip-text text-transparent">
            CoachClone
          </h2>

          <p className="text-[13px] md:text-[18px] leading-relaxed">
            CoachClone is a fitness membership platform built with Next.js, Tailwind CSS, and JavaScript. It offers smooth navigation, class scheduling, programs, and a responsive UI for fitness lovers.
          </p>

          <p className="text-gray-700 text-[13px] md:text-[17px]">
            TailwindCSS • Next.js • JS
          </p>

          <Link href="#" className="flex items-center gap-2 text-[15px] md:text-[20px]">
            <IoIosLink className="text-blue-700 text-[23px]" />
            <span className="bg-gradient-to-r from-red-700 to-yellow-500 bg-clip-text text-transparent">
              Offline
            </span>
          </Link>
        </div>
      </div>

        <motion.a href="/mproject"initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          whileHover={{ scale: 1 }}
          className=" animate-pulse text-center flex mb-4 dark:border-black/10  dark:border-none mt-4 justify-center gap-2 items-center bg-black dark:bg-white   px-6 py-4 shadow-lg shadow-black/40" 
        >
          view more projects
          <FiExternalLink />
        </motion.a>
    </div>
  )
}
