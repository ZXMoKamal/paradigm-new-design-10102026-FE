import React from 'react'
import StatisticNumber from './statisticNumber'

function FullStatistics() {
  return (
    <section className='flex items-center gap-15'>
          <StatisticNumber variant='overlay' title={ "Years" } number={ 14 } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[22px]" } numberClassName={ "text-text-opacity-90 text-[90px]" } />
          <div className='h-12 w-[1px] bg-text-opacity-90'></div>
          <StatisticNumber variant='overlay' title={ "Events" } number={ "2600+" } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[22px]" } numberClassName={ "text-text-opacity-90 text-[90px]" } />
          <div className='h-12 w-[1px] bg-text-opacity-90'></div>
          <StatisticNumber variant='overlay' title={ "Mega Events" } number={ 160 } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[22px]" } numberClassName={ "text-text-opacity-90 text-[90px]" } />
          <div className='h-12 w-[1px] bg-text-opacity-90'></div>
          <StatisticNumber variant='overlay' title={ "Clients" } number={ "130+" } titleTag='h2' numberTag='h3' titleClassName={ "text-text-dark text-[22px]" } numberClassName={ "text-text-opacity-90 text-[90px]" } />
    </section>
  )
}

export default FullStatistics