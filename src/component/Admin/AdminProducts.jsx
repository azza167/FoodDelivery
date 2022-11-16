import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useState } from 'react'
import '../../App.css'
import { fire, store } from '../../firebase';
function AdminProducts() {
    const product = useSelector((state) => state.product)
    const admin = useSelector((state) => state.admaincart)
    const [show, setshow] = useState(true)
    const dispatch = useDispatch()
    const [titl, settitle] = useState("")
    const [iddd, setiid] = useState(String(product.length + 1))
    const [pric, setprice] = useState(0)
    const [image, setimage] = useState(null)
    const [category, setcategory] = useState("")
    const [dsc, setdsc] = useState("")
    const [download, setdownload] = useState("")


    const handelerimagereq = (e) => {
        setimage(URL.createObjectURL(e.target.files[0]))
        const file = e.target.files[0]
        const storage = store.ref('/image' + file.name)
        storage.put(file).then(() => {
            alert('image loaded')
            storage.getDownloadURL().then((el) => setdownload(el))
        })
    }

    const [dat, setdat] = useState([])

    useEffect(() => {

        fire.collection('/product').onSnapshot((el) => {
            setdat(el.docs.map((el) => ({ dataa: el.data(), id: el.id })))
        })
        const obj = {
            type: 'data',
            payload: dat
        }
        dispatch(obj)
    }, [setdat])


    const additem = () => {

        if (titl.length != 0 && (pric != 0)) {
            setshow(false)
            setTimeout(() => {
                setshow(true)
                setimage(null)
            }, 3000)
            fire.collection('/product').add({
                id: iddd,
                title: String(titl),
                price: String(pric),
                image01: download,
                category: String(category),
                desc: String(dsc)
            })
        }
        else {
            alert("complete field")
        }
    }
    const hadelerdelete = (el, i) => {
        fire.collection('/product').doc(i).delete()
    }
    return (
        <>
            <div className='cont'>
                {!show ? <h1 className='succefull' ><span>sucessful</span>  adding

                    <h4>check your home</h4>
                </h1> : (
                    <>
                        <h3 className="add_item">Add New Items</h3>
                        {/* <label  htmlFor="tit"> title</label> */}
                        <input required id='tit' type="text" placeholder='title' onChange={(event) => settitle(event.target.value)} />
                        {/* <label htmlFor="tit"> discription</label> */}
                        <input id='tit' type="text" placeholder='discription' onChange={(event) => setdsc(event.target.value)} />
                        {/* <label htmlFor="tit" > price</label> */}
                        <input required id='tit' type="number" placeholder='price' onChange={(event) => setprice(event.target.value)} />
                        {/* <label htmlFor="mm" > upload image</label> */}
                        <input required id='mm' type="file" onChange={handelerimagereq} />
                        <img src={image} width='200px' alt="" />
                        <div className="select_cat">
                            <label htmlFor="cars"> category:</label>
                            <select required onChange={(event) => setcategory(event.target.value)} name="cars" id="cars">
                                <option value="volvo">Beef</option>
                                <option value="saab">Pizza</option>
                                <option value="Chicken">Chicken</option>

                            </select>
                        </div>
                        <button onClick={additem} className='add_btn bt'>Add new item</button>
                    </>)}


            </div>
            <div>
                <h3 style={{ textAlign: 'center', margin: '5px' }}>Your Announce <span>{dat.length}</span> </h3>
                <div className='aaa' style={{ overflow: "scroll", height: '250px' }}>
                    <div>
                        {dat.map((el, i) => (
                            <div className='mmm' key={i}>

                                <h4>{el.dataa.title}</h4>
                                <h6>{el.dataa.price}</h6>
                                <img width={'70px'} src={el.dataa.image01} alt="" />
                                <button onClick={() => hadelerdelete(el, el.id)} >delet</button>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </>

    )
}

export default AdminProducts
