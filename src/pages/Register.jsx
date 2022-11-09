import { useSelector ,useDispatch  } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from 'react'

import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
  const initial ={email:'',password:'',repassword:''}
  const[inp,setinp]=useState(initial)
  const dispatch =useDispatch()
  const user = useSelector((state)=>state.user)
  const x= useNavigate()
  
  const[err,seterr]=useState('')
  const[done,setdone]=useState('')





  
  const[discount,setdiscount]=useState('')
  let dis=''
  let charcter ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// useEffect(()=>{
//   for (let i = 0; i < 7; i++) {
//     let y = Math.floor(Math.random()*62);
//     // setdiscount(  charcter[y])

//     dis+=charcter[y]
//   }
  
//   setdiscount(dis)
// },[])

  const hadelerlogin=(e)=>{
  
  
  setinp({...inp,[e.target.name]:e.target.value})
  
  }
  
    const hadelersub= async (e)=>{
     
      e.preventDefault()
       if(inp.password!=inp.repassword) 
       return seterr('password not matchenig')
  try {
  await auth.createUserWithEmailAndPassword(inp.email,inp.password).then((res)=>{console.log(res.user.email)})
  console.log('done')
  setdone("congratulation you create an account ")
  
  for (let i = 0; i < 7; i++) {
    let y = Math.floor(Math.random()*62);
    

    dis+=charcter[y]
  }
  
  setdiscount(dis)
  setTimeout(() => {
    x('/home')
  }, 3000);
  
  const offers ={
    type:"offers",
    payload:dis
  }
  dispatch(offers)
}
catch (error){
  console.log(error.message)
  
}

    }






  return (
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6" sm="12" className="m-auto text-center">
          <form className="form mb-5" onSubmit={hadelersub}>
   
            <div className="form__group">
              <input
                type="email"
                placeholder="Email"
                required
              onChange={hadelerlogin}
              name="email"

              />
            </div>
            <div className="form__group">
              <input
                type="password"
                placeholder="Password"
                required
              onChange={hadelerlogin}
              name="password"
               
              />
            </div>
            <div className="form__group">
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  required
              onChange={hadelerlogin}
               name="repassword"
                />
              </div>
            <button type="submit" className="addTOCart__btn">
              Sign Up
            </button>
            <p style={{color:'red'}}>{err}</p>
            <p>{done}</p>
          {discount!='' ? <p>congratulation you have discount 15% with code <span style={{color:'orange'}}>{discount}</span> </p>:''}

          </form>
          <Link to="/login">Already have an account? Login</Link>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Register