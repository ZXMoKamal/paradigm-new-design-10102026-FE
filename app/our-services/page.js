import OurServicesDetails from '@/components/sections/ourServices'
import ServicesIntro from '@/components/sections/servicesIntro'
import { SEO } from '@/data/SEO';
import React from 'react'

export const metadata = {
    title: SEO.ourServices.title,
    
    description:SEO.ourServices.description,

    keywords: SEO.ourServices.keywords,

    authors: [
        {
            name: SEO.ourServices.fullTitle,
        },
    ],

    creator: SEO.ourServices.fullTitle,

    applicationName: SEO.ourServices.fullTitle,

    icons: {
        icon: SEO.ourServices.icon,
    },

    openGraph: {
        title: "Our Services - "+SEO.ourServices.fullTitle,
        description: SEO.ourServices.description,

        url: SEO.ourServices.siteUrl,

        siteName: SEO.ourServices.fullTitle,

        images: [
            {
                url: SEO.ourServices.image,
                width: 230,
                height: 80,
                alt: SEO.ourServices.fullTitle,
            },
        ],

        locale: SEO.ourServices.locale,
        type: SEO.ourServices.type,
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Services - "+SEO.ourServices.fullTitle,
        description:SEO.ourServices.description,

        images: [SEO.ourServices.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "4 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: SEO.ourServices.siteUrl,
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};

function OurServices() {
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServicesIntro />
      <OurServicesDetails />
    </main>
  )
}

export default OurServices