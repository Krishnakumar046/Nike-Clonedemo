import React, { useState } from 'react'
import dataFour from '../component/data4.json';
import Items from './Items';

export default function Sideimage() {

    const [sideData, setSideData] = useState(dataFour);
    return (
        <div>
            <div class='container-fluid'>
                <h5 class="text-start mb-3  fs-2">Trendy Collections</h5>
                <div class=' row row-cols-1 row-cols-sm-2 row-cols-md-4 me-1  mb-3'>
                    {
                        sideData.map((item, index) => {
                            return (

                                <div key={index}>
                                    <Items Ans={item} />
                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}
