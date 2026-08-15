import React from 'react'
import Linkedin from '../icons/linkedin'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'

function SocialMediaButtons() {
    return (
  <div className='absolute bottom-10 right-10 flex gap-2'>
    <a href="https://www.linkedin.com/company/paradigm4events/" target='_blank' className='w-10 h-10 rounded-full border border-text-primary flex justify-center items-center'><Linkedin className={"w-5 h-5 fill-text-primary hover:fill-light-blue"}/></a>
    <a href="https://www.instagram.com/paradigm_ltd_eg/" target='_blank' className='w-10 h-10 rounded-full border border-text-primary flex justify-center items-center'><Instagram className={"w-5 h-5 fill-text-primary hover:fill-dark-orange"}/></a>
    <a href="https://www.facebook.com/Paradigm4events" target='_blank' className='w-10 h-10 rounded-full border border-text-primary flex justify-center items-center'><Facebook className={"w-5 h-5 fill-text-primary hover:fill-light-blue"}/></a>
  </div>
  )
}

export default SocialMediaButtons