"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { CiBoxList } from "react-icons/ci"
import Viewc from '@/components/Viewc'


export default function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="font-serif fixed top-0 w-full z-50" id="home">

      {/* ================= DESKTOP NAV ================= */}
      <nav
        className={`hidden md:flex items-center justify-center gap-6 py-3 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-blue-900" : "bg-transparent"}
        `}
      >
        <div className="text-white font-bold text-[18px] flex gap-10 border-r-[2.5px] border-blue-700 px-7">
          <Link href="#about" className="hover:text-blue-400 transition">About</Link>
          <Link href="#work" className="hover:text-blue-400 transition">Work</Link>
          <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        <Link
          href="/CV"
          className="shadow-xl shadow-blue-900 bg-gradient-to-r from-blue-800 to-indigo-900 px-6 py-2 rounded-md text-sm
          transition-all duration-500 hover:translate-y-[-3px]"
        >
          View CV
        </Link>


        <Viewc/>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <div className="md:hidden flex justify-between items-center gap-4   backdrop-blur-2xl rounded px-5 pt-3">
        <button
          onClick={() => setDropDown(!dropDown)}
          className="text-blue-700 mb-1 text-2xl"
        >
          <CiBoxList />
        </button>

        <Viewc/>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {dropDown && (
        <div className="md:hidden fixed inset-8 h-[60%] bg-black/80 backdrop-blur-md rounded-3xl mt-5 flex justify-center items-start pt-20 z-40">
          <nav className=" w-[85%] rounded-2xl   flex flex-col items-center gap-5 shadow-2xl">
            <Link onClick={() => setDropDown(false)} href="#home">Home</Link>
            <Link onClick={() => setDropDown(false)} href="#about">About</Link>
            <Link onClick={() => setDropDown(false)} href="#work">My Projects</Link>
            <Link onClick={() => setDropDown(false)} href="#contact">Reach Me</Link>
            <Link onClick={() => setDropDown(false)} href="#cert">view certification</Link>

            <Link
              href="/CV"
              className="mt-5 px-10 py-3 rounded-md bg-gradient-to-r from-blue-700 to-indigo-800 shadow-xl
              transition-all hover:scale-105"
            >
              View CV
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
