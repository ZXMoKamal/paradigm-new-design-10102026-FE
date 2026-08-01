// "use client"

import { cva } from "class-variance-authority"
import { cn } from "@/lib/cn"

const selectVariants = cva(
    "w-full transition bg-primary py-2",
    {
        variants: {
            rounded: {
                md: "rounded-[10px]",
                full: "rounded-full",
            },
            border: {
                thin: "border border-secondary",
                thick: "border-2 border-secondary",
            },
            hasIcon: {
                true: "px-12",
                false: "px-6",
            },
        },
        defaultVariants: {
            rounded: "md",
            border: "thin",
            hasIcon: false,
        },
    }
)

export function Select({
    className,
    rounded,
    border,
    icon,
    label,
    children,
    ...props
}) {
    return (
        <div className="w-full">
            <div className={ cn(
                selectVariants({
                    rounded,
                    border,
                    hasIcon: !!icon,
                }), "relative") }>

                {/* Icon */ }
                { icon && (
                    <div className="absolute ltr:left-5 rtl:right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                        { icon }
                    </div>
                ) }

                {/* Select */ }
                <select
                    className={ cn(
                        "h-6 w-full bg-primary outline-none font-primary-light",
                        className
                    ) }
                    { ...props }
                >
                    { children }
                </select>
            </div>

            {/* Label */ }
            { label && (
                <p className="mt-1 text-sm text-white">
                    { label }
                </p>
            ) }
        </div>
    )
}