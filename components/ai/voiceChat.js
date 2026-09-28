"use client";

import { useRef, useState } from "react";
import {
    createLiveChat,
    startVoiceConversation,
} from "@/lib/ai/liveChat";

export default function VoiceChat() {
    const sessionRef = useRef(null);
    const controllerRef = useRef(null);

    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleStart() {
        if (loading || active) return;

        setLoading(true);
        setError("");

        try {
            const session = await createLiveChat();

            sessionRef.current = session;

            const controller = await startVoiceConversation(session);

            controllerRef.current = controller;

            setActive(true);
        } catch (error) {
            console.error("Live chat error:", error);

            setError(
                error?.message ||
                "Unable to start voice conversation."
            );

            sessionRef.current = null;
            controllerRef.current = null;
        } finally {
            setLoading(false);
        }
    }

    async function handleStop() {
        try {
            if (controllerRef.current) {
                await controllerRef.current.stop();
            }

            if (sessionRef.current) {
                await sessionRef.current.close();
            }
        } catch (error) {
            console.error("Error stopping voice chat:", error);
        }

        controllerRef.current = null;
        sessionRef.current = null;

        setActive(false);
    }

    return (
        <div className="flex flex-col items-center gap-2">

            {!active ? (
                <button
                    type="button"
                    onClick={handleStart}
                    disabled={loading}
                    aria-label="Start voice chat"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#042a37] text-xl text-white transition hover:opacity-90 disabled:opacity-50"
                >
                    {loading ? "..." : "🎤"}
                </button>
            ) : (
                <button
                    type="button"
                    onClick={handleStop}
                    aria-label="Stop voice chat"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl text-white transition hover:opacity-90"
                >
                    ■
                </button>
            )}

            {active && (
                <span className="text-xs text-secondary">
                    Listening...
                </span>
            )}

            {error && (
                <p className="max-w-xs text-center text-xs text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}