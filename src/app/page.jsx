"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [showPopup, setShowPopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false); // NEW: tracks manual pause
  const [showMusicHint, setShowMusicHint] = useState(false);

  const audioRef = useRef(null);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 100], ["0%", "100%"]);

  // 🔹 Show popup on reload
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // 🔹 Timed music hint popup
  useEffect(() => {
    const showTimer = setTimeout(() => setShowMusicHint(true), 5000); // 5s
    const hideTimer = setTimeout(() => setShowMusicHint(false), 11000); // 11s

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // 🔹 Track portfolio views
  useEffect(() => {
    const trackViews = async () => {
      try {
        await fetch("http://localhost:5000/api/views/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ page: "portfolio-home" }),
        });
      } catch (err) {
        console.warn("Failed to reach backend:", err);
      }
    };
    trackViews();
  }, []);

  // 🔹 Fetch content
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔹 Scroll listener + music control 🎵
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrolled(scroll > 20);

      if (!audioRef.current) return;

      // Only auto-play if user hasn't manually paused
      if (scroll > 40 && !isPlaying && !userPaused) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }

      // Volume ramps with scroll (0 → 0.5)
      const maxScroll = 600;
      audioRef.current.volume = Math.min(scroll / maxScroll, 0.5);

      // Stop & reset at top
      if (scroll < 10 && isPlaying && !userPaused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying, userPaused]);

  // 🔹 Loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/20 backdrop-blur-sm">
        <BsGlobe className="w-20 h-20 text-blue-900 animate-spin-slow" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen gradient-magic bg-gradient-to-r from-white/5 via-black/45 to-white/5 animate-grad dark:text-black dark:bg-white">

      {/* 🎵 Scroll Music */}
      <audio
        ref={audioRef}
        src="/Hans_Zimmer_-_Interstellar_Main_Theme_OST_INTERSTELLER_(mp3.pm).mp3"
        loop
        preload="auto"
      />

      {/* 🎛️ Play / Pause Button */}
      <button
        onClick={() => {
          if (!audioRef.current) return;

          if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setUserPaused(true); // mark manual pause
          } else {
            audioRef.current.play().catch(() => {});
            setIsPlaying(true);
            setUserPaused(false); // user resumed
          }
        }}
        className="fixed bottom-1 right-4 z-50 w-12 h-12 rounded-full
                   bg-black/70 bg backdrop-blur-md text-white
                   flex items-center justify-center shadow-lg
                   hover:scale-105 transition"
        aria-label="Toggle music"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      {/* ⏱️ Timed Music Hint Popup */}
      {showMusicHint && (
        <div className="fixed bottom-24 right-6 z-40 max-w-xs
                        bg-black/70 text-white text-sm
                        px-4 py-3 rounded-lg shadow-lg
                        backdrop-blur-md animate-fade-in">
          <p>
            🎧 Tip: Music reacts to scrolling.
            <br />
            Use the button to <b>play</b> or <b>pause</b>.
          </p>

          <button
            onClick={() => setShowMusicHint(false)}
            className="mt-2 text-xs underline opacity-80 hover:opacity-100"
          >
            Got it
          </button>
        </div>
      )}

      {/* 🔮 Reload Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white/85 rounded-xl p-6 shadow-2xl max-w-sm text-center">
            <h2 className="text-xl font-bold text-black mb-2">✨ Welcome</h2>
            <p className="text-gray-700">
              “Hey there!! Glad you’re here 👋Please Take a moment to explore ☺️”
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Foter />

    </div>
  );
}
