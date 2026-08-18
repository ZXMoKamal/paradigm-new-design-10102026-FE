// 'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { SectionHeader } from './sectionHeader';

export default function PageBGTitleHeader({
  title="",
  subtitle="",
  titleTag="p",
  subtitleTag="h1",
  bgImage="",
  alt="",
  height = 'lg:h-[710px] h-[410px]',
  overlay = true,
  className="",
}) {
  return (
    <section
      className={cn(
        'relative w-full flex justify-center items-center overflow-hidden',
        height,
        className
      )}
    >
      {/* Background Image */}
      {bgImage && (
        <img
          src={bgImage}
          alt={alt}
          width={100}
          height={100}
          fetchPriority='high'
          className="w-full h-full object-cover absolute -z-1"
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute -z-1 inset-0 bg-black/60" />
      )}

      {/* Content */}
       <SectionHeader
        subtitle={subtitle} 
        title={title}
        titleTag={titleTag}
        subtitleTag={subtitleTag}
        className='mx-10'
         />

    </section>
  );
}