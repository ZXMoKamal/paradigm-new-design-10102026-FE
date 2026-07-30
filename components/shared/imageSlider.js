// components/ImageSlider.js
"use client";
import { useState } from "react";

export default function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl">
        
        <img
          src={images[current]}
          alt="event"
          className="w-full h-[300px] object-cover"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}