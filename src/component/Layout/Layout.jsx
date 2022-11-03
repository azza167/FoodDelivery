import React from "react";
// import Store from "../../store/Store";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Routers from "../../routes/Routers";
// import Checkout from "../../pages/Checkout";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";


const Layout = () => {
 
  return (
    <div>

    <Header/>
    <Routers/>
    <button >
                    <Link to="/checkout">checkout</Link>
                  </button>
     <Footer/>

    </div>
  );
};

export default Layout;