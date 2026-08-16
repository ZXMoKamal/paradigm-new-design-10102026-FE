import React from 'react'
import StatisticNumber from '../shared/statisticNumber'

function EventStatistics() {
  return (
    <section className='w-full xl:w-[1220px] m-auto grid grid-cols-2 lg:grid-cols-3 justify-items-center py-10 px-10'>
        <section className='max-lg:col-span-2'>
            <h1 data-aos="fade-down" className='font-primary-medium text-text-primary text-center text-[16px]'>Past Events</h1>
            <h2 data-aos="fade-up" className='font-primary-semibold text-text-primary text-center text-[46px]'>Statistics</h2>
        </section>
        <section>
            <StatisticNumber variant='stacked' title={ "Events" } number={ '2600' } suffix='+' titleTag='h2' numberTag='h3' titleClassName={ "text-[20px] text-text-primary" } numberClassName={ "text-secondary lg:text-[38px] text-[32px]" } />
        </section>
        <section>
            <StatisticNumber variant='stacked' title={ "Clients" } number={ '130' } titleTag='h2' numberTag='h3' titleClassName={ "text-[20px] text-text-primary" } numberClassName={ "text-secondary lg:text-[38px] text-[32px]" } />
        </section>
    </section>
  )
}

export default EventStatistics