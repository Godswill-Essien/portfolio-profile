import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (



        <div>

            {/* mobile */}

            <div className='mt-8 px-10 font-serif flex flex-col gap-5 md:mt-14    md:flex-row   md:px-20  ' id='about' >



                <div data-aos="fade-down" className='flex justify-center items-center bg-gradient-to-r from-slate-700 to-slate-400  h-[70vh] w-[250px] md:w-[310] opacity-70 rounded-md'>

                    <div  className='bg-black h-[69vh]   md:w-[300px] w-[240px] mt-1  '>

                        <div  className='about  bg-blue about-2 transition-all duration-1000 ease-in-out  hover:scale-110  hover:opacity-60 '></div>

                    </div>
                </div>



                <div className=' flex flex-col gap-2 text-[13px] md:text-[22px] md:translate-x-14'>

                    <p data-aos="fade-up" className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent text-[25px] md:text-[30px] font-bold'>About Me</p>
                    <div data-aos="fade-right">
                    <p>Hey there digital wanderer !👋 I'm God'swill, I am a website developer, I build beautiful websites..untill  someone asks me to fix a bug, then i become a detective😁🔍 ..</p>
                    <p>i write HTML for structures,CSS for style, and JAVASCRIPT to make things move, becuase static websites are boring ..</p>
                    <p>i don't just code; i craft experiences. Unless it's internet explorer....My job is to make websites look amazing....and my nigtmare is fixing alignment issues in CSS. </p>
                    <p> If I'm not performing tasks or making life easier by building websites, I relish a good manga read, watching animie 🥰, and playing Football'...</p>

                    </div>
                   
                </div>

            </div>


            {/* destop */}




        </div>

    )
}
