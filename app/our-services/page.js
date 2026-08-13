import OurServicies from '@/components/sections/ourServicies'
import ServicesIntro from '@/components/sections/servicesIntro'
import { SEO } from '@/data/SEO';
import React from 'react'


function OurServices() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServicesIntro/>
      <OurServicies/>
    </main>
  )
}

export default OurServices