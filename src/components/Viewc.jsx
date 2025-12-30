"use client";

import { useEffect, useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export default function Viewc() {
  const [views, setViews] = useState(0);
  const [showViews, setShowViews] = useState(false); // 👈 start hidden

  useEffect(() => {
    const storedViews = localStorage.getItem("views") || "0";
    const lastViewed = localStorage.getItem("lastViewed");

    const today = new Date().toDateString();
    let newViews = Number(storedViews);

    if (lastViewed !== today) {
      newViews += 1;
      localStorage.setItem("views", newViews.toString());
      localStorage.setItem("lastViewed", today);
    }

    setViews(newViews);
  }, []);

  return (
    <div
      onClick={() => setShowViews(!showViews)}
      className="flex items-center gap-2 cursor-pointer select-none"
      title={showViews ? "Hide views" : "Show views"}
    >
      {showViews ? (
        <IoEyeSharp className="text-2xl" />
      ) : (
        <IoEyeOffSharp className="text-2xl" />
      )}

      {showViews && <span>{views} views</span>}
    </div>
  );
}
