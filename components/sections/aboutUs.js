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


// import React from 'react';
// import { SectionHeader } from '../shared/sectionHeader';
// import ArrowDown from '../icons/arrowDown';
// import LinkButton from '../shared/linkButton';
// import ArrowRight from '../icons/arrowRight';
// import FullStatistics from '../shared/fullStatistics';
// import Typier from '../animation/Typier';
// import FaideBgSection from '../animation/faideBgSection';

// function AboutUs() {
//     return (
//         // <section className='w-full flex flex-col items-center justify-center sm:pb-40 pb-10'>
//         <FaideBgSection className='w-full flex flex-col items-center justify-center sm:pb-40 pb-10'>

//             <div className='flex justify-center items-center rounded-full w-18 h-18 bg-primary-dark mt-15'>
//                 <ArrowDown className={ "w-5 h-5 fill-text-primary" } />
//             </div>

//             <section className='max-w-[1100px] flex flex-col gap-8 mx-5 md:mx-30 lg:mx-50 mt-40'>

//                 <SectionHeader
//                     title="Paradigm Capital Group:"
//                     titleTag='h1'
//                     subtitle={ "About Us" }
//                     subtitleTag='h2'
//                     titleClassName={ "text-[28px] sm:text-[34px] text-text-dark" }
//                     subTitleClassName='text-text-dark'
//                 />

//                 <p  data-aos="fade-down" className='max-2xl:h-[255px] max-xl:h-[340px] max-md:h-[380px] max-sm:h-[200px] max-[500px]:h-[200px] max-[450px]:h-[280px] max-[364px]:h-[400px] font-primary-regular text-[24px] sm:text-[34px] leading-tight tracking-wide text-text-dark'>
//                     We're more than just an event planning company. We're innovators,
//                     sustainability champions, and creators of extraordinary experiences.
//                     Our mission is to elevate events across Egypt and the MENA region,
//                     <br/>
//                     delivering{ ' ' }
//                     <Typier
//                         words={ [
//                             'seamless communication',
//                             'trusted expertise',
//                             'unforgettable moments',
//                         ] }
//                         className="text-text-dark font-primary-regular"
//                     />

//                     { ' ' }that align with your goals.
//                 </p>

//                 <LinkButton
//                     href="/our-story/"
//                     variant={ "outlineDark" }
//                     size='lg'
//                     className='w-fit m-auto mt-10 max-sm:text-md max-sm:px-5 bg-transparent'
//                     icon={ <ArrowRight className='w-5 h-5 fill-text-dark' /> }
//                     iconPosition='right'
//                      data-aos="fade-up"
//                 >
//                     Read Our Story
//                 </LinkButton>
//             </section>

//             <div className='w-[1400px] mt-15 lg:mt-30 mb-15 lg:mb-30 h-[1px] bg-primary-dark'></div>

//             <FullStatistics />
//         </FaideBgSection>
//     );
// }

// export default AboutUs;





"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/shared/slider";
import NumberCounter from "../animation/counter";

const aboutStats = [
  {
    id: "experience",
    number: "32",
    label: "Years Experience",
  },
  {
    id: "awards",
    number: "64",
    label: "Award Winner",
  },
];

export default function AboutCompany() {

// const clientLogos = [
//     { name: "Client One", logo: "/images/client-1.png" },
//     { name: "Client Two", logo: "/images/client-2.png" },
//     { name: "Client Three", logo: "/images/client-3.png" },
//     { name: "Client Four", logo: "/images/client-4.png" },
//     { name: "Client Five", logo: "/images/client-5.png" },
//     { name: "Client Six", logo: "/images/client-6.png" },
//   ];

  const stats = [
    {
      number: "32",
      sufix: "K",
      label: "Project Completed",
      animation:"fade-right",
      animationDuration:"5000"

    },
    {
      number: "28",
      sufix: "+",
      label: "Winning Awards",
      animation:"fade-right",
      animationDuration:"2500"

    },
    {
      number: "30",
      sufix: "K",
      label: "Years Experience",
      animation:"fade-left",
      animationDuration:"2500"
 
    },
    {
      number: "89",
      sufix: "+",
      label: "Expert Members",
      animation:"fade-left",
      animationDuration:"5000"
   
    },
  ];

  return (
    <section className="bg-bg-1 xl:pt-[20px] xl:pb-[20px] xl:pt-[28px] xl:pb-[28px] xl:pt-[100px] xl:pb-[75px]">
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left: Company information */}
          <div className="lg:col-span-7">
            <div className="lg:pr-5">
              <div
                className="mb-10 md:mb-[60px]"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  About Company
                </h4>

                <h2 className="max-w-[680px] text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
                  Design That Defines
                  <br />
                  Brands and
                  <span className="text-primary">
                    {" "}
                    Inspires
                    <br />
                    Audiences
                  </span>
                </h2>
              </div>

              {/* Statistics and description */}
              <div
                className="flex flex-col items-start border-t border-border-1 pt-8 sm:pt-10 md:flex-row md:items-end md:gap-8 lg:gap-10"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="100"
              >
                {/* Reusable statistics slider */}
                <Slider
                  slides={aboutStats}
                  autoplay
                  interval={5000}
                  ariaLabel="Company experience and awards"
                  className="mb-10 w-full md:mb-0 md:w-[260px] md:shrink-0 md:border-r md:border-border-1 md:pr-8 lg:pr-10"
                  slideClassName="min-h-[180px] pt-4"
                  renderSlide={(stat) => (
                    <div>
                      <h3 className="mb-5 flex items-start font-heading text-[70px] font-medium leading-none tracking-[-0.04em] text-text-primary lg:text-[100px] xl:text-[120px]">
                        {stat.number}
                        <span className="mt-1 text-[30px] text-primary">
                          +
                        </span>
                      </h3>

                      <p className="text-xl font-medium leading-snug text-text-primary lg:text-2xl">
                        {stat.label}
                      </p>
                    </div>
                  )}
                />

                {/* Original template copy */}
                <div
                  className="w-full max-w-[430px]"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="200"
                >
                  <p className="mb-8 text-lg leading-[1.6] text-text-body lg:mb-10 lg:text-xl">
                    businesses to make impactful, forward-looking decisions.
                    Whether you’re expanding into new
                  </p>

                  <Link
                    href="/about/"
                    className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
                  >
                    <span>Discover More</span>

                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About image */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto h-[420px] w-full max-w-[460px] overflow-hidden bg-bg-2 sm:h-[480px] md:h-[520px] lg:ml-auto lg:h-[590px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src="/images/about-img-2.png"
                alt="about"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>


<section className="mt-30 bg-bg-1 relative overflow-hidden pt-12 border-t border-border-1" >
     
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
         
        >
          {stats.map((stat, index) => (
            <div
            data-aos={stat.animation} data-aos-duration={stat.animationDuration}
              key={index}
              className="flex-col w-50 h-50 p-8 flex justify-center items-center hover:border-primary transition-all duration-800 group border-dashed rounded-full border border-border-1"
            >
              {/* Icon Placeholder */}
              {/* <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-bg-1 transition-colors flex-shrink-0">
                <span className="icon-placeholder">{stat.icon}</span>
              </div> */}

              {/* Number and Label */}
              
                <NumberCounter sufix={stat.sufix} value={stat.number} tag="h3" className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-1"/>
                <p className="text-sm text-text-muted font-heading font-medium">
                  {stat.label}
                </p>
              
            </div>
          ))}
        </div>
     
    </section>



      </div>


    </section>

  );
}





// <div className="pt-12 border-t border-border-1" data-aos="fade-up" data-aos-duration="1000">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
//             {/* Trusted Clients Counter & Title Header */}
//             <div className="lg:w-1/3 text-center lg:text-left space-y-2">
//               <div className="inline-flex items-center gap-2 text-primary font-heading font-bold text-3xl sm:text-4xl">
//                 2536+
//               </div>
//               <h3 className="font-heading font-bold text-xl text-text-primary">
//                 Our Trusted and Valuable Clients
//               </h3>
//               <p className="text-sm text-text-muted">
//                 Partnering with global brands and ambitious startups.
//               </p>
//             </div>

//             {/* Custom Infinite Marquee / Slider Component (No Swiper) */}
//             <div className="lg:w-2/3 w-full overflow-hidden relative ticker-pause-hover py-4">
//               {/* Gradient fade masks for smooth edges */}
//               <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-1 to-transparent z-10 pointer-events-none" />
//               <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-1 to-transparent z-10 pointer-events-none" />

//               <div className="flex gap-12 animate-ticker-Normal whitespace-nowrap items-center w-max">
//                 {/* Render logos twice to ensure seamless infinite loop */}
//                 {[...clientLogos, ...clientLogos].map((client, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-center min-w-[160px] h-20 bg-bg-2 border border-border-1 rounded-xl px-6 py-4 shadow-card hover:border-primary transition-colors"
//                   >
//                     <span className="font-heading font-semibold text-text-primary text-sm opacity-80 hover:opacity-100">
//                       {client.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div> 

   