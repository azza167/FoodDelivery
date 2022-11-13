import React from 'react'
import '../App.css'
import Ordedrs from '../component/Admin/Ordedrs';
import AdminContacts from '../component/Admin/AdminContacts';
import AdminProducts from '../component/Admin/AdminProducts';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Admain = () => {

    return (
        <>
            <Container >
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
                    <Col sm="9" xs="10" md="10">
                    {/* <Ordedrs />
                    <AdminContacts/>
                    <AdminProducts/> */}
                </Col>
                </Row>
            </Container>

        </>
    )
}

export default Admain
