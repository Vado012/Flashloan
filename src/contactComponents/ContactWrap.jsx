import React from 'react'
import ContactRow1 from './ContactRow1'
import HomeRow11 from '../homeComponents/HomeRow11'
import HomeRow12 from '../homeComponents/HomeRow12'
import HomeRow1 from '../homeComponents/HomeRow1'

function ContactWrap() {
  return (
    <div>
        <HomeRow1/>
        <ContactRow1/>
        <HomeRow11/>
        <HomeRow12/>
    </div>
  )
}

export default ContactWrap