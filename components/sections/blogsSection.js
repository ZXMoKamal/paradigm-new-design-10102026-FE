import React from 'react'
import ImagesGrid from '../shared/imageGrid'
import { getBlogs } from '@/api/blogs';

async function BlogsSection() {


  const blogs = await getBlogs();


  return (
    <ImagesGrid items={ blogs } path={"/blog/"}/>
  )
}

export default BlogsSection