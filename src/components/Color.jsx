"use client";

import React from "react";

export default function Color() {
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
  ];

  return (
    <div className="flex gap-3  rounded-lg py-5 px-2 border-r border-l justify-around mb-2 animate-puls  border-dashed  ">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`
            ${color}
            w-2.5 h-2.5 rounded-full
            animate-pulse
            transition-all duration-300
            hover:scale-150 hover:shadow-lg
          `}
          style={{
            animationDelay: `${index * 200}ms`, // 👈 stagger effect
          }}
        />
      ))}
    </div>
  );
}
