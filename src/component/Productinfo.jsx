import React, { createContext, useContext } from 'react'
import { CartContext } from '../Features/Contextprovider';
import { Link } from 'react-router-dom';


export default function Productinfo() {

    const { selectedProduct, cart, dispatch } = useContext(CartContext);
    return (
        <div class="container d-flex flex-row justify-content-center backrou ">
            {
                selectedProduct ? (
                    <>
                        <div class='container  mt-3' key={selectedProduct.id}>
                            <div class='d-flex flex-row flex-wrap'>
                                <div class=' d-flex flex-column flex-wrap col-md-6'>
                                    <img src={selectedProduct.icon} alt={selectedProduct.name} class='imgfluid' />
                                    <button class=' btn btn-dark rounded-pill text-center mt-3' style={{ height: "50px" }} onClick={() => dispatch({ type: 'Add', id: selectedProduct.id, product: selectedProduct })}> Add to Bag</button>
                                    <button class=' btn btn-light border rounded-pill text-center mt-3 fw-medium' style={{ height: "50px" }}>Favourite</button>
                                </div>
                                <div class='col-md-6 p-2'>
                                    <nav >
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/Home">Home</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page"><Link to="/product">product</Link></li>
                                            <li class="breadcrumb-item active" aria-current="page"><Link to="/Checkouts">Checkout</Link> </li>
                                        </ol>
                                    </nav>
                                    <p class='fs-2'>{selectedProduct.name}</p>
                                    <p class='ms-2'> <span class="badge text-bg-primary">4.4</span>1,10,316 Ratings & 7,172 Reviews</p>
                                    <p class='text-success'>Extra ₹6000 off</p>
                                    <p class='fs-0'>₹ : {selectedProduct.price}<span class='p-3'><mark>₹23,999</mark></span><span class='text-success'><bold>33% off</bold></span></p>
                                    <p class='small'>+ ₹59 Secured Packaging Fee  //   Which includes the Shipping charges</p>
                                    <p class='pt-2'> Description : <bold class='fw-medium'>{selectedProduct.description}</bold></p>
                                    <p class='fw-medium'>This item is currently in stock</p>
                                    <h5 class="mb-3">Select Size : </h5>
                                    <div class='container d-flex flex-row flex-wrap gap-3 mx-1 mb-2'>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 5</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 5.5</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 6</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 6.5</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 7</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 7.5</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 8</button>
                                        <button class="btn btn-light border mb-2" style={{ width: "100px" }}>UK 8.5</button>
                                    </div>

                                    <div class='mt-3 text-break  pl-5 lh-lg'>
                                        <p class=''><h5>Product Description :</h5>The product is from the Nike originally displayed Shoes are Nike's flagship product. The company manufactures different shoes for a wide variety of sports, such as basketball, football, golf, soccer, baseball, snowboarding, hockey, tennis and volleyball. It also makes consumer fashion shoes such as Mary Janes and flip-flops. Nike shoes are designed for efficient sports performance as well as for aesthetics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (<> <p>No product selected.....</p> </>)
            }
        </div >
    )
}
