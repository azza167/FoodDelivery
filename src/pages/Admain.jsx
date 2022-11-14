import React from 'react'
import '../App.css'
import AdminProducts from '../component/Admin/AdminProducts';
import { Col, Container, Row } from 'reactstrap';
import { NavLink ,Outlet} from 'react-router-dom';
import { Routes,Route,Navigate} from 'react-router-dom' ;
import { useNavigate } from "react-router-dom";


const Admain = () => {




    return (
        <>
            <Container  >
                <Row className='py-3'>
                    <Col sm="3" xs="2" md="2">
                        <div className="sidebar">
                            <div className="d-flex flex-column">
                                <NavLink to="/admain/AdminProducts" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Add New Products
                                    </div>
                                </NavLink>
                                <NavLink to="/admain/Ordedrs" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Ordedrs
                                    </div>
                                </NavLink>
                                <NavLink to="/admain/AdminContacts" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Contacts
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                    </Col>
          {/* <div style={{width:'83%'}}>           */}
          <Col sm="9" xs="10" md="10">
          <Outlet/>
           </Col>
     {/* </div>    */}
                </Row>
            </Container>
           
 
                 
        </>
    )
}

export default Admain
