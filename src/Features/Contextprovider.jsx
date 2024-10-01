import React, { createContext, useReducer, useState } from 'react'
import Cartreducer from './Cartreducer';

export const CartContext = createContext();

function Contextprovider({ children }) {

  const initialState = {
    cart: [],
    selectedProduct: null,
  }
  const [state, dispatch] = useReducer(Cartreducer, initialState);

  const { cart, selectedProduct } = state;
  return (
    <CartContext.Provider value={{ cart, selectedProduct, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default Contextprovider