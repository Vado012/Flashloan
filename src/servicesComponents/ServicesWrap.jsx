import React from 'react'
import ServicesRow1 from './ServicesRow1'
import HomeRow1 from '../homeComponents/HomeRow1'
import HomeRow6 from '../homeComponents/HomeRow6'
import ServicesRow2 from './ServicesRow2'
import HomeRow11 from '../homeComponents/HomeRow11'
import HomeRow12 from '../homeComponents/HomeRow12'


function ServicesWrap() {
  return (
    <div >
        <HomeRow1/>
        <ServicesRow1/>
        <HomeRow6/>
        <ServicesRow2/>
        <HomeRow11/>
        <HomeRow12/>
    </div>
  )
}

export default ServicesWrap