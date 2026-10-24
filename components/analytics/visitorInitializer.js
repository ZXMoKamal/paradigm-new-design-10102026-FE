"use client"
import { useEffect } from "react";
import { getVisitorId } from "@/lib/visitorId";

export default function VisitorInitializer() {
    useEffect(() => {
        const visitorId = getVisitorId();

        // console.log("Visitor ID:", visitorId);
    }, []);

    return null;
}