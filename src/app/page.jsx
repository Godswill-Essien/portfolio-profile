import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import React from 'react'
import Foter from '@/components/Foter'

export default function page() {
  return (
    <div className=''>

       <Navbar/>
       <Hero/>
       <About/>
       <Skill/>
       <Project/>
       <Foter/>
    </div>
  )
}
