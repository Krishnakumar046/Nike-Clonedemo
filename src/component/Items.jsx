import React, { useContext, useState } from 'react';
import { CartContext } from '../Features/Contextprovider';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Items({ Ans }) {

  const { cart, dispatch } = useContext(CartContext);
  const handleAddProduct = () => {
    dispatch({ type: "Add", product: Ans });
    console.log("addproduct")

  };
  const handleClick = () => {
    dispatch({ type: 'Info', product: Ans });
    console.log("info clicked");
  };

  return (
    <div class='shadow productfirst blur-on-hover'>
      <div class='blur-on-hover'>
        <div key={Ans.id}>
          <div className="card h-auto" style={{ width: "23rem" }} >
            <img src={Ans.icon} className="card-img-top " alt="shoes" />
            <div class='card-img-overlay text-end'>
              <button class='btn rounded-pill fs-3 filters ' onClick={handleClick}><Link to='/Info' class="nav-link text-white"><i class="bi bi-box-arrow-in-right text-black "></i></Link></button>
            </div>
            <div className="card-body">
              <h5 className="card-title">{Ans.name}</h5>
              <p className="card-text">{Ans.description}</p>
              <p className="card-text"> $ : {Ans.price}</p>
              <div class="container d-flex flex-row flex-wrap justify-content-between">
                <button class="btn btn-primary rounded-pill text-center fw-medium text-white" style={{ width: "60px", height: "35px" }} onClick={handleAddProduct}><bold>Buy</bold></button>
                {/* <button class=' btn btn rounded-pill fs-3' onClick={handleClick}><Link to='/Info' class="nav-link text-white"><i class="bi bi-box-arrow-in-right text-black "></i></Link></button> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
