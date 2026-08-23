"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/cn"
import X from "../icons/x"

export function VideoSection({
    images = [],
    video = "",
    interval = 5000,
    className,
}) {
    const [index, setIndex] = useState(0)

    const [openVideo, setOpenVideo] = useState(false)

    const containerRef = useRef(null)
    const buttonRef = useRef(null)

    const target = useRef({ x: 0, y: 0 })
    const current = useRef({ x: 0, y: 0 })
    const isHover = useRef(false)

    // 🔁 Slideshow
    useEffect(() => {
        if (!images.length) return

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [images, interval])

    // 🎯 Smooth follow loop
    useEffect(() => {
        const animate = () => {
            // lerp (smooth movement)
            current.current.x += (target.current.x - current.current.x) * 0.1
            current.current.y += (target.current.y - current.current.y) * 0.1

            if (buttonRef.current) {
                buttonRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${target.current.scale})`
            }

            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    // 🖱 Mouse move
    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect()
        target.current.x = e.clientX - rect.left
        target.current.y = e.clientY - rect.top
        target.current.scale = 1.2
    }

    const handleLeave = () => {
        isHover.current = false
        target.current.x = containerRef.current.offsetWidth / 2
        target.current.y = containerRef.current.offsetHeight / 2
        target.current.scale = 1
    }
    
    const handleEnter = () => {
        isHover.current = true
    }

    // 🎯 Set initial center
    useEffect(() => {
        if (!containerRef.current) return
        target.current.x = containerRef.current.offsetWidth / 2
        target.current.y = containerRef.current.offsetHeight / 2
        target.current.scale = 1
    }, [])

    return (
        <>
        <section
        data-aos="zoom-out-up"
            ref={ containerRef }
            className={ cn(
                "relative w-full h-[700px] overflow-hidden",
                className
            ) }
            onMouseMove={ handleMouseMove }
            onMouseEnter={ handleEnter }
            onMouseLeave={ handleLeave }
        >
            {/* Images */ }
            { images.map((img, i) => (
                <div
                    key={ i }
                    className={ cn(
                        "absolute inset-0 transition-all duration-3000",
                        i === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-110"
                    ) }
                >
                    <Image
                        src={ img.image }
                        alt={img.alt}
                        fill
                        priority={ i === 0 }
                        sizes="100vw"
                        className="object-cover"
                        unoptimized
                    />
                </div>
            )) }

            {/* Overlay */ }
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */ }
            <div
                ref={ buttonRef }
                className="absolute"
                style={ {
                    left: 0,
                    top: 0,
                    scale:1
                } }
            >
                <button onClick={()=>setOpenVideo(!openVideo)} className="w-25 h-25 rounded-full text-text-primary border border-white text-black flex items-center justify-center text-sm font-semibold shadow-lg tracking-[2] uppercase">
                    Play
                </button>
            </div>


        </section>
            { openVideo && <div className="flex flex-col bg-primary/80 fixed top-0 z-2000 flex justify-center items-center w-full h-full">
                <button onClick={()=>setOpenVideo(false)} className=" absolute top-30 right-0">
                    <X className={"w-[48px] h-[48px] fill-light-red"}/></button>
                    <video src={video} controls preload="metadata" className="xl:w-[1200px] sm:w-[800px] w-full"/>
                </div>}
                </>
    )
}