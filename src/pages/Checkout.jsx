
import React from 'react';
import { Container,Row, Col } from 'reactstrap';
// import { useSelector } from 'react-redux';


const Checkout = () => {
  return (
    <div>
    <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
    <form className="checkout__form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                     
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                   
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                   
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                   
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                   
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                   
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span></span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span></span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span></span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    
    </div>
  )
}

export default Checkout