import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import About from './Components/About';
import Blog from './Components/Blog';
import Home from './Components/Homepage/Home';
import Products from './Components/Products';
import Menubar from './Components/Menubar';
import Signup from './Components/Signup'
import Login from './Components/Login'





function App() {
  return (
   <div>
      <BrowserRouter>
        <Menubar/>

        <Routes>

            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/blog" element = {<Blog />} />
            <Route path = "/products" element = {<Products />} />
            <Route path = "/signup" element = {<Signup />} />
            <Route path = "/login" element = {<Login />} />
        </Routes>
      
      
      </BrowserRouter>




   </div>
  );
}

export default App;