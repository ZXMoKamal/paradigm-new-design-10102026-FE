// import React from 'react'
// import { SectionHeader } from '../shared/sectionHeader'
// import ArrowDown from '../icons/arrowDown'
// import LinkButton from '../shared/linkButton'
// import ArrowRight from '../icons/arrowRight'
// import FullStatistics from '../shared/fullStatistics'

// function AboutUs() {
//   return (
//       <section className='w-full flex flex-col items-center justify-center pb-40'>
//           <div className='flex justify-center items-center rounded-full w-18 h-18 bg-primary-dark'><ArrowDown className={"w-5 h-5 fill-text-primary"}/></div>
//           <section className='max-w-[1100px] flex flex-col gap-8 mt-40'>
//             <SectionHeader title="Paradigm Capital Group :" titleTag='h1' subtitle={"About Us"} subtitleTag='h2' titleClassName={"text-[34px] text-text-dark"} subTitleClassName='text-text-dark'/>
//             <p className='font-primary-regular text-[34px] text-balance leading-tight tracking-wide text-text-dark'>We're more than just an event planning company. We're innovators, sustainability champions, and creators of extraordinary experiences. Our mission is to elevate events across Egypt and the MENA region, delivering unforgettable moments that align with your goals.</p>
//             <LinkButton href="/about" variant={ "outlineDark" } size='lg' className='w-fit m-auto mt-10'
//                 icon={<ArrowRight className='w-5 h-5 fill-text-dark'/>} iconPosition='right'>Read Our Story</LinkButton>
//           </section>
//           <div className='w-[1400px] mt-30 mb-30 h-[1px] bg-primary-dark'></div>
//           <FullStatistics/>
//       </section>
//   )
// }

// export default AboutUs


import React from 'react';
import { SectionHeader } from '../shared/sectionHeader';
import ArrowDown from '../icons/arrowDown';
import LinkButton from '../shared/linkButton';
import ArrowRight from '../icons/arrowRight';
import FullStatistics from '../shared/fullStatistics';
import Typier from '../animation/Typier';

function AboutUs() {
    return (
        <section className='w-full flex flex-col items-center justify-center pb-40'>

            <div className='flex justify-center items-center rounded-full w-18 h-18 bg-primary-dark'>
                <ArrowDown className={ "w-5 h-5 fill-text-primary" } />
            </div>

            <section className='max-w-[1100px] flex flex-col gap-8 mt-40'>

                <SectionHeader
                    title="Paradigm Capital Group :"
                    titleTag='h1'
                    subtitle={ "About Us" }
                    subtitleTag='h2'
                    titleClassName={ "text-[34px] text-text-dark" }
                    subTitleClassName='text-text-dark'
                />

                <p className='font-primary-regular text-[34px] text-balance leading-tight tracking-wide text-text-dark !m-0'>
                    We're more than just an event planning company. We're innovators,
                    sustainability champions, and creators of extraordinary experiences.
                    Our mission is to elevate events across Egypt and the MENA region,
                    <br/>
                    delivering{ ' ' }
                    <Typier
                        words={ [
                            'seamless communication',
                            'trusted expertise',
                            'unforgettable moments',
                        ] }
                        className="text-text-dark font-primary-regular"
                    />

                    { ' ' }that align with your goals.
                </p>

                <LinkButton
                    href="/about"
                    variant={ "outlineDark" }
                    size='lg'
                    className='w-fit m-auto mt-10'
                    icon={ <ArrowRight className='w-5 h-5 fill-text-dark' /> }
                    iconPosition='right'
                >
                    Read Our Story
                </LinkButton>
            </section>

            <div className='w-[1400px] mt-30 mb-30 h-[1px] bg-primary-dark'></div>

            <FullStatistics />
        </section>
    );
}

export default AboutUs;