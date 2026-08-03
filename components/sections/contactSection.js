import React from 'react'
import Email from '../icons/email'
import Phone from '../icons/phone'
import ContactForm from '../shared/contactForm'
import Location from '../icons/location'
import { cn } from '@/lib/cn'

function ContactSection({className=''}) {
  return (
    <section className={cn('grid grid-cols-1 xl:grid-cols-2 gap-5 rounded-2xl w-full xl:w-[1300px] m-auto py-10 px-5 md:px-10 order-1', className)}>
        <section>
            <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl">Contact Info</h2>
            <ul className='font-primary-light'>
                <li className="text-text-primary py-3 text-[18px] md:text-[20px] lg:text-[28px]"><a className="flex items-center gap-5" href="https://maps.google.com/?q=8, 10 Ahmed Nessim Street, 9th floor, Dokki, Giza, Egypt" target="_blank" rel="noopener noreferrer"><Location className="w-8 lg:w-14 h-8 lg:h-14 fill-secondary"/>8, 10 Ahmed Nessim Street, 9th floor, Dokki, Giza, Egypt</a></li>
                <li className="text-text-primary py-3 text-[18px] md:text-[20px] lg:text-[28px]"><a className="flex items-center gap-5" href="mailto:info@paradigm-eg.com" target="_blank" rel="noopener noreferrer"><Email className="w-8 lg:w-10 h-8 lg:h-10 fill-secondary"/>info@paradigm-eg.com</a></li>
                <li className="text-text-primary py-3 text-[18px] md:text-[20px] lg:text-[28px]"><a className="flex items-center gap-5" href="tel:+201026655200" target="_blank" rel="noopener noreferrer"><Phone className="w-8 lg:w-10 h-8 lg:h-10 fill-secondary"/>+201026655200</a></li>
                <li className="text-text-primary py-3 text-[18px] md:text-[20px] lg:text-[28px]"><a className="flex items-center gap-5" href="tel:+20237489149" target="_blank" rel="noopener noreferrer"><Phone className="w-8 lg:w-10 h-8 lg:h-10 fill-secondary"/>+20 2 37489149</a></li>
            </ul>
        </section>
        <section>
            <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl">GET A QUOTE</h2>
            <br/>
            <ContactForm />
        </section>
    </section>
  )
}

export default ContactSection