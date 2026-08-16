import ContactSection from '@/components/sections/contactSection'
import ServiceHighlight from '@/components/shared/serviceHighlight'
import React from 'react'

async function Services({params}) {
  const { requestTitle } = await params;
  // console.log(requestTitle);
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlight serviceRequestTitle={ requestTitle }/>
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/>
    </main>
  )
}

export default Services