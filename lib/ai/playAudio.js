// "use client";

// export function base64ToAudioUrl(base64, mimeType) {
//     const binaryString = window.atob(base64);

//     const bytes = new Uint8Array(
//         binaryString.length
//     );

//     for (let i = 0; i < binaryString.length; i++) {
//         bytes[i] = binaryString.charCodeAt(i);
//     }

//     const blob = new Blob([bytes], {
//         type: mimeType,
//     });

//     return URL.createObjectURL(blob);
// }

// export async function playBase64Audio(
//     base64,
//     mimeType
// ) {
//     const audioUrl = base64ToAudioUrl(
//         base64,
//         mimeType
//     );

//     const audio = new Audio(audioUrl);

//     audio.onended = () => {
//         URL.revokeObjectURL(audioUrl);
//     };

//     await audio.play();

//     return audio;
// }



// "use client";

// export function base64ToUint8Array(base64) {
//     const binaryString = window.atob(base64);

//     const bytes = new Uint8Array(
//         binaryString.length
//     );

//     for (let i = 0; i < binaryString.length; i++) {
//         bytes[i] = binaryString.charCodeAt(i);
//     }

//     return bytes;
// }


// export async function playBase64Audio(
//     base64,
//     mimeType
// ) {
//     const bytes = base64ToUint8Array(base64);

//     /*
//      * Gemini TTS commonly returns raw PCM/L16 audio.
//      *
//      * We use Web Audio API instead of <audio>
//      * because the browser cannot directly play
//      * raw PCM as a media source.
//      */

//     if (
//         mimeType.includes("audio/L16") ||
//         mimeType.includes("audio/pcm") ||
//         mimeType.includes("audio/raw")
//     ) {
//         return playPCM(bytes);
//     }

//     /*
//      * If Gemini returns a browser-supported format
//      * such as WAV/MP3, use Audio normally.
//      */

//     const blob = new Blob([bytes], {
//         type: mimeType,
//     });

//     const url = URL.createObjectURL(blob);

//     const audio = new Audio(url);

//     audio.onended = () => {
//         URL.revokeObjectURL(url);
//     };

//     await audio.play();

//     return audio;
// }


// async function playPCM(bytes) {
//     /*
//      * Gemini's PCM audio is typically:
//      *
//      * 24 kHz
//      * mono
//      * 16-bit PCM
//      */

//     const sampleRate = 24000;

//     const audioContext =
//         new AudioContext();

//     const dataView =
//         new DataView(
//             bytes.buffer,
//             bytes.byteOffset,
//             bytes.byteLength
//         );

//     /*
//      * 16-bit PCM = 2 bytes per sample
//      */
//     const sampleCount =
//         Math.floor(bytes.byteLength / 2);

//     const audioBuffer =
//         audioContext.createBuffer(
//             1,
//             sampleCount,
//             sampleRate
//         );

//     const channelData =
//         audioBuffer.getChannelData(0);

//     for (let i = 0; i < sampleCount; i++) {
//         const sample =
//             dataView.getInt16(
//                 i * 2,
//                 true
//             );

//         /*
//          * Convert Int16:
//          *
//          * -32768 ... 32767
//          *
//          * into Float32:
//          *
//          * -1 ... 1
//          */
//         channelData[i] =
//             sample < 0
//                 ? sample / 32768
//                 : sample / 32767;
//     }

//     const source =
//         audioContext.createBufferSource();

//     source.buffer = audioBuffer;

//     source.connect(
//         audioContext.destination
//     );

//     source.start();

//     await audioContext.resume();

//     return {
//         pause() {
//             try {
//                 source.stop();
//             } catch {}
//         },

//         currentTime: 0,
//     };
// }


"use client";

export function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);

    const bytes = new Uint8Array(
        binaryString.length
    );

    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
}


export function pcmToAudioBuffer(
    audioContext,
    bytes
) {
    // Gemini:
    // audio/l16; rate=24000; channels=1

    const sampleRate = 24000;
    const channels = 1;
    const bytesPerSample = 2;

    const sampleCount =
        Math.floor(
            bytes.byteLength /
                bytesPerSample
        );

    const audioBuffer =
        audioContext.createBuffer(
            channels,
            sampleCount,
            sampleRate
        );

    const channelData =
        audioBuffer.getChannelData(0);

    const dataView =
        new DataView(
            bytes.buffer,
            bytes.byteOffset,
            bytes.byteLength
        );

    for (let i = 0; i < sampleCount; i++) {
        const sample =
            dataView.getInt16(
                i * 2,
                true
            );

        channelData[i] =
            sample / 32768;
    }

    return audioBuffer;
}