import React, { useContext, useState } from 'react'
import Json from './Json'
import Jsonsecond from './Jsonsecond'
import datathree from '../component/datathree.json'
import { CartContext } from '../Features/Contextprovider'
import Sideimage from './Sideimage'
import { Link } from 'react-router-dom'




export default function Product() {
    const [products, setProducts] = useState(datathree);
    const { cart, dispatch } = useContext(CartContext);



    return (
        <div class='productcard backrou'>
            <Json class='productfirst' /><br />
            <Jsonsecond class='productfirst' />
            <div className='container-fluid productfirst'>
                <h5 class="text-start mb-3  fs-2">Classic Collection</h5>
                <div className='row row-cols-1 row-cols-2 row-cols-md-4 me-1 productfirst'>
                    {
                        products.map((product =>
                            <div class='shadow  productfirst '>
                                <div key={product.id}>
                                    <div className="card h-auto" style={{ width: "23rem" }}>
                                        <img src={product.icon} className="card-img-top bg-secondary bg-gradient" alt="shoes" />
                                        <div class='card-img-overlay text-end'>
                                            <button class='btn rounded-pill fs-3 filters' onClick={() => dispatch({ type: 'Info', product: product })}><Link to='/Info' class="nav-link text-white"><i class="bi bi-box-arrow-in-right text-black "></i></Link></button>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"> $ : {product.price}</p>
                                            <div class="container d-flex flex-row flex-wrap justify-content-between">
                                                <button class='btn btn-primary rounded-pill text-center fw-medium' style={{ width: "60px", height: "35px" }} onClick={() => dispatch({ type: 'Add', product: product })}>Buy</button>
                                                {/* <button class='btn rounded-pill fs-3 filters' onClick={() => dispatch({ type: 'Info', product: product })}><Link to='/Info' class="nav-link text-white"><i class="bi bi-box-arrow-in-right text-black "></i></Link></button> */}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
            <Sideimage class='productfirst' />
        </div>
    )
}
