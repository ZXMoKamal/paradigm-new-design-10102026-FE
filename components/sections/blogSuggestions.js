import React from 'react'
import Suggestions from '../shared/suggestions'

function BlogSuggestions() {
  return (
    <section className='m-auto w-full lg:w-[1300px] py-10 px-5'>
        <h2 className='text-[35px] font-primary-medium'>You May Also Like</h2>
        <Suggestions titleTag={ "h3" } items={ [
            {
                title: "Lorem Ipsum is simply dummy", img: "/images/thumb.jpg", alt: ""
            },
            {
                title: "Lorem Ipsum is simply dummy", img: "/images/thumb.jpg", alt: ""
            },
            {
                title: "Lorem Ipsum is simply dummy", img: "/images/thumb.jpg", alt: ""
            },
          ] }
          className=' lg:ltr:ml-[26%]'
          />
    </section>
  )
}

export default BlogSuggestions