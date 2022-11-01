import React from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { useEffect } from "react";
import  { useState } from 'react'
import '../App.css'
const Admain = () => {
    const product = useSelector((state)=>state.product)
    const admin = useSelector((state)=>state.admaincart)

    const [show,setshow] =useState(true)

const dispatch =useDispatch()
const [titl,settitle] =useState("")
const [iddd,setiid] =useState(String(product.length+1))

const [pric,setprice] =useState(0)
const [image,setimage] =useState(null)
const [category,setcategory] =useState("")
const [dsc,setdsc] =useState("")




   const additem=()=>{
   
 
    console.log(pric)
    if(titl.length!=0&&(pric!=0&&image!=null)){
    const item ={
        type:"add",
        payload:{
            id:iddd,
            title:String( titl),
            price:String( pric),
            image01:String( image),
            category:String( category),
            desc:String(dsc)
        }
       
          
    
     }
     dispatch(item)
   
        setshow(false)
  


     setTimeout(()=>{
        setshow(true)
        setimage(null)
     },3000)

   }

else{
    alert("complete field")
}
}

const hadelerdelete=(el,i)=>{
 
    const  deleteitem={
        type:"delete",
        payload:{
                        index:i,
               ell:el
                    
             }
    }

        dispatch(deleteitem)

}

// const hadelerdelete=(el.i)=>{


//     const deleteitem ={
//         type:"delete",
//         payload:{
//             index:i,
//             el:el;
        
//         }
//         dispatch(deleteitem)

// }



  return (
    <>
    <div className='cont'>
{!show?<h1 className='succefull' ><span>sucessful</span>  adding

<h4>check your home</h4>
</h1>  :(
    <>
<label  htmlFor="tit"> title</label>
<input required='requrid' id='tit' type="text" onChange={(event)=>settitle(event.target.value)} />
<label htmlFor="tit"> discription</label>
<input id='tit' type="text"  onChange={(event)=>setdsc(event.target.value)}/>
<label htmlFor="tit" > price</label>
<input required id='tit' type="number" onChange={(event)=>setprice(event.target.value)} />
<label htmlFor="mm" > upload image</label>
<input  required="required" id='mm' type="file"  onChange={(event)=>setimage(URL.createObjectURL(event.target.files[0]))}/>
<img src={image} width='200px' alt="" />
      <label for="cars"> category:</label>
<select  required="required" onChange={(event)=>setcategory(event.target.value)}  name="cars" id="cars">
  <option value="volvo">Beef</option>
  <option value="saab">Pizza</option>

</select>
<button onClick={additem} className='add_btn bt'>add new item</button>
</>)}


    </div>
    <div>
        <h1 style={{textAlign:'center',margin:'5px'}}>your announce <span>{admin.length}</span> </h1>
        <div className='aaa' style={{overflow:"scroll",height:'250px'}}>
    {admin.map((el,i)=>(
        <div className='mmm'>

            <h4>{el.title}</h4>
            <h6>{el.price}</h6>
            <img width={'70px'} src={el.image01} alt="" />
            <button onClick={()=>hadelerdelete(el,i)} >delet</button>
        </div>
    ))}
        </div>
</div>
</>

  )
}

export default Admain
