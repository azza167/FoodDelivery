import React from 'react';
import { useEffect, useState } from 'react'
import { auth } from "./firebase";

import Layout from './component/Layout/Layout';
import { useContext } from 'react';
import {  useSelector ,useDispatch  } from 'react-redux'



function App() {

  const dispatch = useDispatch()
  const [userss,setuser]=useState()

        
 




  return (
    <div >

     <Layout/>
     
    </div>
    
    
  );
}

export default App;
