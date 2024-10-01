import React, { useContext } from 'react'
import { CartContext } from '../Features/Contextprovider'
import { Link, useNavigate } from 'react-router-dom'
import Checkouts from './Checkouts'


export default function Cartproduct({ product }) {

  const { cart, dispatch } = useContext(CartContext)

  const navigate = useNavigate();

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
  const handleClick = () => {
    navigate('/Checkouts');
  }
  return (
    <>
      <div class='container  mt-3' key={product.id}>
        <div class='d-flex flex-row flex-wrap'>
          <div class='  d-flex flex-column flex-wrap col-md-6'>
            <img src={product.icon} alt={product.name} class='imgfluid' />
            <button class=' btn btn-warning text-center mt-3'><bold>NOTIFY ME</bold></button>
            <p class='text-gray text-center'>Get notified when this item comes back in stock.</p>
          </div>
          <div class='col-md-6 p-2'>
            <nav >
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page"><Link to="/product">product</Link></li>
                <li class="breadcrumb-item active" aria-current="page"><Link to="/Checkouts">Checkout</Link> </li>
              </ol>
            </nav>
            <p class='fs-2'>{product.name}</p>
            <p class='ms-2'> <span class="badge text-bg-primary">4.4</span>1,10,316 Ratings & 7,172 Reviews</p>
            <p class='text-success'>Extra ₹6000 off</p>
            <p class='fs-0'>₹ : {product.price}<span class='p-3'><mark>₹23,999</mark></span><span class='text-success'><bold>33% off</bold></span></p>
            <p class='small'>+ ₹59 Secured Packaging Fee  //   Which includes the Shipping charges</p>
            <p class='pt-2'> Description : {product.description}</p>
            <p>This item is currently in stock</p>
            <div className="d-flex flex-row flex-wrap">
              <div class='btn-group btn-group-sm'>
                <button className="btn btn-success " onClick={() => Decrement(product.id)}><b>-</b></button>
                <button className="btn btn-light">{product.Quantity}</button>
                <button className="btn btn-success " onClick={() => Increment(product.id)}><b>+</b></button>
              </div>
              <div>
                <p class='ms-2'>Number of items to add</p>
              </div>
            </div>
            <div class='mt-3 text-break  pl-5 lh-lg'>
              <p class=''><h5>Product Description :</h5>The product is from the Nike originally displayed Shoes are Nike's flagship product. The company manufactures different shoes for a wide variety of sports, such as basketball, football, golf, soccer, baseball, snowboarding, hockey, tennis and volleyball. It also makes consumer fashion shoes such as Mary Janes and flip-flops. Nike shoes are designed for efficient sports performance as well as for aesthetics.</p>
            </div>
            <div class='d-flex flex-row flex-wrap'>
              <button className="btn btn-warning " onClick={() => dispatch({ type: 'Remove', id: product.id })}>Remove</button>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
