import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Features/Contextprovider';



export default function Navbar() {

    const { cart } = useContext(CartContext)
    return (
        <div>
            <header>
                <div class='container'>
                    <nav class="navbar navbar-expand-lg navitem d-flex justify-content-between">
                        <div class=" d-flex justify-content-between container">
                            <div>
                                {/* <img src={logo} alt="Bootstrap" width="250" height="50" /> */}
                            </div>
                            <div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                                        {/* <object data="" type=""></object> */}
                                        <li class="nav-item">
                                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/product' class="nav-link" >Products</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link " to='/About' role="button">
                                                About
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/Contact' class="nav-link " >Contact Us</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/cart' class="nav-link "><BsCart />({cart.length})</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </div>
    )
}
