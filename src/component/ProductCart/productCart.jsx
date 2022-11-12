import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productcart.css";
const ProductCart = () => {
  const hamada = useSelector((state) => state.AddTocart);
  // const qont = useSelector((state) => state.AddTocart);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const show = useSelector((state) => state.cartShow);
  const totalAmount = useSelector((state) => state.tot);
  const [qoty, setQoty] = useState();
  // const[col,setCol] = useState(1)
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

  const handelQty = (e, el, i) => {
    hamada.map((item) =>
      el.id === item.id ? { ...item, quantity: setQoty(el.quantity) } : item
    );

    console.log(hamada);
    console.log(el.quantity);
    console.log(hamada);
    console.log(totalQuantity);
    console.log("totalQuantity");
  };

  return (
    <>
      {!show ? (
        <div className="floatty">
          <h3>{totalAmount}</h3>
          {hamada.map((el, i) => (
            // <div>
            //   <h1>{el.price}</h1>
            //   <h1>{el.quantity}</h1>

            //   <img src={el.img} alt="" />
            //   <button onClick={() => handeldel(i, el)}>delete</button>
            //   <input
            //     // onChange={(e) => handelQty(e, el)}
            //     type="number"
            //     name="quantity"
            //     min="1"
            //     max="500"
            //   />
            // </div>
            <div class="styler-0">
              <div class="styler-1">
                <div class="styler-2">
                  <div class="styler-3">
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                      class="styler-4"
                    />
                  </div>
                  <img
                    src={el.img}
                    alt="img"
                    class="styler-5"
                  />
                  <noscript class="styler-6"></noscript>
                </div>
                <div class="styler-7">
                  <div class="styler-8">
                    <span class="styler-9">Blanco Fries</span>
                    <div class="styler-10">
                      <button class="styler-16" onClick={()=>{handeldel(i,el)}}>
                      <svg
                        class="styler-11"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CloseIcon"
                      >
                        <path
                          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          class="styler-12"
                        ></path>
                      </svg>
                      </button>
                    </div>
                  </div>
                  <div class="styler-13">
                    <span class="styler-14">EGP..{el.price}</span>
                    <div class="styler-15">
                      <button class="styler-16">
                        <svg
                          class="styler-17"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="RemoveCircleOutlineIcon"
                        >
                          <path
                            d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            class="styler-18"
                          ></path>
                        </svg>

                      </button>
                      <span class="styler-19">{el.quantity}</span>
                      <button class="styler-20">
                        <svg
                          class="styler-21"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="AddCircleOutlineIcon"
                        >
                          <path
                            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            class="styler-22"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductCart;
