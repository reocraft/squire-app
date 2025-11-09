'use client'
import React from "react";

export default function SearchResult({ text }) {
  return (
    <div
      className="
        w-full
        bg-white
        border border-gray-200
        rounded-lg
        shadow-md
        p-4
        transition-transform
        hover:scale-[1.01]
        whitespace-pre-wrap
      "
    >
      <div className="text-gray-800 dark:text-gray-200">{text}</div>
    </div>
  );
}
