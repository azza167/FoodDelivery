import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
const FoodDetails = () => {
    const {id}=useParams();
    const products= useSelector((state)=>state.product);
    const product=products.find((product)=>product.id===id);
    const {title,price,category,desc,image01}=product;
    const [tab,setTab]=useState("Description");
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [review,setReview]=useState('');
    const addReview=(e)=>{
      e.preventDefault();
      setName("");
      setEmail('');
      setReview('');
    }
    
  return (
    <div>FoodDetails
    <Container>
      <Row>
        <Col lg="2" md="2">
          <div className='product_imgs'>
            <div className='img mb-3'>
              <img src={image01} alt="" className='w-50'/>
            </div>
            <div className='img mb-3'>
              <img src={image01} alt="" className='w-50'/>
            </div>
            <div className='img mb-3'>
              <img src={image01} alt="" className='w-50'/>
            </div>
          </div>
        </Col>
        <Col lg="4" md="4">
            <div className='main_img'>
              <img src={image01} alt="" className='w-100'/>
            </div>
        </Col>
        <Col lg="6" md="6">
          <div className='product_content'>
            <h2>{title}</h2>
            <p className='product_price'>
            price:<span>EGP {price}</span>
            </p>
            <p className='product_category'>
            Category:<span>{category}</span>
            </p>
            <button onClick={()=>{}} className="add_btn">
              Add To Cart
            </button>
          </div>
        </Col>
        <Col lg="12">
          <div className='d-flex gap-5 align-items-center py-2'>
            <h6 onClick={()=>setTab("Description")}>
              Description
            </h6>
            <h6 onClick={()=>setTab("Review")}>
              Review
            </h6>
          </div>
          {
            tab==="Description" ? (
              <div className='tab_desc'>
                  {desc}
              </div>
            ):(
              <div className='tab_rev'>
                  <div className="review pt-5">
                    <p className="user__name mb-0">{name}</p>
                    <p className="user__email">{email}</p>
                    <p className="feedback__text">{review}</p>
                  </div> 
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                <form className='form' onSubmit={addReview}>
                  <div className=' form_group'>
                    <input 
                      type={'text'}
                      placeholder='Enter your name'
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className=' form_group'>
                    <input
                      type={'email'}
                      placeholder='Enter your email'
                      onChange={(e)=>setEmail(e.target.value)}
                    />                    
                  </div>
                  <div className=' form_group'>
                    <textarea
                      type={'text'}
                      placeholder='Write your review'
                      onChange={(e)=>setReview(e.target.value)}
                      required
                    />
                  </div>
                  <button type='submit' className='add_btn'>
                      Add Review
                  </button>

                </form>
              </div>
            )
          }
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default FoodDetails