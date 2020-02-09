import React from "react";
import logo from "./PersonalLogo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import About from "./About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigationLinks">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
