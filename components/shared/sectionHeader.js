// "use client"

import { cn } from "@/lib/cn"

export function SectionHeader({
    className,

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
}) {
    return (
        <section
            className={ cn(
                "w-full flex gap-6 flex-wrap",
                align === "between" && "md:justify-between",
                align === "center" && "md:justify-center text-center",
                align === "start" && "md:justify-start",
                className
            ) }
        >
            {/* LEFT: Subtitle + Title */ }
            <section className="flex flex-col shrink-0 max-md:shrink gap-1">
                { subtitle && (
                    <SubtitleTag className="text-sm font-primary-medium text-text-primary mb-2 uppercase tracking-[0.2em]">
                        { subtitle }
                    </SubtitleTag>
                ) }

                { title && (
                    <TitleTag className="leading-20 text-[57px] md:text-[57px] font-primary-medium text-text-primary">
                        { title }
                    </TitleTag>
                ) }
            </section>

            {/* MIDDLE: Description */ }
            { description && (
                <p className="w-[570px] max-xl:w-full text-[18px] text-text-primary pt-15 max-2xl:pt-0 font-primary-light">
                    { description }
                </p>
            ) }

            {/* RIGHT: Button */ }
            { buttons && (
                <section className="pt-15 max-2xl:pt-0 justify-center flex items-center max-xl:w-full">
                    {buttons}
                </section>
            ) }
        </section>
    )
}