
import React from 'react';

import { Container } from 'reactstrap';
import Logo from '../../assets/images/icon1.png'
import { useSelector,useDispatch} from 'react-redux';

import {NavLink,Link} from 'react-router-dom';
import '../../Styles/Header.css'
import { useEffect, useState } from 'react'


<<<<<<< HEAD
=======
// import { auth } from '../../FireBase';
>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46

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
const [email,setemail]=useState('')

const[show , setshow]=useState(false)
const dispatch =useDispatch()

<<<<<<< HEAD
const dispatch = useDispatch();
// const user=useSelector((state)=>state.userauto)
=======
>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46
useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
    
    userr?setemail(userr.email):setemail('')
   userr.email==='metaea@gmail.com'?setshow(true):setshow(false)

   
 
      })
},[]) 
<<<<<<< HEAD
=======

>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46

const handeler=()=>{
  const obj ={
    
    type:"showCart",

    
  
  };
  dispatch(obj);
}

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
          {show?
         <NavLink
              to={'/admain'}

            >
            Admain
            </NavLink>
:''}
       
           
        </div>
      </div>
       {/* nav right icons */}
       
       <div className="nav__right d-flex align-items-center gap-4">
<<<<<<< HEAD
=======

>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46
       <span className="cart__icon"
 onClick={()=>{handeler()}}
       >
<<<<<<< HEAD
        
       <span className="cart__icon">

       <NavLink to={'/Cart'}>
=======

       <span className="cart__icon">

       <NavLink to={'/Cart'}>

>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46
         <i className="ri-shopping-basket-line"></i>
    </NavLink>
         <span className="cart__badge"></span>

<<<<<<< HEAD
=======

>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46
         <span className="cart__badge"

         >
          </span>
         <Link to=""></Link>
         {cartTotal.AddTocart.length}</span>
<<<<<<< HEAD
         <span className="cart__badge">  {cartTotal.AddTocart.length}</span>
         
       
=======

         <span className="cart__badge">  {cartTotal.AddTocart.length}</span>
         
       
</span>
>>>>>>> a0a519fae1e92fd9eb7866f84a9cbc9418b5ac46
       </span>

       <span className="user" >
         <Link to="/login">

           <i className="ri-user-line" ><span style={{fontSize:'10px'}}>{email}</span></i>
    
     
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