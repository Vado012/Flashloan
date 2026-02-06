import React from 'react'
import BlogRow from './BlogRow'
import HomeRow1 from '../homeComponents/HomeRow1'
import BlogRow2 from './BlogRow2'
import BlogRow3 from './BlogRow3'
import HomeRow11 from '../homeComponents/HomeRow11'
import HomeRow12 from '../homeComponents/HomeRow12'

function BlogWrap() {
  return (
    <div>
      <HomeRow1/>
      <BlogRow/>
      <BlogRow2/>
      <BlogRow3/>
      <HomeRow11/>
      <HomeRow12/>
    </div>
  )
}

export default BlogWrap