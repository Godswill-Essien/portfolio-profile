"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Aos(){
  useEffect(() => {
    AOS.init({
   
         once: false,
         easing:'ease-in-out',
         duration: "2000",
         transition: "all"

         
           

        
       })
 }, [])
  
    return null
  
}