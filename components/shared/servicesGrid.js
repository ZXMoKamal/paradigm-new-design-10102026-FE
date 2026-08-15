// 'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import ArrowRight from '../icons/arrowRight';
import { getServices } from '@/api/services';
import { servicesIconCode } from '../icons/iconCodes.js/servicesIconCode';

const colors=['var(--light-red)', 'var(--light-blue)', 'var(--light-yellow)', 'var(--light-green)', 'var(--light-orange)','var(--dark-red)', 'var(--dark-cyan)', 'var(--dark-yellow)', 'var(--dark-orange)'];

export default async function ServicesGrid({
  nameTag: NameTag = 'h3',
  className = '',
}) {

  

  const services = await getServices();

console.log(services)

  return (
    <ul className={cn('grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8', className)}>
      {services.map((service, index) => {
        const color = colors[index % colors.length];

        return (
          <li
            key={index}
            className="group sm:p-6 transition hover:border-white/30 flex items-start gap-4 mb-4"
          >
            {/* TOP ROW */}
            
              <section
                className="sm:w-12 w-8 sm:h-12 h-8 shrink-0 flex items-center justify-center rounded-full stroke-1!"
                style={{ fill: color }}
              >
                {servicesIconCode[service.icon_code]}
              </section>

              <section className="w-full">

                <NameTag className="text-sm sm:text-md md:text-lg font-primary-regular text-text-primary">
                    {service.title}
                </NameTag>

                <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.title.replaceAll(" ","-")}/` || '#'} className="flex items-center justify-start gap-2 relative overflow-hidden" >
                    <span className=" relative text-text-primary opacity-80 transition-transform duration-300 lg:-translate-x-100 translate-x-0 group-hover:-translate-x-0 " >
                        Read more
                    </span>
                    <span className="transform transition-transform duration-300 lg:-translate-x-20 translate-x-0 group-hover:-translate-x-0 " >
                        <ArrowRight className="w-5 h-5 fill-text-primary"/>
                    </span>
                </Link>

              </section>

          </li>
        );
      })}
    </ul>
  );
}