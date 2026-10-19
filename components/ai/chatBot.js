// components/chatBot.js
"use client";

import { useEffect, useRef, useState } from "react";
import { createParadigmChat, sendMessage } from "@/lib/ai/chat"; // only what's needed
import MessageBubble from "./messageBubble";
import VoiceChat from "./voiceChat";
import useTTS from "@/hooks/useTTS";
import Button from "../shared/button";
import X from "../icons/x";
import Send from "../icons/send";

export default function ChatBot() {

    // const { speak, stop, speaking,error } = useTTS();
// useEffect(()=>{
//     speak("Hello from Paradigm");
// console.log(speaking);
// console.log(error);
// },[])

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

    // return (<>
    //     {!open &&<Button className={"fixed bottom-30 right-25 z-[2000]"} onClick={(()=>setOpen(true))}>Ai Assist</Button>}
    //     {open && <div className="fixed z-1500 bottom-0 right-0 flex w-full max-w-lg max-h-200 flex-col overflow-hidden rounded-2xl border border-primary-dark bg-bg-2 shadow">

    //         <div className="flex items-center justify-between border-b p-4">
    //             <div>
    //                 <h2 className="font-semibold text-text-primary text-2xl">Paradigm Assistant</h2>
    //                 <p className="text-sm text-secondary">
    //                     Ask about our services, projects, events or contact information.
    //                 </p>
    //             </div>
    //             <Button className={"w-2 px-8"} onClick={(()=>setOpen(false))}><X className={"w-6 h-6"}/></Button>
    //         </div>

    //         <div className="flex min-h-[400px] flex-col gap-3 overflow-y-auto p-4">
    //             {messages.map((message, index) => (
    //                 <MessageBubble key={index} message={message} className="shadow"/>
    //             ))}

    //             {loading && (
    //                 <div className="mr-auto rounded-2xl bg-bg-2 px-4 py-3 text-secondary">
    //                     Thinking...
    //                 </div>
    //             )}
    //         </div>

    //         <form onSubmit={handleSubmit} className="flex gap-2 border-t p-3">
    //             <input
    //                 value={input}
    //                 onChange={(e) => setInput(e.target.value)}
    //                 disabled={loading}
    //                 placeholder="Ask about Paradigm..."
    //                 className="min-w-0 flex-1 rounded-xl border px-4 py-3 outline-none"
    //             />
    //             <button
    //                 type="submit"
    //                 disabled={loading || !input.trim()}
    //                 className="rounded-full bg-primary p-4 text-bg-1 disabled:opacity-50"
    //             >
    //                 <Send className={"w-6 h-6 fill-bg-1"}/>
    //             </button>

    //             {/* <VoiceChat /> */}
    //         </form>
    //     </div>}
    //     </>
    //);

return(
    
<>
    {!open && (
        <Button
            className="fixed bottom-6 right-6 z-[2000] rounded-full px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setOpen(true)}
        >
            <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-1/15">
                    <Send className="h-5 w-5" />
                </span>
                <span className="flex flex-col items-start">
                    <span className="font-semibold">AI Assist</span>
                    <span className="text-xs opacity-80">How can we help?</span>
                </span>
            </span>
        </Button>
    )}

    {open && (
        <div className="fixed bottom-0 right-0 z-[1500] flex h-[min(680px,90dvh)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-primary-dark/50 bg-bg-2 shadow-2xl sm:bottom-6 sm:right-6 sm:h-[min(680px,85dvh)] sm:rounded-3xl">

            {/* Header */}
            <div className="relative overflow-hidden border-b border-primary-dark/40 bg-bg-1 p-5">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />

                <div className="relative flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-bg-1 shadow-lg">
                            <Send className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                                Paradigm Assistant
                            </h2>
                            <p className="mt-1 text-sm leading-relaxed text-secondary">
                                Ask about our services, projects, events or contact information.
                            </p>
                            {/* <div className="mt-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-xs font-medium text-secondary">
                                    Here to help
                                </span>
                            </div> */}
                        </div>
                    </div>

                    <Button
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-dark/40 bg-bg-2 p-0 transition-colors hover:bg-primary hover:text-bg-1"
                        onClick={() => setOpen(false)}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain bg-bg-2 p-4 sm:p-5">
                {messages.map((message, index) => (
                    <MessageBubble
                        key={index}
                        message={message}
                        className="shadow-sm transition-shadow duration-200"
                    />
                ))}

                {loading && (
                    <div className="mr-auto flex items-center gap-3 rounded-2xl rounded-bl-md border border-primary-dark/30 bg-bg-1 px-4 py-3 text-secondary shadow-sm">
                        <span className="flex gap-1">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                            <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
                        </span>
                        <span className="text-sm">Thinking...</span>
                    </div>
                )}
            </div>

            {/* Input */}
            <form
                onSubmit={handleSubmit}
                className="border-t border-primary-dark/40 bg-bg-1 p-3 sm:p-4"
            >
                <div className="flex items-end gap-2 rounded-2xl border border-primary-dark/50 bg-bg-2 p-2 transition-colors focus-within:border-primary">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={loading}
                        placeholder="Ask about Paradigm..."
                        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-text-primary outline-none placeholder:text-secondary/70 disabled:opacity-50"
                    />

                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        aria-label="Send message"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-bg-1 shadow-md transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <Send className="h-5 w-5 fill-bg-1" />
                    </button>
                </div>

                <p className="mt-2 text-center text-xs text-secondary/70">
                    Powered by Paradigm AI
                </p>

                {/* <VoiceChat /> */}
            </form>
        </div>
    )}
</>

)
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
