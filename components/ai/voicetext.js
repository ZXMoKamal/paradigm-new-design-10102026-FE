"use client";

import useSpeech from "@/hooks/useSpeach";
import { useState } from "react";
// import useSpeech from "@/hooks/useSpeech";

export default function VoiceTest() {
    const [language, setLanguage] = useState("en-US");
    const [message, setMessage] = useState("");

    const {
        supported,
        isListening,
        text,
        startListening,
        stopListening,
        speak,
        stopSpeaking,
    } = useSpeech({
        language,

        onText: (value) => {
            setMessage(value);
        },
    });

    if (!supported) {
        return (
            <p>
                Speech recognition is not supported in this browser.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4 p-5">

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded border p-2"
            >
                <option value="en-US">
                    English
                </option>

                <option value="ar-EG">
                    العربية
                </option>
            </select>

            <button
                type="button"
                onClick={
                    isListening
                        ? stopListening
                        : startListening
                }
                className="rounded-xl bg-[#042a37] px-5 py-3 text-white"
            >
                {isListening
                    ? "⏹ Stop listening"
                    : "🎤 Speak"}
            </button>

            <textarea
                value={message || text}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your speech will appear here..."
                className="min-h-32 rounded border p-3"
            />

            <div className="flex gap-2">

                <button
                    type="button"
                    onClick={() =>
                        speak(message || text)
                    }
                    className="rounded-xl bg-[#042a37] px-5 py-3 text-white"
                >
                    🔊 Read
                </button>

                <button
                    type="button"
                    onClick={stopSpeaking}
                    className="rounded-xl border px-5 py-3"
                >
                    ⏹ Stop
                </button>

            </div>
        </div>
    );
}