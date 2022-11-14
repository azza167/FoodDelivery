import React from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { useEffect, useState } from 'react'
import '../App.css'
import {store,fire, auth} from '../firebase'



const 
Updadeting = () => {

    const [name,setName]=useState('');
    const [adress,setadress]=useState('');
    const [upimage,setupimage]=useState('');
    
    const [loading,setloadind]=useState('');
    
    
    
    
    
    const userdata =useSelector((state)=>state.userdata);
    const [download,setdownload]=useState(userdata.imagee);
    const [image,setimage]=useState(userdata.imagee);
const hadeleeimg=(e)=>{
    setimage(URL.createObjectURL( e.target.files[0]))
    setupimage(e.target.files[0])
}

const confirmupdate =()=>{
setloadind('...loading')
store.ref('/image').put(upimage).then((res)=>{
    
    if(res._delegate.state==='success'){
        store.ref('/image').getDownloadURL().then((res)=>{setdownload(res)})
        fire.doc('/users/'+auth.currentUser.uid).update({
            adresss:adress,
            imagee:download,
            name:name
        })

   
        console.log('res._delegate.state')
        setloadind('profile updating')
        setTimeout(() => {
        setloadind('')
            
        }, 2000);

    }
})


}

useEffect(()=>{
    setName(userdata.name)
    setadress(userdata.adresss)
    setimage(userdata.imagee)

},[])


  return (
    <div className='contupdating'>
                    <div className="form__group">
              <input
                type="email"
                placeholder="name"
                required
            //   onChange={hadelerlogin}
            value={name}
              name="text"
              onChange={(e)=>setName(e.target.value)}

              />
            </div>
            <div className="form__group">
              <input
                type="text"
                placeholder="adress"
                required
            value={adress}

              onChange={(e)=>setadress(e.target.value)}
              name="password"
               
              />
            </div>
            <div>
                <img src={image} width='150px'  alt="" srcset="" />
                </div>
            <div className="form__group">
                <input
                  type="file"
                  placeholder=" chose photo"
                  required
              onChange={hadeleeimg}
               name="repassword"
                />
              </div>
              <p>{loading}</p>
            <button type="submit" style={{width:'20%' ,margin:'auto'}} onClick={confirmupdate} className="addTOCart__btn"> updating</button>
    </div>
  )
}

export default Updadeting
