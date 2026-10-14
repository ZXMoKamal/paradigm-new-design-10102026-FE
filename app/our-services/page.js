import OurServicesDetails from '@/components/sections/ourServices'
import ServicesSection from '@/components/sections/ourServicesDetails'
import ServicesIntro from '@/components/sections/servicesIntro'
import PageHeader from '@/components/shared/pageHeader'
import React from 'react'

function OurServices() {
  return (
    <main className="relative w-full overflow-hidden">
      <PageHeader title="Our Services" breadcrumbLabel="Our Services" breadcrumbHref="/our-services" backgroundAlt="Our Services Background Image" />
      <ServicesSection/>
      {/* <ServicesIntro /> */}
      {/* <OurServicesDetails /> */}
    </main>
  )
}

export default OurServices