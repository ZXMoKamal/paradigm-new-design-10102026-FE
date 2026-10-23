"use client";

import Slider from "@/components/shared/slider";

export default function AboutStatsSlider({
  slides,
  className,
  slideClassName,
}) {
  return (
    <Slider
      slides={slides}
      autoplay
      interval={5000}
      ariaLabel="Company experience and awards"
      className={className}
      slideClassName={slideClassName}
      renderSlide={(stat) => (
        <div>
          <h3 className="mb-5 flex items-start font-heading text-[70px] font-medium leading-none tracking-[-0.04em] text-text-primary lg:text-[100px] xl:text-[120px]">
            {stat.number}
            <span className="mt-1 text-[30px] text-primary">+</span>
          </h3>

          <p className="text-xl font-medium leading-snug text-text-primary lg:text-2xl">
            {stat.label}
          </p>
        </div>
      )}
    />
  );
}
