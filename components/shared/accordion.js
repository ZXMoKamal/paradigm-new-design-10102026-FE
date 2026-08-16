'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import ArrowAngleUp from '../icons/arrowAngleUp';
import ArrowAngleDown from '../icons/arrowAngleDown';

export default function Accordion({
  icon,
  title,
  description,
  faqs = [],
  className,
  titleTag:TitleTag="h3",
  QTag:QTag="h4",
  aosAnimation
}) {
  const [open, setOpen] = useState(false);

  return (
    <section {...aosAnimation} className={cn('w-full xl:w-[1100px] 2xl:w-[1300px]', className)} onClick={() => setOpen(!open)}>
      
      {/* Header */}
      <section className="flex max-sm:flex-col items-start gap-6">
        
        {/* Icon */}
        <section className="flex items-center justify-center rounded-full bg-primary-dark shrink-0">
          {icon}
        </section>

        {/* Text */}
        <section className="w-full flex flex-col gap-6">
            {/* <section className='flex items-center justify-between'> */}
          <TitleTag className="w-full flex justify-between w-full text-xl md:text-2xl lg:text-3xl xl:text-4xl font-primary-medium text-text-primary">
            {title}
                {/* Clickable Description */}
                <button
                    onClick={() => setOpen(!open)}
                    className="group mx-5"
                >
                    {/* + / - Icon */}
                    {open ? <ArrowAngleUp className="lg:w-7 lg:h-7 w-5 h-5 fill-text-primary" /> :  <ArrowAngleDown className="lg:w-7 lg:h-7 w-5 h-5 fill-text-primary" />}
                </button>
          </TitleTag>
            {/* </section> */}
                <p className={cn("text-text-primary opacity-80 group-hover:opacity-100 transition text-md sm:text-lg mb-5")}>
                    {description}
                </p>


        </section>
      </section>

      {/* Collapsible Content */}
      <section
        className={cn(
          'transition-all duration-500 overflow-hidden mx-5 lg:mx-20 border-b',
          open ? 'max-h-[1000px] mt-6 pb-10' : 'max-h-0'
        )}
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 list-decimal pl-5">
          {faqs.map((item, index) => (
            <li key={index} className="text-text-primary">
              
              <QTag className="font-primary-medium text-sm lg:text-lg">
                {item.q}
              </QTag>
                <ul className='list-disc'>

              {item.a.map((item,index)=>(
                <li key={index} className='text-sm lg:text-md opacity-80 mt-1'>{item}</li>
              ))}
                </ul>

              {/* <p className="text-md opacity-80 mt-1">
                {item.a}
              </p> */}

            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}