"use client";

import { cn } from "@/lib/cn";

export default function TabNav({
    tabs = [],
    activeTab,
    onChange,
    className,
}) {
    const activeContent = tabs.find(
        (tab) => tab.value === activeTab
    )?.content;

    return (
        <div className={cn("w-full", className)}>

            {/* Tabs */}
            <div className="flex w-full items-center gap-1 border-b border-gray-200">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.value;

                    return (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() => onChange(tab.value)}
                            className={cn(
                                "relative px-5 py-3 text-sm font-medium transition-colors",

                                "after:absolute after:bottom-0 after:left-0",
                                "after:h-0.5 after:w-full",
                                "after:origin-left after:transition-transform",

                                isActive
                                    ? "text-secondary after:scale-x-100"
                                    : "text-text-primary after:scale-x-0 hover:text-secondary"
                            )}
                        >
                            {tab.icon && (
                                <span className="mr-2 inline-flex">
                                    {tab.icon}
                                </span>
                            )}

                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Active tab content */}
            <div className="mt-6">
                {activeContent}
            </div>

        </div>
    );
}