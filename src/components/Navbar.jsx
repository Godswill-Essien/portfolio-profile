"use client"

import Link from "next/link"
import React, { useEffect, useState, useRef } from "react"
import { TbListDetails } from "react-icons/tb"
import { AiOutlineClose } from "react-icons/ai"
import Viewc from "@/components/Viewc"

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const timerRef = useRef(null)
  const navbarHeight = 72 // px

  // 🔹 Navbar scroll effect (PAUSED when dropdown is open)
  useEffect(() => {
    if (dropDown) return

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [dropDown])

  // 🔹 Lock background scroll
  useEffect(() => {
    document.body.style.overflow = dropDown ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [dropDown])

  // 🔹 OPEN + AUTO CLOSE
  const toggleDropdown = () => {
    setDropDown(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setDropDown(false), 5000)
  }

  const closeDropdown = () => {
    setDropDown(false)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  return (
    <header className="fixed top-0 w-full z-50 font-serif">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-blue-900"
            : "bg-transparent"
        }`}
      >
        {/* ===== NAV BAR ===== */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
          <button
            className="md:hidden text-2xl text-white"
            onClick={dropDown ? closeDropdown : toggleDropdown}
          >
            {dropDown ? <AiOutlineClose /> : <TbListDetails />}
          </button>

          <div className="hidden md:flex gap-10 text-white font-bold text-[18px]">
            <Link href="#about">About</Link>
            <Link href="#work">Work</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#cert">Certification</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/CV"
              className="hidden sm:inline-block border px-8 py-2 rounded-full text-sm animate-pulse"
            >
              View CV
            </Link>
            <Viewc />
          </div>
        </div>

        {/* ===== MOBILE DROPDOWN (FIXED HEIGHT + STABLE) ===== */}
      {dropDown && (
  <div
    data-aos="fade-down"
    className="
      md:hidden
      fixed
      left-0
      right-0
      top-[49px]       
      h-[calc(100vh-80px)]  
      bg-black/90 rounded-lg
      backdrop-blur-md
      flex justify-center items-start font-serif font-bold
      pt-8
      z-40
    "
  >
    <nav className="w-[85%] flex flex-col items-center gap-5 text-white">
      <Link onClick={closeDropdown} href="#home">Home</Link>
      <Link onClick={closeDropdown} href="#about">About</Link>
      <Link onClick={closeDropdown} href="#work">My Projects</Link>
      <Link onClick={closeDropdown} href="#contact">Reach Me</Link>
      <Link onClick={closeDropdown} href="#cert">View Certification</Link>

      <Link
        href="/CV"
        onClick={closeDropdown}
        className="mt-5 px-10 py-2 border bg-black rounded-3xl animate-pulse"
      >
        View CV
      </Link>
    </nav>
  </div>
)}

      </nav>
    </header>
  )
}
