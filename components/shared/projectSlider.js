
"use client";

import { useState } from "react";
import ArrowRight from "../icons/arrowRight";
import Link from "next/link";

function ProjectCard({ project }) {console.log(project)
  return (
    <article className="group min-w-0 w-full">
      <div className="relative mb-6 h-[320px] w-full overflow-hidden rounded-2xl bg-bg-2 sm:h-[300px] lg:h-[480px]">
        {project.thumb && <Link
          href={`/portfolio/${project.requestTitle}`}
          aria-label={`View project: ${project.name}`}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View project</span>
        </Link>}

        {project.thumb?<img
          src={project.thumb}
          alt={project.name || "Portfolio project"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />:<img
          src={project}
          alt={project.name || "Portfolio project"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />}

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

        {project.thumb && <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 scale-75 items-center justify-center rounded-full bg-white text-bg-1 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <ArrowRight className="h-6 w-6 rotate-[300deg]" />
          </span>
        </div>}
      </div>

      {project.thumb && <h3 className="text-xl font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-2xl">
        <Link href={`/portfolio/${project.requestTitle}`}>
          {project.name}
        </Link>
      </h3>}
    </article>
  );
}

export default function ProjectSlider({
  items = [],
  className = "",
  ariaLabel = "Project slider",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Show 1 card on mobile, 2 on tablet, and 3 on desktop.
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine visible cards responsively without changing the parent
  // Server Component.
  const [screenSize, setScreenSize] = useState("desktop");

  // Use a small effect to detect the viewport.
  const { useEffect } = require("react");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenSize("mobile");
        setVisibleCount(1);
      } else if (width < 1024) {
        setScreenSize("tablet");
        setVisibleCount(2);
      } else {
        setScreenSize("desktop");
        setVisibleCount(3);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  if (!items.length) return null;

  const maxIndex = Math.max(0, items.length - visibleCount);

  const previous = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  // Keep the active index valid when the viewport changes.
  const safeIndex = Math.min(activeIndex, maxIndex);

  return (
    <div className={`w-full min-w-0  ${className}`}>
      <div
        className="w-full overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div
          className="2xl:pl-50 flex w-full gap-5 transition-transform duration-700 ease-in-out motion-reduce:transition-none sm:gap-6 lg:gap-8"
          style={{
            transform: `translateX(calc(-${safeIndex} * (100% / ${visibleCount} + ${visibleCount === 1 ? 0 : visibleCount === 2 ? 12 : 10}px)))`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id ?? item.requestTitle ?? index}
              className="min-w-0 shrink-0"
              style={{
                width: `calc((100% - ${(visibleCount - 1) * (visibleCount === 1 ? 0 : visibleCount === 2 ? 24 : 32)}px) / ${visibleCount})`,
              }}
            >
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>

      {items.length > visibleCount && (
        <div className="xl:mt-8 2xl:ml-50 flex items-center justify-start gap-3">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous projects"
            className="flex size-12 items-center justify-center rounded-full bg-primary text-bg-1 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next projects"
            className="flex size-12 items-center justify-center rounded-full bg-primary text-bg-1 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <span className="ml-2 text-sm text-text-muted" aria-live="polite">
            {String(safeIndex + 1).padStart(2, "0")} /{" "}
            {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
