
import React from 'react';
import { Routes,Route,Navigate} from 'react-router-dom' ;
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/AllFoods' element={<AllFoods/>}/>
    <Route path='/FoodDetails' element={<FoodDetails/>}/>
   

  </Routes>
    
  
}

export default Routers