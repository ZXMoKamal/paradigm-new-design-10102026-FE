import EventDetails from '@/components/sections/eventDetails'
import EventSuggestions from '@/components/sections/eventSuggestions'
import React from 'react'

async function portfolio({ params }) {
  const { name } = await params;
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <EventDetails eventTitle={ name } />
      <EventSuggestions/>
      </main>
  )
}

export default portfolio