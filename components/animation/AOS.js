"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInit() {
    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            AOS.init({
                offset: 80,
                delay: 0,
                duration: 1000,
                once: false,
                mirror: false,
            });

            AOS.refresh();
        }, 1000);

        return () => window.clearTimeout(timeoutId);
    }, []);

    return null;
}
