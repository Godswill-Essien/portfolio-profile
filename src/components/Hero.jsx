"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (




        <div>


            {/* mobile */}


            <div className='md:hidden lg:hidden sm:hidden '>
                <div className=' flex flex-col items-center justify-center mt-9 gap-5'>


                    <div className='bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full w-[250px] h-[250px]             flex items-center itmes-center justify-center  transition-all duration-500 ease-in-out hover:translate-y-[-3px]'>



                        <div className='hover:opacity-80'>
                            <div className='  look' />

                        </div>







                    </div>




                    <div className='flex justify-center items-center   font-serif text-[13px]'>
                        <h1 className=' font-extrabold text-white'>
                            Hi👋 there,{' '}
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Digital wanderer', 'I am Godswill Essien']}
                                    loop={500} // Number of loops (0 for infinite)
                                    cursor
                                    cursorStyle=".."
                                    typeSpeed={200}
                                    deleteSpeed={100}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>
                    </div>

                    <div className='font-serif  flex flex-col items-center px-7  gap-5'>
                        <p className=' text-[24px] font-bold  bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent uppercase'>
                            website developer
                        </p>




                        <div className='flex flex-col text-center text-[12px] '>
                            <p>A passionate Front-End Developer with experience in building responsive website</p>

                            <p> applications using HTML, CSS, JAVASCRIPT, and REACT.JS. skilled in</p>
                            <p>creating user friendly UI/UX, and optimizing web performance.</p>
                        </div>
                    </div>



                   

                    <div className='w-full flex justify-center mb-6'>
                        <a
                            href="/CV"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className='shadow-2xl  shadow-blue-900 animate-pulse transition-all duration-500 ease-in-out hover:translate-y-[-4px] py-1 px-5  rounded-md bg-gradient-to-r from-blue-800 to-indigo-900'
                        >
                            Download CV
                        </a>
                    </div>


                </div>
            </div>




            {/* desktop */}
            <div className='hidden md:block lg:block '>

                <div className='  flex flex-col items-center justify-center mt-16 gap-5'>


                    <div data-aos="fade-down" className='bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full w-[300px] h-[300px]
                       flex items-center itmes-center justify-center  transition-all duration-500 ease-in-out hover:translate-y-[-3px]'>
                        <div className='bg-black rounded-full w-[295px] h-[295px] 
                        flex items-center text-center justify-center hover:bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent '>


                            <div className='hover:opacity-80'>
                                <div className='  profile' />

                            </div>





                        </div>

                    </div>


                    <div className='flex justify-center items-center   font-serif text-[14px]'>
                        <h1 className=' font-extrabold text-white'>
                            Hi👋 there,{' '}
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Digital wanderer', 'I am Godswill Essien']}
                                    loop={500} // Number of loops (0 for infinite)
                                    cursor
                                    cursorStyle=".."
                                    typeSpeed={200}
                                    deleteSpeed={100}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>
                    </div>



                    <div className='font-serif  flex flex-col items-center '>
                        <p className=' text-[50px] bg-gradient-to-r  from-indigo-800 to-blue-800 bg-clip-text text-transparent uppercase'>
                            website developer
                        </p>




                        <div className='flex flex-col  text-center text-[25px]'>
                            <p>A passionate Front-End Developer with experience in building responsive website</p>

                            <p> applications using HTML, CSS, JAVASCRIPT, and REACT.JS. skilled in</p>
                            <p>creating user friendly UI/UX, and optimizing web performance.</p>
                        </div>
                    </div>



                    <div className=' shadow-2xl animate-pulse  shadow-blue-900 transition-all duration-500 ease-in-out hover:translate-y-[-4px] py-1 px-5  rounded-md bg-gradient-to-r from-blue-800 to-indigo-900'>
                        <Link href="mailto:godswillessien880@gmail.com" className='text-[20px]' >Reach Me </Link>
                    </div>


                </div>


            </div>










        </div>
    )
}
