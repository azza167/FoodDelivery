/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../component/ProuductCard/ProductCard'
import "../Styles/food-details.css"

const FoodDetails = () => {
    const {id}=useParams();
    const products= useSelector((state)=>state.product);
    const product=products.find((product)=>product.id===id);
    const {title,price,category,desc,image01,image02,image03}=product;
    const [tab,setTab]=useState("Description");
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [review,setReview]=useState('');
    const [reviews,setReviews]=useState(JSON.parse(localStorage.getItem('reviews')));
    const [reviewsById,setReviewsById]=useState([]);
    const [mainImg ,setMainImg]=useState(image01);
    const relatedProduct = products.filter((item) =>
     category === item.category && price===item.price&& title!==item.title);

    const addReview=(e)=>{
      e.preventDefault();
      setReviews([...reviews,{id:id,name:name,email:email,review:review}]);
      localStorage.setItem('reviews',JSON.stringify([...reviews,{id:id,name:name,email:email,review:review}]));
      setName("");
      setEmail("");
      setReview("");
    }
   
    // useEffect(()=>{
    //   localStorage.setItem('reviews',JSON.stringify([...reviews,{id:id,name:name,email:email,review:review}]));
    // },[reviews]);


    useEffect(()=>{
      //  const reviews =JSON.parse(localStorage.getItem('reviews'));
      if(reviews){
        const reviewsById= reviews.filter((item)=>id===item.id)
        setReviews(reviews);
        setReviewsById(reviewsById)
        console.log("naaa")
      }
    },[product,reviews]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product,reviews]);
  
    
  return (
    <div>
    <Container className='pt-3'>
      <Row>
        <Col lg="2" md="2" >
          <div className='product_imgs'>
            <div className='img mb-3' onClick={()=>setMainImg(image01)}>
              <img src={image01} alt="" className='w-50'/>
            </div>
            <div className='img mb-3' onClick={()=>setMainImg(image02)}>
              <img src={image02} alt="" className='w-50'/>
            </div>
            <div className='img mb-3' onClick={()=>setMainImg(image03)}>
              <img src={image03} alt="" className='w-50'/>
            </div>
          </div>
        </Col>
        <Col lg="3" md="3" >
            <div className='main_img'>
              <img src={mainImg} alt="" className='w-100'/>
            </div>
        </Col>
        <Col lg="6" md="6">
          <div className='product_content px-5 pb-3'>
            <h2 className='mb-3'>{title}</h2>
            <p className='product_price mb-0'>
            price: <span>EGP {price}</span>
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
            <h6 className={`${tab==="Description"? 'tabed':""}`} 
            onClick={()=>setTab("Description")}>
              Description
            </h6>
            <h6 className={`${tab==="Review"? 'tabed':""}`} 
            onClick={()=>setTab("Review")}>
              Review
            </h6>
          </div>
          {
            tab==="Description" ? (
              <div className='tab_desc'>
                  {desc}
              </div>
            ):(
              <div>
                {
                  reviewsById.map((item)=>(
                  <div className='tab_rev mb-3' >
                  <Col lg="4" className="review ps-3">
                    <p className="mb-0"> {item.name}</p>
                    <p className="mb-0 "> {item.email}</p>
                    <p className=" text-danger">{item.review}</p>
                  </Col>  
                  </div>                   

              ))
              }
                <form className='form' onSubmit={addReview}>
                  <div className=' form_group'>
                    <input 
                      type={'text'}
                      placeholder='Enter your name'
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className=' form_group'>
                    <input
                      type={'email'}
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />                    
                  </div>
                  <div className=' form_group'>
                    <textarea
                      type={'text'}
                      placeholder='Write your review'
                      value={review}
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
        <Col lg='12' className='mb-5 mt-5'>
            <h2 className='related_Product'>
              You might also like
            </h2>
            </Col>
            {
              relatedProduct.map((item)=>(
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
      </Row>
    </Container>
    </div>
  )
}

export default FoodDetails