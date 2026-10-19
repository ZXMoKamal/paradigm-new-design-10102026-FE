import { getEvent } from '@/api/events';
import PortfolioDetails from '@/components/sections/eventDetails';
import EventDetails from '@/components/sections/eventDetails'
import EventSuggestions from '@/components/sections/eventSuggestions'
import PageHeader from '@/components/shared/pageHeader';
import { SEO } from '@/data/SEO';
import React from 'react'


export async function generateMetadata({ params }) {
  const { requestTitle } = await params;
  const event = await getEvent(requestTitle);
  const portfolioSeo = SEO.portfolio(event.name, event.description, event.thumb, [event.name, event.clint, event.location], requestTitle);
  // const serviceTitle = decodeURIComponent(title);


  return {
    title: portfolioSeo.title,

    description: portfolioSeo.description,

    keywords: portfolioSeo.keywords,

    authors: [
      {
        name: portfolioSeo.fullTitle,
      },
    ],

    creator: portfolioSeo.fullTitle,

    applicationName: portfolioSeo.fullTitle,

    icons: {
      icon: portfolioSeo.icon,
    },

    openGraph: {
      title: portfolioSeo.title + " - " + portfolioSeo.fullTitle,
      description: portfolioSeo.description,

      url: portfolioSeo.siteUrl,

      siteName: portfolioSeo.fullTitle,

      images: [
        {
          url: portfolioSeo.image,
          width: 230,
          height: 80,
          alt: portfolioSeo.fullTitle,
        },
      ],

      locale: portfolioSeo.locale,
      type: portfolioSeo.type,
    },

    twitter: {
      card: "summary_large_image",
      title: portfolioSeo.title + " - " + portfolioSeo.fullTitle,
      description: portfolioSeo.description,

      images: [portfolioSeo.image],

      label1: "Written by",
      data1: "admin",
      label2: "Time to read",
      data2: "4 minute",

      creator: "@Paradigm",//need real paradigm twitter account
    },

    alternates: {
      canonical: portfolioSeo.siteUrl,
      // languages: {
      //     en: "/en",
      //     ar: "/ar",
      // },
    },
  }
}


async function portfolio({ params }) {
  const { requestTitle } = await params;


    const event = await getEvent(requestTitle);

  if(!event){
    notFound();
  }

  const imagesWithAlt =[];
  for (let src of event.images){
    imagesWithAlt.push({image:src,alt:event.name });
  }


  const info = [
    { label: "Event Name", value: event.name },
    { label: "Client", value: event.client },
    { label: "Date", value: event.date },
    { label: "Location", value: event.location },
  ].filter((item) => item.value);

  return (
    <main className="relative w-full overflow-hidden">
      {/* <EventDetails eventRequestTitle={ requestTitle } />
      <EventSuggestions/> */}
      <PageHeader title={ event.name } highlight="" breadcrumbLabel={ "past-events" } breadcrumbHref={"/past-events/"}  backgroundAlt={event.name + " Header Image"}/>
      <PortfolioDetails project={{ ...event, imagesWithAlt, info }} />
      </main>
  )
}

export default portfolio