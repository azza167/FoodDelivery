import React from "react";
import { createStore, applyMiddleware } from "redux";
import products from "../assets/products";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { createLogger } from 'redux-logger'
// import { auth } from "./firebase";
const logger = createLogger();


let initstate = {
    product: products,
    admaincart: [],
    AddTocart: [],






    offers: '',

    userauto: '',





    tot: 0,
    qty: 1,
    user: "",
    cartShow: true,

    userauto: false,

    showin: false,
};
const mid = applyMiddleware(logger);
const Store = (state = initstate, action) => {
    /* HEAD*/

    function aa() {
        const a = auth.onAuthStateChanged((userr) => {
            state.user = userr;
            state.userauto = state.user;
            state.showin = true;
        });

        return a;
    }

    aa();

    if (action.type === "offers") {

        console.log(action.payload)
        return {...state, offers: action.payload }

    }
    if (action.type === "add") {
        state.product.push(action.payload);
        state.admaincart.push(action.payload);
    }

    if (action.type === "delete") {
        return {
            ...state,
            admaincart: state.admaincart.filter(
                (el, i) => i != action.payload.index,
                1
            ),
            product: state.product.filter((el) => el.id != action.payload.ell.id),
        };
    }
    if (action.type === "cart") {
        console.log(state.tot);

        console.log("check");
        state.tot += action.payload.price;
        console.log(state.AddTocart);
        console.log("check");
        state.AddTocart.push(action.payload);
        return {...state };
    }
    if (action.type === "del") {
        console.log("delete");
        console.log(action.payload.element);
        console.log(action.payload.element.id);
        console.log(action.payload.index);

        return {
            ...state,
            AddTocart: state.AddTocart.filter((el, i) => i != action.payload.index),
            tot: (state.tot -= action.payload.element.price),
        };
    }
    if (action.type === "qont") {
        console.log(action.payload);
        return {...state, totalQuantity: action.payload };
    }
    if (action.type === "showCart") {
        state.cartShow ? (state.cartShow = false) : (state.cartShow = true);
        console.log("sasd");

        return {...state };
    }
    return state;
};

const store = createStore(Store, mid);

export default store;