import React from 'react';
import Link from 'next/link';
import { getServices } from '@/api/services';
import { servicesIconCode } from '../icons/iconCodes.js/servicesIconCode';
import ArrowRight from '../icons/arrowRight';

export default async function ServicesSection() {

const services = await getServices();
  return (
    <section className="pt-[20px] pb-[20px] md:pt-[28px] md:pb-[28px] xl:pt-[100px] xl:pb-[75px] bg-bg-1 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-5 right-5 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-2 left-100 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-content relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up" data-aos-duration="800">
          <div className="space-y-4 max-w-xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-2 border border-border-1 text-primary text-xs font-heading font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our Core Services
            </div> */}
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Our Core Services
                </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight">
              High-End Solutions Tailored For Your <span className="text-primary">Business</span>
            </h2>
          </div>
          <div>
            {/* <Link href="/service" className="btn-outline">
              View All Services
              <span className="icon-placeholder inline-block w-4 h-4 bg-primary/20 rounded ml-2" />
            </Link> */}
            <Link
                    href="/our-Services/"
                    className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
                  >
                    <span>Discover More</span>

                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => ( 
            <div
              key={service.id}
              className="group relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-primary transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration={600 + index * 100}
            >
              {/* Top Accent Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="">
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between">
                  {/* <span className="text-xs font-heading font-bold text-text-muted tracking-wider">
                    {service.id}
                  </span> */}
                  <div className="flex items-center justify-centergroup-hover:bg-primary group-hover:text-bg-1 transition-colors duration-300">
                    <img src={service.icon} alt={service.title} className="w-24 h-24" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Read More Link Arrow */}
              <div className="pt-8 mt-8 border-t border-border-1 flex items-center justify-between">
                <Link
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.requestTitle}/` || '#'}
                  className="text-xs font-heading font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2"
                >
                  Explore Details
                  <span className="icon-placeholder w-2 h-2 border-t-2 border-r-2 border-current rotate-45 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}