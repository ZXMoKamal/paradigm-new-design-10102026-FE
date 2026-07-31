import EventDetails from '@/components/sections/eventDetails'
import EventSuggestions from '@/components/sections/eventSuggestions'
import React from 'react'

function portfolio() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <EventDetails   title="Egypt – Spain Business Forum"
        client="ABC Company"
        date="18 September 2025"
        location="St Regis, Cairo"
        images={[
          "/images/ezgif-6704f832b48fff58.webp",
          "/images/ezgif-608a1f2271991c70.webp",
          "/images/ezgif-622bc5fdefea9c0f.webp",
        ]}
        description="As part of strengthening bilateral economic relations, the Egypt – Spain Business Forum highlighted opportunities for collaboration across trade, investment, and innovation sectors. Paradigm Capital Group proudly executed the full event setup, providing a seamless environment for sessions, discussions, and networking. The forum brought together ministers, business leaders, and key international stakeholders, including His Majesty King Felipe VI of Spain and H.E Dr. Mostafa Madbouly, the Egyptian Prime Minister, to explore strategic partnerships that drive economic growth and cooperation between the two nations." />
      <EventSuggestions/>
      </main>
  )
}

export default portfolio