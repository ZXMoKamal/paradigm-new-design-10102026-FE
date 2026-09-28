// "use client";

// import { useRef, useState } from "react";

// import { playBase64Audio } from "@/lib/ai/playAudio";
// import { textToSpeech } from "@/lib/ai/TTS";

// export default function useTTS() {
//     const audioRef = useRef(null);

//     const [speaking, setSpeaking] = useState(false);
//     const [error, setError] = useState("");

//     async function speak(text) {
//         if (!text?.trim()) return;

//         try {
//             setError("");
//             setSpeaking(true);

//             // Stop previous audio
//             stop();

//             const result = await textToSpeech(text);

//             if (!result) {
//                 throw new Error(
//                     "No audio was returned."
//                 );
//             }

//             const audio =
//                 await playBase64Audio(
//                     result.base64,
//                     result.mimeType
//                 );

//             audioRef.current = audio;

//             audio.onended = () => {
//                 setSpeaking(false);
//                 audioRef.current = null;
//             };
//         } catch (error) {
//             console.error(
//                 "TTS error:",
//                 error
//             );

//             setError(
//                 error?.message ||
//                 "Unable to generate speech."
//             );

//             setSpeaking(false);
//         }
//     }

//     function stop() {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//             audioRef.current = null;
//         }

//         setSpeaking(false);
//     }

//     return {
//         speak,
//         stop,
//         speaking,
//         error,
//     };
// }



"use client";

import {
    useRef,
    useState,
} from "react";

import { textToSpeech } from "@/lib/ai/TTS";

import {
    base64ToUint8Array,
    pcmToAudioBuffer,
} from "@/lib/ai/playAudio";


export default function useTTS() {
    const audioContextRef =
        useRef(null);

    const sourceRef =
        useRef(null);

    const [speaking, setSpeaking] =
        useState(false);

    const [error, setError] =
        useState("");


    async function speak(text) {
        if (!text?.trim()) {
            return;
        }

        try {
            /*
             * Stop anything currently playing.
             */
            stop();

            setError("");
            setSpeaking(true);


            /*
             * Get Gemini TTS audio.
             */
            const result =
                await textToSpeech(text);


            if (!result) {
                throw new Error(
                    "No audio was returned."
                );
            }


            /*
             * Create AudioContext only
             * when we actually need it.
             */
            if (
                !audioContextRef.current
            ) {
                audioContextRef.current =
                    new AudioContext();
            }

            const audioContext =
                audioContextRef.current;


            /*
             * Browser may suspend the context.
             */
            if (
                audioContext.state ===
                "suspended"
            ) {
                await audioContext.resume();
            }


            /*
             * Convert base64 → bytes.
             */
            const bytes =
                base64ToUint8Array(
                    result.base64
                );


            /*
             * Convert PCM → AudioBuffer.
             */
            const audioBuffer =
                pcmToAudioBuffer(
                    audioContext,
                    bytes
                );


            /*
             * Create audio source.
             */
            const source =
                audioContext.createBufferSource();

            source.buffer =
                audioBuffer;


            /*
             * Send audio to speakers.
             */
            source.connect(
                audioContext.destination
            );


            sourceRef.current =
                source;


            /*
             * When playback finishes.
             */
            source.onended = () => {
                if (
                    sourceRef.current ===
                    source
                ) {
                    sourceRef.current =
                        null;

                    setSpeaking(false);
                }
            };


            /*
             * Start playback.
             */
            source.start(0);

        } catch (error) {
            console.error(
                "TTS error:",
                error
            );

            setError(
                error?.message ||
                    "Unable to generate speech."
            );

            setSpeaking(false);
        }
    }


    function stop() {
        if (sourceRef.current) {
            try {
                sourceRef.current.stop();
            } catch {
                // Source may already have stopped.
            }

            sourceRef.current =
                null;
        }

        setSpeaking(false);
    }


    return {
        speak,
        stop,
        speaking,
        error,
    };
}