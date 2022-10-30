import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import chicken1 from "../../assets/images/chicken1.png"
import pizza01 from "../../assets/images/pizzaaa1.png"
import beef from "../../assets/images/beef (1).png"

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
                    <div className='food_category'>
                        <button className='all_btn'>All</button>
                        {category.map((item) => (
                            <button key={item.display}>
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