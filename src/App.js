
import './App.css';
import Books from './Component/Books/Books';
import Signup from './Component/Signup/Signup';


import {

  Header,

  Signin,
  Home,
  About,
  Contact,
  Footer,
  Postss
  

  

} 
from "./Component/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 
    <Header />.
    <Routes>
        

          {/* <Route path="/Signup" element={<Signup />} /> */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Books" element={< Books/>} />

          <Route path="/Home" element={<Home/>} />
          <Route path="/Postss" element={<Postss/>} />
          <Route path="/About" element={< About/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          
          </Routes>
          <Footer/>


  </>

  );
}

export default App;
