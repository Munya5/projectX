import React from "react";
import "./Landing.css";
import { Navbar } from "../../components";
import { Footer } from "../../components";

const Landing = () => (
  <div className="landing-container">
    <Navbar />
    <div className = 'Landing-text'>
    <h1>LANDING</h1>
    </div>
    <Footer />

  </div>
);

export default Landing;
