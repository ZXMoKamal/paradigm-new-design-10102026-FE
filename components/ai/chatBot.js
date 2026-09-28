// components/chatBot.js
"use client";

import { useEffect, useRef, useState } from "react";
import { createParadigmChat, sendMessage } from "@/lib/ai/chat"; // only what's needed
import MessageBubble from "./messageBubble";
import VoiceChat from "./voiceChat";
import useTTS from "@/hooks/useTTS";
import Button from "../shared/button";
import X from "../icons/x";

export default function ChatBot() {

    const { speak, stop, speaking,error } = useTTS();
useEffect(()=>{
    speak("Hello from Paradigm");
console.log(speaking);
console.log(error);
},[])

    const chatRef = useRef(null);

    // Simple initial state — no localStorage
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: "Hello! How can I help you learn more about Paradigm?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        chatRef.current = createParadigmChat(); // create chat session on mount
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const text = input.trim();
        if (!text || loading) return;

        setInput("");
        setMessages((prev) => [...prev, { role: "user", text }]);
        setLoading(true);

        try {
            const response = await sendMessage(chatRef.current, text);
            setMessages((prev) => [...prev, { role: "assistant", text: response }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", text: "Sorry, I couldn't process your request right now." },
            ]);
        } finally {
            setLoading(false);
        }
    }

    const [open,setOpen] = useState(false);

    return (<>
        {!open &&<Button className={"fixed bottom-30 right-25 z-[2000]"} onClick={(()=>setOpen(true))}>Ai Assist</Button>}
        {open && <div className=" fixed z-1500 bottom-0 right-0 flex w-full max-w-xl max-h-200 flex-col overflow-hidden rounded-2xl border border-primary-dark bg-primary shadow">

            <div className="flex items-center justify-between border-b p-4">
                <div>
                    <h2 className="font-semibold text-text-primary text-2xl">Paradigm Assistant</h2>
                    <p className="text-sm text-secondary">
                        Ask about our services, projects, events or contact information.
                    </p>
                </div>
                <Button className={"w-2 px-8"} onClick={(()=>setOpen(false))}><X className={"w-6 h-6"}/></Button>
            </div>

            <div className="flex min-h-[400px] flex-col gap-3 overflow-y-auto p-4">
                {messages.map((message, index) => (
                    <MessageBubble key={index} message={message} className="shadow"/>
                ))}

                {loading && (
                    <div className="mr-auto rounded-2xl bg-primary-dark px-4 py-3 text-secondary shadow">
                        Thinking...
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t p-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                    placeholder="Ask about Paradigm..."
                    className="min-w-0 flex-1 rounded-xl border px-4 py-3 outline-none"
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="rounded-xl bg-[#042a37] px-5 py-3 text-white disabled:opacity-50"
                >
                    Send
                </button>

                {/* <VoiceChat /> */}
            </form>
        </div>}
        </>
    );
}


// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
// createParadigmChat,
// sendMessage,
// } from "@/lib/ai/chat";
// import MessageBubble from "./messageBubble";
// import VoiceChat from "./voiceChat";
// import useTTS from "@/hooks/useTTS";

// export default function ChatBot() {
// const chatRef = useRef(null);


// const {
//     speak,
//     stop,
//     speaking,
//     error: ttsError,
// } = useTTS();

// /*
//  * TTS is enabled by default.
//  *
//  * true:
//  *   New assistant messages are automatically read.
//  *
//  * false:
//  *   New assistant messages are NOT automatically read.
//  */
// const [autoRead, setAutoRead] = useState(false);

// /*
//  * Index of the message currently being read.
//  *
//  * null = nothing is currently being read.
//  */
// const [speakingMessage, setSpeakingMessage] = useState(null);

// const [messages, setMessages] = useState([
//     {
//         role: "assistant",
//         text: "Hello! How can I help you learn more about Paradigm?",
//     },
// ]);

// const [input, setInput] = useState("");
// const [loading, setLoading] = useState(false);

// useEffect(() => {
//     chatRef.current = createParadigmChat();

//     /*
//      * Read the initial assistant message because
//      * autoRead is enabled by default.
//      */
//     speak(
//         "Hello! How can I help you learn more about Paradigm?"
//     );

//     setSpeakingMessage(0);

//     return () => {
//         stop();
//     };
// }, []);

// /*
//  * Read a specific message manually.
//  *
//  * Clicking Read also enables automatic reading again.
//  */
// async function handleReadMessage(text, index) {
//     if (!text) return;

//     /*
//      * User explicitly clicked Read,
//      * therefore automatic reading is enabled again.
//      */
//     setAutoRead(true);

//     setSpeakingMessage(index);

//     await speak(text);
// }

// /*
//  * Stop the current message.
//  *
//  * This also disables automatic reading for future messages.
//  */
// function handleStopReading() {
//     stop();

//     setSpeakingMessage(null);

//     /*
//      * IMPORTANT:
//      * From now on, new messages will NOT be
//      * automatically read.
//      */
//     setAutoRead(false);
// }

// async function handleSubmit(event) {
//     event.preventDefault();

//     const text = input.trim();

//     if (!text || loading) return;

//     setInput("");

//     setMessages((prev) => [
//         ...prev,
//         {
//             role: "user",
//             text,
//         },
//     ]);

//     setLoading(true);

//     try {
//         const response = await sendMessage(
//             chatRef.current,
//             text
//         );

//         /*
//          * Add the assistant response.
//          */
//         setMessages((prev) => [
//             ...prev,
//             {
//                 role: "assistant",
//                 text: response,
//             },
//         ]);

//         /*
//          * Automatically read the new response
//          * only if the user has not disabled auto-read.
//          *
//          * The message index is calculated from the
//          * current number of messages before adding
//          * the assistant message.
//          */
//         if (autoRead) {
//             const messageIndex = messages.length + 1;

//             setSpeakingMessage(messageIndex);

//             speak(response);
//         }
//     } catch (error) {
//         console.error(error);

//         setMessages((prev) => [
//             ...prev,
//             {
//                 role: "assistant",
//                 text: "Sorry, I couldn't process your request right now.",
//             },
//         ]);
//     } finally {
//         setLoading(false);
//     }
// }

// return (
//     <div className="fixed z-1500 bottom-0 right-0 flex w-full max-w-xl max-h-200 flex-col overflow-hidden rounded-2xl border border-primary-dark bg-primary shadow">

//         <div className="flex items-center justify-between border-b p-4">
//             <div>
//                 <h2 className="font-semibold text-text-primary text-2xl">
//                     Paradigm Assistant
//                 </h2>

//                 <p className="text-sm text-secondary">
//                     Ask about our services, projects, events or contact information.
//                 </p>
//             </div>
//         </div>

//         <div className="flex min-h-[400px] flex-col gap-3 overflow-y-auto p-4">

//             {messages.map((message, index) => (
//                 <div
//                     key={index}
//                     className="flex flex-col gap-1"
//                 >
//                     <MessageBubble
//                         message={message}
//                         className="shadow"
//                     />

//                     {message.role === "assistant" && (
//                         <div className="flex gap-2">

//                             {speakingMessage === index &&
//                             speaking ? (
//                                 <button
//                                     type="button"
//                                     onClick={handleStopReading}
//                                     className="text-sm text-red-400 hover:text-red-300"
//                                 >
//                                     ⏹ Stop
//                                 </button>
//                             ) : (
//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         handleReadMessage(
//                                             message.text,
//                                             index
//                                         )
//                                     }
//                                     className="text-sm text-secondary hover:text-white"
//                                 >
//                                     🔊 Read
//                                 </button>
//                             )}

//                         </div>
//                     )}
//                 </div>
//             ))}

//             {loading && (
//                 <div className="mr-auto rounded-2xl bg-primary-dark px-4 py-3 text-secondary shadow">
//                     Thinking...
//                 </div>
//             )}

//             {ttsError && (
//                 <div className="text-xs text-red-400">
//                     TTS: {ttsError}
//                 </div>
//             )}
//         </div>

//         <form
//             onSubmit={handleSubmit}
//             className="flex gap-2 border-t p-3"
//         >
//             <input
//                 value={input}
//                 onChange={(e) =>
//                     setInput(e.target.value)
//                 }
//                 disabled={loading}
//                 placeholder="Ask about Paradigm..."
//                 className="min-w-0 flex-1 rounded-xl border px-4 py-3 outline-none"
//             />

//             <button
//                 type="submit"
//                 disabled={
//                     loading ||
//                     !input.trim()
//                 }
//                 className="rounded-xl bg-[#042a37] px-5 py-3 text-white disabled:opacity-50"
//             >
//                 Send
//             </button>

//             <VoiceChat />
//         </form>
//     </div>
// );

// }
