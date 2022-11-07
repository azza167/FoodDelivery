import React from 'react'
import Slider from "react-slick";
import slider1 from "../../assets/images/slider3.webp"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider1.webp"
// import "./home_slider.css"

function HomeSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
    <Slider {...settings}>    
     <div> 
         <img src={slider1} alt="avatar" className='w-100' />
     </div>
     <div>
         <img src={slider2} alt="avatar"  className='w-100'/>
     </div>
     <div>  
         <img src={slider3} alt="avatar" className='w-100' />
     </div>
   </Slider>
    </div>
     
  )
}

export default HomeSlider