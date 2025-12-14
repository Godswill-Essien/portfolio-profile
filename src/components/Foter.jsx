"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";



export default function Foter() {
    return (
        <footer className="footer-link:hover rounded-2xl backdrop-blur-3xl text-white font-serif py-8 px-4 sm:px-10 mt-14 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-700 opacity-20 rounded-full "></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-700  opacity-15 rounded-full "></div>

            <div className="flex flex-col justify-center items-center gap-3">
                <p data-aos="fade-up" className="opacity-100 text-center text-[18px] sm:text-[27px] font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent ">
                    Get In Contact With Me
                </p>
                <p  data-aos="zoom-in"className="text-center text-[12px] sm:text-[16px] text-white/80 max-w-xs sm:max-w-xl">
                    Have some work you need done? <br />
                    Hit that message button or contact me through any of the social links below, <br />
                    I would love to hear from you. Please call only when it's urgent, thank you.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center gap- mt-6 rounded-lg w-full">
                <div className="flex gap-4 sm:gap-5 flex-wrap justify-center w-full">
                    <div data-aos="fade-up" className="shadow-2xl shadow-blue-900 transition-all rounded-3xl  border duration-500 ease-in-out hover:-translate-y-1 py-2 px-6 bg-black">
                        <Link href="mailto:godswillessien880@gmail.com" className="text-[16px] sm:text-[20px] rounded-3xl font-semibold">
                            Reach Me
                        </Link>
                    </div>

                    {/* <div data-aos="fade up" className="shadow-2xl  shadow-blue-900 transition-all duration-500 ease-in-out hover:-translate-y-1 py-2 px-4 rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex items-center justify-center">
                        <Link href="#home" className="text-[18px]  sm:text-[20px]">
                            <FaLongArrowAltUp />
                        </Link>
                    </div> */}
                </div>

                <div id="contact" className="flex gap-6 sm:gap-10 justify-center items-center mt-4 flex-wrap">
                    <Link href="https://wa.me/+2348143399082"  className="text-indigo-700 hover:-translate-y-1 transition duration-300 text-[18px] sm:text-[20px]">
                        <IoLogoWhatsapp />
                    </Link>
                    <Link href="https://t.me/+2348143399082"  className="text-indigo-700 hover:translate-y-1 transition duration-300 text-[18px] sm:text-[20px]">
                        <FaTelegramPlane />
                    </Link>
                    <Link href="https://www.linkedin.com/in/god-swill-essien-727006284" className="text-indigo-700 hover:-translate-y-1 transition duration-300 text-[18px] sm:text-[20px]">
                        <FaLinkedin />
                    </Link>
                    <Link href="tel:+2348143399082" className="text-indigo-700 hover:translate-y-1 transition duration-300 text-[18px] sm:text-[20px]">
                        <FaPhone />
                    </Link>
                </div>

                <p data-aos="fade-out" className="mt-4 text-xs sm:text-sm text-white/60">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>

            </div>
        </footer>
    )
}
