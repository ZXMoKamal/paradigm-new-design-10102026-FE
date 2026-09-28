// "use client";

// import { startAudioConversation } from "firebase/ai";
// import { getLiveModel } from "./model";

// export async function createLiveChat() {
//     const model = getLiveModel();

//     const session = await model.connect();

//     return session;
// }

// export async function startVoiceConversation(session) {
//     const controller = await startAudioConversation(session);

//     return controller;
// }


// "use client";

// import { startAudioConversation } from "firebase/ai";
// import { getLiveModel } from "./model";

// export async function createLiveChat() {
//     const model = getLiveModel(); // get or create the live model singleton

//     // connect() opens the WebSocket and waits for setupComplete
//     const session = await model.connect();

//     return session;
// }

// export async function startVoiceConversation(session) {
//     // startAudioConversation handles mic access + streaming to the session
//     const controller = await startAudioConversation(session);

//     return controller;
// }


"use client";

import { startAudioConversation } from "firebase/ai";
import { getLiveModel, resetLiveModel } from "./model";

export async function createLiveChat() {
    try {
        const model = getLiveModel(); // جيب أو اعمل الـ live model

        // connect() بيفتح WebSocket ويستنى setupComplete من السيرفر
        const session = await model.connect();

        return session;
    } catch (error) {
        // لو الاتصال فشل، امسح الـ singleton عشان الـ retry يعمل instance جديدة
        resetLiveModel();
        throw error; // ارمي الـ error للـ component
    }
}

export async function startVoiceConversation(session) {
    // بيفتح الميكروفون ويبدأ يرسل الصوت للـ session
    const controller = await startAudioConversation(session);
    return controller;
}