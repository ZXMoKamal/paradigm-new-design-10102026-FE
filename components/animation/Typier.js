// 'use client';

// import { useEffect, useState } from 'react';

// export default function Typier({
//     words = [],
//     typingSpeed = 80,
//     deletingSpeed = 40,
//     delay = 1000,
//     className = '',
// }) {
//     const [text, setText] = useState('');
//     const [wordIndex, setWordIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);

//     useEffect(() => {
//         if (!words.length) return;

//         const currentWord = words[wordIndex];

//         let timeout;

//         if (!isDeleting) {
//             timeout = setTimeout(() => {
//                 setText(currentWord.slice(0, text.length + 1));
//             }, typingSpeed);

//             if (text === currentWord) {
//                 timeout = setTimeout(() => setIsDeleting(true), delay);
//             }
//         } else {
//             timeout = setTimeout(() => {
//                 setText(currentWord.slice(0, text.length - 1));
//             }, deletingSpeed);

//             if (text === '') {
//                 setIsDeleting(false);
//                 setWordIndex((prev) => (prev + 1) % words.length);
//             }
//         }

//         return () => clearTimeout(timeout);
//     }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

//     return (
//         <span className={ className }>
//             { text }
//             <span className="ml-1 animate-pulse text-secondary">|</span>
//         </span>
//     );
// }



'use client';

import { useEffect, useRef } from 'react';

export default function Typier({
    words = [],
    typingSpeed = 80,
    deletingSpeed = 40,
    delay = 1000,
    className = '',
}) {
    const textRef = useRef(null);

    useEffect(() => {
        if (!words.length || !textRef.current) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        const type = () => {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                charIndex++;
                textRef.current.textContent = currentWord.slice(0, charIndex);

                if (charIndex === currentWord.length) {
                    timeout = setTimeout(() => {
                        isDeleting = true;
                        type();
                    }, delay);
                    return;
                }
            } else {
                charIndex--;
                textRef.current.textContent = currentWord.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        };

        type();

        return () => clearTimeout(timeout);
    }, [words, typingSpeed, deletingSpeed, delay]);

    return (
        <span className={ className }>
            <span ref={ textRef }></span>
            <span className="ml-1 animate-pulse text-secondary">|</span>
        </span>
    );
}