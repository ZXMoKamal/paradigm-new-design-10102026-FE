"use client";

import { useEffect, useRef } from "react";

export default function NumberCounter({
    value,
    tag: Tag = "span",
    duration = 2000,
    className = "",
    sufix = "",
}) {
    const numberRef = useRef(null);
    const hasStarted = useRef(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const element = numberRef.current;

        if (!element) return;

        const target = Number(value);

        if (Number.isNaN(target)) return;

        const startCounter = () => {
            if (hasStarted.current) return;

            hasStarted.current = true;

            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth ease-out
                const easedProgress =
                    1 - Math.pow(1 - progress, 3);

                const currentValue = Math.floor(
                    easedProgress * target
                );

                element.textContent = `${currentValue}${sufix}`;

                if (progress < 1) {
                    animationRef.current =
                        requestAnimationFrame(animate);
                } else {
                    element.textContent = `${target}${sufix}`;
                }
            };

            animationRef.current =
                requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCounter();

                    // We only need to detect it once
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [value, duration, sufix]);

    return (
        <Tag
            ref={numberRef}
            className={className}
        >
            0{sufix}
        </Tag>
    );
}