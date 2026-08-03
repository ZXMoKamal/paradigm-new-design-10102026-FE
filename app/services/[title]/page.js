import Email from '@/components/icons/email'
import Location from '@/components/icons/location'
import Phone from '@/components/icons/phone'
import ContactSection from '@/components/sections/contactSection'
import ServiceHighlightSection from '@/components/sections/serviceHighlightSection'
import ContactForm from '@/components/shared/contactForm'
import React from 'react'

function Services() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlightSection/>
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/>
    </main>
  )
}

export default Services