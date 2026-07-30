// // components/ImageSlider.js
// "use client";
// import { useState } from "react";
// import ArrowAngleDown from "../icons/arrowAngleDown";
// import ArrowAngleUp from "../icons/arrowAngleUp";
// import { cn } from "@/lib/cn";

// export default function ImageSlider({ images = [], className='' }) {
//   const [current, setCurrent] = useState(0);

//   if (!images.length) return null;

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prev = () => {
//     setCurrent((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className={cn("w-full",className)}>
//       <div className="relative overflow-hidden w-full h-full">
        
//         <img
//           src={images[current]}
//           alt="event"
//           className="w-full object-cover"
//         />

//         {/* Arrows */}
//         <button
//           onClick={prev}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           <ArrowAngleDown className={"w-8 h-8 rotate-90 fill-text-primary"}/>
//         </button>

//         <button
//           onClick={next}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
//         >
//           <ArrowAngleUp className={"w-8 h-8 rotate-90 fill-text-primary"}/>
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";
import { useState, useEffect } from "react";
import ArrowAngleDown from "../icons/arrowAngleDown";
import ArrowAngleUp from "../icons/arrowAngleUp";
import { cn } from "@/lib/cn";

export default function ImageSlider({ images = [], className = "" }) {
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

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden w-full h-full">
        
        {/* ✅ SLIDER TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <img
            fetchPriority="high"
              key={i}
              src={img}
              alt="event"
              className="w-full shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          <ArrowAngleDown className="w-8 h-8 rotate-90 fill-text-primary" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          <ArrowAngleUp className="w-8 h-8 rotate-90 fill-text-primary" />
        </button>
      </div>
    </div>
  );
}