"use client";

import { useEffect, useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export default function Viewc() {
  const [views, setViews] = useState(0);
  const [showViews, setShowViews] = useState(true);

  useEffect(() => {
    // Get the current view count and last viewed date from localStorage
    const storedViews = localStorage.getItem("views") || "0";
    const lastViewed = localStorage.getItem("lastViewed");

    const today = new Date().toDateString(); // e.g., "Sun Dec 15 2025"
    let newViews = Number(storedViews);

    // Only increment if lastViewed is not today
    if (lastViewed !== today) {
      newViews += 1;
      localStorage.setItem("views", newViews);
      localStorage.setItem("lastViewed", today);
    }

    setViews(newViews);
  }, []);

  return (
    <div
      onClick={() => setShowViews(!showViews)}
      className="flex items-center gap-2 text-md cursor-pointer select-none"
      title="Click to hide/show views"
    >
      {showViews ? <IoEyeSharp className="text-lg" /> : <IoEyeOffSharp className="text-xl" />}
      {showViews && <span>{views} views</span>}
    </div>
  );
}
