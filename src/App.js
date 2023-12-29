import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./molecules/footer";
import Landingpagenew from "./Pages/landingnew";
import Overview from "./Pages/Overview/index";
import Contact from "./Pages/contact/index";
import SolutionPage from "./Pages/Solutions";
import ProductsPage from "./Pages/Products";
import PlatformPage from "./Pages/Platform";

import InvestPages from "./Pages/invest";
import CommunityPages from "./Pages/community";
import LaunchPadPages from "./Pages/launchpad";
import { useLocation } from "react-router-dom";
function App() {

  function TopGap(){
    let location =  useLocation();
    return(
       location.pathname === "/" ? null :


      <section style={{height:"80px",width:"100vw"}}> 
      
      </section>
    
    )
  }
  return (
    <Router>
      <Header />
      <TopGap/>
      <section style={{width:"100vw",position:"relative",overflowX:"hidden"}}>
    
      <Routes>

        <Route path="/" element={<Landingpagenew />}></Route>
        <Route path="/about" element={<Overview></Overview>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/solutions/:id" element={<SolutionPage />}></Route>

        <Route path="/products/:id" element={<ProductsPage />}></Route>

        <Route path="/platform/:id" element={<PlatformPage />}></Route>

        <Route path="/invest/*" element={<InvestPages />}></Route>
        <Route path="/community/*" element={<CommunityPages />}></Route>
        <Route path="/launchpad/*" element={<LaunchPadPages />}></Route>
      </Routes>
      <Footer />
    </section>
    </Router>
  );
}

export default App;
