import React from 'react'
import ZeroHanger from '../icons/zeroHanger'
import GenderEquality from '../icons/genderEquality'
import ReasonableConsumption from '../icons/reasonableConsumption'
import ClimateAction from '../icons/climateAction'

function CsrPoints() {
  return (
    <section className='w-full xl:w-[1300px] m-auto px-5 lg:py-10'>
        <section className='flex gap-6 max-lg:flex-wrap'>
              <h1 className='font-primary-medium text-[28px] sm:text-[48px] lg:text-[57px] w-full lg:w-[50%] sm:leading-20'>Paradigm & Corporate Social Responsibility</h1>
              <p className='font-primary-light text-[16px] sm:text-[18px] w-full lg:w-[50%] lg:py-5'>We strongly believe in the value of Corporate Social Responsibilities; It is a culturally embedded concept and a widely embraced social practice in our community. The bigger we grow as a company, the more we become aware of our impact potential. With sustainability being the core focus of our vision, we take inspiration from the United Nations’ Global Goals, and we strive to actively participate in achieving those goals within the field of our practices.</p>
        </section>
        <br/>
        <section>    
            <ul className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                <li className='flex flex-col gap-2 border-2 sm:border-5 border-dark-yellow rounded-[20px] p-5 sm:p-10 '>
                    <ZeroHanger className={'lg:w-[75px] lg:h-[75px] w-[52px] h-[52px] fill-none'}/>
                    <h2 className='text-[20px] sm:text-[25px]'>Gender Equality & Women Empowerment</h2>
                    <p className='text-[14px] sm:text-[18px] font-primary-light'>Paradigm is more than 50% women owned. We believe in providing equal opportunities without gender bias. Our team is gender balanced, with diverse team members from different academic and social backgrounds working together in an environment that is a safe space for everyone with equal career development opportunities. We also make sure to support women startups and initiatives by giving them priority when sourcing a lot of the handcrafted products we use a lot in our line of business.</p>
                </li>
                <li className='flex flex-col gap-2 border-2 sm:border-5 border-dark-orange rounded-[20px] p-5 sm:p-10 '>
                    <GenderEquality className={'lg:w-[75px] lg:h-[75px] w-[52px] h-[52px] fill-none'}/>
                    <h2 className='text-[20px] sm:text-[25px]'>Gender Equality & Women Empowerment</h2>
                    <p className='text-[14px] sm:text-[18px] font-primary-light'>Paradigm is more than 50% women owned. We believe in providing equal opportunities without gender bias. Our team is gender balanced, with diverse team members from different academic and social backgrounds working together in an environment that is a safe space for everyone with equal career development opportunities. We also make sure to support women startups and initiatives by giving them priority when sourcing a lot of the handcrafted products we use a lot in our line of business.</p>
                </li>
                <li className='flex flex-col gap-2 border-2 sm:border-5 border-dark-cyan rounded-[20px] p-5 sm:p-10 '>
                    <ReasonableConsumption className={'lg:w-[75px] lg:h-[75px] w-[52px] h-[52px] fill-none'}/>
                    <h2 className='text-[20px] sm:text-[25px]'>Gender Equality & Women Empowerment</h2>
                    <p className='text-[14px] sm:text-[18px] font-primary-light'>Paradigm is more than 50% women owned. We believe in providing equal opportunities without gender bias. Our team is gender balanced, with diverse team members from different academic and social backgrounds working together in an environment that is a safe space for everyone with equal career development opportunities. We also make sure to support women startups and initiatives by giving them priority when sourcing a lot of the handcrafted products we use a lot in our line of business.</p>
                </li>
                <li className='flex flex-col gap-2 border-2 sm:border-5 border-dark-green rounded-[20px] p-5 sm:p-10 '>
                    <ClimateAction className={'lg:w-[75px] lg:h-[75px] w-[52px] h-[52px] fill-none'}/>
                    <h2 className='text-[20px] sm:text-[25px]'>Gender Equality & Women Empowerment</h2>
                    <p className='text-[14px] sm:text-[18px] font-primary-light'>Paradigm is more than 50% women owned. We believe in providing equal opportunities without gender bias. Our team is gender balanced, with diverse team members from different academic and social backgrounds working together in an environment that is a safe space for everyone with equal career development opportunities. We also make sure to support women startups and initiatives by giving them priority when sourcing a lot of the handcrafted products we use a lot in our line of business.</p>
                </li>
            </ul>
        </section>
    </section>
  )
}

export default CsrPoints