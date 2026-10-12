"use client";

import Link from "next/link";
import Image from "next/image";

import Linkedin from "../icons/linkedin";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";

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

    const socialLinks = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/Paradigm4events",
            Icon: Facebook,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/paradigm_ltd_eg/",
            Icon: Instagram,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/paradigm4events/",
            Icon: Linkedin,
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="overflow-hidden bg-[#06192F] text-white">
            {/* Contact CTA */}
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                <div className="border-b border-white/20 text-center">
                    <Link
                        href="/contacts/"
                        className="group relative flex min-h-36 items-center justify-center py-10 sm:min-h-48 lg:min-h-64"
                        aria-label="Contact Paradigm"
                    >
                        <span className="text-[clamp(2.5rem,10vw,11.25rem)] font-semibold uppercase leading-none tracking-tight">
                            Let&apos;s Talk US
                        </span>

                        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-[#90DD8C] text-2xl text-[#001023] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:h-16 sm:w-16 lg:h-[100px] lg:w-[100px] lg:text-4xl">
                            <span className="inline-block transition-transform duration-300 group-hover:rotate-[-45deg]">
                                ↗
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Footer columns */}
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-8 lg:py-24">
                    {/* Company */}
                    <div>
                        <div className="mb-7">
                            <Link
                                href="/"
                                className="inline-flex items-center"
                                aria-label="Paradigm home"
                            >
                                <Image
                                    src="/images/placeholder-logo.png"
                                    alt="Paradigm"
                                    width={170}
                                    height={60}
                                    className="h-auto max-h-[60px] w-auto max-w-[170px] object-contain"
                                />
                            </Link>
                        </div>

                        <p className="mb-6 max-w-xs text-base leading-7 text-[#E7E7E7]">
                            Creating memorable experiences through event
                            management and production.
                        </p>

                        <ul className="flex flex-wrap items-center gap-2">
                            {socialLinks.map(({ name, href, Icon }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-[#90DD8C] hover:text-[#001023]"
                                    >
                                        <Icon className="h-5 w-5 fill-current" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h2 className="mb-7 text-xl font-medium">
                            Quick Links
                        </h2>

                        <ul className="space-y-5">
                            {links.map(({ name, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="group inline-flex items-center gap-2 text-base text-white/80 transition-colors duration-300 hover:text-[#90DD8C]"
                                    >
                                        <span className="w-0 overflow-hidden text-sm opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100">
                                            ›
                                        </span>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact information */}
                    <div>
                        <h2 className="mb-7 text-xl font-medium">
                            Contact Us
                        </h2>

                        <ul className="space-y-5 text-base leading-7 text-[#E7E7E7]">
                            <li className="flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-1 text-[#90DD8C]"
                                >
                                    <span className="icon-placeholder">
                                        {/* Replace with location icon */}
                                        ◉
                                    </span>
                                </span>

                                <a
                                    href="https://www.google.com/maps/place/Paradigm+Ltd./data=!4m2!3m1!1s0x0:0x3b312a21bb17f95f?sa=X&ved=1t:2428&ictx=111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-[#90DD8C]"
                                >
                                    8, 10 Ahmed Nessim Street, 9th floor,
                                    Dokki, Giza, Egypt
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-1 text-[#90DD8C]"
                                >
                                    <span className="icon-placeholder">
                                        {/* Replace with phone icon */}
                                        ◉
                                    </span>
                                </span>

                                <div className="flex flex-col gap-2">
                                    <a
                                        href="tel:+1234567890"
                                        className="transition-colors hover:text-[#90DD8C]"
                                    >
                                        +1 234 567 890
                                    </a>

                                    <a
                                        href="tel:+1987654321"
                                        className="transition-colors hover:text-[#90DD8C]"
                                    >
                                        +1 987 654 321
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-1 text-[#90DD8C]"
                                >
                                    <span className="icon-placeholder">
                                        {/* Replace with email icon */}
                                        ◉
                                    </span>
                                </span>

                                <a
                                    href="mailto:info@paradigm-eg.com"
                                    className="break-all transition-colors hover:text-[#90DD8C]"
                                >
                                    info@paradigm-eg.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div>
                        <h2 className="mb-7 text-xl font-medium">
                            Let&apos;s Work Together
                        </h2>

                        <p className="mb-6 text-base leading-7 text-[#E7E7E7]">
                            Have a project in mind? Get in touch with our team
                            and let&apos;s create something memorable.
                        </p>

                        <Link
                            href="/contacts/"
                            className="inline-flex items-center gap-3 rounded-full bg-[#90DD8C] px-6 py-3 font-medium text-[#001023] transition-colors duration-300 hover:bg-white"
                        >
                            Contact Us
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-10">
                    <p className="text-sm text-white/80">
                        © {currentYear} Paradigm Ltd. All Rights Reserved.
                    </p>

                    <Link
                        href="/contacts/"
                        className="text-sm text-white/80 transition-colors hover:text-[#90DD8C]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
