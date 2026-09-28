"use client";

import { getVisitorId } from "@/lib/visitorId";
import { useEffect, useRef } from "react";

export default function usePageVisitDuration(itemId, requestTitle, page) {
    const startTimeRef = useRef(null);

    useEffect(() => {
        if (!itemId || !requestTitle) return;

        startTimeRef.current = Date.now();

        const sendDuration = () => {
            if (!startTimeRef.current) return;

            const elapsedSeconds = Math.floor(
                (Date.now() - startTimeRef.current) / 1000
            );

            // Don't send 0-second visits
            if (elapsedSeconds <= 0) return;

            const visitorId = getVisitorId(); //localStorage.getItem("visitorId");

            if (!visitorId) return;

            const data = {
                visitorId,
                itemId,
                requestTitle,
                duration: elapsedSeconds,
                page: page,
            };

            const s = navigator.sendBeacon(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/pageVisitDuration.php`,
                new Blob(
                    [JSON.stringify(data)],
                    { type: "application/json" }
                )
            );

            startTimeRef.current = null;
        };

        window.addEventListener("pagehide", sendDuration);

        return () => {
            sendDuration();
            window.removeEventListener("pagehide", sendDuration);
        };
    }, [itemId, requestTitle]);
}