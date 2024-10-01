import React from 'react';
import shoe1 from '../images/background-shoe2.avif';

export default function Frontcarousel() {
    return (
        <div class='mt-5'>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={shoe1} class="d-block w-100 imgd" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
