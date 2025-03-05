import Link from 'next/link'
import React from 'react'

export default function
    () {
    return (
        <div  className='   w-[327px]  mt-5  px-10  '>
            <div className='rounded-3xl bg-slate-300 flex flex-col justify-center items-center shadow-emerald-50 shadow-md height-1 md:w-[400px]   md:translate-x-[400px] lg:translate-x-[400px] '>

                <div data-aos="fade-down" className='text-black flex flex-col items-center justify-center gap-1 text-[12px] text-center   mt-5  lg:text-[20px] md:text-[20px]'>
                    <h1 className='text-serif text-[16px] font-semibold'>God'swill Sampson Essien </h1>
                    <p>#5 Gotheg Avenue, Artillery, Woji Junction,</p>
                    <p>Off Okporo Road, Rumuogba</p>

                    <div className='text- flex gap-5 flex-col'>
                        <p className='border-b border-black px-4'>Phone: <Link className='text-blue-900' href="tel:+2348143399082">08143399082</Link> </p>
                        <p className='border-b border-black '>Email: <Link className='text-blue-900 ' href="mailto:godswillessien880@gmail.com">godswillessien880@gmail.com</Link> </p>
                    </div>


                </div>





                <div className='py-5  px-5 mt-5 text-black text-[10px] lg:text-[15px] md:text-[15px] '>


                    <div data-aos="fade-up" className='flex flex-col gap-2'>
                        <h1 className=' text-[14px] font-semibold'>Profile</h1>
                        <p>Aspiring web developer with a passion for designing functional and  visually appealing websites. <br />
                            Currently developing skills in website development at LOCTECH, with a focus on front-end and 
                            back-end technologies. <br /> Eager to gain hands-on experience and contribute to real-world projects.</p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-2 mt-2'>
                        <h1 className=' text-[14px] font-semibold'>Education</h1>
                        <p>
                            - Ongoing: Preparing for the Joint Admissions and Matriculation Board (JAMB) Exam (2025) <br />
                            - Intended Course: Architecture <br />
                            - Preferred Institution: Rivers State University (RSU)
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-1 mt-2'>
                        <h1 className=' text-[14px] font-semibold'>Technical Skills</h1>
                        <p>
                            - Website Development <br />
                            - Web Design <br />
                            - HTML, CSS, JavaScript (Basic) <br />
                            - Responsive Design Principles <br />
                            - Problem-Solving & Debugging
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-1 mt-2'>
                        <h1 className=' text-[14px] font-semibold'>Experience</h1>
                        <p>
                            - Learning web development at LOCTECH <br />
                            - Building personal projects in website design
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-1 mt-2'>
                        <h1 className=' text-[14px] font-semibold'>Certificate & Training</h1>
                        <p>
                            - LOCTECH Website Development Training (In Progress)
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-1 mt-2'>
                        <h1 className=' text-[14px] font-semibold'>Hobbies & interests</h1>
                        <p>
                            - Designing Websites <br />
                            - Dancing <br />
                            - Crafting
                        </p>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col gap-1 '>
                        <h1 className=' text-[14px] font-semibold'>Reference</h1>
                        <p  className='transition-all duration-500 mb-16 ease-out hover:text-green-900'>
                        Available upon request.....
                        </p>
                    </div>


                    <div data-aos="fade-up">
                        .
                    </div>

                </div>


            </div>
                        
        </div>
    )
}
