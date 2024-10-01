import React from 'react'
import { Link } from 'react-router-dom'

export default function Textbackdownsec() {
    return (
        <div>
            <div class="mt-4 mb-5 p-5  text-center">
                <h4 class="">Jordan Men</h4>
                <h3 class="fw-bold fs-1 fontfam">FLIGHT MVP</h3>
                <p class=" container textback text-right text-break mt-3 ml-3 pl-5 lh-lg ">Kick your style into high gear with bold pieces inspired br the <br />racetrack. Pair graphic tops and hoodies with versatile bottoms<br /> and layering pieces for ahigh octane look.
                </p>
                <button class='btn btn-dark text-white rounded-pill text-center' style={{ width: "80px", height: "40px" }}><span><Link to='/product' class="nav-link" >Shop</Link></span></button>
            </div>
        </div>
    )
}
