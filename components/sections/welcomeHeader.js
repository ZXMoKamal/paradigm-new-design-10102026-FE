import React from 'react'
import SocialMediaButtons from '../shared/socialMediaButtons'

function WelcomeHeader({welcomeTitleTag:WelcomeTitleTag="h1"}) {
  return (
    <section className='relative flex justify-center items-center py-75 h-[100vh]'>
          <WelcomeTitleTag className="mx-10 xl:text-8xl md:text-7xl sm:text-6xl text-5xl [word-spacing:10px] xl:leading-40 sm:leading-30 leading-20 text-center max-w-350">
            <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-right">Expertly</span>
            <span className='font-primary-regular inline-block p-2' data-aos="fade-up"> managing</span>
            <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-down"> Events</span>
            <span className='font-light inline-block p-2' data-aos="fade-down"> for</span>
            <span className='uppercase font-primary-bold inline-block p-2' data-aos="fade-left"> Global leaders</span>
        </WelcomeTitleTag>
        <SocialMediaButtons/>
    </section>
  )
}

export default WelcomeHeader