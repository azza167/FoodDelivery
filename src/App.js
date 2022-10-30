
import React from 'react';

import Footer from './component/Footer/footer.jsx';
import Routers from './routes/Routers';
import Header from './component/Header/header.jsx';


import Category from "./component/Category/Category";

function App() {
  return (
    <div >
    
      <Header/>
      <Routers/> 
      <Category></Category>
        
      <Footer/>

    </div>
    
    
  );
}

export default App;
