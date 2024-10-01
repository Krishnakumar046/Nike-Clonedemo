import React, { useState } from 'react';
import data from '../component/data.json';
import Items from '../component/Items';

export default function Json() {

    const [products, setProducts] = useState(data);
    return (
        <div class='container-fluid'>
            <h5 class="text-start mb-3  fs-2">Popular Right Now</h5>
            <div class=' row row-cols-1 row-cols-sm-2 row-cols-md-4 me-1 '>
                {
                    products.map((product =>

                        <Items Ans={product} />

                    ))
                }
            </div>

        </div>
    )
}
