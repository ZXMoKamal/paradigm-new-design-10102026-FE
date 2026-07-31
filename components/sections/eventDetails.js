// components/EventDetails.js
"use client";

import Facebook from "../icons/facebook";
import LinkIcon from "../icons/link";
import Mail from "../icons/mail";
import Twitter from "../icons/twitter";
import ImageSlider from "../shared/imageSlider";



export default function EventDetails({
  title,
  client,
  date,
  location,
  images = [],
  description,
}) {
  const eventUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${eventUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${eventUrl}`,
    mail: `mailto:?subject=${encodeURIComponent(
      title || "Event"
    )}&body=${encodeURIComponent(eventUrl)}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(eventUrl);
    alert("Link copied!");
  };

  const info = [
    { label: "Event Name", value: title },
    { label: "Client", value: client },
    { label: "Date", value: date },
    { label: "Location", value: location },
  ].filter((item) => item.value);

  return (
    <>
      <h1 className="px-5 w-full lg:w-[1400px] m-auto text-[36px] sm:text-[42px] lg:text-[57px] lg:pt-10 lg:pb-10">{ title}</h1>
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
          <section className="mt-6 flex flex-wrap gap-10">
            
            <a
              href={shareLinks.facebook}
              target="_blank"
            >
              <Facebook className={"w-8 h-8 fill-text-primary"}/>
            </a>

            <a
              href={shareLinks.twitter}
              target="_blank"
            >
              <Twitter className={"w-8 h-8 fill-text-primary"}/>
            </a>

            <a
              href={shareLinks.mail}
            >
              <Mail className={"w-8 h-8 fill-text-primary"}/>
            </a>

            <button
              onClick={copyLink}
            >
              <LinkIcon className={"w-8 h-8 fill-text-primary"}/>
            </button>
          </section>
        </section>

        {/* RIGHT: SLIDER + DESC */}
        <section className="w-full min-[1024px]:w-[515px] min-[1150px]:w-[615px] xl:w-[715px] 2xl:w-[815px]">
          <ImageSlider images={ images } className={"w-full  min-[1024px]:h-[300px] min-[1150px]:h-[400px] xl:h-[457px]"} />

          {description && (
            <p className="mt-4 text-[16px] lg:text-[18px] text-text-primary font-primary-light">
              {description}
            </p>
          )}
        </section>

      </section>
    </>
  );
}