import React, { useContext } from 'react'
import { CartContext } from '../Features/Contextprovider';
import { productQuantity, totalItem, totalPrice } from '../Features/Cartreducer';
import Jsonsecond from './Jsonsecond';

export default function Checkouts() {

    const { cart, dispatch } = useContext(CartContext);


    const Increment = (id) => {

        const Index = cart.findIndex(p => p.id === id)
        if (cart[Index].Quantity < 10) {
            dispatch({ type: "Increase", id })
        }
    }

    const Decrement = (id) => {

        const Index = cart.findIndex(p => p.id === id)
        if (cart[Index].Quantity > 1) {
            dispatch({ type: "Decrease", id })
        }
    }
    return (
        <>
            <div class='container-fluid backrou col-md-12'>
                <div class='d-flex flex-row flex-wrap justify-content-between '>
                    <div class='col-4 col-sm-6'>
                        <div class="border rounded p-1 m-1">
                            <p class="text-danger fw-bold">Members get free shipping on orders $50+</p>
                            <p class="fw-medium">Become a Nike Member for fast free shipping on orders $50+ Join us or Sign-in</p >
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnea" aria-expanded="true" aria-controls="collapseOne">
                                        Join Our Exclusive Membership Program!
                                    </button>
                                </h2>
                                <div id="collapseOnea" data-bs-spy="scroll" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body overflow-auto" style={{ maxHeight: " 200px" }}>
                                        <strong>Unlock Exclusive Benefits and Save More.</strong> Welcome to our exclusive Membership Program, designed to offer you the best shopping experience with unmatched value. By joining, you'll gain access to a range of perks that make shopping easier, faster, and more rewarding.
                                        <br />
                                        <strong>Why Become a Member?</strong>As a member, you’ll enjoy a variety of benefits that are tailored to enhance your shopping experience:
                                        <br />

                                        <strong>Free Shipping on All Orders</strong>

                                        Say goodbye to shipping fees! As a member, you'll receive free standard shipping on every purchase, no matter the size of your order.<br />
                                        <strong>Exclusive Offers and Discounts</strong>

                                        Get access to member-only discounts, early access to sales, and special promotions. Save more every time you shop with us.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class=''>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div>
                                            <div class="border rounded d-flex flex-row justify-content-between mt-2">
                                                <div class=" col-12 d-flex flex-row justify-content-between">
                                                    <div class=' d-flex flex-row justify-content-between'>
                                                        <div class=''>
                                                            <img src={item.icon} alt="product" class="rounded" style={{ width: "100px", height: "100px" }} />
                                                        </div>
                                                        <div class="ms-3 " key={index}>
                                                            <p>{item.name}</p>
                                                            <p>{item.description}</p>
                                                            <div className="d-flex flex-row flex-wrap">
                                                                <div class='btn-group btn-group-sm'>
                                                                    <button className="btn btn-success " onClick={() => Decrement(item.id)}><b>-</b></button>
                                                                    <button className="btn btn-light">{item.Quantity}</button>
                                                                    <button className="btn btn-success " onClick={() => Increment(item.id)}><b>+</b></button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="me-1 ms-3 align-items-end">
                                                        <p>MRP :₹{item.price}</p>
                                                        <button class='btn btn-warning' onClick={() => dispatch({ type: 'Remove', id: item.id })}>Remove</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div >
                    </div>
                    <div class='col-6 '>
                        <h4 class='fw-bold'>Summary</h4>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnes" aria-expanded="true" aria-controls="collapseOne">
                                        Do you have a Promo Code?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOnes" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class=" container accordion-body d-flex flex-row flex-wrap">
                                    <input type="text" class="form-control col-md-4 " id="exampleFormControlInput1" placeholder="Enter the code" style={{ width: "50%" }} /><span><button class='btn btn-success ms-3'>Add</button></span>
                                </div>
                            </div>
                            <div class=" d-flex flex-row flex-wrap justify-content-between">
                                <p class='fw-medium'>Total product</p>
                                <p class='fw-medium'> {totalItem(cart)}</p>
                            </div>
                            <div class=" d-flex flex-row flex-wrap justify-content-between">
                                <p class='fw-medium'>Estimated Shipping & Handling</p>
                                <p class='fw-medium'>Free</p>
                            </div>
                            <div class=" d-flex flex-row flex-wrap justify-content-between">
                                <p class='fw-medium'>Estimated Tax</p>
                                <p class='fw-medium'>$ 8%</p>
                            </div>
                            <hr />
                            <div class=" d-flex flex-row flex-wrap justify-content-between">
                                <p class='fw-medium'>Total</p>
                                <p class='fw-medium'>$ {totalPrice(cart)}</p>
                            </div>
                            <hr />
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-dark rounded-pill p-3" type="button">Pay now</button>
                            <button class="btn btn-dark rounded-pill p-3" type="button">Pay Later</button>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <Jsonsecond class="productfirst mt-5" />

            </div>
        </>
    )
}
