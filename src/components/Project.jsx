"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

export default function Project() {
  return (
    <div className='font-serif px-6 md:px-12 mt-10 flex flex-col gap-10'>


      {/* TITLE */}
      <p
        className='  bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent text-[24px] md:text-[40px] font-bold justify- flex text-center'
        id="work"
      >
         My Projects 
      </p>



      {/* 1 --- SHOELAYERS */}
      <div data-aos="fade-down" className=' flex flex-col gap-6 md:flex-row md:items-center'>
        
        {/* IMAGE CONTAINER */}
        <div  className='flex justify-center items-center bg-gradient-to-r from-blue-800 to-red-800 h-[21vh] w-[250px] md:h-[42vh] md:w-[520px] opacity-70 rounded-md mx-auto'>
          <div className='bg-black h-[20vh] w-[240px] md:h-[41vh] md:w-[500px] mt-1'>
            <div className='project md:hidden hover:scale-110 transition-all duration-700'></div>
            <div className='project-3 hidden md:block hover:scale-110 transition-all duration-700'></div>
          </div>
        </div>

        {/* TEXT */}
        <div  className='flex flex-col gap-3 md:w-[50%] ' >
          <p  data-aos="fade-up" className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent font-bold text-[22px] md:text-[30px]'>
            Shoelayers
          </p>

          <p  data-aos="zoom-in"className='text-[13px] md:text-[18px] leading-relaxed'>
            Shoelayers is a stylish and user-friendly website focused on 
            showcasing shoes and clothing. Built with HTML and CSS, it features a
            clean and attractive layout that highlights trendy footwear and outfits.
          </p>

          <p className='text-gray-700 text-[13px] md:text-[17px]'>HTML & CSS</p>

          <div className='flex gap-5 text-[15px] md:text-[20px]'>
            <Link className='flex items-center gap-2 hover:-translate-y-1 transition' href="https://godswill-essien.github.io/shoelayer-clone/shoelayers.html">
              <IoIosLink className='text-blue-700 text-[23px]' />
              <p className='bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent'>Live Link</p>
            </Link>

            <Link className='flex items-center gap-2 hover:-translate-y-1 transition' href="https://github.com/Godswill-Essien/shoelayer-clone">
              <FaGithub className='text-blue-700 text-[23px]' />
              <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>GitHub</p>
            </Link>
          </div>
        </div>
      </div>




      {/* 2 --- COACH CLONE */}
      <div  data-aos="fade-down" className='flex flex-col gap-6 md:flex-row-reverse md:items-center'>
       
        <div className='flex justify-center items-center bg-gradient-to-r from-pink-800 to-blue-800 h-[21vh] w-[250px] md:h-[42vh] md:w-[520px] opacity-70 rounded-md mx-auto'>
          <div className='bg-black h-[20vh] w-[240px] md:h-[41vh] md:w-[500px] mt-1'>
            <div className='project-2 md:hidden hover:scale-110 transition-all duration-700'></div>
            <div className='project-4 hidden md:block hover:scale-110 transition-all duration-700'></div>
          </div>
        </div>

        <div className='flex flex-col gap-3 md:w-[50%]'>
          <p data-aos="fade-right" className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent font-bold text-[22px] md:text-[30px]'>
            CoachClone
          </p>

          <p data-aos="zoom-out" className='text-[13px] md:text-[18px] leading-relaxed'>
            CoachClone is a fitness membership platform built with Next.js,
            Tailwind CSS, and JavaScript. It offers smooth navigation, class scheduling,
            programs, and a responsive UI for fitness lovers.
          </p>

          <p className='text-gray-700 text-[13px] md:text-[17px]'>TailwindCSS • Next.js • JS</p>

          <Link className='flex items-center gap-2 hover:-translate-y-1 transition text-[15px] md:text-[20px]' href="#">
            <IoIosLink className='text-blue-700 text-[23px]' />
            <p className='bg-gradient-to-r from-red-700 to-yellow-500 bg-clip-text text-transparent'>Offline</p>
          </Link>
        </div>
      </div>




      {/* 3 --- NETFLIXX */}
      <div data-aos="fade-up" className='flex flex-col gap-6 md:flex-row md:items-center'>
        
        <div className='flex justify-center items-center bg-gradient-to-r from-red-800 to-red-500 h-[21vh] w-[250px] md:h-[42vh] md:w-[520px] opacity-70 rounded-md mx-auto'>
          <div className='bg-black h-[20vh] w-[240px] md:h-[41vh] md:w-[500px] mt-1'>
            <div className='project-5 md:hidden hover:scale-110 transition-all duration-700'></div>
            <div className='project-6 hidden md:block hover:scale-110 transition-all duration-700'></div>
          </div>
        </div>

        <div className='flex flex-col gap-3 md:w-[50%]'>
          <p  data-aos="fade-down"className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent font-bold text-[22px] md:text-[30px]'>
            Netflixx
          </p>

          <p  data-aos="zoom-in"className='text-[13px] md:text-[18px] leading-relaxed'>
            A fully responsive Netflix clone built with React, Tailwind CSS,
            JavaScript, and TypeScript. It includes categories, authentication,
            and smooth cinematic interaction.
          </p>

          <p className='text-gray-700 text-[13px] md:text-[17px]'>TailwindCSS • Next.js • JS • TS</p>

          <div className='flex gap-5 text-[15px] md:text-[20px]'>
            <Link className='flex items-center gap-2 hover:-translate-y-1 transition' href="https://netflix-ashen-beta.vercel.app">
              <IoIosLink className='text-blue-700 text-[23px]' />
              <p className='bg-gradient-to-r from-red-700 to-green-700 bg-clip-text text-transparent'>Live Link</p>
            </Link>

            <Link className='flex items-center gap-2 hover:-translate-y-1 transition' href="https://github.com/Godswill-Essien/netflix">
              <FaGithub className='text-blue-700 text-[23px]' />
              <p className='bg-gradient-to-r from-indigo-700 to-red-700 bg-clip-text text-transparent'>GitHub</p>
            </Link>
          </div>
        </div>
      </div>




      {/* MORE */}
      <div className='flex  text-start justify-start items-start shadow-2xl shadow-blue-900 hover:-translate-y-1 transition rounded-md py-2 px-4 w-max mx-auto'>
        <h1 className='font-extrabold  flex justify-start items-start text-start text-white'>
          More:{' '}
          <span className='text-white font-bold text-start'>
            <Typewriter
              words={['..........', '..........']}
              loop={500}
              cursor
              cursorStyle=""
              typeSpeed={300}
              deleteSpeed={200}
              delaySpeed={3000}
            />
          </span>
        </h1>
      </div>

    </div>
  )
}
