import OurEvents from '@/components/sections/ourEvents'
import OurFoundation from '@/components/sections/ourFoundation'
import OurStoryHeader from '@/components/sections/ourStoryHeader'
import OurStorySection from '@/components/sections/ourStorySection'
import { VideoSection } from '@/components/shared/videoSection'
import { SEO } from '@/data/SEO'
import React from 'react'


export const metadata = {
    title: "Our Story",
    
    description:SEO.ourStory.description,

    keywords: SEO.ourStory.keywords,

    authors: [
        {
            name: SEO.ourStory.fullTitle,
        },
    ],

    creator: SEO.ourStory.fullTitle,

    applicationName: SEO.ourStory.fullTitle,

    icons: {
        icon: SEO.ourStory.icon,
    },

    openGraph: {
        title: "Our Story - "+SEO.ourStory.fullTitle,
        description: SEO.ourStory.description,

        url: SEO.ourStory.siteUrl,

        siteName: SEO.ourStory.fullTitle,

        images: [
            {
                url: SEO.ourStory.image,
                width: 230,
                height: 80,
                alt: SEO.ourStory.fullTitle,
            },
        ],

        locale: SEO.ourStory.locale,
        type: SEO.ourStory.type,
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Story - "+SEO.ourStory.fullTitle,
        description:SEO.ourStory.description,

        images: [SEO.ourStory.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "4 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: SEO.ourStory.siteUrl,
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};


function OurStory() {
  return (
    <main className="relative w-full overflow-hidden">
        <OurStoryHeader/>
        <OurStorySection/>
        <OurFoundation/>
        <VideoSection
            images={ [
                { image: "/images/ezgif-6f9383a7f4f93ea9.webp", alt: "" },
                { image: "/images/ezgif-622bc5fdefea9c0f.webp", alt: "" },
            ] }
            video="/video/paradigmv.mp4"
        />
        <OurEvents/>
    </main>
  )
}

export default OurStory