// components/ServicesGrid.js

"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ImagesGrid({ items = [], path = "/" }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const displayedItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <section className="m-auto w-full xl:w-[1320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {displayedItems.map((item, index) => (
          <Link key={index} href={path + item.requestTitle + "/"}>
            <div className="group cursor-pointer overflow-hidden transition duration-300">
              {/* Image Container */}
              <div className="overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-2xl font-primary-medium">
                  {item.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={handleLoadMore}
          className="px-8 py-3 rounded-full bg-primary text-bg-1 font-heading font-semibold hover:opacity-90 transition-opacity shadow-brand"
        >
          Load More {/*({items.length - visibleCount} remaining) */}
        </button>
      )}
    </div>
  );
}