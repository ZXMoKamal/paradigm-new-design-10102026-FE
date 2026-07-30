import React from 'react'
import VerticalImageTicker from '../shared/verticalImageTicker'

function OurClients() {
  return (
        <section className="m-auto max-w-[1300px] grid grid-cols-1 max-lg:gap-10 lg:grid-cols-[30%_70%] items-center lg:pb-30 pt-10 pb-10">
            <h2 className="text-5xl text-center font-primary-regular uppercase max-lg:tracking-widest max-lg:leading-20">our <br/>valuable <br/>clients</h2>
            <section className="flex relative">

                <VerticalImageTicker
  speed={15}
  images={[
    { src: "/images/home/clients/clientsBar2.webp", alt: "team member 1" },
  ]}
/>
                <VerticalImageTicker
  speed={15}
  images={[
    { src: "/images/home/clients/clientsBar1.webp", alt: "team member 1" },
  ]}
/>
                <VerticalImageTicker
  speed={15}
  images={[
    { src: "/images/home/clients/clientsBar3.webp", alt: "team member 1" },
  ]}
/>

<div className='w-full h-[100px] absolute z-10 top-0 vertical-image-ticker-gradient-up'></div>
<div className='w-full h-[100px] absolute z-10 bottom-0 vertical-image-ticker-gradient-down'></div>
            </section>
        </section>
  )
}

export default OurClients