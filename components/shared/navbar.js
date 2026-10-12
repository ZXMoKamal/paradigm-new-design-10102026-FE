"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const searchQuery = useRef(null);
  const headerRef = useRef(null);

  // Navigation items mapping template pages
    const tabs = [
        { name: "Home", href: "/" },
        { name: "Our Story", href: "/our-story/" },
        { name: "Our Services", href: "/our-services/" },
        { name: "Past Events", href: "/past-events/" },
        { name: "Blog", href: "/blog/" },
        { name: "Social Responsibility", href: "/csr/" },
        { name: "Contact Us", href: "/contacts/" },
        { name: "Careers", href: "/careers/" },
    ];
  // Lock scroll when mobile/sidebar menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || isSidebarOpen ? "hidden" : "";
  }, [isMobileMenuOpen, isSidebarOpen]);

  // High-performance DOM manipulation for scroll blur effect (No React state!)
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        headerRef.current.classList.add(
          "bg-bg-1/80",
          "backdrop-blur-md",
          "border-border-1",
          "shadow-lg"
        );
        headerRef.current.classList.remove("bg-transparent", "border-transparent");
      } else {
        headerRef.current.classList.remove(
          "bg-bg-1/80",
          "backdrop-blur-md",
          "border-border-1",
          "shadow-lg"
        );
        headerRef.current.classList.add("bg-transparent", "border-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search button handler
  function handleSearchButton(e) {
    e.preventDefault();
    const query = searchQuery.current?.value?.trim() || "";
    if (query.length > 0 && query.length <= 100) {
      router.push(`/search?search=${encodeURIComponent(query)}`);
      setSearchOpen(false);
    } else if (query.length > 100) {
      alert("Search should be less than or equal to 100 characters");
    }
  }

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
         TRANSPARENT / BLUR NAVBAR (DOM-optimized scroll effect)
         ═══════════════════════════════════════════════════════════ */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-[1020] w-full bg-transparent border-b border-transparent transition-all duration-300"
      >
        <div className="container-content h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-heading font-bold text-bg-1 text-xl group-hover:bg-primary-dark transition-colors">
              A
            </span>
            <span className="font-heading font-bold text-2xl text-text-primary tracking-tight">
              Agenik<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-heading font-medium text-sm text-text-body">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`transition-colors hover:text-primary py-6 ${
                    isActive ? "text-primary font-semibold" : "text-text-body"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Search Icon, Side Menu Trigger & CTA */}
          <div className="flex items-center gap-4">
            
            {/* Search Trigger Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 rounded-full bg-bg-2/50 border border-border-1 flex items-center justify-center text-text-primary hover:border-primary hover:text-primary transition-all"
              aria-label="Open Search Bar"
            >
              <span className="icon-placeholder font-bold text-sm">🔍</span>
            </button>

            {/* Side Menu Trigger Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-bg-2/50 border border-border-1 hover:border-primary text-text-primary hover:text-primary transition-all duration-300"
              aria-label="Open Sidebar Menu"
            >
              <span className="icon-placeholder flex flex-col gap-1 w-5">
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-3 h-0.5 bg-current ml-auto" />
                <span className="block w-5 h-0.5 bg-current" />
              </span>
            </button>

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary hidden md:inline-flex py-2.5 px-5 text-xs">
              Get In Touch
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-bg-2/50 border border-border-1 text-text-primary focus:outline-none"
              aria-label="Toggle Mobile Navigation"
            >
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`} />
              <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`} />
            </button>

          </div>

        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
         SEARCH OVERLAY BAR
         ═══════════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[1050] bg-bg-1/95 backdrop-blur-xl flex flex-col items-center justify-center px-4 transition-all duration-300 ${
          openSearch ? "opacity-150 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 rounded-full bg-bg-2 border border-border-1 flex items-center justify-center text-text-primary hover:border-primary transition-colors"
          aria-label="Close Search"
        >
          <span className="icon-placeholder text-lg font-bold">✕</span>
        </button>

        <form onSubmit={handleSearchButton} className="w-full max-w-2xl text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
            What are you looking for?
          </h3>
          <div className="relative flex items-center">
            <input
              ref={searchQuery}
              type="text"
              placeholder="Type keywords & press enter..."
              className="w-full bg-bg-2 border border-border-1 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary text-lg"
              autoFocus={openSearch}
            />
            <button
              type="submit"
              className="absolute right-3 px-6 py-2.5 bg-primary text-bg-1 font-heading font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         MOBILE NAVIGATION DRAWER
         ═══════════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[1030] bg-bg-1/80 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[1040] w-full max-w-xs sm:max-w-sm h-full bg-bg-2 border-l border-border-1 p-6 flex flex-col justify-between overflow-y-auto lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-1 pb-4">
            <span className="font-heading font-bold text-xl text-text-primary">
              Agenik<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text-muted hover:text-text-primary"
              aria-label="Close Mobile Menu"
            >
              <span className="icon-placeholder text-xl font-bold">✕</span>
            </button>
          </div>

          <nav className="space-y-2 font-heading font-medium text-base">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className="block py-2 text-text-primary hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-border-1">
          <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         OFF-CANVAS SIDEBAR MENU (DESKTOP/TABLET)
         ═══════════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[1030] bg-bg-1/80 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-[1040] w-full max-w-md h-full bg-bg-2 border-l border-border-1 p-8 sm:p-10 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-border-1 pb-6">
            <span className="font-heading font-bold text-2xl text-text-primary">
              Agenik<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-10 h-10 rounded-full bg-bg-1 border border-border-1 flex items-center justify-center text-text-primary hover:border-primary transition-colors"
              aria-label="Close Side Menu"
            >
              <span className="icon-placeholder font-bold text-sm">✕</span>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-text-primary">About Agency</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We design and build modern web applications, high-impact brand identities, and digital products that scale.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-heading font-bold text-text-primary">Contact Info</h4>
            <div className="space-y-3 text-sm text-text-muted">
              <div className="flex items-center gap-3">
                <span className="icon-placeholder w-5 h-5 bg-primary/20 rounded flex-shrink-0" />
                <span>123 Creative Street, Tech District</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="icon-placeholder w-5 h-5 bg-primary/20 rounded flex-shrink-0" />
                <a href="mailto:info@agenik.com" className="hover:text-primary transition-colors">info@agenik.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-1 mt-8">
          <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsSidebarOpen(false)}>
            Schedule a Meeting
          </Link>
        </div>
      </aside>
    </>
  );
}