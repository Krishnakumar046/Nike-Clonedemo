import { useState } from 'react';
import data2 from '../data2.json';
import Items from './Items';

export default function Jsonsecond() {

    const [products, setProducts] = useState(data2);
    return (
        <div className='container-fluid'>
            <h5 class="text-start mb-3  fs-2">New Men's Shoes</h5>
            <div className='row row-cols-1 row-cols-sm-2  row-cols-md-4 me-1'>
                {
                    products.map((product =>

                        <Items Ans={product} />

                    ))
                }
            </div>

        </div>
    )
}
