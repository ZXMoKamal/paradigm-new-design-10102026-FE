import React from 'react'
import ImagesGrid from '../shared/imageGrid'
import { getEvents } from '@/api/events';

async function PastEventsSection() {


  const events = await getEvents();


  return (
    <ImagesGrid items={ events } path={"/portfolio/"}/>
  )
}

export default PastEventsSection