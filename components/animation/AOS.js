"use client";

// import { useEffect } from "react";
import AOS from "aos";
import { useEffect } from "react";

export default function AosInit() {
    useEffect(() => {
        AOS.init({
           // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
//    easing: "ease-out",
        });

        // Refresh after components/content are rendered
        AOS.refresh();
    }, []);

    return <></>;
}
