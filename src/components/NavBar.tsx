//@ts-nocheck
import React from "react";
import { Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from "../screens/Home.tsx";
import About from "../screens/About.tsx";
import TermsAndConditions from "../screens/TermsAndConditions.tsx";
function NavBar(){
    return(
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">Home</a> */}
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/about/10" className="nav-link">About 10</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/about/20" className="nav-link">About 20</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/TermsAndConditions" className="nav-link">Terms and conditions</NavLink>
             
            </li>
          </ul>
        </div>
      </nav>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path= '/about/:id' element={<About/>} />
            <Route path= '/termsandconditions' element={<TermsAndConditions/>} />
          </Routes>
        </Router>
    );
}

export default NavBar