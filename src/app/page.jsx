"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsGlobe } from "react-icons/bs";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Foter from "@/components/Foter";

import { useScroll, useTransform } from "framer-motion";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 100], ["0%", "100%"]);

  // 🔹 Track portfolio views safely
  useEffect(() => {
    const trackViews = async () => {
      try {
        // 🔹 Replace with your real backend URL
        const res = await fetch("http://localhost:5000/api/views/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ page: "portfolio-home" }),
        });

        if (!res.ok) {
          console.warn("Backend returned error:", res.status);
          return;
        }

        const data = await res.json();
        console.log("Views tracked:", data);
      } catch (err) {
        console.warn("Failed to reach backend:", err);
      }
    };

    trackViews();
  }, []);

  // ✅ Fetch content from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch content:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Foter />
    </div>
  );
}
