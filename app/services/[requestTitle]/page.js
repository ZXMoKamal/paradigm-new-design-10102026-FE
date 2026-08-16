import { getService } from '@/api/services';
import ContactSection from '@/components/sections/contactSection'
import ServiceHighlight from '@/components/shared/serviceHighlight'
import { SEO } from '@/data/SEO';
import React from 'react'



export async function generateMetadata({ params }) {
  const { title } = await params;
  const service = await getService(title.replaceAll("-"," "));
  const serviceSeo = SEO.services(service.title, service.points.map((v) => v.point.split("#").join(", ")).join(", "), service.points.map((v) => v.point.split("#")), title);
  // const serviceTitle = decodeURIComponent(title);
  

  return {
    title: serviceSeo.title,

    description: serviceSeo.description,

    keywords: serviceSeo.keywords,

    authors: [
      {
        name: serviceSeo.fullTitle,
      },
    ],

    creator: serviceSeo.fullTitle,

    applicationName: serviceSeo.fullTitle,

    icons: {
      icon: serviceSeo.icon,
    },

    openGraph: {
      title: serviceSeo.title + " - " + serviceSeo.fullTitle,
      description: serviceSeo.description,

      url: serviceSeo.siteUrl,

      siteName: serviceSeo.fullTitle,

      images: [
        {
          url: serviceSeo.image,
          width: 230,
          height: 80,
          alt: serviceSeo.fullTitle,
        },
      ],

      locale: serviceSeo.locale,
      type: serviceSeo.type,
    },

    twitter: {
      card: "summary_large_image",
      title: serviceSeo.title + " - " + serviceSeo.fullTitle,
      description: serviceSeo.description,

      images: [serviceSeo.image],

      label1: "Written by",
      data1: "admin",
      label2: "Time to read",
      data2: "4 minute",

      creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
      canonical: serviceSeo.siteUrl,
      // languages: {
      //     en: "/en",
      //     ar: "/ar",
      // },
    },
  }
}



async function Services({params}) {
  const { requestTitle } = await params;
  // console.log(requestTitle);
  return (
    <main className="relative w-full overflow-hidden pt-30">
      <ServiceHighlight serviceRequestTitle={ requestTitle }/>
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/>
    </main>
  )
}

export default Services