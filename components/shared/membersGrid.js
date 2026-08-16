'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';

export default function MembersGrid({
  members = [],
  nameTag: NameTag = 'h3',
  positionTag: PositionTag = 'p',
  className = '',
}) {
  return (
    <section className={cn('grid md:grid-cols-2 grid-cols-1 gap-8 justify-items-center', className)}>
      {members.map((member, index) => (
        <div data-aos="zoom-out-up" key={index} className="flex flex-col gap-4 items-center text-center group lg:w-[420px] w-[320px]">
          
          {/* IMAGE */}
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={member.image}
              alt={member.alt}
              fill
              sizes={100}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* NAME */}
          <NameTag className="mt-4 text-2xl font-primary-semibold text-text-primary">
            {member.name}
          </NameTag>

          {/* POSITION */}
          <PositionTag className="text-lg text-text-primary opacity-80">
            {member.position}
          </PositionTag>

        </div>
      ))}
    </section>
  );
}