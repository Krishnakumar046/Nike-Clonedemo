import React from 'react'
import Textbackdown from './Textbackdown'
import Json from './Json'
import Carousel from './Carousel'
import Frontcarousel from './Frontcarousel'
import Json2 from './Jsonsecond'
import Textbackdownsec from './Textbackdownsec'
import Twoimages from './Twoimages'
import Fourimages from './Fourimages'
import Sidebar from './Sidebar'
import Productinfo from './Productinfo'

export default function Frontinterface() {
  return (
    <div class="display ">
      <Frontcarousel />
      <Textbackdown />
      <Json />
      <Carousel />
      <Fourimages />
      <Textbackdownsec />
      <Sidebar />
      <Json2 />
      <Twoimages />
    </div>
  )
}
