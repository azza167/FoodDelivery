import React from 'react'
import {createStore} from 'redux'
import products from '../assets/products'

let initstate={
    product:products,
}
const Store = (state = initstate, action) => {
    if(action.type === "add" ){

    //  action.peload.map((el)=>state.products.push(el))
     console.log(state.product)
       return {...state}
 

   }

  return state;
}
const store = createStore(Store)
  export default store;

