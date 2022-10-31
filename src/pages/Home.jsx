import products from "../assets/products.js";

import React, { useState } from 'react'
import ProductCard from "../component/ProuductCard/ProductCard.jsx";
import Category from "../component/Category/Category";
import { Col, Container, Row } from "reactstrap";

const Home = () => {

const [allproducts,setAllProducts]=useState(products);


  return (
    
    <Container> 
      <Row>
      <Category/>


        </Row>

    </Container>
  )
}

export default Home