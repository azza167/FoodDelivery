
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
},

// dispatch(pluss);

  }
 
  // const {id,title,image01,price}=hamadas;

  console.log(hamada);

  return (
    <div>
      {/* <h1 style={{ color: "red" }}> counter: {hamada.length}</h1> */}
      {/* <h1> total:{total}</h1> */}
      <div class="style-3">Cart</div>
      <div class="style-4"> {hamada.length}</div>
      <div class="style-0">
        {hamada.map((el, i) => (
          <div>
            {/* <h1>{el.price}</h1>
          <img src={el.img} alt="" />
          <button onClick={() => handeldel(i, el)}>delete</button> */}

            <div class="style-0">
              <div class="style-1">
                <div class="style-2">
                  {/* <div class="style-3">Cart</div>
            <div class="style-4"> {hamada.length}</div> */}
                </div>
                <div class="style-5">Qty</div>
                <div class="style-6">Total</div>
                <div class="style-6">
                  <button onClick={() => handeldel(i, el)}>delete</button>
                </div>
              </div>

              <div class="style-7">
                <div
                  class="style-8"
                  data-bedrock-inline="justify:start align:start"
                >
                  <div class="style-9">
                    <div class="style-10">
                      <div class="style-11">
                        <img
                          alt=""
                          src={el.img}
                          aria-hidden="true"
                          class="style-12"
                        />
                      </div>
                      {/* <img
                  alt="Bacon Mushroom Jacssssk"
                  src={el.img}
                  decoding="async"
                  data-nimg="intrinsic"
                  srcset="/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&amp;w=128&amp;q=75 2x"
                  class="style-13"
                /> */}
                      <noscript class="style-14"></noscript>
                    </div>
                  </div>
                  <div class="style-15">
                    <div class="style-16">{el.title}</div>
                    <div class="style-17" font-size="16px">
                      {el.description}
                    </div>
                  </div>
                </div>
                <div class="style-18">
                  <div class="style-19">
                    <button class="style-20">
                      <svg
                        class="style-21"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RemoveCircleOutlineIcon"
                      >
                        <path
                          d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          class="style-22"
                        ></path>
                      </svg>
                    </button>
                    <span class="style-23">3</span>
                    <button class="style-24" onClick={() => handeldel(i, el)}>
                      <svg
                        class="style-25"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AddCircleOutlineIcon"
                      >
                        <path
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          class="style-26"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="style-27">
                  <div class="style-28">{el.price} EGP</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

      //  <h1 style={{color:'#ff5f00'}}> Counter: {hamada.length}</h1>
      // <h1> total:{totalAmount}</h1>
      // {hamada.map((el,i) =>(
      //   <div>
      //     <h1>
      //       {el.price}
             
      //     </h1>
      //    <img src={el.img} alt="" />
      //    <button onClick={()=>handeldel(i,el)}>delete</button>
      //   </div>
      // ))}
      // <button className="addTOCart__btn">
      //               <Link to="/checkout">Proceed to checkout</Link>
      //             </button>
      // </div>

    
}
  

export default Cart;
