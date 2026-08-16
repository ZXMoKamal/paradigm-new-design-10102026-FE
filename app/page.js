// "use client"

import Ticker from "@/components/animation/ticker";
import AboutUs from "@/components/sections/aboutUs";
import BackColors from "@/components/sections/backColors";
import BoardMembers from "@/components/sections/boardMembers";
import WelcomeHeader from "@/components/sections/welcomeHeader";
import MembersGrid from "@/components/shared/membersGrid";
import Navbar from "@/components/shared/navbar";
import { VideoSection } from "@/components/shared/videoSection";
import Shared from "@/components/temp/shared";
import OurEvents from "../components/sections/ourEvents";
import OurServicies from "@/components/sections/ourServicies";
import OurClients from "@/components/sections/ourClients";
import Branches from "@/components/sections/branches";
import Footer from "@/components/shared/footer";

export default function Home() {
  
  return (<>
    <main className="relative w-full overflow-hidden">
      <WelcomeHeader welcomeTitleTag="div" />
      <AboutUs />
      <VideoSection
                    images={ [
                        { image: "/images/ezgif-60778de8042c2163.webp", alt: "" },
                        { image: "/images/ezgif-6e984ccb45b0aa96.webp", alt: "" },
                    ] }

                    video="/video/WEBSITE-Recap-2024-Finaaaal-Draft-HORIZONTAL.mp4"
      />
      <BoardMembers/>
      <Ticker
  text="commitment to excellence."
  speed="80s"
  direction="normal"
/>
      <Ticker
  text="commitment to excellence."
  speed="80s"
  direction="reversed"
/>
<OurEvents/>

<OurServicies/>

<OurClients/>

<Branches/>

    </main>

      <BackColors/></>
  );
}
