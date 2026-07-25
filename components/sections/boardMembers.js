import React from 'react'
import { SectionHeader } from '../shared/sectionHeader'
import Link from 'next/link'
import ArrowRight from '../icons/arrowRight'

function BoardMembers() {
  return (
      <section className='w-full flex flex-col items-center justify-center pb-40'>
          <section className='max-w-[1300px] flex flex-col gap-8 mt-40'>
              <SectionHeader title="The Minds Behind the Story" titleTag='h2' subtitle={ "Board members" } subtitleTag='h3'
                  description={ <>
                      Discover the visionary leaders shaping Paradigm’s 
                      journey. Our board members bring a wealth of experience 
                      and expertise to the table, guiding the company toward a 
                      future of innovation, excellence, and sustainable growth.
                      <br/>
                      <br/>
                      <span className="group">
                          <Link
                              href={ ""}
                              className="text-lg hover:opacity-100 relative font-primary-semibold transition"
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


              
          </section>
      </section>
  )
}

export default BoardMembers