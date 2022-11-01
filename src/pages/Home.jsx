<<<<<<< HEAD
// import products from "../assets/products.js";
// import { useSelector ,useDispatch  } from 'react-redux'
// import { useEffect } from "react";
import React  from 'react'
//  import ProductCard from "../component/ProuductCard/ProductCard.jsx";
=======
import products from "../assets/products.js";
import React, { useState } from 'react'
import ProductCard from "../component/ProuductCard/ProductCard.jsx";
>>>>>>> d39a5cf480d6b8850d8cd6a1d2ac61130cca7b14
import Category from "../component/Category/Category";
import { Col, Container, Row } from "reactstrap";
import hero from '../assets/images/hero.png'
const Home = () => {

<<<<<<< HEAD
// const [allproducts,setAllProducts]=useState(products);

  return (
    
    <Container>      
=======
const [allproducts]=useState(products);


  return (
    
    <Container> 
>>>>>>> d39a5cf480d6b8850d8cd6a1d2ac61130cca7b14
      <Row>
        <Col lg='6' md='6' className="hero-details">
        <h4>Easy way to make an order </h4>
        <h1 color="">Hungry?<span>Just order foood </span><span>at your door</span></h1>
<<<<<<< HEAD
        </Col>
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
=======
        </Col >
>>>>>>> d39a5cf480d6b8850d8cd6a1d2ac61130cca7b14
        <Col lg='6' md='6' className="hero-image ">
        <img src={hero}  className="w-100" alt="" />
        </Col>

<<<<<<< HEAD


      <Category/>
      </Row>
{/* 
         {product.map((item)=>(
=======
      <Category/>

        {allproducts.map((item)=>(
>>>>>>> d39a5cf480d6b8850d8cd6a1d2ac61130cca7b14
          <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
          <ProductCard item={item}/>

          </Col>

        ))}   */}
    </Container>

  )
}

export default Home