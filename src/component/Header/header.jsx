
import React from 'react';

import { Container } from 'reactstrap';
import Logo from '../../assets/images/icon1.png'
import { useSelector,useDispatch} from 'react-redux';

import {NavLink,Link} from 'react-router-dom';
import '../../Styles/Header.css'
import { useEffect, useState } from 'react'
import { auth } from '../../firebase';


const nav__links=[
  {
    display:'Home',
    path:'/home'
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },

]

const Header = () => {
  var cartTotal = useSelector((state)=>state);

const [a,seta]=useState(null)

const[user,setuser]=useState(useSelector((state)=>state.userauto))

// const user=useSelector((state)=>state.userauto)



  return (
    <header className="header">
  <Container>
  
      <div className='nav-wrapper d-flex align-items-center justify-content-between' >
        <div className='logo'>
        <img src={Logo} alt='logo' />
       {   /* <h5> Tasty Treat</h5>*/}
        </div> 
        {/*Menu*/}
        <div className="navigation" >
        <div className="menu d-flex align-items-center gap-5">
          {nav__links.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={(navClass) =>
                navClass.isActive ? "active__menu" : ""
              }
            >
              {item.display}
            </NavLink>
          ))}
        
          <NavLink
              to={'/admain'}

            >
            Admain
            </NavLink>
           
        </div>
      </div>
       {/* nav right icons */}
       <div className="nav__right d-flex align-items-center gap-4">
       <span className="cart__icon">
         <i className="ri-shopping-basket-line"></i>
         <span className="cart__badge">{cartTotal.AddTocart.length}</span>
       </span>

       <span className="user" >
         <Link to="/login">
           <i className="ri-user-line"></i>
    
     
         </Link>
       </span>

       <span className="mobile__menu">
         <i className="ri-menu-line"></i>
       </span>
     </div>
      
      </div>
  </Container>
  
  </header>
    
  
  )
}

export default Header