import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { servicesIconCode } from "../icons/iconCodes.js/servicesIconCode";

async function getSearchResults(search) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
        throw new Error("API_URL is not configured");
    }

    const response = await fetch(
        `${API_URL}/search.php?search=${encodeURIComponent(search)}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        // throw new Error("Failed to fetch search results");
        return [];
    }

    return response.json();
}



export default async function SearchResultsSection({searchParams}){

    // Next.js 15/16: searchParams is a Promise
    const params = await searchParams;

    const search = params.search || "";

    const results = await getSearchResults(search);
console.log(results)

    return(
        <section className="m-auto max-w-[1300px] flex flex-col gap-8 pt-30 max-2xl:px-10 max-sm:px-5 pb-20">
            <h1 className="text-[57px]">Search about : {search}</h1>
            <>{!search.trim() && <p className="text-2xl">Please enter something to search.</p>}</>
            {results.length === 0 ? (
                <p className="text-2xl">No results found.</p>
            ) : (<>
                <p className="text-[32px]">Found results : {results.length}</p>
                <section>
                    {results.map((item,index) => (
                        <Fragment key={index}><Link  href={getPageLink(item.page,item.requestTitle)}>
                            <h2 className="text-xl">{item.page}</h2>
                            <br/>
                            {item.image && <img src={item.image} width={300}/>}
                            {item.icon_code && <section className="sm:w-12 w-8 sm:h-12 h-8 shrink-0 flex items-center justify-center rounded-full stroke-1!" style={{ fill: "var(--secondary)" }}>{servicesIconCode[item.icon_code]}</section>}
                            <br/>
                            <h3 className="text-xl">{item.title}</h3>
                            <p className="text-lg font-primary-light">{item.description}</p>
                        </Link>
                        <hr/>
                        <br/></Fragment>
                    ))}
                </section>
            </>)
            }
        </section>
    )
}


function getPageLink(page,requestTitle){
    if(page==="events"){
        return `/portfolio/${requestTitle}`;
    }else if(page==="services"){
        return `/services/${requestTitle}`;
    }
}