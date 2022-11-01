import products from "../assets/products.js";
import { useSelector ,useDispatch  } from 'react-redux'
import { useEffect } from "react";
import React, { useState } from 'react'
import ProductCard from "../component/ProuductCard/ProductCard.jsx";
import Category from "../component/Category/Category";
import { Col, Container, Row } from "reactstrap";
import hero from '../assets/images/hero.png'
import { Link } from "react-router-dom";
const Home = () => {

const product = useSelector((state)=>state.product)






  return (
    
    <Container> 
 

     
      <Row>
        <Col lg='6' md='6' className="hero-details">
        <h4>Easy way to make an order </h4>
        <h1 color="">Hungry?<span>Just order foood </span><span>at your door</span></h1>
        <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                  
                </div>
        </Col >
        <Col lg='6' md='6' className="hero-image ">
        <img src={hero} style={{filter:'hue-rotate(25deg)' }}  className="w-100" alt="" />
        </Col>










      <Category/>

        {product.map((item)=>(
          <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
          <ProductCard item={item}/>

          </Col>

        ))} 
        </Row>

    </Container>
  )
}

export default Home