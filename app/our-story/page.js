import OurEvents from '@/components/sections/ourEvents'
import OurFoundation from '@/components/sections/ourFoundation'
import OurStoryHeader from '@/components/sections/ourStoryHeader'
import OurStorySection from '@/components/sections/ourStorySection'
import { VideoSection } from '@/components/shared/videoSection'
import React from 'react'


export const metadata = {
    title: "Our Story",
};


function OurStory() {
  return (
    <main className="relative w-full overflow-hidden">
        <OurStoryHeader/>
        <OurStorySection/>
        <OurFoundation/>
        <VideoSection
            images={ [
                { image: "/images/ezgif-6f9383a7f4f93ea9.webp", alt: "" },
                { image: "/images/ezgif-622bc5fdefea9c0f.webp", alt: "" },
            ] }
        />
        <OurEvents/>
    </main>
  )
}

export default OurStory