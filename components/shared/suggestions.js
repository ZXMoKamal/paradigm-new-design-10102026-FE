"use client";
import { useEffect, useRef } from "react";

export default function Suggestions({ items=[], titleTag: TitleTag = "h2" }) {

    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;

        const speed = 0.1; // lower = smoother, higher = faster

        const animate = () => {
            x += (targetX - x) * speed;
            y += (targetY - y) * speed;

            if (img) {
                img.style.transform = `translate(${x}px, ${y}px)`;
            }

            requestAnimationFrame(animate);
        };

        const move = (e) => {
            targetX = e.clientX + 20;
            targetY = e.clientY + 20;
        };

        window.addEventListener("mousemove", move);
        animate();

        return () => window.removeEventListener("mousemove", move);
    }, []);

    const showImage = (src,alt) => {
        const img = imgRef.current;
        if (!img) return;

        img.src = src;
        img.alt = alt;
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
    };

    const hideImage = () => {
        const img = imgRef.current;
        if (!img) return;

        img.classList.remove("opacity-100");
        img.classList.add("opacity-0");
    };

    return (
        <section className="relative xl:p-12">
            { items.map((item, i) => (
                <TitleTag
                    key={ i }
                    onMouseOver={ () => showImage(item.img,item.alt) }
                    onMouseLeave={ hideImage }
                    className="xl:text-[34px] md:text-[24px] text-[18px] py-5 border-b border-white cursor-pointer font-primary-medium"
                >
                    { item.title }
                </TitleTag>
            )) }

            {/* floating image */ }
            <img
                ref={ imgRef }
                alt=""
                className="fixed z-1000 top-0 left-0 sm:w-[350px] w-[250px] pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform"
            />
        </section>
    );
}