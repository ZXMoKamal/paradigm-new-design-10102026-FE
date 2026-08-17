import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import Link from 'next/link'
import ArrowRight from '../icons/arrowRight'
import MembersGrid from '../shared/membersGrid'

function BoardMembers() {
  return (

          <section className='m-auto max-w-[1300px] flex flex-col gap-8 max-2xl:px-10 max-sm:px-5 pt-20 pb-20 xl:mt-20'>
              <SectionHeader title="The Minds Behind the Story" titleTag='h3'subtitle={ "Board members" } subtitleTag='h2'
                  description={ <>
                      Discover the visionary leaders shaping Paradigm’s 
                      journey. Our board members bring a wealth of experience 
                      and expertise to the table, guiding the company toward a 
                      future of innovation, excellence, and sustainable growth.
                      <br/>
                      <br/>
                      <span className="group">
                          <Link
                              href={ "/our-story/"}
                              className="lg:text-lg text-md hover:opacity-100 relative font-primary-semibold transition"
                          >
                              Read Our Story <ArrowRight className='w-5 h-5 fill-text-primary inline-block ml-2' />

                              {/* underline animation */ }
                              <span className="
                    absolute left-0 -bottom-1 h-[1px] w-full
                    bg-white origin-left scale-x-0
                    transition-transform duration-300
                    group-hover:scale-x-100
                  " />
                          </Link>
                      </span>
                  </> }
              />
<br/>
<br/>
                  <MembersGrid
        members={[
        {
          image: '/images/ceo.jpg',
          name: 'Adham Badawi',
          position: 'CEO',
          alt: 'Adham Badawi CEO',
        },
        {
          image: '/images/ezgif-649111cac58523a0.webp',
          name: 'Mahmoud Amer',
          position: 'CFO',
          alt: 'Mahmoud Amer CFO',
        }
      ]}
        nameTag="h3"
        positionTag="h4"
      />
              
          </section>

  )
}

export default BoardMembers