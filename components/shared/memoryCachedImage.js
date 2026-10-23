"use client";

import { useEffect, useState } from "react";

const imageCache = new Map();

function getCachedImage(src) {
  if (!imageCache.has(src)) {
    const imagePromise = fetch(src)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load image: ${src}`);
        return response.blob();
      })
      .then((blob) => URL.createObjectURL(blob))
      .catch((error) => {
        imageCache.delete(src);
        throw error;
      });

    imageCache.set(src, imagePromise);
  }

  return imageCache.get(src);
}

export default function MemoryCachedImage({ src, alt, ...props }) {
  const [cachedSrc, setCachedSrc] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    setCachedSrc(null);

    getCachedImage(src)
      .then((objectUrl) => {
        if (isCurrent) setCachedSrc(objectUrl);
      })
      .catch(() => {
        if (isCurrent) setCachedSrc(src);
      });

    return () => {
      isCurrent = false;
    };
  }, [src]);

  return cachedSrc ? <img src={cachedSrc} alt={alt} {...props} /> : null;
}


