import Link from 'next/link'
import React from 'react'

export default function Skill() {
    return (
        <div  data-aos="fade-down" className='px-6 mt-5  font-serif md:flex-row-reverse md:px-20   ' id="skill">

            <div className=''>


                <p className='bg-gradient-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent text-[25px]  md:text-[35px] font-bold '>My Skill Sets</p>


                <div className='flex gap-9 text-[14px] md:text-[19px] '>


                    <div className='flex flex-col gap-3'>
                      <p>__javascript  </p>
                      <p>__HTML & Css  </p>
                      <p>__TailwindCss</p>
                      <p>__Nodejs</p>
                    
                    </div>



                    <div className='flex flex-col gap-3'>
                        <p>__Reactjs</p>   
                        <p>__MongoDb</p>   
                        <p>__Google Cloud</p>   
                        <p>__Git And GitHub</p>   
                    </div>

                   
                </div>
            </div>
        </div>
    )
}
