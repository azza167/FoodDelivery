import { useSelector ,useDispatch  } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from 'react'
import {store,fire} from '../firebase'

import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
  const uid = useSelector((state) => state.uid);

  const initial ={email:'',password:'',repassword:''}
  const[inp,setinp]=useState(initial)
  const dispatch =useDispatch()
  const user = useSelector((state)=>state.user)
  const x= useNavigate()
  
  const[err,seterr]=useState('')
  const[username,setusername]=useState('')
  const[adress,setadress]=useState('')


  const[done,setdone]=useState('')
  const [download,setdownload] =useState("")
  const [image,setimage] =useState(null)


  const handelerimagereq =(e)=>{
      setimage(URL.createObjectURL(e.target.files[0]))
  const file = e.target.files[0]
  const storage = store.ref('/image'+file.name)
  storage.put(file).then(()=>{
  
     alert('image loaded')
  storage.getDownloadURL().then((el)=>setdownload(el))
  })
  }

  
  const[discount,setdiscount]=useState('')
  let dis=''
  let charcter ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


  const hadelerlogin=(e)=>{
  
  
  setinp({...inp,[e.target.name]:e.target.value})
  
  }
  
    const hadelersub= async (e)=>{
     
      e.preventDefault()
       if(inp.password!=inp.repassword) 
       return seterr('password not matchenig')
  try {
  await auth.createUserWithEmailAndPassword(inp.email,inp.password).then((res)=>{
     fire.doc('/users/'+res.user.uid).set({
       name:username,
       adresss:adress,
       imagee:download
      })


      console.log(res.user.uid)
  })
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

            <input type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)} />
          </div>  
            <div className="form__group">
            <input type="text" placeholder="adress" onChange={(e)=>setadress(e.target.value)} />
            </div>
            <div className="form__group">
              <label htmlFor="mm">  
                Select Image  
                <i className="m-2 ri-camera-fill"></i>
                 <input className='d-none' required="required" id='mm' type="file"  onChange={handelerimagereq}/>          
              </label>
                </div>
          {image?
          <div>
          <img src={image} width='200px' style={{borderRadius:'50%'}} alt="" />
          </div>
          :<div></div>}
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