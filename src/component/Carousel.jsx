import React from 'react';
import shoes1 from '../images/carouselimages.png'
import { Link } from 'react-router-dom';

export default function Carousel() {
    return (
        <div>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={shoes1} alt="Los Angeles" class=" carimges " />
                        <div class=" container-fluid d-flex flex-column card-img-overlay text-black text-start text-break p-5">
                            <h3 class='text-black fw-bold mt-3 text-start'>AIR JORDAN 39</h3><hr style={{ width: '30%', margin: '0 0' }} />
                            <p class="card-text text-break lh-lg fw-medium">Not just another shoe.it's the Air Jordan 39.His 39<br />Crafted toHonor MJ's domination of the game</p>
                            <button type="button" class="btn btn-dark rounded-pill" style={{ width: '250px', height: "50px" }}><span><Link to='/product' class="nav-link" >Shop Special Edition</Link></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
