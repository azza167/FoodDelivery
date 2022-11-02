
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../component/ProuductCard/ProductCard';
 import ReactPaginate from 'react-paginate';

const AllFoods = () => {
  const [searchValue, setSearchValue] = useState("");
  const products= useSelector((state)=>state.product);
  const searchedProdut=products.filter((product) => {
    if(searchValue===""){
      return product;
    }
    if(product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    {
      return product;
    }
    else return "";
  });

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" sm="6" xs="12">
            <div>
              <input 
                type={"text"}
                placeholder="I'm looking for..."
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="6" sm="6" xs="12">
            <div>
              <select>
                <option>Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </Col>
          {searchedProdut.map((item)=>(
            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
            <ProductCard item={item}/>
            </Col>
          ))}


          {/* <div>
              <ReactPaginate
                pageCount={1}
                onPageChange={2}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div> */}

            <ReactPaginate
        nextLabel="next"
        onPageChange={()=>{}}
        pageRangeDisplayed={2}
        pageCount={2}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
        </Row>
      </Container>
    </section>
  )
}

export default AllFoods