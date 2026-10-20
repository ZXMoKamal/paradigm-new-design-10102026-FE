import React from 'react'
import BranchCard from '../shared/brancheCard'
import { SectionHeader } from '../shared/sectionHeader'
import Image from 'next/image'

function BranchesLandmarks() {
  return (
    <section className="relative m-autoflex flex-col gap-2 max-2xl:px-10 max-sm:px-5 pt-20">
<div className="flex flex-col m-auto max-w-[1300px] mb-5">
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  About Company
                </h4>

                <h2 className="max-w-[680px] uppercase text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
                  Come and visit us
                  <br />
                  at one of
                  <span className="text-primary">
                    {" "}our branches
                  </span>
                </h2>
</div>
        <section className="w-full lg:justify-items-center">

<div className="m-auto max-w-[1300px] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:gap-80">
  <div className='p-5 flex flex-col gap-2 w-100'>

          {/* Location */}

            <h3 className="text-2xl uppercase tracking-wider text-primary">Egypt</h3>


            <h4 className="text-xl">Giza, Egypt</h4>
          {/* Phone */}
          <h4 ><a href={`tel:+20 2 37489149`} className="hover:underline text-xl">
                    +20 2 37489149
                  </a>
                  </h4>
          {/* Email */}

            <h4><a href={`mailto:info@paradigm-eg.com`} className="hover:underline text-xl">
                  info@paradigm-eg.com 
                  </a></h4>

  </div>
  <div className='p-5 flex flex-col gap-2 w-100'>

          {/* Location */}

            <h3 className="text-2xl uppercase tracking-wider text-primary">United Arab Emirates</h3>


            <h4 className="text-xl">Dubai, United Arab of Emirates</h4>
          {/* Phone */}
          <h4 ><a href={`tel:+20 2 37489149`} className="hover:underline text-xl">
                    +971 588966041 <br/> +971 589404624
                  </a>
                  </h4>
          {/* Email */}

            <h4><a href={`mailto:info@paradigm-eg.com`} className="hover:underline text-xl">
                  info@paradigm-ae.com 
                  </a></h4>

  </div>
  <div className='p-5 flex flex-col gap-2 w-100'>

          {/* Location */}

            <h3 className="text-2xl uppercase tracking-wider text-primary">Saudi Arabia</h3>


            <h4 className="text-xl">Riyadh, KSA</h4>
          {/* Phone */}
          <h4 ><a href={`tel:+20 2 37489149`} className="hover:underline text-xl">
                    +966 509974859
                  </a>
                  </h4>
          {/* Email */}

            <h4><a href={`mailto:info@paradigm-eg.com`} className="hover:underline text-xl">
                  info@paradigm-sa.com 
                  </a></h4>

  </div>
</div>

<img src="/images/home/branches/branchesOPT.png" alt="paradigm capital group Cairo egypt branch" width={100} height={100} className="rounded-lg w-[100%] lg:w-[80%]"/>
        </section>
    </section>
  )
}

export default BranchesLandmarks