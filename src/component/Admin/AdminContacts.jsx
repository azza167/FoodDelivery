import React, { useEffect, useState } from 'react'
import { fire } from '../../firebase';

function AdminContacts() {
  const [contacts,setContacts]=useState("")
  useEffect(()=>{
    fire.collection('/Contact').onSnapshot((el)=>{
         setContacts(el.docs.map((el)=>({dataa: el.data(),id:el.id})))           

        // el.docs.map((el)=>  fire.collection('/orders').doc(el.id).delete())
    })
console.log("cccccccccccccc",contacts);
    },[]);
  return (
    <div>AdminContacts</div>
  )
}

export default AdminContacts