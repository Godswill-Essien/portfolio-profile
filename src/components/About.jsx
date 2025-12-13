import React from 'react'

export default function About() {
    return (
        <div>

            {/* ABOUT SECTION */}
            <div
                id="about"
                className="mt-8 px-6 md:px-20 font-serif flex flex-col md:flex-row gap-6 md:gap-12"
            >

                {/* IMAGE SIDE — UNCHANGED */}
                <div
                    data-aos="fade-down"
                    className="flex justify-center items-center 
                    bg-gradient-to-r from-slate-700 to-slate-400
                    h-[70vh] w-[250px] md:w-[310px]
                    opacity-70 rounded-md"
                >
                    <div className="bg-black h-[69vh] md:w-[300px] w-[240px] mt-1">
                        <div className="about bg-blue about-2 
                        transition-all duration-1000 ease-in-out 
                        hover:scale-110 hover:opacity-60"></div>
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
                        className="bg-gradient-to-r from-indigo-800 to-blue-800
                        bg-clip-text text-transparent
                        text-[24px]  text-start sm:text-[26px] md:text-[30px]
                        font-bold"
                    >
                        About Me
                    </p>

                    <div
                        data-aos="fade-right"
                        className="flex flex-col gap-3"
                    >
                        <p className="text-start">
                            Hey there digital wanderer 👋 I'm God'swill, I am a website developer,
                            I build beautiful websites.. until someone asks me to fix a bug,
                            then I become a detective 😁🔍 . <br /><br />

                            I write HTML for structures, CSS for style, and JAVASCRIPT to make
                            things move, because static websites are boring . <br />

                            I don't just code; I craft experiences. Unless it's Internet Explorer.
                            My job is to make websites look amazing. and my nightmare is fixing
                            alignment issues in CSS. <br />

                            If I'm not performing tasks or making life easier by building websites,
                            I relish a good manga read, watching anime 🥰, and playing football.
                        </p>
                    </div>
                </div>

            </div>

            {/* CERTIFICATE SECTION — NEW */}
            <div className="mt-5 md:flex-row-reverse t px-6 md:px-20 font-serif flex flex-col gap-6" aos="fade-up" id='cert'>

                <p
                    data-aos="fade-down"
                    className=" md:flex-row-reverse bg-gradient-to-r from-indigo-800 to-blue-800
                    bg-clip-text text-transparent
                    text-[24px] sm:text-[26px] text-start md:text-[30px]
                    font-bold  md:text-left"
                >
                    Certificate
                </p>

                <div data-aos="zoom-in" className="flex justify-center md:justify-start">
                    <div
                      className="bg-gradient-to-r from-slate-800 via-gray-700
                       to-blue-800 animate-gradient rounded-xl p-[2px] rounded-2xlw-full max-w-[500px]"

                    >
                        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4">

                            <div className="overflow-hidden rounded-lg ">
                                <img
                                    src="/about-1.jpg"   
                                    alt="My Certificate"
                                    className="w-full h-auto
                                    transition-all duration-700 ease-in-out
                                    hover:scale-150"
                                />
                            </div>

                            <div className="mt-4 text-center md:text-left">
                                <p className="text-white text-[16px] md:text-[18px] font-semibold">
                                    Website Development Certificate
                                </p>

                                <p className="text-gray-400 text-[13px] animate-pulse md:text-[15px]">
                                    Issued by LOCTECH · 2025
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
