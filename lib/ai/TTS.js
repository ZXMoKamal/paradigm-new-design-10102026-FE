// "use client";

// import { getTTSModel } from "./model";

// export async function textToSpeech(text) {
//     if (!text || !text.trim()) {
//         return null;
//     }

//     const model = getTTSModel();

//     const result = await model.generateContent(text);

//     const response = result.response;

//     const parts = response.candidates?.[0]?.content?.parts || [];

//     const audioPart = parts.find(
//         (part) => part.inlineData?.mimeType?.startsWith("audio/")
//     );

//     if (!audioPart) {
//         throw new Error("TTS model did not return audio.");
//     }

//     return {
//         mimeType: audioPart.inlineData.mimeType,
//         base64: audioPart.inlineData.data,
//     };
// }


// "use client";

// import { getTTSModel } from "./model";

// export async function textToSpeech(text) {
//     if (!text?.trim()) {
//         return null;
//     }

//     const model = getTTSModel();

//     const result = await model.generateContent(text);

//     const parts =
//         result.response.candidates?.[0]?.content?.parts || [];

//     console.log("TTS response parts:", parts);

//     const audioPart = parts.find(
//         (part) =>
//             part.inlineData?.mimeType?.startsWith("audio/")
//     );

//     if (!audioPart) {
//         console.error("No audio part:", parts);
//         throw new Error("TTS model did not return audio.");
//     }

//     console.log(
//         "TTS MIME type:",
//         audioPart.inlineData.mimeType
//     );

//     console.log(
//         "TTS base64 length:",
//         audioPart.inlineData.data?.length
//     );

//     return {
//         mimeType: audioPart.inlineData.mimeType,
//         base64: audioPart.inlineData.data,
//     };
// }



"use client";

import { getTTSModel } from "./model";


export async function textToSpeech(text) {
    if (!text?.trim()) {
        return null;
    }

    const model =
        getTTSModel();


    const result =
        await model.generateContent(
            text
        );


    const parts =
        result.response
            .candidates?.[0]
            ?.content?.parts || [];


    const audioPart =
        parts.find(
            (part) =>
                part.inlineData
                    ?.mimeType
                    ?.startsWith("audio/")
        );


    if (!audioPart) {
        console.error(
            "No audio part:",
            parts
        );

        throw new Error(
            "TTS model did not return audio."
        );
    }


    console.log(
        "TTS MIME type:",
        audioPart.inlineData.mimeType
    );


    return {
        mimeType:
            audioPart.inlineData.mimeType,

        base64:
            audioPart.inlineData.data,
    };
}