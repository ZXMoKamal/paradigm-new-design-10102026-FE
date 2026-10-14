import React from 'react'
import ImagesGrid from '../shared/imageGrid'
import { getEvents } from '@/api/events';

async function PastEventsSection() {


  const events = await getEvents();


  return (<><div className="text-center max-w-2xl mx-auto space-y-4 py-20" data-aos="fade-up" data-aos-duration="800">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Our Expert Team
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Meet The Minds Behind <span className="text-primary">Our Success</span>
          </h2>
        </div>
    <ImagesGrid items={ events } path={"/portfolio/"}/>
  </>
  )
}

export default PastEventsSection