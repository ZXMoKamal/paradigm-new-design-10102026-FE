import EventStatistics from '@/components/sections/eventStatistics'
import PastEventsSection from '@/components/sections/pastEventsSection'
import React from 'react'

function PastEvents() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <EventStatistics/>
      <PastEventsSection/>
    </main>
  )
}

export default PastEvents