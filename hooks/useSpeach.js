// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function useSpeech({
//     language = "en-US",
//     onText = null,
// } = {}) {
//     const recognitionRef = useRef(null);

//     const [isListening, setIsListening] = useState(false);
//     const [supported, setSupported] = useState(true);
//     const [text, setText] = useState("");

//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         const SpeechRecognition =
//             window.SpeechRecognition ||
//             window.webkitSpeechRecognition;

//         if (!SpeechRecognition) {
//             setSupported(false);
//             return;
//         }

//         const recognition = new SpeechRecognition();

//         recognition.lang = language;

//         // Keep listening while the user speaks
//         recognition.continuous = true;

//         // Return results while speaking
//         recognition.interimResults = true;

//         recognition.onstart = () => {
//             setIsListening(true);
//         };

//         recognition.onend = () => {
//             setIsListening(false);
//         };

//         recognition.onerror = (event) => {
//             console.error("Speech recognition error:", event.error);
//             setIsListening(false);
//         };

//         recognition.onresult = (event) => {
//             let finalText = "";
//             let interimText = "";

//             for (
//                 let i = event.resultIndex;
//                 i < event.results.length;
//                 i++
//             ) {
//                 const result = event.results[i];

//                 if (result.isFinal) {
//                     finalText += result[0].transcript;
//                 } else {
//                     interimText += result[0].transcript;
//                 }
//             }

//             const resultText = finalText || interimText;

//             setText(resultText);

//             if (finalText && onText) {
//                 onText(finalText);
//             }
//         };

//         recognitionRef.current = recognition;

//         return () => {
//             recognition.stop();
//             recognitionRef.current = null;
//         };
//     }, [language, onText]);

//     function startListening() {
//         if (!recognitionRef.current || isListening) return;

//         setText("");

//         try {
//             recognitionRef.current.start();
//         } catch (error) {
//             console.error("Unable to start speech recognition:", error);
//         }
//     }

//     function stopListening() {
//         if (!recognitionRef.current) return;

//         recognitionRef.current.stop();
//     }

//     function speak(
//         value,
//         {
//             language: speechLanguage = language,
//             rate = 0.95,
//             pitch = 1,
//             volume = 1,
//         } = {}
//     ) {
//         if (typeof window === "undefined") return;

//         if (!("speechSynthesis" in window)) {
//             console.error("Speech synthesis is not supported.");
//             return;
//         }

//         window.speechSynthesis.cancel();

//         const utterance = new SpeechSynthesisUtterance(value);

//         utterance.lang = speechLanguage;
//         utterance.rate = rate;
//         utterance.pitch = pitch;
//         utterance.volume = volume;

//         const voices = window.speechSynthesis.getVoices();

//         const matchingVoice = voices.find(
//             (voice) =>
//                 voice.lang.toLowerCase() ===
//                 speechLanguage.toLowerCase()
//         );

//         if (matchingVoice) {
//             utterance.voice = matchingVoice;
//         }

//         window.speechSynthesis.speak(utterance);
//     }

//     function stopSpeaking() {
//         if (typeof window === "undefined") return;

//         window.speechSynthesis.cancel();
//     }

//     return {
//         supported,

//         isListening,

//         text,

//         startListening,
//         stopListening,

//         speak,
//         stopSpeaking,
//     };
// }




"use client";

import { useEffect, useRef, useState } from "react";

export default function useSpeech({
    language = "en-US",
    languages = ["en-US", "ar-EG"],
    onText = null,
} = {}) {
    const recognitionRef = useRef(null);

    const [isListening, setIsListening] = useState(false);
    const [supported, setSupported] = useState(true);
    const [text, setText] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setSupported(false);
            return;
        }

        const recognition = new SpeechRecognition();

        /*
         * Web Speech API accepts only ONE language
         * for recognition.lang.
         *
         * We therefore use the selected language as the
         * primary recognition language.
         */
        recognition.lang = language;

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error(
                "Speech recognition error:",
                event.error
            );

            setIsListening(false);
        };

        recognition.onresult = (event) => {
            let finalText = "";
            let interimText = "";

            for (
                let i = event.resultIndex;
                i < event.results.length;
                i++
            ) {
                const result = event.results[i];

                if (result.isFinal) {
                    finalText += result[0].transcript;
                } else {
                    interimText += result[0].transcript;
                }
            }

            const resultText = finalText || interimText;

            setText(resultText);

            if (finalText && onText) {
                onText(finalText);
            }
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.stop();
            recognitionRef.current = null;
        };
    }, [language, onText]);

    function startListening() {
        if (!recognitionRef.current || isListening) return;

        setText("");

        try {
            recognitionRef.current.start();
        } catch (error) {
            console.error(
                "Unable to start speech recognition:",
                error
            );
        }
    }

    function stopListening() {
        if (!recognitionRef.current) return;

        recognitionRef.current.stop();
    }

    function speak(
        value,
        {
            language: speechLanguage = null,
            rate = 0.95,
            pitch = 1,
            volume = 1,
        } = {}
    ) {
        if (typeof window === "undefined") return;

        if (!("speechSynthesis" in window)) {
            console.error(
                "Speech synthesis is not supported."
            );

            return;
        }

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(value);

        /*
         * If language isn't explicitly provided,
         * try to detect Arabic/English from the text.
         */
        const detectedLanguage =
            speechLanguage || detectLanguage(value);

        utterance.lang = detectedLanguage;
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;

        const voices =
            window.speechSynthesis.getVoices();

        const matchingVoice = voices.find(
            (voice) =>
                voice.lang.toLowerCase() ===
                detectedLanguage.toLowerCase()
        );

        if (matchingVoice) {
            utterance.voice = matchingVoice;
        }

        window.speechSynthesis.speak(utterance);
    }

    function stopSpeaking() {
        if (typeof window === "undefined") return;

        window.speechSynthesis.cancel();
    }

    return {
        supported,
        isListening,
        text,

        startListening,
        stopListening,

        speak,
        stopSpeaking,
    };
}


/*
 * Detect whether the text contains Arabic characters.
 */
function detectLanguage(text) {
    if (!text) return "en-US";

    const arabicCharacters = text.match(
        /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g
    );

    const englishCharacters = text.match(
        /[A-Za-z]/g
    );

    const arabicCount =
        arabicCharacters?.length || 0;

    const englishCount =
        englishCharacters?.length || 0;

    if (arabicCount > englishCount) {
        return "ar-EG";
    }

    if (englishCount > 0) {
        return "en-US";
    }

    return "en-US";
}