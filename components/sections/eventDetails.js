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
      <section className="grid md:grid-cols-[40%_60%] m-auto w-full lg:w-[1300px] py-10">
        
        {/* LEFT: INFO */}
        <div>
          <div className="space-y-3">
            {info.map((item, i) => (
              <div key={i} className="flex gap-2">
                <h2 className="font-semibold text-[20px]">
                  {item.label}:
                </h2>
                <h3 className="text-[20px] font-primary-regular">{item.value}</h3>
                <br/>
                <br/>
              </div>
            ))}
          </div>

          {/* SHARE */}
          <div className="mt-6 flex flex-wrap gap-10">
            
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
          </div>
        </div>

        {/* RIGHT: SLIDER + DESC */}
        <div className="w-[815px]">
          <ImageSlider images={images} className={"w-[815px] h-[457px]"} />

          {description && (
            <p className="mt-4 text-[18px] text-text-primary font-primary-light">
              {description}
            </p>
          )}
        </div>

      </section>
  );
}