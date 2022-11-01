import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pizza from"../assets/images/pizzaaa1.png"
const FoodDetails = () => {
  return (
    <div>FoodDetails
    <Container>
      <Row>
        <Col lg="2" md="2">
          <div className='product_img'>
            <div className='img'>
              <img src={pizza} alt="" className='w-50'/>
            </div>
            <div className='img'>
              <img src={pizza} alt="" className='w-50'/>
            </div>
            <div className='img'>
              <img src={pizza} alt="" className='w-50'/>
            </div>
          </div>
        </Col>
        <Col lg="4" md="4">
            <div className='main_img'>
              <img src={pizza} alt="" className='w-100'/>
            </div>
        </Col>
        <Col lg="6" md="6">
          <div className='product_content'>
            <h2>title</h2>
            <p className='product_price'>
            price:<span>EGP price</span>
            </p>
            <p className='product_category'>
            Category:<span>Category</span>

            </p>

          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default FoodDetails