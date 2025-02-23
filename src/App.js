import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import "./styles.css";
import MenuPage from "./Menu";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <h1> World's Hotel Restaurant </h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Menu">Menu</Link>
 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="Menu" element={<MenuPage/>}/>

      </Routes>

      <footer className="footer">
        <p>Hotel Restaurant</p>
      </footer>
    </Router>
  );
};

export default App;
