import EventStatistics from '@/components/sections/eventStatistics'
import PastEventsSection from '@/components/sections/pastEventsSection'
import PageHeader from '@/components/shared/pageHeader'
import React from 'react'

function PastEvents() {
  return (
    <main className="relative w-full overflow-hidden pb-20">
      <PageHeader title="Past Events" highlight="" breadcrumbLabel="Past Events" breadcrumbHref="/past-events" backgroundAlt="Past Events Header Image"/>
      {/* <EventStatistics/> */}
      <PastEventsSection/>
    </main>
  )
}

export default PastEvents