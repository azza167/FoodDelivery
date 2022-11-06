
import React from 'react';
import { Container,Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import CommonSection from '../component/common-section/common-section'
import Helmet from '../component/Helmet'
import '../Styles/checkout.css';
import { useState } from 'react';



const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [se, set] = useState("");

  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  const obj ={name:'',email:'',number:'',country:'',city:'',PostalCode:''}
  const [usersss, setusersss] = useState('');
  const [age, setage] = useState('');

  
  
  
  
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.tot);
  
  const shippingCost = 15;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  
//   const discountcode=["Bufflo20"]
//   if (!discountCode) {
//     setNoDiscountCode(true)
//     setInvalidDiscountCode(false)
// } else {

// }

  
  
  const submitHandler = (e) => {
     setusersss({name:enterName,email:enterEmail,number:enterNumber,country:enterCountry,city:enterCity,PostalCode:postalCode})
     
     e.preventDefault();
     console.log(usersss.name)
     alert(usersss.name)
     const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);

  };
  // const hade=()=>{

  //   setusersss(enterName)
  //   setage(se)

  // }
  
  return(

    <Helmet title ="Checkout">
    <CommonSection title= "Checkout"/>
    <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="shipping">Shipping Address</h6>
    <form className="checkout__form" >
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                     name=''
                  />
                </div>

                <div className="form__group">
                  <input className='input'
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}

                    
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}

                  />
                </div>
                <div className="form__group">
                  <input  className='input'
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e)=>setPostalCode(e.target.value)}

                   
                  />
                </div>
                <button  onClick={submitHandler} className='submit' >
                  Payment
                </button>
              </form>
              </Col>
             

              <Col lg="4" md="6">
              <Col lg="4" md="6">
              <h5 className='dis'>Do you have a discount code..?</h5>
              <input  className='inputDis'
                    type="text"
                    placeholder="Discount code"
                    
                    />
                    <button className='apply'>Apply</button>
              </Col>
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>${cartTotalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span>${shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>${totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>

/* 
    
    <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                     name=''
                  
                    <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => set(e.target.value)}
                     name=''
                  <button onClick={hade}>submit</button>
                  <p>{usersss}</p>
                  <p>{age}</p>
                  </> */
   
    );
  
}

export default Checkout