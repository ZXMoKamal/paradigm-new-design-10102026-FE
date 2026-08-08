import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import ArrowRight from '../icons/arrowRight'
import LinkButton from '../shared/linkButton'
import ServicesGrid from '../shared/servicesGrid'
import { getServices } from '@/api/services'

function OurServicies() {


  return (
        <section className="m-auto max-w-[1300px] flex flex-col gap-8 max-2xl:px-10 max-sm:px-5 lg:pb-30 pt-20 pb-20">
            <SectionHeader subtitle="OUR SERVICES" 
            title="Take a Look" description="Paradigm Capital Group offers a comprehensive range of services that support event management solutions, ensuring your event is expertly handled from A to Z."
            titleTag="h3"
            subtitleTag="h2"
            buttons={
            <LinkButton
                        href="/about"
                        variant={ "outline" }
                        size='md'
                        className={'max-lg:px-5 max-lg:my-5 max-sm:text-sm'}
                        icon={ <ArrowRight className='w-5 h-5 fill-text-priamry' /> }
                        iconPosition='right'
                    >
                        Detailed Services
                    </LinkButton>
            }/>

      <section className="grid grid-cols-1 xl:grid-cols-[28%_72%] gap-0">
          <section></section>
          <section>

<ServicesGrid nameTag="h3"/>

          </section>
          </section>
        </section>
   
  )
}

export default OurServicies