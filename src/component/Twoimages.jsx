import React from 'react'
import contentone from '../images/Doublecard.jpg'
import contenttwo from '../images/Doublecart1.jpg'

export default function Twoimages() {
    return (

        <div className="container-fluid">
            <div className=" d-flex row">
                <div className="col-md-6 col-sm-6 ">
                    <img src={contentone} className="img-fluid" alt="contentone" />
                </div>
                <div className="col-md-6 col-sm-6 w-50 h-50">
                    <img src={contenttwo} className="img-fluid" alt="contenttwo" />
                </div>

            </div>
        </div>
    )
}
