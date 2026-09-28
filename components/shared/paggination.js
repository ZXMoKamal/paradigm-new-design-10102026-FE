"use client";

import Link from "next/link";

export default function Pagination({
    page = 1,
    totalPages = 0,
}) {

    if (totalPages <= 1) {
        return null;
    }


    const pages = [];


    // ---------------------------------------------------------
    // Always show first page
    // ---------------------------------------------------------

    pages.push(1);


    // ---------------------------------------------------------
    // Pages around current page
    // ---------------------------------------------------------

    const startPage = Math.max(2, page - 1);

    const endPage = Math.min(
        totalPages - 1,
        page + 1
    );


    if (startPage > 2) {
        pages.push("...");
    }


    for (
        let pageNumber = startPage;
        pageNumber <= endPage;
        pageNumber++
    ) {

        pages.push(pageNumber);

    }


    if (endPage < totalPages - 1) {
        pages.push("...");
    }


    // ---------------------------------------------------------
    // Always show last page
    // ---------------------------------------------------------

    if (totalPages > 1) {
        pages.push(totalPages);
    }


    return (

        <nav
            className="flex justify-center items-center gap-2 mt-10"
            aria-label="Events pagination"
        >

            {/* Previous */}

            {page > 1 ? (

                <Link
                    href={`/portfolio/?page=${page - 1}`}
                    className="px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-white transition"
                >
                    Previous
                </Link>

            ) : (

                <span
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-400 cursor-not-allowed"
                >
                    Previous
                </span>

            )}


            {/* Page numbers */}

            {pages.map((pageNumber, index) => {

                if (pageNumber === "...") {

                    return (
                        <span
                            key={`dots-${index}`}
                            className="px-2 py-2"
                        >
                            ...
                        </span>
                    );

                }


                return (

                    <Link
                        key={pageNumber}
                        href={`/portfolio/?page=${pageNumber}`}
                        className={`px-4 py-2 border rounded-md transition ${
                            pageNumber === page
                                ? "bg-primary text-white border-primary"
                                : "border-primary hover:bg-primary hover:text-white"
                        }`}
                    >
                        {pageNumber}
                    </Link>

                );

            })}


            {/* Next */}

            {page < totalPages ? (

                <Link
                    href={`/portfolio/?page=${page + 1}`}
                    className="px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-white transition"
                >
                    Next
                </Link>

            ) : (

                <span
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-400 cursor-not-allowed"
                >
                    Next
                </span>

            )}

        </nav>

    );
}
