import EventStatistics from '@/components/sections/eventStatistics'
import PastEventsSection from '@/components/sections/pastEventsSection'
import { SEO } from '@/data/SEO';
import React from 'react'


export const metadata = {
    title: SEO.pastEvents.title,
    
    description:SEO.pastEvents.description,

    keywords: SEO.pastEvents.keywords,

    authors: [
        {
            name: SEO.pastEvents.fullTitle,
        },
    ],

    creator: SEO.pastEvents.fullTitle,

    applicationName: SEO.pastEvents.fullTitle,

    icons: {
        icon: SEO.pastEvents.icon,
    },

    openGraph: {
        title:  "Our Services - " +SEO.pastEvents.fullTitle,
        description: SEO.pastEvents.description,

        url: SEO.pastEvents.siteUrl,

        siteName: SEO.pastEvents.fullTitle,

        images: [
            {
                url: SEO.pastEvents.image,
                width: 230,
                height: 80,
                alt: SEO.pastEvents.fullTitle,
            },
        ],

        locale: SEO.pastEvents.locale,
        type: SEO.pastEvents.type,
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Services - " + SEO.pastEvents.fullTitle,
        description:SEO.pastEvents.description,

        images: [SEO.pastEvents.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "4 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: SEO.pastEvents.siteUrl,
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};



function PastEvents() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <EventStatistics/>
      <PastEventsSection/>
    </main>
  )
}

export default PastEvents