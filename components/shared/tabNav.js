// "use client";

// import { cn } from "@/lib/cn";

// export default function TabNav({
//     tabs = [],
//     activeTab,
//     onChange,
//     className,
// }) {
//     const activeContent = tabs.find(
//         (tab) => (tab.value === activeTab && tab.hasAccess) || tab.hasAccess
//     )?.content;

//     return (
//         <div className={cn("w-full", className)}>

//             {/* Tabs */}
//             <div className="flex w-full items-center gap-1 border-b border-gray-200">
//                 {tabs.map((tab) => {
//                     const isActive = (activeTab === tab.value) && tab.hasAccess;
//                     if(!tab.hasAccess) return <></>
//                     return (
//                         <button
//                             key={tab.value}
//                             type="button"
//                             onClick={() => onChange(tab.value)}
//                             className={cn(
//                                 "relative px-5 py-3 text-sm font-medium transition-colors",

//                                 "after:absolute after:bottom-0 after:left-0",
//                                 "after:h-0.5 after:w-full",
//                                 "after:origin-left after:transition-transform",

//                                 isActive
//                                     ? "text-secondary after:scale-x-100"
//                                     : "text-text-primary after:scale-x-0 hover:text-secondary"
//                             )}
//                         >
//                             {tab.icon && (
//                                 <span className="mr-2 inline-flex">
//                                     {tab.icon}
//                                 </span>
//                             )}

//                             {tab.label}
//                         </button>
//                     );
//                 })}
//             </div>

//             {/* Active tab content */}
//             <div className="mt-6">
//                 {activeContent}
//             </div>

//         </div>
//     );
// }



"use client";

import { cn } from "@/lib/cn";

export default function TabNav({
    tabs = [],
    activeTab,
    onChange,
    className,
}) {

    /*
    |--------------------------------------------------------------------------
    | Only tabs that the user has access to
    |--------------------------------------------------------------------------
    */

    const accessibleTabs = tabs.filter(
        (tab) => tab.hasAccess
    );


    /*
    |--------------------------------------------------------------------------
    | Get active accessible tab
    |--------------------------------------------------------------------------
    */

    const activeAccessibleTab =
        accessibleTabs.find(
            (tab) => tab.value === activeTab
        ) || accessibleTabs[0];


    /*
    |--------------------------------------------------------------------------
    | Active tab content
    |--------------------------------------------------------------------------
    */

    const activeContent =
        activeAccessibleTab?.content;


    /*
    |--------------------------------------------------------------------------
    | If current activeTab is not accessible,
    | switch to first accessible tab
    |--------------------------------------------------------------------------
    */

    if (
        accessibleTabs.length > 0 &&
        !accessibleTabs.some(
            (tab) => tab.value === activeTab
        )
    ) {

        onChange(
            accessibleTabs[0].value
        );
    }


    return (
        <div className={cn("w-full", className)}>

            {/* Tabs */}

            <div className="flex w-full items-center gap-1 border-b border-gray-200">

                {accessibleTabs.map((tab) => {

                    const isActive =
                        activeAccessibleTab?.value === tab.value;


                    return (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() =>
                                onChange(tab.value)
                            }
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