"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageHeader({
  title,
  highlight,
  breadcrumbLabel,
  breadcrumbHref,
  backgroundImage = "/images/sectionHeader.jpeg",
  backgroundAlt = "",
}) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-bg-1">
      {/* Priority-loaded banner image */}
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="z-[-2] object-cover"
      />

      {/* Dark overlay from the original template */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-bg-1/70"
      />

      <div className="container-content relative z-10 py-28 text-center sm:py-36 lg:pt-[220px] lg:pb-[120px]">
        <h1
          data-aos="fade-up"
          className="mb-5 text-[38px] font-medium leading-none tracking-tight text-text-primary sm:text-5xl lg:mb-[30px] lg:text-[80px]"
        >
          {title}{" "}
          {highlight && (
            <span className="font-normal italic text-primary">
              {highlight}
            </span>
          )}
        </h1>

        <nav
          aria-label="Breadcrumb"
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-lg"
        >
          <Link
            href="/"
            className="text-text-primary transition-colors duration-300 hover:text-primary"
          >
            Home
          </Link>

          <span aria-hidden="true" className="text-text-muted">
            |
          </span>

          {breadcrumbHref ? (
            <Link
              href={breadcrumbHref}
              aria-current="page"
              className="text-primary"
            >
              {breadcrumbLabel}
            </Link>
          ) : (
            <span aria-current="page" className="text-primary">
              {breadcrumbLabel}
            </span>
          )}
        </nav>
      </div>
    </section>
  );
}