// 'use client';

import Image from 'next/image';
import Link from 'next/link';
import LinkButton from './linkButton';
import ArrowRight from '../icons/arrowRight';


export default function BranchCard({branch}) {
  return (
    <section className="relative w-full lg:w-[430px] 2xl:w-[400px] min-h-[480px] rounded-lg overflow-hidden group font-primary-medium">
      
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
          <p className="text-sm uppercase tracking-wider mb-5">Location</p>
          <p className="text-2xl">{branch.location}</p>
        </div>

        {/* Phone */}
        <div className="">
          <p className="text-sm uppercase tracking-wider mb-5">Phone</p>
          {
            branch.phone.map((phone,inx)=>{
              return (
                <><a key={inx} href={`tel:${phone}`} className="hover:underline text-2xl">
                  {phone}
                </a>
                <br/></>
              )
            })
        }
        </div>

        {/* Email */}
        <div className="">
          <p className="text-sm uppercase tracking-wider mb-5">E-mail</p>
          {
            branch.email.map((email,inx)=>{
              return (
                <><a key={inx}href={`mailto:${email}`} className="hover:underline text-2xl">
                  {email}
                </a>
                <br/></>
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