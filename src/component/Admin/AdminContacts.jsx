import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import { fire } from '../../firebase';

function AdminContacts() {
  const [contacts,setContacts]=useState([])
  useEffect(()=>{
    fire.collection('/Contact').onSnapshot((el)=>{
         setContacts(el.docs.map((el)=>({dataa: el.data(),id:el.id})))           

        // el.docs.map((el)=>  fire.collection('/orders').doc(el.id).delete())
    })
    },[]);
    console.log("cccccccccccccc",contacts);

  return (
    <div className='cont'>AdminContacts
   {
      contacts.map((item,idx)=>(
                  <div className='mb-3' key={idx}>
                  <Row className="justify-content-center m-4 user-data">
                  <Col lg="12" className=" d-flex text-center">
                    {item.dataa.massage}
                  </Col>
                  </Row>
                  </div>
      ))}

    </div>
  )
}

export default AdminContacts