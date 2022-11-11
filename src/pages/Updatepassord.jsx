import React from 'react'
import { getAuth, updatePassword } from "firebase/auth";
import  { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import { auth } from '../firebase';
const Updatepassord = () => {

 const updateprofile=()=>{
          updatePassword(auth.currentUser,123456).then(()=>{
            console.log('hi')
          })
        }   
  return (
    <div style={{textAlign:'center'}}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                 
               
                name='email'
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder=" New Password"
                  required
              
               name='password'

                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder=" Renter Password"
                  required
              
               name='password'

                />
              </div>
             
              <button onClick={updateprofile} type="submit" className="addTOCart__btn">
          submit
              </button>



    </div>
  )
}

export default Updatepassord