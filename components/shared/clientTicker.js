"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ClientTicker({
  clients = [],
  orientation = "horizontal", // "horizontal" | "vertical"
  direction = "ltr",           // "ltr" | "rtl" (horizontal) or "top-to-bottom" | "bottom-to-top" (vertical)
  speed = "30s",  
  className=""             // Animation duration (e.g. "20s", "40s")
}) {
  const [shuffledSlides, setShuffledSlides] = useState([]);

  // Shuffle slides randomly on mount
  useEffect(() => {
    if (!clients || clients.length === 0) return;
    
    const arrayCopy = [...clients];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    setShuffledSlides(arrayCopy);
  }, [clients]);

  if (!shuffledSlides || shuffledSlides.length === 0) return null;

  // Determine keyframe animation class based on orientation and direction
  let animationClass = "animate-ticker-Normal";
  
  if (orientation === "horizontal") {
    if (direction === "rtl") {
      animationClass = "animate-ticker-Reversed";
    } else {
      animationClass = "animate-ticker-Normal";
    }
  } else {
    // Vertical ticker directions
    if (direction === "top-to-bottom") {
      animationClass = "animate-verticalTicker-reverse";
    } else {
      // default bottom-to-top
      animationClass = "animate-verticalTicker";
    }
  }

  return (
    <div className={`relative overflow-hidden w-full ticker-pause-hover ${orientation === "vertical" ? "h-[450px] " : "py-4 "} ${className}`}>
      
      {/* Gradient Fade Masks for Smooth Edges */}
      {orientation === "horizontal" ? (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-1 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-1 to-transparent z-10 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 right-0 h-24 vertical-image-ticker-gradient-up z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 vertical-image-ticker-gradient-down z-10 pointer-events-none" />
        </>
      )}

      {/* Ticker Track */}
      {orientation === "horizontal" ? (
        <div 
          className={`flex gap-16 whitespace-nowrap items-center w-max ${animationClass}`}
          style={{ animationDuration: speed }}
        >
          {[...shuffledSlides, ...shuffledSlides].map((client, index) => (
            <div key={index} className="flex items-center justify-center min-w-[150px]">
              <a 
                href={client.url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={client.logo || "/images/placeholder-logo.png"}
                  alt={client.name || "Client Logo"}
                  className="max-h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div 
          className={`flex flex-col gap-8 items-center h-max ${animationClass}`}
          style={{ animationDuration: speed }}
        >
          {[...shuffledSlides, ...shuffledSlides, ...shuffledSlides].map((client, index) => (
            <div key={index} className="flex items-center justify-center w-full py-2">
              <a 
                href={client.url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={client.logo || "/images/placeholder-logo.png"}
                  alt={client.name || "Client Logo"}
                  loading="lazy"
                  className="max-h-[80%] max-w-[80%] object-contain object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}