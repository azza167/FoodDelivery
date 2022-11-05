import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import './productcart.css'
const ProductCart = ()=> {
    const hamada = useSelector((state) => state.AddTocart);
    const show = useSelector((state) => state.cartShow);

    const totalAmount = useSelector((state) => state.tot);
    const [qty, setQty] = useState(1);
    const[col,setCol] = useState(1)
    const dispatch = useDispatch();


    const handeldel = (i, el) => {
      const dele = {
        type: "del",
        payload: {  
          index: i,
          element: el,
        },
      };
      dispatch(dele);
    };
    
    const handelQty = (e,el,i)=>{
      
      setQty(e.target.value);

      console.log(qty)  
      
    }
    
     console.log(show);
return(<>
  {show?<div className='floatty'><h3>{totalAmount}</h3>
{hamada.map((el, i) => (
          <div>
            <h1>{el.price}</h1>
          <img src={el.img} alt="" />
          <button onClick={() => handeldel(i, el)}>delete</button>
          <input 
          onChange={(e) => handelQty(e)}
          type="number"
          name="quantity" 
          min="1" max="500"/> 

          </div>),)}
          </div> :""}

</>)

}


export default ProductCart;