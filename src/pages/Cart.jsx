import React from 'react'
import { useSelector,useDispatch} from 'react-redux';



const Cart = () => {
  var hamada = useSelector((state)=>state);
  
  // const {id,title,image01,price}=hamadas;

  console.log(hamada);
  
  return (
    // <div>
    //   {hamada.map((el) =>(
    //     <div>
    //       <h1>
    //         {el.price}
             


    //       </h1>
    //     </div>
    //   ))}
    // </div>
    <div></div>
  )
}

export default Cart