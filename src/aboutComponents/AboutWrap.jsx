import React from 'react'
import AboutRow1 from './AboutRow1'
import HomeRow1 from '../homeComponents/HomeRow1'
import AboutRow2 from './AboutRow2'
import AboutRow3 from './AboutRow3'
import HomeRow11 from '../homeComponents/HomeRow11'
import HomeRow12 from '../homeComponents/HomeRow12'
import AboutRow4 from './AboutRow4'
import HomeRow5 from '../homeComponents/HomeRow5'
import AboutRow5 from './AboutRow5'
import AboutRow6 from './AboutRow6'
import HomeRow9 from '../homeComponents/HomeRow9'

function AboutWrap() {
  return (
    <div>
      <HomeRow1/>
      <AboutRow1/>
      <AboutRow2/>
      <AboutRow3/>
      <AboutRow4/>
      <HomeRow5/>
      <AboutRow5/>
      <AboutRow6/>
      <HomeRow9/>
      <HomeRow11/>
      <HomeRow12/>
    </div>
  )
}

export default AboutWrap
