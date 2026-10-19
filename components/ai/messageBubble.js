// components/MessageBubble.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Detects if a string contains Arabic (or other RTL) characters
function isRTL(text) {
    return /[\u0600-\u06FF\u0750-\u077F]/.test(text);
}

export default function MessageBubble({ message }) {
    const isUser = message.role === "user";
    const rtl = isRTL(message.text); // check language direction

    return (
        <div
            dir={rtl ? "rtl" : "ltr"} // flip layout for Arabic
            className={
                isUser
                    ? "ml-auto max-w-[80%] rounded-2xl bg-bg-2 px-4 py-3 text-white"
                    : "mr-auto max-w-[80%] rounded-2xl bg-bg-1 px-4 py-3 text-text-primary"
            }
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]} // enables tables, strikethrough, etc.
                components={{
                    // Style bold text
                    strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                    ),

                    // Style bullet and numbered lists
                    ul: ({ children }) => (
                        <ul className="mt-1 list-disc space-y-1 ps-5">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="mt-1 list-decimal space-y-1 ps-5">{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li className="leading-snug">{children}</li>
                    ),

                    // Style paragraphs (add spacing between blocks)
                    p: ({ children }) => (
                        <p className="mb-1 last:mb-0 leading-relaxed">{children}</p>
                    ),

                    // Style clickable links — color changes based on bubble side
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"          // open in new tab
                            rel="noopener noreferrer" // security best practice
                            className={
                                isUser
                                    ? "underline text-blue-200 hover:text-white"
                                    : "underline text-text-primary hover:text-[#065a72]"
                            }
                        >
                            {children}
                        </a>
                    ),
                }}
            >
                {message.text}
            </ReactMarkdown>
        </div>
    );
}