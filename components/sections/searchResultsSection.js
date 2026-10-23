import Image from "next/image";
import Link from "next/link";
import { servicesIconCode } from "../icons/iconCodes.js/servicesIconCode";
import ArrowRight from "../icons/arrowRight";

async function getSearchResults(search) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
        throw new Error("API_URL is not configured");
    }

    try {
        const response = await fetch(
            `${API_URL}/search.php?search=${encodeURIComponent(search)}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            return [];
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

function getPageLink(page, requestTitle) {
    if (page === "events") {
        return `/portfolio/${requestTitle}`;
    } else if (page === "services") {
        return `/services/${requestTitle}`;
    } else if (page === "article") {
        return `/article/${requestTitle}`;
    }
    return "#";
}

export default async function SearchResultsSection({ searchParams }) {
    // Next.js 15/16: searchParams is a Promise
    const params = await searchParams;
    const search = params?.search || "";

    let results = [];
    if (search.trim() !== "") {
        results = await getSearchResults(search);
    }

    return (
        <section className="container-content pt-32 pb-24 space-y-12 min-h-screen">
            {/* Search Header */}
            <div className="space-y-4 border-b border-border-1 pb-8" data-aos="fade-up">
                <span className="inline-flex items-center gap-2 py-2 text-primary text-lg font-heading font-semibold">
                    Search Results
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
                    Search for: <span className="text-primary">&ldquo;{search}&rdquo;</span>
                </h1>
                {results.length > 0 && (
                    <p className="text-text-muted text-base">
                        Found <span className="text-text-primary font-semibold">{results.length}</span> matching result{results.length === 1 ? "" : "s"}
                    </p>
                )}
            </div>

            {/* Condition: No Search Query Entered */}
            {!search.trim() && (
                <div className="bg-bg-2 border border-border-1 rounded-2xl p-12 text-center space-y-4" data-aos="fade-up">
                    <p className="text-xl text-text-primary font-heading font-medium">Please enter a keyword to start searching.</p>
                    <p className="text-text-muted text-sm">Type what you are looking for in the search bar above.</p>
                </div>
            )}

            {/* Condition: No Results Found */}
            {search.trim() !== "" && results.length === 0 && (
                <div className="bg-bg-2 border border-border-1 rounded-2xl p-12 text-center space-y-4" data-aos="fade-up">
                    <p className="text-xl text-text-primary font-heading font-medium">No results found.</p>
                    <p className="text-text-muted text-sm">Try checking your spelling or using different keywords.</p>
                </div>
            )}

            {/* Condition: Results Available */}
            {results.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((item, index) => {
                        // Safely resolve the icon from the mapping object
                        const IconComponent = item.icon_code ? servicesIconCode?.[item.icon_code] : null;

                        return (
                            <Link
                                key={index}
                                href={getPageLink(item.page, item.requestTitle)}
                                className="group bg-bg-2 border border-border-1 rounded-2xl p-6 flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-card hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-duration={400 + index * 100}
                            >
                                <div className="space-y-4">
                                    {/* Top Meta / Category Badge & Icon */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                                            {item.page || "General"}
                                        </span>
                                        {/* Safe rendering check for icon component/element */}
                                        {/* {IconComponent && (
                                            <div 
                                                className="w-10 h-10 rounded-full bg-bg-1 border border-border-1 flex items-center justify-center overflow-hidden"
                                                style={{ color: "var(--secondary)" }}
                                            >
                                                {typeof IconComponent === "function" ? (
                                                    <IconComponent className="w-5 h-5" />
                                                ) : (
                                                    IconComponent
                                                )}
                                            </div>
                                        )} */}
                                    </div>

                                    {/* Optional Thumbnail */}
                                    {item.image && (
                                        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-bg-1 border border-border-1">
                                            <img
                                                src={item.image}
                                                alt={item.title || "Search Result Image"}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    {/* Title & Description */}
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-heading font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                                            {item.title}
                                        </h2>
                                        {item.description && (
                                            <p className="text-sm text-text-muted line-clamp-3 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Action Link Indicator */}
                                <div className="pt-6 mt-6 border-t border-border-1 flex items-center justify-between text-xs font-heading font-semibold text-text-primary group-hover:text-primary transition-colors">
                                    <span>Read More</span>
                                    <ArrowRight className={"w-6 h-6 fill-text-primary"}/>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </section>
    );
}