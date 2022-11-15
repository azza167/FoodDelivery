import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'
import { auth } from "../firebase";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch  } from 'react-redux'
const Login = () => {
// auth.signInWithPopup(auth.currentUser,new GoogleAuthProvider()).then((e)=>console.log(e))

  // const dispatch=useDispatch()
const initial ={email:'',password:''}
const[inp,setinp]=useState(initial)
const[user , setuser]=useState(false)

const[dat , setdat]=useState([])
// useEffect(()=>{
//   auth.sendPasswordResetEmail('dd1e60577f@inboxmail.life').then((res)=>{
//     console.log(res)
//   })

// },[])

useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
    
    userr?
    setuser(true):setuser(false)

      })
},[]) 
       

const x= useNavigate()
const[err,seterr]=useState('')
const hadelerlogin=(e)=>{

setinp({...inp,[e.target.name]:e.target.value})

}

  const hadelersub= async (e)=>{
   
      
e.preventDefault()
try {
await auth.signInWithEmailAndPassword(inp.email,inp.password).then((res)=>{})


x('/')


}
catch (error){
  error.message.includes('There is no user record')? seterr('this account not excited please register'):seterr('incorrect password or email')

}
  }
  



//  const handelerdel=(e)=>
//  {
//   fire.collection('/product').doc(e).delete()

//  }





  
  return (
   
    <section>
      {/* {dat.map((el)=>(
        <div>
<p>{el.dataa.name}</p>
<img src={el.dataa.img} alt="" />
<button onClick={()=>{handelerdel(el.id)}}>delet</button>
        </div>
      ))} */}
       {/* <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
           {!user?
              <div>  <form className="form mb-5" onSubmit={hadelersub}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event)=>{hadelerlogin(event)}}
               
                name='email'
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
               onChange={(event)=>{hadelerlogin(event)}}
               name='password'

                />
              </div>
             
              <button  type="submit" className="addTOCart__btn">
                Login
              </button>
              <p>{err}</p>
         
            </form><div>
                 <Link to="/register">
                 Don't have an account? Create an account
               </Link>
               </div>
               <div>
               <Link to="/forgetpassword">
                 forget password
               </Link>
               </div>
               </div>
            
               :
               <div><p>welcom {email} </p>   
            <button onClick={()=>hadelerlog()}>log out</button>
            <div>
            <Link to={'/Updatepassord'}>
              
            <button  type="submit" className="addTOCart__btn">
                Update password
              </button>
              </Link>
              </div>
              <div>
            <Link to={'/Updadeting'}>
              
            <button  type="submit" className="addTOCart__btn">
                Update profile
              </button>
              </Link>
              </div>
              </div>
           
     
           }
          </Col>
        </Row>
      </Container> */}
   
      <Container >
      {!user?
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>  <form className="form mb-5" onSubmit={hadelersub}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event)=>{hadelerlogin(event)}}
               
                name='email'
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
               onChange={(event)=>{hadelerlogin(event)}}
               name='password'

                />
              </div>
             
              <button  type="submit" className="addTOCart__btn">
                Login
              </button>
              <p>{err}</p>
         
            </form><div>
                 <Link to="/register">
                 Don't have an account? Create an account
               </Link>
               </div>
               <div>
               <Link to="/forgetpassword">
                 forget password
               </Link>
               </div>
               </div>
            </Col>
            </Row>
               :
                <Row className='py-3'>
                    <Col sm="3" xs="2" md="2">
                        <div className="sidebar">
                            <div className="d-flex flex-column">
                                <NavLink to="/Login" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Account
                                    </div>
                                </NavLink>
                                <NavLink to="/Login/Updadeting" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Update profile
                                    </div>
                                </NavLink>
                                <NavLink to="/Login/Updatepassord" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                    Update password
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                    </Col>
          <Col sm="9" xs="10" md="10"  style={{background:"#f8f5f4"}}>
            <div className=" m-3 p-3">
                  <Outlet />
            </div>
           </Col>
          
                </Row>
              }

            </Container>
    </section>

  )
}

export default Login