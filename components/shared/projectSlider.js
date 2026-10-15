
"use client";

import { useState } from "react";

export default function ProjectSlider({
  items = [],
  renderItem,
  className = "",
  ariaLabel = "Project slider",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  };

  if (!items.length) return null;

  return (
    <div className={className}>
      <div
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none gap-10 pl-20"
          style={{ transform: `translateX(-${activeIndex * 40}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id ?? index}
              className="w-[850px] shrink-0 flex gap-10"
              aria-hidden={activeIndex !== index}
            >
              {renderItem(item, index)}
              {/* {index + 1 < items.length ? renderItem(items[index + 1], index + 1) : null} */}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex items-center gap-3 pl-20">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous project"
            className="flex size-14 items-center justify-center rounded-full bg-primary text-bg-1 transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span aria-hidden="true" className="text-2xl">←</span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex size-14 items-center justify-center rounded-full bg-primary text-bg-1 transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span aria-hidden="true" className="text-2xl">→</span>
          </button>

          <span className="ml-2 text-sm text-text-muted" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
