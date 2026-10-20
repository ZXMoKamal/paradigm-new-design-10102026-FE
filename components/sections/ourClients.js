// import React from 'react'
// import VerticalImageTicker from '../shared/verticalImageTicker'

// function OurClients() {
//   return (
//         <section className=" m-auto max-w-[1300px] grid grid-cols-1 max-lg:gap-10 lg:grid-cols-[30%_70%] items-center lg:pb-30 pt-10 pb-10">
//             <h2 data-aos="fade-up" className="text-5xl text-center font-primary-regular uppercase max-lg:tracking-widest max-lg:leading-20">our <br/>valuable <br/>clients</h2>
//             <section className="flex relative overflow-hidden">

//                 <VerticalImageTicker
//                 aosAnimation={{["data-aos"]:"fade-up",["data-aos-duration"]:1000+(1000*1)}}
//   speed={15}
//   images={[
//     { src: "/images/home/clients/clientsBar2.webp", alt: "paradigm capital group clients list" },
//   ]}
// />
//                 <VerticalImageTicker
//                 aosAnimation={{["data-aos"]:"fade-down",["data-aos-duration"]:1000+(1000*5)}}

//   speed={15}
//   images={[
//     { src: "/images/home/clients/clientsBar1.webp", alt: "paradigm capital group clients list" },
//   ]}
// />
//                 <VerticalImageTicker
//                 aosAnimation={{["data-aos"]:"fade-up",["data-aos-duration"]:1000+(1000*10)}}

// speed={15}
//   images={[
//     { src: "/images/home/clients/clientsBar3.webp", alt: "paradigm capital group clients list" },
//   ]}
// />

// <div className='w-full h-[100px] absolute z-10 top-0 vertical-image-ticker-gradient-up'></div>
// <div className='w-full h-[100px] absolute z-10 bottom-0 vertical-image-ticker-gradient-down'></div>
//             </section>
//         </section>
//   )
// }

// export default OurClients

import ClientTicker from "../shared/clientTicker";

const sampleClients = [
  { name: "Client A", logo: "/images/home/clients/logos/Picture21.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture22.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture23.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture24.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture25.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture26.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture27.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture28.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture29.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture30.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture31.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture32.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture33.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture34.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture35.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture36.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture37.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture38.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture39.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Picture40.png", url: "https://example.com" },

  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-01.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-02.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-03.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-04.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-05.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-06.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-07.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-08.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-09.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-10.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-11.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-12.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-13.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-14.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-15.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-16.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-17.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-18.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-19.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-20.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-21.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-22.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-23.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-24.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-25.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-26.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-27.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-28.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-29.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-30.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-31.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-32.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-33.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-34.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-35.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-36.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-37.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-38.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-39.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-40.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-41.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-42.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-43.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-44.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-45.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-46.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-47.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-48.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-49.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-50.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-51.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-52.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-53.png", url: "https://example.com" },
  { name: "Client A", logo: "/images/home/clients/logos/Our Clients-54.png", url: "https://example.com" },
];

// Splits one flat array into `columns` sub-arrays, as evenly sized as
// possible, in order, with no overlap between them. With 74 logos and
// 12 columns that's ten 6-logo sets and two 7-logo sets — every ticker
// ends up with its own distinct set instead of all 12 repeating the same list.
function splitIntoSets(items, columns) {
  const base = Math.floor(items.length / columns); // minimum logos every set gets
  const remainder = items.length % columns; // extra logos to spread across the first sets
  const sets = [];
  let cursor = 0;
  for (let i = 0; i < columns; i++) {
    const size = base + (i < remainder ? 1 : 0); // first `remainder` sets get one extra logo
    sets.push(items.slice(cursor, cursor + size));
    cursor += size;
  }
  return sets;
}

// 12 non-overlapping sets, one per ticker column below.
const clientSets = splitIntoSets(sampleClients, 12);

export default function Page() {
  return (
    <>
      <div className="container-content">
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Our valuable clients
          </h4>

          <h2 className="max-w-[680px] uppercase text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
            Our valuable
            <span className="text-primary"> clients</span>
          </h2>
        </div>
      </div>
      <div className="py-20 bg-bg-1 flex">
        {/* Each column now reads its own slice of clientSets instead of the
            full sampleClients array, so no two tickers show the same logos.
            Direction still alternates top-to-bottom / bottom-to-top per column. */}
        <ClientTicker clients={clientSets[0]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[1]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[2]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[3]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[4]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[5]} orientation="vertical" direction="bottom-to-top" speed="20s" className="max-sm:hidden" />
        <ClientTicker clients={clientSets[6]} orientation="vertical" direction="top-to-bottom" speed="20s" className="max-lg:hidden" />
        <ClientTicker clients={clientSets[7]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
        <ClientTicker clients={clientSets[8]} orientation="vertical" direction="top-to-bottom" speed="20s" className="" />
        <ClientTicker clients={clientSets[9]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
        <ClientTicker clients={clientSets[10]} orientation="vertical" direction="top-to-bottom" speed="20s" className="" />
        <ClientTicker clients={clientSets[11]} orientation="vertical" direction="bottom-to-top" speed="20s" className="" />
      </div>
    </>
  );
}