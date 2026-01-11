"use client";

import { useEffect, useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Viewc() {
  const [views, setViews] = useState(0);
  const [showViews, setShowViews] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/views/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ page: "portfolio-home" }),
        });

        if (!res.ok) {
          console.warn("Failed to track views:", res.status);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setViews(data.views);
        setLoading(false);
      } catch (err) {
        console.warn("Error tracking views:", err);
        setLoading(false);
      }
    };

    fetchViews();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowViews(!showViews)}
      className="flex items-center gap-3 px-4 py-2 dark:text-black  rounded-2xl shadow-lg cursor-pointer select-none text-white font-semibold"
      title={showViews ? "Hide views" : "Show views"}
    >
      {loading ? (
        <motion.div
          className="flex items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <IoEyeOffSharp className="text-xl animate-spin-slow" />
          <span>Loading...</span>
        </motion.div>
      ) : (
        <>
          {showViews ? (
            <IoEyeSharp className="text-2xl" />
          ) : (
            <IoEyeOffSharp className="text-2xl" />
          )}

          <AnimatePresence>
            {showViews && (
              <motion.span
                key={views}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {views.toLocaleString()} views
              </motion.span>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}
