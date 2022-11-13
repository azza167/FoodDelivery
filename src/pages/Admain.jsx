import React from 'react'
import '../App.css'
import Ordedrs from '../component/Admin/Ordedrs';
import AdminContacts from '../component/Admin/AdminContacts';
import AdminProducts from '../component/Admin/AdminProducts';
const Admain = () => {

  return (
    <>
    <div className='cont'>
    <AdminContacts/>
    <Ordedrs/>
    <AdminProducts/>
    </div>
    </>
  )
}

export default Admain
