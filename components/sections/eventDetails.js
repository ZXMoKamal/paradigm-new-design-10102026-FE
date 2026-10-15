// // components/EventDetails.js
// // "use client";

// import { getEvent } from "@/api/events";

// import ImageSlider from "../shared/imageSlider";
// import ShareButtons from "../shared/shareButtons";
// import { notFound } from "next/navigation";



// export default async function EventDetails({
//   eventRequestTitle,
// }) {


//   const event = await getEvent(eventRequestTitle);

//   if(!event){
//     notFound();
//   }

//   const imagesWithAlt =[];
//   for (let src of event.images){
//     imagesWithAlt.push({image:src,alt:event.name });
//   }


//   const info = [
//     { label: "Event Name", value: event.name },
//     { label: "Client", value: event.client },
//     { label: "Date", value: event.date },
//     { label: "Location", value: event.location },
//   ].filter((item) => item.value);

//   return (
//     <>
//       <h1 className="px-5 w-full lg:w-[1400px] m-auto text-[36px] sm:text-[42px] lg:text-[57px] lg:pt-10 lg:pb-10">{ event.name }</h1>
//       <section className="px-5 grid lg:grid-cols-[40%_60%] m-auto w-full lg:w-[1300px] pb-10">
        
//         {/* LEFT: INFO */}
//         <section className="py-5">
//           {/* <section className="space-y-3"> */}
//             {info.map((item, i) => (
//               <section key={i} className="flex gap-2 py-1 lg:py-2">
//                 <h2 className="font-semibold text-[20px]">
//                   {item.label}:
//                 </h2>
//                 <h3 className="text-[20px] font-primary-regular">{item.value}</h3>
//                 <br/>
//                 <br/>
//               </section>
//             ))}
//           {/* </section> */}

//           {/* SHARE */}
//           <ShareButtons title={ event.name } requestTitle={eventRequestTitle} />
//         </section>

//         {/* RIGHT: SLIDER + DESC */}
//         <section className="w-full min-[1024px]:w-[515px] min-[1150px]:w-[615px] xl:w-[715px] 2xl:w-[815px]">
//           <ImageSlider images={ imagesWithAlt } className={"w-full  min-[1024px]:h-[300px] min-[1150px]:h-[400px] xl:h-[457px]"} />

//           { event.description && (
//             <p className="mt-4 text-[16px] lg:text-[18px] text-text-primary font-primary-light">
//               {event.description}
//             </p>
//           )}
//         </section>

//       </section>
//     </>
//   );
// }


"use client";

import Image from "next/image";
import ProjectSlider from "../shared/projectSlider";
import Link from "next/link";


function ProjectCard({ project }) {
  return (
    <article className="group">
      <div className="relative mb-6 h-[400px] overflow-hidden rounded-2xl bg-bg-2 sm:h-[450px] lg:h-[550px]">
        <Link
          href={project}
          aria-label={`View project: ${project.title}`}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View Project</span>
        </Link>

        <img
          src={project}
          alt={project}
          fill
          sizes="(max-width: 767px) 100vw, 850px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex size-20 scale-75 items-center justify-center rounded-full bg-white text-3xl text-bg-1 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-[28px]">
          <Link href={project}>{project.title}</Link>
        </h3>

        <span className="text-sm text-text-muted">
          {project.category}
        </span>
      </div>
    </article>
  );
}


function ProjectMetadata({ items }) {
  return (
    <div className="mb-16 grid grid-cols-2 gap-x-6 gap-y-8 border-b border-border-1 pb-10 lg:grid-cols-4 lg:gap-8">
      {items.map((item, index) => (
        <div
          key={item.label}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <p className="mb-3 text-sm text-text-muted">{item.label}</p>
          <p className="text-base font-semibold text-text-primary sm:text-lg">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProjectContentSection({ title, description, index = 0 }) {
  return (
    <div
      className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-12"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="lg:col-span-4">
        <h2 className="text-2xl font-semibold leading-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 lg:col-span-8">
                  <p
     
            className="text-base leading-8 text-text-muted sm:text-lg"
          >
            {description}
          </p>
        {/* {description.map((paragraph, paragraphIndex) => (
          <p
            key={paragraphIndex}
            className="text-base leading-8 text-text-muted sm:text-lg"
          >
            {description}
          </p>
        ))} */}
      </div>
    </div>
  );
}

export default function PortfolioDetails({
  project,
}) {
  const {
    image,
    imageAlt = "Portfolio project",
    date,
    category,
    client,
    location,
    aboutTitle = "About Project",
    description = [],
    images = [],
    challenges = [],
    solutions = [],
    results = [],
  } = project;

  const metadata = [
    { label: "Date", value: date },
    { label: "Category", value: category },
    { label: "Clients", value: client },
    { label: "Location", value: location },
  ];

  return (
    <section className="overflow-hidden bg-bg-1 py-16 sm:py-20 lg:py-[150px]">
      <div className="container-content">
        {/* Main project image */}
        <div
          data-aos="fade-up"
          className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl bg-bg-2 sm:mb-16 lg:aspect-[16/7]"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1320px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Project metadata */}
          <ProjectMetadata items={metadata} />

          {/* About project */}
          <div className="mb-16 sm:mb-20">
            <ProjectContentSection
              title={aboutTitle}
              description={description}
            />
          </div>

          {/* Project gallery */}
          {/* {images.length > 0 && (
            <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mb-20 lg:grid-cols-3">
              {images.map((item, index) => (
                <div
                  key={item.image}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bg-2"
                >
                  <Image
                    src={item.image}
                    alt={item.alt || `Project gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            )} */}

          {/* Challenges */}
          {challenges.length > 0 && (
            <div className="mb-14 sm:mb-[60px]">
              <ProjectContentSection
                title="The Challenges"
                paragraphs={challenges}
                index={1}
              />
            </div>
          )}

          {/* Solutions */}
          {solutions.length > 0 && (
            <div className="mb-14 sm:mb-[60px]">
              <ProjectContentSection
                title="The Solutions"
                paragraphs={solutions}
                index={2}
              />
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <ProjectContentSection
              title="The Result"
              paragraphs={results}
              index={3}
            />
          )}
        </div>
      </div>
          {/* Project gallery */}
          {images.length > 0 && (
            <ProjectSlider
            items={images}
            ariaLabel="event photos"
            className="w-full"
            renderItem={(project) => (
              <div className="w-full max-w-[850px]">{console.log(project)}
                <ProjectCard project={project} />
              </div>
            )}
          />
            )}
    </section>
  );
}
