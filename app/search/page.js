import SearchResultsSection from "@/components/sections/searchResultsSection";

export default function Search({searchParams}){

    return(
        <main className="relative w-full overflow-hidden">
            <SearchResultsSection searchParams={searchParams}/>
        </main>
    )
}