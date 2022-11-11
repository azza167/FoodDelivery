import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { fire } from '../../firebase';
import "./order.css"
function Ordedrs() {
    // const orders=JSON.parse(localStorage.getItem('orders'));
    const [selectedValue, setselectedValue] = useState("");
    // const [orders,setOrders]=useState(JSON.parse(localStorage.getItem('orders')));

     const [orders,setOrders]=useState([]);

    const saveOrder=(id)=>{
        console.log(selectedValue,id)
        if(selectedValue==="Done")
        {
            const newOrders= orders.filter((item)=>id!==item.id)
            setOrders(newOrders);
            // localStorage.removeItem("orders")
        }
        if(selectedValue==="Waiting")
        {
            console.log(selectedValue)

        }
        if(selectedValue==="Cancel")
        {
            console.log(selectedValue)

        }
        else return 0;
    }
        useEffect(()=>{
            console.log(orders)
            fire.collection('/orders').onSnapshot((el)=>{
                setOrders(el.docs.map((el)=>({dataa: el.data(),id:el.id})))
            })
            },[]);
  
        return (
    <div>Ordedrs
    {
        orders.map((item,idx)=>(
                  <div className='mb-3' key={idx}>
                  <div className='admin-content-text'> order num ({item.dataa.id})</div>
                  <Row className="justify-content-center mt-4 user-data">
                  <Col lg="12" className=" d-flex">
                  <div className="admin-content-text py-2"> user data</div>
                  </Col>
                  <Col lg="12" className=" d-flex">
                  <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Name:
                    </div>
                  <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                         {/* {item.dataa.name} */}
                    </div>
                  </Col>  
                  <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Phone number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {/* {item.dataa.phone} */}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {/* {item.dataa.email} */}
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    total price: {item.dataa.price}
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        className="select input-form-area mt-1  text-center px-2 w-50"
                        onChange={(e)=>setselectedValue(e.target.value)}>
                        <option >Order stuts</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Done">Done</option>
                        <option value="Cancle">Cancle</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2"
                     onClick={()=>saveOrder(item.id)}>save</button>
                    </div>
                  </Row>
                  </div>                   
              ))
              }
    </div>
  )
}

export default Ordedrs