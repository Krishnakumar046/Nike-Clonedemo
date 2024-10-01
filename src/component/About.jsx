import React, { useState } from 'react'
import Fourimages from './Fourimages'
import Aboutdata from '../component/Aboutdata.json'

export default function About() {

    const [useData, setUseData] = useState(Aboutdata);
    return (
        <>
            <div class='container backrou'>
                <div className=" conatiner -fluid col-12">
                    <h4 class='text-start fw-bold'>Nike Product Information</h4>
                    <p class="container fw-medium lh-lg p-2 ms-5"> Nike is a leading manufacturer of sports-related products, including shoes, apparel and equipment. Many people from all over the world are familiar with the brand, as it has a global presence that earns more than $18 billion in revenue. The Nike logo has become a popular global icon. Nike also partners with sports stars to further promote the brand.</p>
                </div>
                <div class='container d-flex flex-row flex-wrap mx-1 my-1 justify-content-center'>
                    {
                        useData.map((info, id) => {
                            return (
                                <>
                                    <div class="container-fluid border d-flex flex-row flex-wrap bg-light rounded g-3 col-md-6   my-1 justify-content-center">
                                        <img src={info.images} class='img-thumbnail' alt='Images' />
                                        <p class="fw-medium">{info.title}</p>
                                        <p class='fw-normal'>{info.description}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="d-flex flex-column text-center text-break mt-3 ml-3 pl-5 lh-lg">
                    <div className=" container-fluid col-12">
                        <h4 class='text-start fw-bold'>Footwear</h4>
                        <p class='container fw-medium lh-lg p-2 ms-5'>Shoes are Nike's flagship product. The company manufactures different shoes for a wide variety of sports, such as basketball, football, golf, soccer, baseball, snowboarding, hockey, tennis and volleyball. It also makes consumer fashion shoes such as Mary Janes and flip-flops. Nike shoes are designed for efficient sports performance as well as for aesthetics.</p>
                    </div>
                    <div className=" container-fluid col-12">
                        <h4 class='text-start fw-bold'>Apparel</h4>
                        <p class='container fw-medium lh-lg p-2 ms-5'>Nike also produces apparel for sports activities, as well as other activities including dance and yoga. It features different collections for its apparel, including Livestrong, Nike Pro, Nike Free and SPARQ. In addition, Nike makes casual clothes for men and women. Many consumers wear Nike clothes not just for sports activities but also for brand status.</p>
                    </div>
                </div>

            </div>
            <Fourimages />
        </>
    )
}
