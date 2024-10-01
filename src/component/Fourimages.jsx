import React from 'react'
import Imageone from '../images/Card1.jpg'
import ImageTwo from '../images/card2.jpg'
import ImageThree from '../images/card3.jpg'
import ImageFour from '../images/card4.jpg'

export default function Fourimages() {
  return (
    <div>
        <div className="container-fluid imagescon carouselimg">
            <div className=" d-inline-flex flex-row flex-wrap">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <img src={Imageone} alt="image1"  class='imagesfour' />
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <img src={ImageTwo} alt="image2"  class='imagesfour' />
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <img src={ImageThree} alt="image3"  class='imagesfour' />
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <img src={ImageFour} alt="image4"  class='imagesfour' />
                </div>
            </div>
        </div>
    </div>
  )
}
