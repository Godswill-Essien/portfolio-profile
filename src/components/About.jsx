import React from 'react'
import Color from '@/components/Color'
import { Typewriter } from "react-simple-typewriter";


export default function About() {
    return (
        <div>

            {/* ABOUT SECTION */}
            <div
                id="about"
                className="md:mt-14 px-6 md:px-20  md:justify-evenly md:items-center translate-y-[-15px] font-serif flex flex-col md:flex-row  gap-6 md:gap-14"
            >

                {/* IMAGE SIDE — UNCHANGED */}
                <div
                    data-aos="fade-down"
                    className="flex justify-center md:mt-20 items-center 
                    bg-gradient-to-r from-slate-800 to-white/35
                    h-[70vh] w-[250px] md:w-[310px] md:h-[85vh]
                    opacity-70 rounded-md"
                >
                    <div className="bg-black md:h-[83vh] md:w-[300px] w-[240px] mt-1">
                        <div className="  md:about-2 h-[67vh]
                         transition-all duration-1000 ease-in-out 
                         hover:scale-110 hover:opacity-60">
                            <div className='about md:hidden'>

                            </div>

                            <div className='hidden md:block about-2'>

                            </div>

                        </div>
                        {/* <Picture /> */}
                    </div>
                </div>

                {/* TEXT SIDE — UNCHANGED */}
                <div
                    className="flex flex-col gap-3 w-full max-w-[700px]
                    text-[13px] sm:text-[14px] md:text-[17px] lg:text-[18px]
                    text-center md:text-left leading-relaxed md:leading-loose"
                >
                    <p
                        data-aos="fade-up"
                        className="bg-gradient-to-r from-indigo-700 to-blue-700
                 bg-clip-text text-transparent
                        text-[24px]  text-start sm:text-[26px]   md:justify-center md:text-[30px]
                        font-bold"
                    >
                        About Me
                    </p>

                    <div data-aos="fade-right" className="flex flex-col gap-3  rounded-2xl   "  >


                        <Color />

                        <p className="text-start  py-2 px-4 rounded-2xl bg-gray-900/50   backdrop-blur-xl  bg-blend-overlay  ">
                            
                            Hello, I’m God’swill, a freelance web developer specializing in modern, responsive, and high-performing websites. I help individuals
                             and businesses bring their ideas to life with clean, user-friendly interfaces using HTML,
                             CSS, JavaScript, TypeScript, and modern frameworks.

                           I focus on creating visually appealing, fast, and seamless websites, with clear communication, attention to detail, and timely delivery.
                            From landing pages to full web solutions, I’m committed to delivering results that meet your goals. <br /> <br />

                           Outside of work, I enjoy reading manga, watching anime, and playing football activities that keep me inspired and creative. 
                        </p> 
                       
                    </div>
                </div>

            </div>



        </div>
    )
}
