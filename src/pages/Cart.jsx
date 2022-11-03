import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import "../Styles/cart.css"



const Cart = () => {
  const hamada = useSelector((state)=>state.AddTocart);
  const totalAmount = useSelector((state)=>state.tot);
const dispatch =useDispatch()
 const handeldel=(i ,el)=>{

const dele={
type:"del",
payload:{
  index:i,
  element:el
}

}
dispatch(dele)
 }


  // const {id,title,image01,price}=hamadas;

  console.log(hamada);
  
  return (
    <div>
       <h1 style={{color:'#ff5f00'}}> Counter: {hamada.length}</h1>
      <h1> total:{totalAmount}</h1>
      {hamada.map((el,i) =>(
        <div>
          <h1>
            {el.price}
             
          </h1>
         <img src={el.img} alt="" />
         <button onClick={()=>handeldel(i,el)}>delete</button>
        </div>
      ))}
      <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
      </div>

    
    
  )
}

export default Cart