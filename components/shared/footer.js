"use client";

import Link from "next/link";
import Linkedin from "../icons/linkedin";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Image from "next/image";

export default function Footer() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Our Story", href: "/our-story/" },
        { name: "Our Services", href: "/our-services/" },
        { name: "Past Events", href: "/past-events/" },
        { name: "Blog", href: "/blog/" },
        { name: "Contact Us", href: "/contacts/" },
        { name: "Careers", href: "/careers/" },
    ];

    return (
        <footer className="bg-primary text-text-primary max-w-[1400px] m-auto">

            {/* ================= ROW 1 ================= */ }
            <section className="px-5 lg:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[30%_25%_20%_15%] gap-10">

                {/* COL 1 */ }
                <section className="space-y-5 font-primary-light">
                    <Image src="/images/logo/paradigm full logo.png" alt="paradigm capital group company logo" width="186" height="65" className="w-32 w-[186px] h-[65px]" />

                    <h2 className="font-primary-semibold text-lg">
                        Contact Us
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Contact us to explore exciting collaboration opportunities and take your events to the next level!
                    </p>
                </section>

                {/* COL 2 */ }
                <section className="space-y-5">
                    <h2 className="font-primary-semibold text-lg">
                        Office
                    </h2>

                    <ul className="space-y-3 text-lg font-primary-light">
                        <li><a href="https://www.google.com/maps/place/Paradigm+Ltd./data=!4m2!3m1!1s0x0:0x3b312a21bb17f95f?sa=X&ved=1t:2428&ictx=111" target="_blank">8, 10 Ahmed Nessim Street, 9th floor, Dokki, Giza, Egypt</a></li>
                        <li className="group">
                            <a href="mailto:info@paradigm-eg.com" className="hover:opacity-100 relative transition">
                                info@paradigm-eg.com
                            
                                {/* underline animation */ }
                                <span className="
                    absolute left-0 -bottom-1 h-[1px] w-full
                    bg-white origin-left scale-x-0
                    transition-transform duration-300
                    group-hover:scale-x-100
                  " />
                            </a>

                        </li>
                        <li>+1 234 567 890</li>
                        <li>+1 987 654 321</li>
                    </ul>
                </section>

                {/* COL 3 */ }
                <section className="space-y-5">
                    <h2 className="font-primary-semibold text-lg">
                        Links
                    </h2>

                    <ul className="space-y-3 font-primary-light">
                        { links.map((link) => (
                            <li key={ link.name } className="group">
                                <Link
                                    href={ link.href }
                                    className="text-lg hover:opacity-100 relative inline-block transition"
                                >
                                    { link.name }

                                    {/* underline animation */ }
                                    <span className="
                    absolute left-0 -bottom-1 h-[1px] w-full
                    bg-white origin-left scale-x-0
                    transition-transform duration-300
                    group-hover:scale-x-100
                  " />
                                </Link>
                            </li>
                        )) }
                    </ul>
                </section>

                {/* COL 4 */ }
                <section className="space-y-5">
                    <h2 className="font-primary-semibold text-lg">
                        Get in Touch
                    </h2>

                    <ul className="flex flex-col gap-4 text-lg font-primary-light">
                        <li><a href="https://www.facebook.com/Paradigm4events" className="flex items-center gap-2 hover:opacity-100 transition">
                            <Facebook className={"w-6 h-6 fill-text-primary"} /> Facebook
                        </a></li>
                        <li><a href="https://www.instagram.com/paradigm_ltd_eg/" className="flex items-center gap-2 hover:opacity-100 transition">
                            <Instagram className={"w-6 h-6 fill-text-primary"} /> Instagram
                        </a></li>
                        <li><a href="https://www.linkedin.com/company/paradigm4events/" className="flex items-center gap-2 hover:opacity-100 transition">
                            <Linkedin className={"w-6 h-6 fill-text-primary"} /> LinkedIn
                        </a></li>
                    </ul>
                </section>
            </section>

            {/* DIVIDER */ }
            <div className="h-[1px] bg-white/20 mx-6 lg:mx-16" />

            {/* ================= ROW 2 ================= */ }
            <section className="px-6 lg:px-16 py-6 text-center text-sm">
                Paradigm © { new Date().getFullYear() }. All Rights Reserved.
            </section>
        </footer>
    );
}