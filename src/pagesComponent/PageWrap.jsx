import React from 'react'
import PageRow from './PageRow'
import PagesRow2 from './PagesRow2'
import PagesRow3 from './PagesRow3'
import PagesRow4 from './PagesRow4'
import PagesRow5 from './PagesRow5'
import HomeRow1 from '../homeComponents/HomeRow1'
import HomeRow12 from '../homeComponents/HomeRow12'

function PageWrap() {
  return (
    <div>
        <HomeRow1/>
        <PageRow/>
        <PagesRow2/>
        <PagesRow3/>
        <PagesRow4/>
        <PagesRow5/>
        <HomeRow12/>

    </div>
  )
}

export default PageWrap