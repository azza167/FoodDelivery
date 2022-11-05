import React from 'react'
import { createStore } from 'redux'
import products from '../assets/products'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

// import { auth } from "./firebase";

let initstate = {
    product: products,
    admaincart: [],
    AddTocart: [],




    tot: 0,
    user: '',

    userauto: false,

    showin: false
}
const Store = (state = initstate, action) => {




    function aa() {

        const a = auth.onAuthStateChanged((userr) => {
            state.user = userr;
            state.userauto = state.user
            state.showin = true


        })

        return a
    }

    aa()



    if (action.type === "add") {
        
    
        state.product.push(action.payload)
        state.admaincart.push(action.payload)



        return {...state, }

    }

    if (action.type === "delete") {


        return {...state, admaincart: state.admaincart.filter((el, i) => i != action.payload.index, 1), product: state.product.filter((el) => el.id != action.payload.ell.id) }


    }
    if (action.type === "cart") {


        console.log(state.tot)

        console.log("check")
        state.tot += action.payload.price
        console.log(state.AddTocart)
        state.AddTocart.push(action.payload)
        return {...state, }


    }
    if (action.type === "del") {


        console.log("delete")
        console.log(action.payload.element)

        return {...state, AddTocart: state.AddTocart.filter((el, i) => i != action.payload.index), tot: state.tot -= action.payload.element.price }

    }

    return state;
}





















const store = createStore(Store)


export default (store)