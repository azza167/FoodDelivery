// import React from 'react'
import {createStore} from 'redux'
import products from '../assets/products'

let initstate={
    product:products,
    admaincart:[]
}
const Store = (state = initstate, action) => {
    if(action.type === "add" ){
        // const a = state.product.filter((el)=>el.image01 == action.payload.image01)
// console.log(a)
        state.product.push(action.payload)
        state.admaincart.push(action.payload)


   
 return {...state ,}

   }

   if(action.type === "delete" ){


    return {...state ,admaincart:state.admaincart.filter((el,i)=>i!==action.payload.index,1),product:state.product.filter((el)=>el.id!==action.payload.ell.id) }


   }

  return state;
}
const store = createStore(Store)
  export default store;

