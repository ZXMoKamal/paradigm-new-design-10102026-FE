// import React from 'react'
// import SocialMediaButtons from '../shared/socialMediaButtons'

// function WelcomeHeader({welcomeTitleTag:WelcomeTitleTag="h1"}) {
//   return (
//     <section className='relative flex justify-center items-center py-75 h-[1080px] max-xl:h-[100vh]'>
//           <WelcomeTitleTag className="mx-10 xl:text-8xl md:text-7xl sm:text-6xl text-5xl [word-spacing:10px] xl:leading-40 sm:leading-30 leading-20 text-center max-w-350">
//             <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-right">Expertly</span>
//             <span className='font-primary-regular inline-block p-2' data-aos="fade-up"> managing</span>
//             <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-down"> Events</span>
//             <span className='font-light inline-block p-2' data-aos="fade-down"> for</span>
//             <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-left"> Global leaders</span>
//         </WelcomeTitleTag>
//         <SocialMediaButtons/>
//     </section>
//   )
// }

// export default WelcomeHeader


"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ArrowDown from "../icons/arrowDown";
import ArrowRight from "../icons/arrowRight";

export default function HeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        let idleId;
        let timeoutId;
        let cancelled = false;

        const loadVideo = () => {
            if (cancelled || !video.isConnected) return;

            video.querySelectorAll("source[data-src]").forEach((source) => {
                source.src = source.dataset.src;
                source.removeAttribute("data-src");
            });

            video.load();

            const playPromise = video.play();

            if (playPromise) {
                playPromise.catch(() => {
                    // Keep the poster visible if autoplay is unavailable.
                });
            }
        };

        const scheduleVideo = () => {
            if (cancelled) return;

            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(loadVideo, {
                    timeout: 1500,
                });
            } else {
                timeoutId = window.setTimeout(loadVideo, 200);
            }
        };

        if (document.readyState === "complete") {
            scheduleVideo();
        } else {
            window.addEventListener("load", scheduleVideo, {
                once: true,
            });
        }

        return () => {
            cancelled = true;
            window.removeEventListener("load", scheduleVideo);

            if (idleId !== undefined) {
                window.cancelIdleCallback?.(idleId);
            }

            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
        };
    }, []);

    return (
        <section
            className="relative isolate h-svh min-h-[600px] overflow-hidden bg-[#001023] text-white"
            aria-labelledby="hero-title"
        >
            {/* Background video */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                aria-hidden="true"
            >
                <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/images/hero-poster.webp"
                    tabIndex={-1}
                >
                    <source
                        data-src="/videos/hero-video.webm"
                        type="video/webm"
                    />
                    <source
                        data-src="/videos/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-[#001023]/60" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#001023]/85 via-[#001023]/30 to-[#001023]/40" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#001023]/80 via-transparent to-[#001023]/20" />
            </div>

            {/* Hero content */}
            <div className="mx-auto flex h-full w-full max-w-[1545px] items-center px-5 sm:px-8 lg:px-12">
                <div className="flex w-full items-center">
                    {/* Vertical scroll indicator */}
                    <Link
                        href="#about"
                        className="mr-8 hidden h-[300px] shrink-0 flex-col items-center justify-between self-center xl:flex 2xl:mr-16"
                        aria-label="Scroll to learn about Paradigm"
                    >
                        <span className="text-center [writing-mode:vertical-lr] text-xs font-medium tracking-[0.2em] text-white/60">
                            SCROLL TO EXPLORE
                        </span>

                        <span className="mb-5 h-32 w-px bg-white/40" />

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#90DD8C]/20 text-lg text-[#90DD8C] transition-colors hover:bg-[#90DD8C] hover:text-[#001023]">
                            <ArrowDown className="h-5 w-5 fill-text-primary" />
                        </span>
                    </Link>

                    {/* Main heading and description */}
                    <div className="flex w-full flex-col justify-center gap-8 py-24 sm:gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                        <div className="max-w-5xl">
                            <p
                                className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#90DD8C] sm:text-sm"
                                data-aos="fade-up"
                            >
                                Paradigm · Events & Experiences
                            </p>

                            <h1
                                id="hero-title"
                                className="text-[clamp(3rem,8.5vw,8.125rem)] font-medium uppercase leading-[0.98] tracking-[-0.045em]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                We Create
                                <br />

                                <span className="font-normal italic text-[#90DD8C]">
                                    Experiences
                                </span>

                                <br />

                                That Connect.
                            </h1>
                        </div>

                        <div
                            className="w-full max-w-md shrink-0 lg:mb-2 lg:max-w-[340px] xl:max-w-[390px]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <p className="max-lg:border-t border-white/30 pt-6 text-base leading-7 text-[#E7E7E7] sm:text-lg sm:leading-8">
                                From bold ideas to unforgettable moments, we
                                bring people, brands, and experiences together
                                through creative event management and
                                production.
                            </p>

                            <Link
                                href="/our-services/"
                                className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#90DD8C] px-7 py-4 text-sm font-semibold text-[#001023] transition-colors duration-300 hover:bg-white"
                            >
                                Explore Our Services

                                <ArrowRight className="h-4 w-4 rotate-300 fill-[#001023] transition-colors duration-300 group-hover:fill-[#90DD8C]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom edge label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:bottom-7 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
                <span>Ideas into Experiences</span>
                <span>Egypt · MENA</span>
            </div>
        </section>
    );
}
