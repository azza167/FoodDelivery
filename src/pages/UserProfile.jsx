import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { auth, fire } from '../firebase'

function UserProfile() {
    const[user , setuser]=useState(false)
    const[name , setName]=useState('')
    const[email , setEmail]=useState('')
    const[adresss , setAdresss]=useState('')
    const[img , setImg]=useState("")

    const x = useNavigate() ;   
    const hadelerlog=()=>{
        auth.signOut().then(()=>
        console.log("log out")
        )
      
    window.location.reload(true) 
        x('/login')
    }
    useEffect(()=>{
        auth.onAuthStateChanged((userr)=>{  
          userr?  fire.doc('/users/'+userr.uid).onSnapshot((e)=>{
          setuser(true)
          setName(e.data().name)
          setEmail(userr.email)
          setAdresss(e.data().adresss)
          setImg(e.data().imagee)
            console.log(e.data())
          }):setuser(false)      
            })
      },[]) 
    return (
        <Container >
              <div className=' text-center w-50 m-auto' >
            <h3>Welcom {name} </h3> 
            <Container className='align-items-center '>
                <div className=''>
                <Row className=' d-inline align-items-center'>
                <div className='d-inline'>
                            <img src={img} width='50px' alt='' style={{borderRadius:"25px"}} className="border" />
                        </div>
                        <p className='d-inline'> {name} </p>
                </Row>
                    <p>Email: <span>{email}</span></p>
                    <p>Adresss: <span>{adresss}</span></p>
                    <button className=' add_btn' onClick={()=>hadelerlog()}>log out</button>
                 </div>
            </Container>     
    </div>
  
        </Container>

  
  )
}

export default UserProfile