import { getBlog } from '@/api/blogs';
import { getVisitorIdServer } from '@/lib/visitorIdServer';
import React from 'react'
import PageVisitDuration from '../shared/PageVisitDuration';

async function BlogContent({ blogRequestTitle }) {
      const blog = await getBlog(blogRequestTitle, null, await getVisitorIdServer());
    
      if(!blog){
        notFound();
      }

  return (<>
          <PageVisitDuration itemId={blog.id} page={"article"} requestTitle={blog.requestTitle}/>
      <section className='px-5 m-auto w-full lg:w-[1300px] pb-10'>
          <h1 className='text-[34px] md:text-[42px] xl:text-[57px]'>{ blog.name }</h1>
          <br/>
          <img src={blog.thumb} className='w-[800px] m-auto'/>
          { JSON.parse(blog.content).map((item, inx) =>
              <fragment key={ inx }>
                  <br/>
                  <h2 className='text-[20px] md:text-[28px] xl:text-[34px]'>{ item.title }</h2>
                  <br/>
                  <p className='text-[16px] md:text-[18px] xl:text-[20px]'>{ item.paragraph }</p>
              </fragment>) }
    </section>
  </>
  )
}

export default BlogContent