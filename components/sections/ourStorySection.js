import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import Image from 'next/image'

function OurStorySection() {
  return (
    <section className='w-fit grid grid-cols-1 lg:grid-cols-2 py-20 lg:py-40 m-auto max-xl:px-5 max-sm:px-5 gap-20'>
        <section> 
                   <SectionHeader
                    subtitle={"Our Story"} 
                    title={"WHO WE ARE"}
                    titleTag={'h3'}
                    subTitleTag={'h2'}
                    className='mx-5'
                     />
                     <p className='w-full xl:max-w-[600px] px-5 lg:px-10 text-[18px]'>
                      Influenced by 15 years of find values and enriched by professional academic training spanning three years across Egypt and the UK under the Young Leaders program—a collaboration between the British Council in Egypt & the UK and the UK Ministry of Youth & Sports—our founding members underwent the Event Managers Training program and subsequent TOT for Events Managers. This journey laid the foundation for shaping the vision of Paradigm.
                     </p>
        </section>
        <section>
            <Image src="/images/ourStory/bref/bref.webp" width="630" height="420" alt="" className='rounded-[20px] max-xl:w-full' />
        </section>
    </section>
  )
}

export default OurStorySection