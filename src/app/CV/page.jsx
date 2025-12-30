"use client"

import Link from 'next/link'
import React from 'react'

export default function CVSection() {
    return (
        <div className="w-full flex justify-center px-4 mt-10">
            <div className="rounded-3xl bg-gradient-to-br from-black to-black/80 dark:from-gray-500 dark:to-gray-00 shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-2xl p-6 md:p-8 flex flex-col items-center">

                {/* Header */}
                <div data-aos="fade-down" className="text-center text-gray-700 dark:text-white">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">God'swill Sampson Essien</h1>
                    <p className="text-sm md:text-base">#5 Gotheg Avenue, Artillery, Woji Junction,</p>
                    <p className="text-sm md:text-base">Off Okporo Road, Rumuogba</p>

                    <div className="flex flex-col gap-2 mt-3 text-sm md:text-base">
                        <p className="border-b border-gray-400 dark:border-gray-600 px-2 md:px-4">
                            Phone: <Link href="tel:+2348143399082" className="text-green-700 dark:text-blue-400">08143399082</Link>
                        </p>
                        <p className="border-b border-gray-400 dark:border-gray-600 px-2 md:px-4">
                            Email: <Link href="mailto:godswillessien880@gmail.com" className="text-blue-900 dark:text-blue-400">godswillessien880@gmail.com</Link>
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="w-full mt-6 text-gray-900 dark:text-white text-sm md:text-base space-y-5 ">

                    {/* Profile */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4  rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Profile</h2>
                        <p>
                            Aspiring web developer with a passion for creating functional and visually appealing websites.
                            Currently developing skills in website development at LOCTECH, focusing on both front-end and back-end technologies.
                            Eager to gain hands-on experience and contribute to real-world projects.
                        </p>
                    </section>

                    {/* Education */}
                    <section data-aos="fade-up" className="bg-white border-gr dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Education</h2>
                        <p>
                            - Currently studying <strong>Estate Management</strong> <br />
                            - Institution: Rivers State University (RSU) <br />
                            
                        </p>
                    </section>

                    {/* Technical Skills */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Technical Skills</h2>
                        <p>
                            - Website Development <br />
                            - Web Design <br />
                            - HTML, CSS, JavaScript (Basic) <br />
                            - Responsive Design Principles <br />
                            - Problem-Solving & Debugging
                        </p>
                    </section>

                    {/* Experience */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Experience</h2>
                        <p>
                            - Learning web development at LOCTECH <br />
                            - Building personal projects in website design
                        </p>
                    </section>

                    {/* Certificate & Training */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Certificate & Training</h2>
                        <p>- LOCTECH Website Development Training</p>
                    </section>

                    {/* Hobbies & Interests */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Hobbies & Interests</h2>
                        <p>
                            - Designing Websites <br />
                            - Dancing <br />
                            - Crafting
                        </p>
                    </section>

                    {/* Reference */}
                    <section data-aos="fade-up" className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-1">Reference</h2>
                        <p className="hover:text-green-700 transition-colors duration-300">Available upon request...</p>
                    </section>
                </div>

                {/* Download Button */}
                <div className="w-full flex flex-col gap-3 justify-center mt-6">
                    <a
                        href="/GOD'SWILL ESSIEN CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-black border text-center animate-pulse text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Download CV
                    </a>
                    <a
                        href="/#home"
                        target="_blank"
                        
                        
                        className="bg-black border text-center animate-pulse text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Home
                    </a>
                </div>
            </div>
        </div>
    )
}
