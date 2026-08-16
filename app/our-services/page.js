import OurServicesDetails from '@/components/sections/ourServices'
import ServicesIntro from '@/components/sections/servicesIntro'
import React from 'react'

function OurServices() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServicesIntro />
      <OurServicesDetails />
    </main>
  )
}

export default OurServices