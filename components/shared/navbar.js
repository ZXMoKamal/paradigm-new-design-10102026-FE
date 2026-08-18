"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Search from "../icons/search";
import X from "../icons/x";
import Button from "./button";
import Menu from "../icons/menu";
import ContactForm from "./contactForm";
import ContactSection from "../sections/contactSection";
import { cn } from "@/lib/cn";

export default function Navbar() {
    const [openSearch, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const pathname = usePathname();

    const tabs = [
        { name: "Home", href: "/" },
        { name: "Our Story", href: "/our-story/" },
        { name: "Our Services", href: "/our-services/" },
        { name: "Past Events", href: "/past-events/" },
        { name: "Social Responsibility", href: "/csr/" },
        { name: "Contact Us", href: "/contacts/" },
        { name: "Careers", href: "/careers/" },
    ];

    // lock scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Check initial position
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* NAVBAR */ }
            <nav className={cn("fixed top-0 left-0 w-full z-[var(--z-sticky)] text-text-primary", scrolled ? "bg-primary" : "bg-transparent")}>
                <section className="w-full flex items-center justify-between px-6 lg:px-16 py-5 lg:py-7">

                    {/* LEFT: Logo */ }
                    <div className="text-xl font-primary-bold">
                        <img src="/images/logo/paradigm full logo.png" alt="paradigm capital group company logo" fetchPriority="high" width="143" className="max-sm:w-[114px]"/>
                    </div>

                    {/* DESKTOP TABS */ }
                    <section className="flex items-center md:gap-8 gap-2">

                        <ul className="hidden 2xl:flex gap-8">
                            { tabs.map((tab) => {
                                const isActive = pathname === tab.href;

                                return (
                                    <li key={ tab.name } className="relative group">
                                        <Link href={ tab.href }>
                                            <span className="font-primary-semibold text-[16px] cursor-pointer">
                                                { tab.name }
                                            </span>

                                            {/* underline */ }
                                            <span
                                                className={ `
                                                    absolute left-0 -bottom-1 h-[2px] w-full
                                                    bg-white origin-left
                                                    transition-transform duration-300
                                                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                                                `}
                                            />
                                        </Link>
                                    </li>
                                );
                            }) }
                        </ul>

                        {/* Search */ }
                        {/* <button
                            onClick={ () => setSearchOpen(true) }
                            className="p-3 hover:text-secondary transition max-sm:hidden"
                        >
                            <Search className="w-8 h-8 fill-text-primary cursor-pointer" />
                        </button> */}

                        {/* MOBILE MENU BUTTON */ }
                        <button
                            onClick={ () => setMenuOpen(true) }
                            className="2xl:hidden p-2"
                        >
                            <Menu className="w-8 h-8 fill-text-primary cursor-pointer" />
                        </button>

                        {/* CTA */ }
                        <Button variant="solid" size="sm" className="font-[600] px-6 text-sm"  onClick={ () => setContactOpen(true) }>
                            GET A QUOTE
                        </Button>
                    </section>
                </section>
            </nav>

            {/* ================= MOBILE DRAWER ================= */ }
            <section
                className={ `
                    fixed top-0 left-0 h-full w-full max-w-sm
                    bg-primary z-[var(--z-overlay)]
                    transition-transform duration-500
                    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="p-6 space-y-8 ">

                    {/* Header */ }
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-primary-bold">
                            <img src="/images/logo/paradigm full logo.png" alt="paradigm capital group company logo" fetchPriority="high" width="120"/>
                        </div>

                        <div className="flex justify-center items-center gap-6">
                            {/* Search */ }
                            {/* <button
                                onClick={ () => {setSearchOpen(true);setMenuOpen(false);} }
                            >
                                <Search className="w-6 h-6 fill-text-primary cursor-pointer" />
                            </button> */}

                            <button onClick={ () => setMenuOpen(false) }>
                                <X className="w-6 h-6 fill-text-primary cursor-pointer" />
                            </button>
                        </div>
                    </div>

                    {/* Links */ }
                    <ul className="flex flex-col px-2 gap-6 h-[100vh] overflow-y-scroll scrollbar">
                        { tabs.map((tab) => {
                            const isActive = pathname === tab.href;

                            return (
                                <li key={ tab.name }>
                                    <Link
                                        href={ tab.href }
                                        onClick={ () => setMenuOpen(false) }
                                        className="block"
                                    >
                                        <span className="text-lg font-primary-semibold">
                                            { tab.name }
                                        </span>

                                        {/* active underline */ }
                                        <div
                                            className={ `
                                                h-[2px] bg-secondary mt-1
                                                transition-transform duration-300 origin-left
                                                ${isActive ? "scale-x-100" : "scale-x-0"}
                                            `}
                                        />
                                    </Link>
                                </li>
                            );
                        }) }
                    </ul>
                </div>
            </section>

            {/* BACKDROP */ }
            { menuOpen && (
                <div
                    onClick={ () => setMenuOpen(false) }
                    className="fixed inset-0 bg-black/40 z-[1025]"
                />
            ) }

            {/* ================= SEARCH PANEL ================= */ }
            <section
                className={ `
                    fixed top-0 left-0 w-full z-[var(--z-overlay)]
                    bg-primary text-text-primary
                    transition-transform duration-500
                    ${openSearch ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <div className="px-6 py-8 space-y-6">

                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-primary-bold">
                            <img src="/images/logo/paradigm full logo.png" alt="paradigm capital group company logo" fetchPriority="high" width="120"/>
                        </div>

                        <button onClick={ () => setSearchOpen(false) }>
                            <X className="w-6 h-6 fill-text-primary cursor-pointer" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 border-text-opacity-90 pb-2">
                        <input
                            type="text"
                            placeholder="Type words and hit enter"
                            className="
                                w-full md:mx-30 bg-transparent
                                outline-none
                                placeholder:text-primary-light
                                md:text-3xl lg:text-5xl
                                border-b border-white
                            "
                        />

                        <button>
                            <Search className="w-8 h-8 fill-text-primary cursor-pointer" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= Contact PANEL ================= */ }

            <section className={ `fixed top-0 left-0 right-0 bottom-0 h-full w-full flex xl:justify-center xl:items-center
                    bg-primary/80 z-[10000] overflow-y-scroll
                    transition-opacity duration-500 
                    ${contactOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}>
                    <button onClick={ () => setContactOpen(false) }>
                        <X className="w-6 h-6 fill-text-primary cursor-pointer absolute top-10 right-10 z-1000" />
                    </button>
                    <div className={`w-full xl:w-[1300px] transition-transform duration-500 ${contactOpen ? "scale-100" : "scale-0"}`}>
                        <ContactSection/>
                    </div>
            </section>

        </>
    );
}