// components/EventDetails.js
// "use client";

import { getEvent } from "@/api/events";

import ImageSlider from "../shared/imageSlider";
import ShareButtons from "../shared/shareButtons";



export default async function EventDetails({
  eventTitle,
}) {


  const event = await getEvent(eventTitle);


  const info = [
    { label: "Event Name", value: event.name },
    { label: "Client", value: event.client },
    { label: "Date", value: event.date },
    { label: "Location", value: event.location },
  ].filter((item) => item.value);

  return (
    <>
      <h1 className="px-5 w-full lg:w-[1400px] m-auto text-[36px] sm:text-[42px] lg:text-[57px] lg:pt-10 lg:pb-10">{ event.name }</h1>
      <section className="px-5 grid lg:grid-cols-[40%_60%] m-auto w-full lg:w-[1300px] pb-10">
        
        {/* LEFT: INFO */}
        <section className="py-5">
          {/* <section className="space-y-3"> */}
            {info.map((item, i) => (
              <section key={i} className="flex gap-2 py-1 lg:py-2">
                <h2 className="font-semibold text-[20px]">
                  {item.label}:
                </h2>
                <h3 className="text-[20px] font-primary-regular">{item.value}</h3>
                <br/>
                <br/>
              </section>
            ))}
          {/* </section> */}

          {/* SHARE */}
          <ShareButtons title={ event.name } />
        </section>

        {/* RIGHT: SLIDER + DESC */}
        <section className="w-full min-[1024px]:w-[515px] min-[1150px]:w-[615px] xl:w-[715px] 2xl:w-[815px]">
          <ImageSlider images={ event.images } className={"w-full  min-[1024px]:h-[300px] min-[1150px]:h-[400px] xl:h-[457px]"} />

          { event.description && (
            <p className="mt-4 text-[16px] lg:text-[18px] text-text-primary font-primary-light">
              {event.description}
            </p>
          )}
        </section>

      </section>
    </>
  );
}