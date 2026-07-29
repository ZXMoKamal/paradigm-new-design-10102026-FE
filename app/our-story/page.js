import OurEvents from '@/components/sections/ourEvents'
import OurFoundation from '@/components/sections/ourFoundation'
import OurStoryHeader from '@/components/sections/ourStoryHeader'
import OurStorySection from '@/components/sections/ourStorySection'
import { VideoSection } from '@/components/shared/videoSection'
import React from 'react'

function OurStory() {
  return (
    <main className="relative w-full overflow-hidden">
        <OurStoryHeader/>
        <OurStorySection/>
        <OurFoundation/>
         <VideoSection
                            images={ [
                                { image: "/images/ezgif-60778de8042c2163.webp", alt: "" },
                                { image: "/images/ezgif-6e984ccb45b0aa96.webp", alt: "" },
                            ] }
              />
              <OurEvents/>
    </main>
  )
}

export default OurStory