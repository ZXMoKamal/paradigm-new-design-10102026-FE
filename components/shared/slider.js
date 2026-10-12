
"use client";

import { useEffect, useState } from "react";

export default function Slider({
  slides = [],
  renderSlide,
  autoplay = true,
  interval = 5000,
  className = "",
  slideClassName = "",
  ariaLabel = "Content slider",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoplay || isHovered || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, isHovered, slides.length]);

  if (!slides.length) return null;

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsHovered(false);
        }
      }}
    >
      <div className={slideClassName}>
        {renderSlide(slides[activeIndex], activeIndex)}
      </div>

      {slides.length > 1 && (
        <div
          className="mt-8 flex items-center gap-2"
          aria-label="Choose slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id ?? index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-10 bg-primary"
                  : "w-4 bg-white hover:bg-primary"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
