import ContactSection from '@/components/sections/contactSection'
import ServiceHighlight from '@/components/shared/serviceHighlight'
import React from 'react'

async function Services({params}) {
  const { title } = await params;
  console.log(title);
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlight serviceTitle={ title }/>
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/>
    </main>
  )
}

export default Services