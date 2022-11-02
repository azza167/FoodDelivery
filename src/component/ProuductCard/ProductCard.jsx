import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './product-card.css'
import { useSelector,useDispatch} from 'react-redux';

export default function ProductCard(props) {
    
     const {id,title,image01,price}=props.item;
    //  const [category, setCategory] = useState("ALL");
    const dispatch = useDispatch()
    function addCartHandeler(){
            
            const obj = {
                type:"cart",
                payload:{id:id,title:title,img:image01,price:price}
            }
            
            dispatch(obj);
    }

     return (
    <Container >
        <div className='product_card text-center w-100'>
            <div className='product_img '>
                <img className="w-50" src={image01}  alt="product"/>
            </div>
        <div className='product_content mb-2'>
        <h6>
            <Link className=' text-black' to={`/foods/${id}`}>{title}</Link>
        </h6>
            <div className='d-flex align-items-center justify-content-between '>
                <span className='product_price'>
                    EGP {price}
                </span>   
                <button className='add_btn' onClick={()=>{
                    addCartHandeler();
                }}>Add To Cart</button>
            </div>
        </div>
        </div>

    </Container>
  )
}
