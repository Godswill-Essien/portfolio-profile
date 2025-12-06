import Link from 'next/link'
import React from 'react'

export default function CVSection() {
    return (
        <div className='w-full flex justify-center px-4 mt-5'>
            <div className='rounded-3xl bg-slate-300 flex flex-col justify-center items-center shadow-emerald-50 shadow-md w-[327px] md:w-[450px] lg:w-[500px] p-5'>

                {/* Header */}
                <div data-aos="fade-down" className='text-black flex flex-col items-center justify-center gap-1 text-[12px] text-center mt-5 md:text-[18px] lg:text-[20px]'>
                    <h1 className='text-[16px] md:text-[20px] font-semibold'>God'swill Sampson Essien</h1>
                    <p>#5 Gotheg Avenue, Artillery, Woji Junction,</p>
                    <p>Off Okporo Road, Rumuogba</p>

                    <div className='flex flex-col gap-3 mt-2'>
                        <p className='border-b border-black px-4'>Phone: <Link className='text-blue-900' href="tel:+2348143399082">08143399082</Link></p>
                        <p className='border-b border-black px-4'>Email: <Link className='text-blue-900' href="mailto:godswillessien880@gmail.com">godswillessien880@gmail.com</Link></p>
                    </div>
                </div>

                {/* Body */}
                <div className='py-5 px-5 mt-2 text-black text-[10px] md:text-[14px] lg:text-[15px] w-full'>

                    <div data-aos="fade-up" className='flex flex-col gap-2'>
                        <h1 className='text-[14px] font-semibold'>Profile</h1>
                        <p>
                            Aspiring web developer with a passion for designing functional and visually appealing websites. <br />
                            Currently developing skills in website development at LOCTECH, with a focus on front-end and
                            back-end technologies. <br /> Eager to gain hands-on experience and contribute to real-world projects.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-3'>
                        <h1 className='text-[14px] font-semibold'>Education</h1>
                        <p>
                            - Ongoing: Preparing for the Joint Admissions and Matriculation Board (JAMB) Exam (2025) <br />
                            - Intended Course: Architecture <br />
                            - Preferred Institution: Rivers State University (RSU)
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-3'>
                        <h1 className='text-[14px] font-semibold'>Technical Skills</h1>
                        <p>
                            - Website Development <br />
                            - Web Design <br />
                            - HTML, CSS, JavaScript (Basic) <br />
                            - Responsive Design Principles <br />
                            - Problem-Solving & Debugging
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-3'>
                        <h1 className='text-[14px] font-semibold'>Experience</h1>
                        <p>
                            - Learning web development at LOCTECH <br />
                            - Building personal projects in website design
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-3'>
                        <h1 className='text-[14px] font-semibold'>Certificate & Training</h1>
                        <p>- LOCTECH Website Development Training (In Progress)</p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-3'>
                        <h1 className='text-[14px] font-semibold'>Hobbies & Interests</h1>
                        <p>
                            - Designing Websites <br />
                            - Dancing <br />
                            - Crafting
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-4'>
                        <h1 className='text-[14px] font-semibold'>Reference</h1>
                        <p className='transition-all duration-500 mb-8 ease-out hover:text-green-900'>
                            Available upon request...
                        </p>
                    </div>

                </div>

              
                   {/* Download Button */}
                <div className='w-full flex justify-center '>
                    <a
                        href="/CV"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className='bg-gradient-to-r from-indigo-800 to-blue-800 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300'
                    >
                        Download CV
                    </a>
                </div>
            </div>

             
        </div>
    )
}
