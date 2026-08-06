import ContactSection from '@/components/sections/contactSection'
import ServiceHighlight from '@/components/shared/serviceHighlight'
import React from 'react'

function Services() {

  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlight />
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/>
    </main>
  )
}

export default Services