// "use client"

import { cn } from "@/lib/cn"

export function SectionHeader({
    className="",
    titleClassName="",
    subTitleClassName="",

    // content
    title,
    subtitle,
    description,

    // tags (dynamic)
    titleTag: TitleTag = "h2",
    subtitleTag: SubtitleTag = "p",

    // buttons
    buttons,

    align = "between", // between | center | start
    animated = true,
}) {
    return (
        <section
            className={ cn(
                "flex max-2xl:flex-col 2xl:gap-20",
                align === "between" && "md:justify-between",
                align === "center" && "md:justify-center text-center",
                align === "start" && "md:justify-start",
                className
            ) }
        >
            {/* LEFT: Subtitle + Title */ }
            <section  className="flex flex-col shrink-0 max-md:shrink gap-1">
                { subtitle && (
                    <SubtitleTag data-aos={animated ? "fade-left" : undefined} className={ cn("text-sm font-primary-medium text-text-primary mb-2 uppercase tracking-[0.2em]", subTitleClassName) }>
                        { subtitle }
                    </SubtitleTag>
                ) }

                { title && (
                    <TitleTag data-aos={animated ? "fade-right" : undefined} className={cn("leading-20 lg:text-[57px] md:text-[47px] sm:text-[37px] text-[27px] font-primary-medium text-text-primary", titleClassName)}>
                        { title }
                    </TitleTag>
                ) }
            </section>

            {/* MIDDLE: Description */ }
            { description && (
                <p  data-aos={animated ? "fade-up" : undefined} className="w-[570px] max-xl:w-full lg:text-[18px] text-[16px] text-text-primary pt-15 max-2xl:pt-0 font-primary-light">
                    { description }
                </p>
            ) }

            {/* RIGHT: Button */ }
            { buttons && (
                <section data-aos={animated ? "fade-right" : undefined} className="pt-15 max-2xl:pt-0 justify-end flex items-center max-xl:w-full shrink-0">
                    {buttons}
                </section>
            ) }
        </section>
    )
}

