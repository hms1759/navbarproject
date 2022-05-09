import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/AboutUs/AboutUs';
import Service from './Component/Service/Service';
import SignIn from './Component/Log/SignIn/SignIn'
import Product from './Component/Product/Product';
function App() {
  return(
    
  <Router>
     <Navbar/>
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/AboutUs" element={<About/>}/>
     <Route path="/Service" element={<Service/>}/>
     <Route path="/SignIn" element={<SignIn/>}/>
     <Route path="/Product" element={<Product/>}/>
  </Routes>
    </Router>
  )
  
 
}

export default App;
