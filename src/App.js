import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Service from './component/service/Service';
import Welcome from './component/welcome/Welcome';

import Calculator from './component/calculator/Calculator';



function App() {
  return (

    // <Scroll />
     <div className="App">
      <Header/>
      <Welcome/>
       <Home/>
      <Service/>
      <Calculator/>

      <Contact/>
      <Footer/>
    </div> 
  );
}

export default App;
