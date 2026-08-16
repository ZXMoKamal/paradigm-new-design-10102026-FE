import React from 'react'
import Code from '../icons/code'
import ArrowRotate from '../icons/arrowRotate'

function ServicesIntro() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[45%_23%_23%] gap-10 m-auto w-full xl:w-[1370px] pb-10 px-5 sm:px-10 sm:pt-5 xl:pt-20'>
        <section className='md:max-xl:col-span-2'>
            <h1 data-aos="fade-right" className='text-[27px] sm:text-[37px] md:text-[47px] lg:text-[57px] font-primary-medium lg:tracking-tight lg:leading-18 mb-6'>Enhance your events with our premium solutions</h1>
            <p data-aos="fade-down" className='text-[16px] md:text-[18px] lg:text-[20px] font-primary-light leading-7'>Elevating formal gatherings through innovative solutions and the latest technologies, we orchestrate seamless experiences that embody sustainability and sophistication at every turn.</p>
        </section>
        <section>
            <Code data-aos="fade-right" className={'w-12 h-12 lg:w-15 lg:h-15 fill-secondary'}/>
            <br/>
            <h2 data-aos="fade-right" className='text-[20px] lg:text-[24px] font-primary-medium mb-5'>Premium Technologies</h2>
            <p data-aos="fade-down" className='text-[14px] lg:text-[17px] font-primary-light'>We utilize the latest premium technologies in audio, visual solutions, and interpretation systems to enhance your events. Our cutting-edge devices ensure seamless management and an unforgettable experience for all attendees. Trust us to elevate your event!</p>
        </section>
        <section>
            <ArrowRotate className={'w-12 h-12 lg:w-15 lg:h-15 fill-secondary'}/>
            <br/>
            <h2 data-aos="fade-left" className='text-[20px] lg:text-[24px] font-primary-medium mb-5'>Highly Maintained Logistics</h2>
            <p data-aos="fade-down" className='text-[14px] lg:text-[17px] font-primary-light'>We maintain highly efficient logistics and a skilled workforce to ensure smooth event management. Our team is dedicated to delivering exceptional support, making your event a success every step of the way. Trust us for seamless execution and professionalism!</p>
        </section>
    </section>
  )
}

export default ServicesIntro