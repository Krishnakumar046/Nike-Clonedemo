import React, { useContext } from 'react';
import { CartContext } from '../Features/Contextprovider';
import Cartproduct from './Cartproduct';
import { Link } from 'react-router-dom';
import { totalItem, totalPrice } from '../Features/Cartreducer';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import shoes from '../images/checkout.webp';
export default function Cart() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/Checkouts");
    }
    return (
        <div className='Container-fluid mt-5 .backrou'>
            <div className="d-flex flex-column flex-wrap">
                <div className="col-md-12">

                    {
                        cart.map(p => {
                            return <Cartproduct product={p} />
                        })
                    }
                </div>
                <Carousel />
                <div class="container-fluid  d-flex flex-row flex-wrap  col-12 p-2  ">
                    <div class=" col-6 col-md-6 col-sm-6">
                        <h4>Summary</h4>
                        <div class="d-flex flex-column">
                            <div class="col-md-12 d-flex flex-row flex-wrap justify-content-between align-items-center">
                                <div>
                                    <h5>Total Items: {totalItem(cart)}</h5>
                                </div>
                                <div>
                                    <button class="btn btn-success rounded-pill" onClick={nextPage}>Checkout</button>
                                </div>
                            </div>
                            <div class='col-md-6'>
                                <p className="card-text">If you buy some more product <br />Click on  <Link to="/product" className="card-link">Products</Link> to buy more products</p>
                                <p className="card-text">If you Remove some product Click on remove in the cart</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-sm-6 border">
                        <img src={shoes} class='carimgs' alt='image'></img>
                    </div>
                </div>
            </div>
        </div >

    )
}
