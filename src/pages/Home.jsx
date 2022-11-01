import products from "../assets/products.js";

import React, { useState } from 'react'
// import ProductCard from "../component/ProuductCard/ProductCard.jsx";
import Category from "../component/Category/Category";
import { Col, Container, Row } from "reactstrap";
import hero from '../assets/images/hero.png'
const Home = () => {

// const [allproducts,setAllProducts]=useState(products);


  return (
    
    <Container> 
      <Row>
        <Col lg='6' md='6' className="hero-details">
        <h4>Easy way to make an order </h4>
        <h1 color="">Hungry?<span>Just order foood </span><span>at your door</span></h1>
        </Col>
        <Col lg='6' md='6' className="hero-image ">
        <img src={hero}  className="w-100" alt="" />
        </Col>



      <Category/>
        </Row>

    </Container>
  )
}

export default Home