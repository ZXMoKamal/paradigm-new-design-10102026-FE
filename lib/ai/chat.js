// "use client";

// import { model } from "./model";

// export function createParadigmChat() {
//     return model.startChat({
//         history: [],
//     });
// }

// export async function sendMessage(chat, message) {
//     const result = await chat.sendMessage(message);

//     return result.response.text();
// }


// lib/ai/chat.js
"use client";

import { getModel } from "./model";

 // use the lazy getter, not the eager singleton

export function createParadigmChat() {
    // getModel() is called here, well after firebase.js (and App Check) has loaded
    return getModel().startChat({ history: [] });
}

export async function sendMessage(chat, message) {
    const result = await chat.sendMessage(message); // App Check token attached automatically
    return result.response.text();
}