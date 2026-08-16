import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import LinkButton from '../shared/linkButton'
import ArrowRight from '../icons/arrowRight'
import Suggestions from '../shared/suggestions'

function OurEvents() {
  return (
      <section className="m-auto max-w-[1300px] flex flex-col gap-8 pt-20 max-2xl:px-10 max-sm:px-5 pb-20">

        <SectionHeader subtitle="our events" 
        title="Take a Look" description="Check out our latest groundbreaking events!"
        titleTag="h3"
        subTitleTag="h2"
         buttons={
          <LinkButton
                    href="/past-events/"
                    variant={ "outline" }
                    size='md'
                    className={'max-lg:px-5 max-lg:my-5 max-sm:text-sm'}
                    icon={ <ArrowRight className='w-5 h-5 fill-text-priamry' /> }
                    iconPosition='right'
                >
                     View Our Gallery
                </LinkButton>
         }/>

         <section className="grid grid-cols-1 xl:grid-cols-[26%_74%] gap-0">
          <section></section>
          <section>

            <Suggestions TitleTag={ "h3" } items={ [
                {
                    title: "Egypt- France Business Forum", img: "/images/ezgif-608a1f2271991c70.webp", alt: ""
                },
                {
                    title: "2nd Ministerial Conference Khartoum Process", img: "/images/ezgif-6704f832b48fff58.webp", alt: ""
                },
                {
                    title: "The National Initiative for Smart Green Projects", img: "/images/ezgif-6f3d8c1d6cb46c68.webp", alt: ""
                },
            ] } />

          </section>
         </section>


      </section>

  )
}

export default OurEvents