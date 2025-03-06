"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

export default function Project() {
  return (
    <div className='font-serif px-10 mt-10 flex flex-col gap-6 '>


      {/* 1 */}

      < >

        <p className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent text-bold  md:text-center md:mb-5 text-[25px]  md:text-[35px]' id="work">Projects I Have Worked On</p>

        <div className='flex flex-col gap-5 md:flex-row'>
          <div data-aos="fade-top" className='flex justify-center items-center mt-3 bg-gradient-to-r from-blue-800 to-red-800 text-transparent h-[21vh]   md:h-[42vh]  md:w-[1000]  w-[250px]  opacity-70 rounded-md'>

            <div className='bg-black h-[20vh]  md:h-[41vh]  w-[240px] md:w-[540px]  mt-1  opacity-100'>

              <div className='project md:hidden  '></div>
              <div className='project-3 hidden md:block   '></div>
              <div className='project-5 hidden md:hidden sm:block '></div>

            </div>

          </div>


          <div data-aos="fade-up" className='flex flex-col gap-2  md:ml-[20px] sm:ml-[]'>
            <p className='font-bold  bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent md:text-[30px]'> shoelayers</p>
            <p className='text-[12px] md:text-[20px] sm:text-[10]'>Shoelayers is a stylish and user-friendly website focused on showcasing and selling shoes and clothing. Built with HTML and CSS, it features a clean design that highlights trendy footwear and fashionable outfits.  The site likely includes sections for different categories, product descriptions, and a visually appealing layout to attract customers.</p>
            <p className='text-gray-500'>HTML AND CSS</p>


            <div className='flex gap-4 md:text-[22px]'>
              <Link className='flex  items-center gap-2 transition-all duration-500 ease-in-out hover:translate-y-[-3]' href="https://godswill-essien.github.io/shoelayer-clone/shoelayers.html">

                <IoIosLink className='font-bold text-[20px]  text-blue-700' />
                <p className='bg-gradient-to-r from-indigo-700 to-emerald-700 bg-clip-text text-transparent'>Live link</p>
              </Link>

              <Link className='flex  items-center gap-2 transition-all duration-500 ease-in-out hover:translate-y-[-3]' href="https://github.com/Godswill-Essien/shoelayer-clone">

                <FaGithub className='font-bold text-[20px]  text-blue-700' />
                <p className='bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent'>Git hub</p>
              </Link>

            </div>



          </div>

        </div>

      </>

      {/* 2 */}
      < >


        <div className='flex flex-col gap-5 md:flex-row-reverse  md:mt-10'>
          <div data-aos="fade-top" className='flex justify-center items-center mt-3 bg-gradient-to-r from-pink-800 to-blue-800 text-transparent h-[21vh] w-[250px] md:h-[42vh]  md:w-[1000]  opacity-70 rounded-md'>

            <div className='bg-black h-[20vh] w-[240px] mt-1  md:h-[41vh] md:w-[500px] opacity-100'>

              <div className='project-2 md:hidden'></div>
              <div className='project-4 hidden md:block '></div>

            </div>

          </div>


          <div  data-aos="fade-down" className='flex flex-col gap-2 md:text-[22px] md:mr-[20px]  '>
            <p className='font-bold  bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent  md:text-[30px]'> Coach-clone</p>
            <p className='text-[12px] md:text-[20px]'>CoachClone is a fitness and gym membership website designed using Tailwind CSS, Next.js, and JavaScript. <br /> It provides users with information about fitness programs, gym memberships, and workout routines. <br /> The platform is built for a seamless and responsive user experience, ensuring easy navigation and accessibility. <br /> It may include features like membership registration, class scheduling, and fitness tips, making it a valuable tool for gym-goers and fitness enthusiasts.</p>
            <p className='text-gray-500'>Tailwindcss, Nextjs and JS </p>


            <div>
              <Link className='flex  items-center gap-2 transition-all duration-500 ease-in-out hover:translate-y-[-3]' href="#home">

                <IoIosLink className='font-bold text-[20px]  text-blue-700' />
                <p className='bg-gradient-to-r from-red-700 to-yellow-500 bg-clip-text text-transparent'>Off Line</p>
              </Link>





            </div>



          </div>

        </div>

      </>


      <div className='flex justify-center items-center       shadow-2xl mt-2 shadow-blue-900 transition-all duration-500 ease-in-out hover:translate-y-[-4px] py-1 px-2 w-max  rounded-md '>
        <h1 className=' font-extrabold   text-white  '>
          More :{' '}
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            <Typewriter
              words={['..........', '..........']}
              loop={500} // Number of loops (0 for infinite)
              cursor
              cursorStyle=""
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h1>
      </div>

    </div>
  )
}
