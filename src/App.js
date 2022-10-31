import React from 'react';
import Footer from './component/Footer/footer.jsx';
import Routers from './routes/Routers';
import Header from './component/Header/header.jsx';


import Home from './pages/Home.jsx';

function App() {
  return (
    <div >
    
      <Header/>
      <Routers/> 

      <Footer/>

    </div>
    
    
  );
}

export default App;
