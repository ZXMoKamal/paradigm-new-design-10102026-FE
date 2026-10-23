"use client";

import { useEffect, useRef, useState } from "react";

// Lazy-mounted hero video: the <video> element — and therefore the network
// request for it — is only created once the browser is idle after the page
// has already painted, so it never competes with critical page resources
// (fonts, above-fold CSS, hydration) for bandwidth or priority.
export default function HeroVideo({
  // A path under /public is served by Vercel's CDN as a static asset, which
  // already supports HTTP range requests (206 Partial Content) out of the
  // box — the browser can start playing and seeking without downloading the
  // whole 13MB file first, with no custom streaming code required at all.
  src = "/api/hero-video",
  poster = "/images/home/hero-poster.jpg",
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // requestIdleCallback waits until the browser has spare time; Safari
    // doesn't support it, so fall back to a short timeout there instead.
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const id = idle(() => setShouldLoad(true));

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  return (
    <div className="relative w-100 h-100 overflow-hidden bg-amber-200">
      {/* Poster renders immediately as a plain image — it never waits on
          the video request, so it's what paints the hero on first load */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          shouldLoad ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted // every major browser requires this for autoplay to be allowed at all
          loop
          playsInline // required on iOS so it plays inline instead of jumping to fullscreen
          preload="metadata" // fetch just enough to know duration/dimensions, not the whole file up front
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}