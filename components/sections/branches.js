import React from 'react'
import BranchCard from '../shared/brancheCard'
import { SectionHeader } from '../shared/sectionHeader'

function Branches() {
  return (
    <section className="m-auto max-w-[1300px] flex flex-col gap-8 max-2xl:px-10 max-sm:px-5 pt-20 pb-20">
<div>
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
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center">
            <BranchCard
  branch={{
    image: '/images/home/branches/eg.jpg',
    alt: 'paradigm capital group Cairo egypt branch',
    location: 'Giza, Egypt',
    phone: ['+20 1026655200','+20 2 37489149'],
    email: ['info@paradigm-eg.com'],
    contactEmail: 'info@paradigm-eg.com',
  }}
/>
            <BranchCard
  branch={{
    image: '/images/home/branches/ue.webp',
    alt: 'paradigm capital group Dubai, United Arab of Emirates branch',
    location: 'Dubai, United Arab of Emirates',
    phone: ['+971 588966041','+971 589404624'],
    email: ['info@paradigm-ae.com'],
    contactEmail: 'info@paradigm-ae.com',
  }}
/>
            <BranchCard
  branch={{
    image: '/images/home/branches/sa.webp',
    alt: 'paradigm capital group Riyadh, KSA branch',
    location: 'Riyadh, KSA',
    phone: ['+966 509974859'],
    email: ['info@paradigm-sa.com'],
    contactEmail: 'info@paradigm-sa.com',
  }}
/>
        </section>
    </section>
  )
}

export default Branches