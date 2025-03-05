"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CiBoxList } from "react-icons/ci";

export default function Navbar() {
    const [dropDown, setDropDown] = useState(false)


    const handleDropDown = () => {
        setDropDown(true)
    }
    return (



        <div className='font-serif ' id="home">


            <div className='hidden  md:block lg:block xl:'>


                <nav className='  flex items-center justify-center mt-10 gap-14   w-full  ' >

                    <div className='text-white  font-bold text-[18px]  border-r-[2.5px] px-7  border-blue-700  flex gap-10'>
                        <Link href="#about" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'> About</Link>
                        <Link href="#work" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'> Work</Link>
                        <Link href="#contact" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'> Contact</Link>
                    </div>


                    <div className=' shadow-xl  shadow-blue-900 transition-all duration-500 ease-in-out hover:translate-y-[-4px] py-1 px-5  rounded-md bg-gradient-to-r from-blue-800 to-indigo-900'>
                        <Link href="/CV" className='text-sm' >View CV </Link>
                    </div>

                </nav>

            </div>




            {
                (
                    <div data-aos="fade-down"  className='flex justify-center  items-center md:hidden cursor-pointer'>




                        <div className='flex gap-3 items-center flex-col relative'>
                            <div >
                                <div onMouseLeave={() => setDropDown(false)} onMouseEnter={handleDropDown} className=" text-blue-800 text-[25px] mt-3  " ><CiBoxList /></div>
                                {/* drop down */}
                                {
                                    dropDown && (
                                        <div data-aos="fade-down"  className="  text-center px-5 py-4 h-[70vh] w-[300px] absolute shadow-gray-800 shadow-lg bg-black right-[-137.5px] rounded-2xl z-in  mt-2">


                                            <nav className='  flex items-center justify-center mt-10 gap-10   w-full flex-col ' >

                                                <div className='text-white  font-bold text-[18px]   px-7  flex-col  flex gap-10'>
                                                    <Link href="#home" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'> Home</Link>
                                                    <Link href="#about" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'> About</Link>
                                                    <Link href="#work" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'>My projects </Link>
                                                    <Link href="#contact" className=' transition-all duration-500 ease-in-out hover:border-b-[0.1px] hover:border-blue-700'>Reach Me </Link>
                                                </div>


                                                <div className=' shadow-xl  shadow-blue-900 transition-all duration-500 ease-in-out hover:translate-y-[-4px] py-2 px-10 w-max  rounded-md bg-gradient-to-r from-blue-800 to-indigo-900'>
                                                    <Link href="/CV" className='text-sm' >View CV </Link>
                                                </div>

                                            </nav>

                                        </div>
                                    )
                                }

                            </div>








                        </div>

                    </div>
                )
            }

        </div>
    )
}
