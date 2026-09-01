import BlogsSection from '@/components/sections/blogsSection'
import { SectionHeader } from '@/components/shared/sectionHeader'
import React from 'react'

function Blog() {
  return (
      <main className="relative w-full overflow-hidden pt-30">
            <SectionHeader
                    subtitle={"Blog"} 
                    title={"The latest insights and perspectives from our team."}
                    titleTag={"h2"}
                    subtitleTag={"h1"}
                    className='mx-10 xl:m-auto w-full xl:w-[1220px]'
                     />
          <BlogsSection />
      </main>
  )
}

export default Blog