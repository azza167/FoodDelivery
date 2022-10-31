import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import chicken1 from "../../assets/images/chicken1.png"
import pizza01 from "../../assets/images/pizzaaa1.png"
import beef from "../../assets/images/beef (1).png"
import './category.css'

const category = [
    {
        display: "Beef",
        imgUrl: beef,
    },
    {
        display: "Pizza",
        imgUrl: pizza01,
    },
    {
        display: "Chicken",
        imgUrl: chicken1,
    },
];

function Category() {
    return (
        <Container>
            <Row>
            <Col lg="12">
                    <div className='food_category d-flex align-items-center gap-4 justify-content-center'>
                        <button className='all_btn foodBtnActive '>All</button>
                        {category.map((item) => (
                            <button key={item.display} className="d-flex align-items-center gap-2">
                                <img src={item.imgUrl} alt="categories"
                                    width={50} height="50" />
                                {item.display}
                            </button>
                        )

                        )}

                    </div>
                </Col>

            </Row>
        </Container>
    )
}
export default Category;

/* */