import { getService } from '@/api/services';
import ContactSection from '@/components/sections/contactSection'
import ServiceDetails from '@/components/sections/service';
import PageHeader from '@/components/shared/pageHeader';
import ServiceHighlight from '@/components/shared/serviceHighlight'
import { SEO } from '@/data/SEO';
import React from 'react'



export async function generateMetadata({ params }) {
  const { requestTitle } = await params;
  const service = await getService(requestTitle);
  const serviceSeo = SEO.services(service.title, service.points.map((v) => v.point.split("#").join(", ")).join(", "), service.points.map((v) => v.point.split("#")), requestTitle);
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
  
  
    const service = await getService(requestTitle);
    if(!service){
      notFound();
    }

  return (
    <main className="relative w-full overflow-hidden">
    <PageHeader title="Our Services" breadcrumbLabel="Our Services" breadcrumbHref="/our-services" backgroundAlt="Our Services Background Image" />
      <ServiceDetails 
          title={service.title} 
          // highlightedTitle="Design solution" 
          image="/images/services/service-details-img-1.png" 
          imageAlt="Service overview" 
          introduction="We provide a comprehensive range of services to help businesses achieve their goals. Our team of experts is dedicated to delivering innovative solutions that drive growth and success." 
          description={service.description}
          highlights={service.points} 
          // processTitle="Our Process" 
          // processSteps={[{ step: 1, description: "Initial Consultation" }, { step: 2, description: "Requirement Analysis" }, { step: 3, description: "Design & Development" }, { step: 4, description: "Testing & Deployment" }]} 
          // approachTitle="Solution Approach" 
          // approachParagraphs={["We follow a structured approach to ensure the successful delivery of our services.", "Our team collaborates closely with clients throughout the project lifecycle to ensure alignment with business objectives."]} 
          // supportingImages={["/images/services/supporting-image-1.png", "/images/services/supporting-image-2.png"]} 
      />
      {/* <ServiceHighlight serviceRequestTitle={ requestTitle }/>
      <hr className="border-border-primary" />
      <br/>
      <br/>
      <ContactSection/> */}
    </main>
  )
}

export default Services