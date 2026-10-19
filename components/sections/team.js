"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Full pool of team members / photos to randomly swap between
const allTeamMembers = [
  { name: "Sarah Jenkins", role: "Creative Director", image: "/images/home/team/Meet Our Team-01.png" },
  { name: "Michael Chang", role: "Lead Developer", image: "/images/home/team/Meet Our Team-02.png" },
  { name: "Elena Rostova", role: "UI/UX Designer", image: "/images/home/team/Meet Our Team-03.png" },
  { name: "David Kim", role: "Brand Strategist", image: "/images/home/team/Meet Our Team-04.png" },
  { name: "Amina Yusuf", role: "Full Stack Engineer", image: "/images/home/team/Meet Our Team-05.png" },
  { name: "Lucas Vance", role: "Motion Designer", image: "/images/home/team/Meet Our Team-06.png" },
  { name: "Chloe Bennett", role: "Product Manager", image: "/images/home/team/Meet Our Team-07.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-08.png" },
  { name: "Sarah Jenkins", role: "Creative Director", image: "/images/home/team/Meet Our Team-09.png" },
  { name: "Michael Chang", role: "Lead Developer", image: "/images/home/team/Meet Our Team-10.png" },
  { name: "Elena Rostova", role: "UI/UX Designer", image: "/images/home/team/Meet Our Team-11.png" },
  { name: "David Kim", role: "Brand Strategist", image: "/images/home/team/Meet Our Team-12.png" },
  { name: "Amina Yusuf", role: "Full Stack Engineer", image: "/images/home/team/Meet Our Team-13.png" },
  { name: "Lucas Vance", role: "Motion Designer", image: "/images/home/team/Meet Our Team-14.png" },
  { name: "Chloe Bennett", role: "Product Manager", image: "/images/home/team/Meet Our Team-15.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-16.png" },
  { name: "Sarah Jenkins", role: "Creative Director", image: "/images/home/team/Meet Our Team-17.png" },
  { name: "Michael Chang", role: "Lead Developer", image: "/images/home/team/Meet Our Team-18.png" },
  { name: "Elena Rostova", role: "UI/UX Designer", image: "/images/home/team/Meet Our Team-19.png" },
  { name: "David Kim", role: "Brand Strategist", image: "/images/home/team/Meet Our Team-20.png" },
  { name: "Amina Yusuf", role: "Full Stack Engineer", image: "/images/home/team/Meet Our Team-21.png" },
  { name: "Lucas Vance", role: "Motion Designer", image: "/images/home/team/Meet Our Team-22.png" },
  { name: "Chloe Bennett", role: "Product Manager", image: "/images/home/team/Meet Our Team-23.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-24.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-25.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-26.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-27.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-28.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-29.png" },
  { name: "Marcus Brody", role: "Frontend Developer", image: "/images/home/team/Meet Our Team-30.png" },
];

export default function TeamGridSection() {
  // Select an initial active subset of 8 visible team boxes
  const [visibleMembers, setVisibleMembers] = useState(() => {
    return allTeamMembers.slice(0, 8);
  });

  // Track fading state for each box individually
  const [fadingIndices, setFadingIndices] = useState({});

  useEffect(() => {
    // Function to randomly update a random batch of boxes simultaneously
    const scheduleNextSwap = () => {
      // 1. Pick a random number of items to change in this cycle (e.g., between 1 and 3 items)
      const countToChange = Math.floor(Math.random() * 5) + 1;

      // 2. Pick unique random indices from the visible boxes
      const allIndices = Array.from({ length: visibleMembers.length }, (_, i) => i);
      const targetIndices = [];
      for (let i = 0; i < countToChange; i++) {
        if (allIndices.length === 0) break;
        const randomIndex = Math.floor(Math.random() * allIndices.length);
        targetIndices.push(allIndices.splice(randomIndex, 1)[0]);
      }

      // Random fade duration between 400ms and 900ms
      const fadeDuration = Math.random() * 500 + 400;

      // Trigger fade out for the selected target indices
      setFadingIndices((prev) => {
        const nextState = { ...prev };
        targetIndices.forEach((idx) => {
          nextState[idx] = true;
        });
        return nextState;
      });

      setTimeout(() => {
        // Swap members for the selected target indices with members from the available pool not currently shown
        setVisibleMembers((currentMembers) => {
          const updated = [...currentMembers];
          targetIndices.forEach((targetBoxIndex) => {
            // Dedupe by `image`, not `name`: the pool only has 8 unique names repeated
            // across 30 different photos, so filtering by name matched every entry
            // against the 8 names already on screen and left availablePool empty —
            // that's why nothing ever actually swapped. `image` is unique per entry.
            const availablePool = allTeamMembers.filter(
              (m) => !updated.some((cm) => cm.image === m.image)
            );
            if (availablePool.length > 0) {
              const randomNewMember =
                availablePool[Math.floor(Math.random() * availablePool.length)];
              updated[targetBoxIndex] = randomNewMember;
            }
          });
          return updated;
        });

        // Trigger fade in for those target indices
        setFadingIndices((prev) => {
          const nextState = { ...prev };
          targetIndices.forEach((idx) => {
            nextState[idx] = false;
          });
          return nextState;
        });
      }, fadeDuration);

      // Schedule next swap after a random delay (between 2s and 4.5s)
      const nextDelay = Math.random() * 500 + 1000;
      timer = setTimeout(scheduleNextSwap, nextDelay);
    };

    let timer = setTimeout(scheduleNextSwap, 500);
    return () => clearTimeout(timer);
  }, [visibleMembers]);

  return (
    <section className="py-24 bg-bg-1 relative overflow-hidden">
      <div className="container-content space-y-16">
        
        {/* Header & Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-4" data-aos="fade-up" data-aos-duration="800">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Our Expert Team
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Meet The Minds Behind <span className="text-primary">Our Success</span>
          </h2>
          <p className="text-text-muted text-base">
            Passionate innovators, designers, and engineers dedicated to transforming your digital vision into reality.
          </p>
        </div>

        {/* Rectangle Container with Small Boxes */}
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleMembers.map((member, index) => {
              const isFading = fadingIndices[index];

              return (
                <div
                  key={index}
                  className={`group relative bg-bg-1 rounded-2xl overflow-hidden shadow-card transition-all duration-700 transform ${
                    isFading ? "opacity-0 scale-95 rotate-1" : "opacity-100 scale-100 rotate-0"
                  }`}
                >
                  {/* Photo Box */}
                  <div className="relative w-full h-64 rounded-xl overflow-hidden bg-bg-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-1 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3 className="text-lg font-heading font-bold text-text-primary">
                        {member.name}
                      </h3>
                      <p className="text-xs text-primary font-heading font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}