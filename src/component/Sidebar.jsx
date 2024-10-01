import React, { useState } from 'react'
import info from '../component/data5.json'
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

    const navigate = useNavigate();

    const [sideData, setSideData] = useState(info);

    return (
        <div>
            <h5 class="container-fluid fw-medium">New Products</h5>
            <div class="wrapper">
                {
                    sideData.map((item, index) => {
                        return (
                            <div class='item'>
                                <div class="  card text-bg-light">
                                    <img src={item.images} class='card-img smallimage' alt="inage" />
                                    <div class='card-img-overlay'>
                                        <h5 class="card-title align-items-end">{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
