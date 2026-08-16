"use client";

import { useEffect, useRef } from "react";

export default function FaideBgSection({
    children,
    className = "",
}) {
    const sectionRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const circle = circleRef.current;

        if (!section || !circle) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    circle.style.transform = "translate(-50%, -50%) scale(1)";
                    circle.style.opacity = "1";
                } else {
                    circle.style.transform = "translate(-50%, -50%) scale(0)";
                    circle.style.opacity = "0";
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative isolate overflow-hidden ${className}`}
        >
            {/* Background Circle */}
            <div
                ref={circleRef}
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-[-1]
                    h-[2500px]
                    w-[2500px]
                    rounded-full
                    bg-white
                    opacity-0
                    transition-[transform,opacity]
                    duration-1000
                    ease-out
                "
                style={{
                    transform: "translate(-50%, -50%) scale(0)",
                }}
            />

            {/* Content */}
            {/* <div className="relative z-10"> */}
                {children}
            {/* </div> */}
        </section>
    );
}