import React, { useContext } from 'react'
import logo from "../images/nike-logoo (2).png";
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Features/Contextprovider';


export default function NAvbarsecond() {

    const { cart } = useContext(CartContext)
    return (
        <div>
            <div class='container-fluid  fixed-top bg-light mb-2'>
                <nav class='d-flex justify-content-between navbar navbar-expand-lg navitem'>
                    <div>
                        <img src={logo} alt="Bootstrap" width="100" height="50" />
                        <span class='text-center fw-bold'>Nike-clone</span>
                    </div>
                    <div class='d-flex justify-content-between'>
                        <button class=" btn btn-light navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end bg-grey text-white fw-medium" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <div>
                                    <img src={logo} alt="Bootstrap" width="100" height="50" />
                                    <span class='text-center fw-bold text-black'>Nike-clone</span>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div className=" navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto text-black">
                                        <li class="nav-item">
                                            <Link to='/Home' class="nav-link active text-black" aria-current="page">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/product' class="nav-link text-black" >Products</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link text-black" to='/About' role="button">
                                                About
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/Contact' class="nav-link text-black" >Contact Us</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/cart' class="nav-link text-black"><BsCart />({cart.length})</Link>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}
