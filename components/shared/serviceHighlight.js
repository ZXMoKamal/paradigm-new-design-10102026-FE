// 'use client';

import { getService } from '@/api/services';
import { cn } from '@/lib/cn';

export default async function ServiceHighlight({className, serviceRequestTitle}) {
  // console.log(serviceRequestTitle);
  
  

  const s = encodeURIComponent('Event Consultancy & Management'); // Encode the title to handle special characters
  console.log(s);


  const service = await getService(serviceRequestTitle);
console.log(service);
  return (
    <section className={cn('w-full py-5 sm:py-10 lg:py-20 px-5', className)}>
      
      {/* Header */}
      <section className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-[47px] font-primary-medium text-text-primary">
          { service.title }
        </h2>

        <p className="mt-3 text-2xl sm:text-3xl md:text-[35px] text-secondary opacity-80">
          Our Main Services
        </p>
      </section>

      {/* Services Grid */}
      <ul className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6 max-w-[1200px] mx-auto px-2 min-[400px]:px-6
      ">
        {service.points.map((item, index) => (
          <li
            key={index}
            className="
              bg-primary-light
              p-6
              text-text-primary
              transition
              hover:shadow-lg
              hover:-translate-y-1
              text-[20px]
              flex
              justify-center
              items-center
            "
          >
            { item.point.includes("#") ? <ul className='list-disc'>{ item.point.split("#").map((line, i) => (
              <li key={ i }>
                { line }
              </li>
            )) }</ul> :item.point}
          </li>
        ))}
      </ul>

    </section>
  );
}