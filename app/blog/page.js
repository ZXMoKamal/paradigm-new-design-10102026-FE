import BlogsSection from '@/components/sections/blogsSection'
import PageHeader from '@/components/shared/pageHeader'
import { SectionHeader } from '@/components/shared/sectionHeader'
import React from 'react'

function Blog() {
  return (
      <main className="relative w-full overflow-hidden pb-20">
        <PageHeader title-tag="h1" title="Blog" breadcrumbLabel="Blog" breadcrumbHref="/blog" />
            {/* <SectionHeader
                    subtitle={"Blog"} 
                    title={"The latest insights and perspectives from our team."}
                    titleTag={"h2"}
                    subtitleTag={"h1"}
                    className='mx-10 xl:m-auto w-full xl:w-[1220px]'
                     /> */}
                     <div className="py-20 text-center max-w-2xl mx-auto space-y-4" data-aos="fade-up" data-aos-duration="800">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Our Expert Team
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
            Meet The Minds Behind <span className="text-primary">Our Success</span>
          </h2>
        </div>
          <BlogsSection />
      </main>
  )
}

export default Blog