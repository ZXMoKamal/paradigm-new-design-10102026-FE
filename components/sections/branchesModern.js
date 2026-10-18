import React from 'react'
import BranchCard from '../shared/brancheCard'
import { SectionHeader } from '../shared/sectionHeader'
import Image from 'next/image'

function BranchesModern() {
  return (
    <section className="relative m-autoflex flex-col gap-2 max-2xl:px-10 max-sm:px-5 pt-20">
<div className="flex flex-col m-auto max-w-[1300px]">
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
        <section className="w-full gap-6 justify-items-center">

<div className='absolute bottom-12 left-42 flex justify-center items-center w-fit h-fit'>

    <div className='shadow-brand-lg p-5 grid gap-2 backdrop-blur-[2px] border w-60 h-70 mb-70 border-primary border-dashed rounded-xl'>

        {/* Location */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Location</h3>
          <h4 className="text-sm">Giza, Egypt</h4>
        </div>

        {/* Phone */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Phone</h3>
          {/* {
            branch.phone.map((phone,inx)=>{
              return (
                <h4 key={inx}><a href={`tel:${phone}`} className="hover:underline text-2xl">
                  {phone}
                </a>
                <br/></h4>
              )
            })
        } */}
         <h4 ><a href={`tel:+20 2 37489149`} className="hover:underline text-sm">
                  +20 2 37489149

                </a>
                <br/></h4>
        </div>

        {/* Email */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">E-mail</h3>
          {/* {
            branch.email.map((email,inx)=>{
              return (
                <h4 key={inx}><a href={`mailto:${email}`} className="hover:underline text-2xl">
                  {email}
                </a>
                <br/></h4>
              )
            })
          } */}
          <h4><a href={`mailto:info@paradigm-eg.com`} className="hover:underline text-sm">
                 info@paradigm-eg.com 
                </a><br/></h4>
        </div>


    </div>
    {/* <div className='absolute top-0 left-0 rotate-2 backdrop-blur-[2px] border w-60 h-70 mb-70 border-secondary border-dashed rounded-xl'></div> */}

    <div className='relative w-30 h-80 border-t border-r border-dashed border-primary rounded-tr-2xl'>
      <div className='absolute -top-2 -left-2 rounded-full border border-primary w-4 h-4 bg-primary '></div>
      <div className='absolute -bottom-2 -right-2 rounded-full border border-primary w-4 h-4 bg-primary '></div>
    </div>
</div>

<div className='absolute bottom-55 right-32 flex justify-center items-center w-fit h-fit'>

    <div className='relative w-30 h-80 border-t border-l border-dashed border-primary rounded-tl-2xl'>
      <div className='absolute -top-2 -right-2 z-5 rounded-full border border-primary w-4 h-4 bg-primary '></div>
      <div className='absolute -bottom-2 -left-2 rounded-full border border-primary w-4 h-4 bg-primary '></div>
    </div>

    <div className='shadow-brand-lg p-5 grid gap-2 backdrop-blur-[2px] border w-60 h-70 mb-40 border-primary border-dashed rounded-xl'>
      
        {/* Location */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Location</h3>
          <h4 className="text-sm">Riyadh, KSA</h4>
        </div>

        {/* Phone */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Phone</h3>
          {/* {
            branch.phone.map((phone,inx)=>{
              return (
                <h4 key={inx}><a href={`tel:${phone}`} className="hover:underline text-2xl">
                  {phone}
                </a>
                <br/></h4>
              )
            })
        } */}
         <h4 ><a href={`tel:+966 509974859`} className="hover:underline text-sm">
                  +966 509974859

                </a>
                <br/></h4>
        </div>

        {/* Email */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">E-mail</h3>
          {/* {
            branch.email.map((email,inx)=>{
              return (
                <h4 key={inx}><a href={`mailto:${email}`} className="hover:underline text-2xl">
                  {email}
                </a>
                <br/></h4>
              )
            })
          } */}
          <h4><a href={`mailto:info@paradigm-sa.com`} className="hover:underline text-sm">
                info@paradigm-sa.com
                </a><br/></h4>
        </div>
    </div>
    {/* <div className='absolute top-0 left-0 rotate-2 backdrop-blur-[2px] border w-60 h-70 mb-70 border-secondary border-dashed rounded-xl'></div> */}
</div>

<div className='absolute bottom-100 right-160 flex flex-col justify-center items-center w-fit h-fit'>

    <div className='shadow-brand-lg p-5 grid gap-2 backdrop-blur-[2px] border w-60 h-70 ml-30 border-primary border-dashed rounded-xl'>
       
        {/* Location */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Location</h3>
          <h4 className="text-sm">Dubai, United Arab of Emirates</h4>
        </div>

        {/* Phone */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">Phone</h3>
          {/* {
            branch.phone.map((phone,inx)=>{
              return (
                <h4 key={inx}><a href={`tel:${phone}`} className="hover:underline text-2xl">
                  {phone}
                </a>
                <br/></h4>
              )
            })
        } */}
         <h4 ><a href={`tel:+971 588966041`} className="hover:underline text-sm">
                  +971 588966041 <br/> +971 589404624

                </a>
                <br/></h4>
        </div>

        {/* Email */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider text-primary">E-mail</h3>
          {/* {
            branch.email.map((email,inx)=>{
              return (
                <h4 key={inx}><a href={`mailto:${email}`} className="hover:underline text-2xl">
                  {email}
                </a>
                <br/></h4>
              )
            })
          } */}
          <h4><a href={`mailto:info@paradigm-sa.com`} className="hover:underline text-sm">
                info@paradigm-ae.com
                </a><br/></h4>
                </div>
    </div>
    {/* <div className='absolute top-0 left-0 rotate-2 backdrop-blur-[2px] border w-60 h-70 mb-70 border-secondary border-dashed rounded-xl'></div> */}

    <div className='relative w-50 h-50 border-b border-r border-dashed border-primary rounded-tl-2xl'>
      <div className='absolute -top-2 -right-2 z-5 rounded-full border border-primary w-4 h-4 bg-primary '></div>
      <div className='absolute -bottom-2 -left-2 rounded-full border border-primary w-4 h-4 bg-primary '></div>
    </div>

</div>

<img src="/images/home/branches/branches1.png" alt="paradigm capital group Cairo egypt branch" width={100} height={100} className="rounded-lg w-full"/>
        </section>
    </section>
  )
}

export default BranchesModern