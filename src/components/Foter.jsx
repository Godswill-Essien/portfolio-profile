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
        <div className='background font-serif text px-10 mt-14 h-[265px]  md:text-[px] shadow-xl flex flex-col gap-5'>


            <div className=' flex flex-col justify-center items-center gap-3 '>








                <p className='opacity-100 md:text-[27px]  text-center bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent text-[20px] font-bold'>Get In Contact With  Me</p>
                <p className='text-[12px]  md:text-[16px] text-center'>Have some work you need done? <br />  Hit that message button or contact  me through any of  the social links  below,<br />
                    I would love to hear from you. <br /> Pls call only when it's urgent, thank you SIR/MA...</p>
            </div>


            <div className='flex flex-col items-center justify-center gap-5 rounded-lg'>

                <div className='flex gap-5 '>
                    <div className=' shadow-2xl  shadow-blue-900 transition-all rounded-md duration-500 ease-in-out hover:translate-y-[-4px] py-1 px-4 w-max  rounded- bg-gradient-to-r from-blue-800 to-indigo-900'>
                        <Link href="mailto:godswillessien880@gmail.com" className='text-[20px]' >Reach Me </Link>
                    </div>

                    <div className='   mt-  rounded-full shadow-2xl  shadow-blue-900 transition-all duration-500  ease-in-out hover:translate-y-[-4px]     bg-gradient-to-r from-blue-800 to-indigo-900'>
                        <Link href="#home" className='text-[20px] flex justify-center items-center mt-3' ><FaLongArrowAltUp /> </Link>
                    </div>
                </div>




                <div id="contact" className='flex gap-10 justify-center items-center'>
                    <Link className='text-bold text-[20px] text-blue-700 duration-500 ease-in-out hover:translate-y-[-4px] ' href="Https://wa.me/+2348143399082"> <IoLogoWhatsapp /> </Link>
                    <Link className='text-bold text-[20px] text-blue-700 duration-500 ease-in-out hover:translate-y-[4px] ' href="https://t.me/+2348143399082"> <FaTelegramPlane /> </Link>
                    <Link className='text-bold text-[20px] text-blue-700 duration-500 ease-in-out hover:translate-y-[-4px] ' href="https://www.linkedin.com/in/god-swill-essien-727006284"> <FaLinkedin /> </Link>
                    <Link className='text-bold text-[20px] text-blue-700 duration-500 ease-in-out hover:translate-y-[4px] ' href="tel:+2348143399082"> <FaPhone /> </Link>
                </div>
            </div>

        </div>
    )
}
