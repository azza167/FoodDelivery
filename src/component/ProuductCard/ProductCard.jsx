import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './product-card.css'
export default function ProductCard(props) {
  
     const {id,title,image01,price}=props.item;
    return (
    <Container >
        <div className='product_card text-center w-100'>
            <div className='product_img '>
                <img className="w-50" src={image01}  alt="product"/>
            </div>
        <div className='product_content mb-2'>
        <h6 className='mb-3'>
            <Link className=' text-black product_link' to={`/foods/${id}`}>{title}</Link>
        </h6>
            <div className='d-flex align-items-center justify-content-between '>
                <span className='product_price'>
                    EGP {price}
                </span>   
                <button className='add_btn'>Add To Cart</button>
            </div>
        </div>
        </div>

    </Container>
  )
}
