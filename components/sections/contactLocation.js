import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import ContactForm from '../shared/contactForm'

function ContactLocation() {
  return (
    <section className='relative px-5 lg:py-10 w-full xl:w-[1320px] m-auto flex flex-col'>
          <SectionHeader title={ 'LET\'s WORK TOGETHER' } subtitle={ 'Contact Us' }/>
          <iframe
              loading="lazy"
              src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=12&amp;q=8+%D8%A3%D8%AD%D9%85%D8%AF+%D9%86%D8%B3%D9%8A%D9%85%D8%8C+%D8%A3%D9%88%D9%84%D9%89%D8%8C+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+3726532" aria-label="" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=12&amp;q=8+%D8%A3%D8%AD%D9%85%D8%AF+%D9%86%D8%B3%D9%8A%D9%85%D8%8C+%D8%A3%D9%88%D9%84%D9%89%D8%8C+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+3726532"
              data-ll-status="loaded"
              className='w-full xl:w-[740px] h-[635px] my-10 order-2'
          ></iframe>
          <section className='rounded-2xl xl:absolute bottom-0 right-0 lg:bg-primary-dark w-full xl:w-[600px] py-10 px-2 md:px-10 order-1'>
              <ContactForm/>
          </section>
    </section>
  )
}

export default ContactLocation