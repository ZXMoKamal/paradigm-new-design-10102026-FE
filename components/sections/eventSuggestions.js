import React from 'react'
import Suggestions from '../shared/suggestions'

function EventSuggestions() {
  return (
    <section className='m-auto w-full lg:w-[1300px] py-10 px-5'>
        <h2 className='text-[35px] font-primary-medium'>You May Also Like</h2>
        <Suggestions TitleTag={ "h3" } items={ [
            {
                title: "Egypt- France Business Forum", img: "/images/ezgif-608a1f2271991c70.webp", alt: ""
            },
            {
                title: "2nd Ministerial Conference Khartoum Process", img: "/images/ezgif-6704f832b48fff58.webp", alt: ""
            },
            {
                title: "The National Initiative for Smart Green Projects", img: "/images/ezgif-6f3d8c1d6cb46c68.webp", alt: ""
            },
          ] }
          className=' lg:ltr:ml-[26%]'
          />
    </section>
  )
}

export default EventSuggestions