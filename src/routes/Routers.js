
import React from 'react';
import { Routes,Route,Navigate} from 'react-router-dom' ;
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Store from '../store/Store';
import Admain from '../pages/Admain';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/AllFoods' element={<AllFoods/>}/>
    <Route path='/FoodDetails' element={<FoodDetails/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/admain' element={<Admain/>}/>


    <Route path='/Checkout' element={<Checkout/>}/>




   

  </Routes>
    
  
}

export default Routers