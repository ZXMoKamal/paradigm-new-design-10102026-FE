import Email from '@/components/icons/email'
import Location from '@/components/icons/location'
import Phone from '@/components/icons/phone'
import ServiceHighlightSection from '@/components/sections/serviceHighlightSection'
import ContactForm from '@/components/shared/contactForm'
import React from 'react'

function Services() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlightSection/> 
       <section className='rounded-2xl xl:absolute bottom-0 right-0 lg:bg-primary-dark w-full xl:w-[600px] py-10 px-5 md:px-10 order-1'>
        <h2 className="mb-5 text-2xl">GET A QUOTE</h2>
        <ContactForm className=""/>
        <br/>
        <br/>
        <h2 className="mb-5 text-2xl">Contact Info</h2>
        <ul className='font-primary-light'>
          <li className="text-text-primary py-3 gap-3"><a className="flex items-center gap-3" href="https://maps.google.com/?q=8, 10 Ahmed Nessim Street, 9th floor, Dokki, Giza, Egypt" target="_blank" rel="noopener noreferrer"><Location className="w-7 h-7 fill-secondary"/>8, 10 Ahmed Nessim Street, 9th floor, Dokki, Giza, Egypt</a></li>
          <li className="text-text-primary py-3 gap-3"><a className="flex items-center gap-3" href="mailto:info@paradigm-eg.com" target="_blank" rel="noopener noreferrer"><Email className="w-7 h-7 fill-secondary"/>info@paradigm-eg.com</a></li>
          <li className="text-text-primary py-3 gap-3"><a className="flex items-center gap-3" href="tel:+201026655200" target="_blank" rel="noopener noreferrer"><Phone className="w-7 h-7 fill-secondary"/>+201026655200</a></li>
          <li className="text-text-primary py-3 gap-3"><a className="flex items-center gap-3" href="tel:+20237489149" target="_blank" rel="noopener noreferrer"><Phone className="w-7 h-7 fill-secondary"/>+20 2 37489149</a></li>
        </ul>
       </section>
    </main>
  )
}

export default Services