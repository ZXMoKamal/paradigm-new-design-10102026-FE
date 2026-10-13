// "use client"

// import Ticker from "@/components/animation/ticker";
import AboutCompany from "@/components/sections/aboutUs";
import BackColors from "@/components/sections/backColors";
import BoardMembers from "@/components/sections/boardMembers";
import Hero from "@/components/sections/Hero";
import MembersGrid from "@/components/shared/membersGrid";
import Navbar from "@/components/shared/navbar";
import { VideoSection } from "@/components/shared/videoSection";
import Shared from "@/components/temp/shared";
// import OurEvents from "../components/sections/ourEvents";
// import OurServicesDetails from "@/components/sections/ourServicesDetails";
import OurClients from "@/components/sections/ourClients";
import Branches from "@/components/sections/branches";
import Footer from "@/components/shared/footer";
import Ticker from "@/components/shared/ticker";
import ServicesSection from "@/components/sections/ourServicesDetails";
import RecentWork from "@/components/sections/ourEvents";
import NewsArticles from "@/components/sections/article";


export default function Home() {
  
  return (<>
    <main className="relative w-full overflow-hidden">
      <Hero />
      <Ticker/>
      <AboutCompany />
      <VideoSection
                    images={ [
                      { image: "/images/ezgif-60778de8042c2163.webp", alt: "NDB Seminar in Egypt Navigating New Horizons" },
                        { image: "/images/ezgif-6e984ccb45b0aa96.webp", alt: "event organized by paradigm" },
                    ] }

                    video="/video/WEBSITE-Recap-2024-Finaaaal-Draft-HORIZONTAL.mp4"
                    />
                    <ServicesSection/>
      {/* <BoardMembers/> */}
      <RecentWork/>

      <OurClients/>
                    <NewsArticles/>

      <Branches/>

    </main>

      {/* <BackColors/> */}
      </>
  );
}
