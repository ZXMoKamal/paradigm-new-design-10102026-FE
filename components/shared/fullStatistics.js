import React from 'react'
import StatisticNumber from './statisticNumber'

function FullStatistics() {
  return (
    <section className='flex flex-wrap max-md:flex-col items-center justify-center gap-15 mx-10'>
          <StatisticNumber variant='overlay' title={ "Years" } number={ 14 } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[24px]" } numberClassName={ "text-text-opacity-90 xl:text-[90px] lg:text-[65px] md:text-[45px] text-[90px]" } />
          <div data-aos="fade-down" className='max-md:hidden h-12 w-[1px] bg-text-opacity-90'></div>
          <StatisticNumber variant='overlay' title={ "Events" } number={ "2600" } suffix="+" titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[24px]" } numberClassName={ "text-text-opacity-90 xl:text-[90px] lg:text-[65px] md:text-[45px] text-[90px]" } />
          <div data-aos="fade-down" className='max-md:hidden h-12 w-[1px] bg-text-opacity-90 max-md:hidden'></div>
          <StatisticNumber variant='overlay' title={ "Mega Events" } number={ 160 } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[24px]" } numberClassName={ "text-text-opacity-90 xl:text-[90px] lg:text-[65px] md:text-[45px] text-[90px]" } />
          <div data-aos="fade-down" className='max-md:hidden h-12 w-[1px] bg-text-opacity-90'></div>
          <StatisticNumber variant='overlay' title={ "Clients" } number={ "130" } suffix="+" titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[24px]" } numberClassName={ "text-text-opacity-90 xl:text-[90px] lg:text-[65px] md:text-[45px] text-[90px]" } />
    </section>
  )
}

export default FullStatistics