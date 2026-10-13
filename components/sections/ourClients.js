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
];

export default function Page() {
  return (<>
      <div className="container-content">

    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Our valuable clients
                </h4>

                <h2 className="max-w-[680px] uppercase text-h2 font-bold leading-[1.12] tracking-[-0.04em] text-text-primary">
                  Our valuable 
                  <span className="text-primary">
                    {" "}clients
                  </span>
                </h2>
</div>
</div>
    <div className="py-20 bg-bg-1">
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
      {/* Example 1: Horizontal Left-to-Right (LTR) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="ltr" speed="100s" />

      {/* Example 2: Horizontal Right-to-Left (RTL) */}
      <ClientTicker clients={sampleClients} orientation="horizontal" direction="rtl" speed="100s" />
    </div>
  </>);
}