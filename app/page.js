// "use client"

import AboutUs from "@/components/sections/aboutUs";
import BackColors from "@/components/sections/backColors";
import BoardMembers from "@/components/sections/boardMembers";
import WelcomeHeader from "@/components/sections/welcomeHeader";
import Navbar from "@/components/shared/navbar";
import { VideoSection } from "@/components/shared/videoSection";
import Shared from "@/components/temp/shared";

export default function Home() {
  
  return (
    <>
      <Navbar/>
      <WelcomeHeader welcomeTitleTag="div" />
      <AboutUs />
      <VideoSection
                    images={ [
                        { image: "/images/ezgif-60778de8042c2163.webp", alt: "" },
                        { image: "/images/ezgif-6e984ccb45b0aa96.webp", alt: "" },
                    ] }
      />
      <BoardMembers/>
      <BackColors/>
    </>
  );
}
