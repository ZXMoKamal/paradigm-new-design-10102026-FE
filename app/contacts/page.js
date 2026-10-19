import Branches from '@/components/sections/branches'
import BranchesModern from '@/components/sections/branchesModern';
import ContactLocation from '@/components/sections/contactLocation'
import { SEO } from '@/data/SEO';
import React from 'react'


export const metadata = {
    title: SEO.contacts.title,
    
    description:SEO.contacts.description,

    keywords: SEO.contacts.keywords,

    authors: [
        {
            name: SEO.contacts.fullTitle,
        },
    ],

    creator: SEO.contacts.fullTitle,

    applicationName: "Paradigm Capital Group",

    icons: {
        icon: SEO.contacts.icon,
    },

    openGraph: {
        title: "Contacts - "+SEO.contacts.fullTitle,
        description: SEO.contacts.description,

        url: SEO.contacts.siteUrl,

        siteName: "Paradigm Capital Group",

        images: [
            {
                url: SEO.contacts.image,
                width: 230,
                height: 80,
                alt: SEO.contacts.fullTitle,
            },
        ],

        locale: SEO.contacts.locale,
        type: SEO.contacts.type,
    },

    twitter: {
        card: "summary_large_image",
        title: "Contacts - "+SEO.contacts.fullTitle,
        description:SEO.contacts.description,

        images: [SEO.contacts.image],

        label1: "Written by",
        data1: "admin",
        label2: "Time to read",
        data2: "4 minute",

        creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
        canonical: SEO.contacts.siteUrl,
        // languages: {
        //     en: "/en",
        //     ar: "/ar",
        // },
    },
};


function Contacts() {

  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ContactLocation/>
      {/* <Branches/> */}
      <BranchesModern/>
    </main>
  )
}

export default Contacts