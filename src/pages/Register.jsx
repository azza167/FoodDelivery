import { useSelector ,useDispatch  } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { auth } from "../FireBase";
import { useEffect, useState } from 'react'

import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
  const initial ={email:'',password:'',repassword:''}
  const[inp,setinp]=useState(initial)
  const user = useSelector((state)=>state.user)
  const x= useNavigate()

  const[err,seterr]=useState('')
  const[done,setdone]=useState('')








  const hadelerlogin=(e)=>{
  
  console.log(e.target.name)
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
  setTimeout(() => {
    x('/home')
  }, 2000);
 
  
  
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
          </form>
          <Link to="/login">Already have an account? Login</Link>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Register