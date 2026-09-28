"use client";

import usePageVisitDuration from "@/hooks/usePageVisitDuration";

export default function PageVisitDuration({
    itemId,
    requestTitle,
    page,
}) {
    usePageVisitDuration(
        itemId,
        requestTitle,
        page
    );

    return null;
}