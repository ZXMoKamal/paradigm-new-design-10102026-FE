// "use client"

import { cva } from "class-variance-authority"
import { cn } from "@/lib/cn"

const textareaVariants = cva(
    "w-full outline-none transition bg-primary py-3 resize-none font-primary-regular",
    {
        variants: {
            rounded: {
                md: "rounded-[30px]",
                full: "rounded-2xl", 
            },
            border: {
                thin: "border border-secondary",
                thick: "border-2 border-secondary",
            },
            hasIcon: {
                true: "px-12",
                false: "px-3",
            },
        },
        defaultVariants: {
            rounded: "md",
            border: "thin",
            hasIcon: false,
        },
    }
)

export function Textarea({
    className,
    rounded,
    border,
    icon,
    label,
    placeholder,
    rows = 4,
    ...props
}) {
    return (
        <div className="w-full">
            <div className="relative">

                {/* Icon */ }
                { icon && (
                    <div className="absolute ltr:left-5 rtl:right-5 top-4 text-white pointer-events-none">
                        { icon }
                    </div>
                ) }

                {/* Textarea */ }
                <textarea
                    rows={ rows }
                    className={ cn(
                        textareaVariants({
                            rounded,
                            border,
                            hasIcon: !!icon,
                        }),
                        "min-h-[100px] font-primary-light",
                        className
                    ) }
                    placeholder={ label ? "" : placeholder }
                    { ...props }
                />
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