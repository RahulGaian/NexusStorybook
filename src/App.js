import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/header";
import Footer from "./molecules/footer";
import Landingpagenew from "./Pages/landingnew";
import Overview from "./Pages/Overview/index";
import Contact from "./Pages/contact/index";
import SolutionPage from "./Pages/Solutions";
import ProductsPage from "./Pages/Products";
import PlatformPage from "./Pages/Platform";
function App() {
  return (
    <Router>
        <Header/>
          <Routes>  
      
            <Route path="/" element={<Landingpagenew/>}>
            </Route>
            <Route path="/about" element={<Overview></Overview>}>
              
            </Route>
            <Route path="/contact" element={<Contact></Contact>}>
              
            </Route>
            <Route path="/solutions/:id" element={<SolutionPage/>}>
            </Route>  

            <Route path="/products/:id" element={<ProductsPage/>}>
            </Route>  

            <Route path="/platform/:id" element={<PlatformPage/>}>
            </Route>  
            </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
