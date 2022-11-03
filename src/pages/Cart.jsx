import React from 'react'
import { useSelector,useDispatch} from 'react-redux';



const Cart = () => {
  var hamada = useSelector((state)=>state.AddTocart);
  var total = useSelector((state)=>state.tot);
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
       <h1 style={{color:'red'}}> counter: {hamada.length}</h1>
      <h1> total:{total}</h1>
      {hamada.map((el,i) =>(
        <div>
          <h1>
            {el.price}
             


          </h1>
         <img src={el.img} alt="" />
         <button onClick={()=>handeldel(i,el)}>delete</button>
        </div>
      ))}
    </div>
    
  )
}

export default Cart