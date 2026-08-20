// 'use client';

import Image from 'next/image';
import Link from 'next/link';
import LinkButton from './linkButton';
import ArrowRight from '../icons/arrowRight';


export default function BranchCard({branch}) {
  return (
    <section data-aos="zoom-out-down" className="relative w-full lg:w-[430px] 2xl:w-[400px] min-h-[480px] rounded-lg overflow-hidden group font-primary-medium">
      
      {/* Background Image */}
      <Image
        src={branch.image}
        alt={branch.alt}
        fill
        sizes={100}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute w-full h-full px-10 py-10 flex flex-col gap-10 text-text-primary">

        {/* Location */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider mb-5">Location</h3>
          <h4 className="text-2xl">{branch.location}</h4>
        </div>

        {/* Phone */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider mb-5">Phone</h3>
          {
            branch.phone.map((phone,inx)=>{
              return (
                <h4 key={inx}><a href={`tel:${phone}`} className="hover:underline text-2xl">
                  {phone}
                </a>
                <br/></h4>
              )
            })
        }
        </div>

        {/* Email */}
        <div className="">
          <h3 className="text-sm uppercase tracking-wider mb-5">E-mail</h3>
          {
            branch.email.map((email,inx)=>{
              return (
                <h4 key={inx}><a href={`mailto:${email}`} className="hover:underline text-2xl">
                  {email}
                </a>
                <br/></h4>
              )
            })
          }
        </div>

        {/* Button */}
        {branch.contactEmail && (

          <LinkButton
            href={`mailto:${branch.contactEmail}`}
            variant={ "solidAnimated" }
            size='sm'
            className={"absolute bottom-6 right-6"}
        >
                Contact
        </LinkButton>
        )}
      </div>
    </section>
  );
}