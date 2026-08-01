// "use client"

import { cva } from "class-variance-authority"
import { cn } from "@/lib/cn"

const inputVariants = cva(
    "w-full outline-none transition bg-primary py-3 font-primary-regular",
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

export function Input({
    className,
    rounded,
    border,
    icon,
    label,
    placeholder,
    ...props
}) {
    return (
        <div className="w-full">
            <div className="relative">
                {/* Icon */ }
                { icon && (
                    <div className="absolute ltr:left-5 rtl:right-5 top-1/2 -translate-y-1/2 text-white">
                        { icon }
                    </div>
                ) }

                {/* Input */ }
                <input
                    className={ cn(
                        inputVariants({
                            rounded,
                            border,
                            hasIcon: !!icon,
                        }),
                        "h-12 font-primary-light",
                        className
                    ) }
                    placeholder={ label ? "" : placeholder }
                    { ...props }
                />
            </div>

            {/* Label under input (only if label exists) */ }
            { label && (
                <p className="mt-1 text-sm text-white">
                    { label }
                </p>
            ) }
        </div>
    )
}