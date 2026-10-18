// import React from 'react'
// import { SectionHeader } from '../shared/sectionHeader'
// import LinkButton from '../shared/linkButton'
// import ArrowRight from '../icons/arrowRight'
// import Suggestions from '../shared/suggestions'

// function OurEvents() {
//   return (
//       <section className="m-auto max-w-[1300px] flex flex-col gap-8 pt-20 max-2xl:px-10 max-sm:px-5 pb-20">

//         <SectionHeader subtitle="our events" 
//         title="Take a Look" description="Check out our latest groundbreaking events!"
//         titleTag="h3"
//         subtitleTag="h2"
//          buttons={
//           <LinkButton
//                     href="/past-events/"
//                     variant={ "outline" }
//                     size='md'
//                     className={'max-lg:px-5 max-lg:my-5 max-sm:text-sm'}
//                     icon={ <ArrowRight className='w-5 h-5 fill-text-priamry' /> }
//                     iconPosition='right'
//                 >
//                      View Our Gallery
//                 </LinkButton>
//          }/>

//          <section className="grid grid-cols-1 xl:grid-cols-[26%_74%] gap-0">
//           <section></section>
//           <section>

//             <Suggestions titleTag={ "h3" } items={ [
//                 {
//                     title: "Egypt- France Business Forum", img: "/images/ezgif-608a1f2271991c70.webp", alt: "Egypt- France Business Forum", requestTitle:"egypt-france-business-forum-economic-opportunities-for-strategic-partnership"
//                 },
//                 {
//                     title: "2nd Ministerial Conference Khartoum Process", img: "/images/ezgif-6704f832b48fff58.webp", alt: "2nd Ministerial Conference Khartoum Process", requestTitle:"2nd-ministerial-conference-khartoum-process"
//                 },
//                 {
//                     title: "The National Initiative for Smart Green Projects", img: "/images/ezgif-6f3d8c1d6cb46c68.webp", alt: "The National Initiative for Smart Green Projects", requestTitle:"egypts-narrative-for-economic-development"
//                 },
//             ] } />

//           </section>
//          </section>


//       </section>

//   )
// }

// export default OurEvents


import Link from "next/link";
import ProjectSlider from "../shared/projectSlider";
import { getEvents } from "@/api/events";
import ArrowRight from "../icons/arrowRight";

export default async function RecentWork() {
  const events = await getEvents();

  return (
    <section className="overflow-hidden bg-bg-1 pb-[20px] pt-[20px] md:pb-[28px] md:pt-[28px] xl:pb-[75px] xl:pt-[100px]">
      <div className="container-content">
        <div
          className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Recent Work
            </h4>

            <h2 className="text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
              We have Completed
              <br />
              <span className="text-primary">lot&apos;s of Work</span>
            </h2>
          </div>

          <Link
            href="/events/"
            className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
          >
            <span>Discover More</span>
            <ArrowRight className="h-4 w-4 text-bg-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
        </div>
      </div>
     <ProjectSlider
  items={events}
  ariaLabel="Recent work projects"
  className="w-full"
/>
    </section>
  );
}