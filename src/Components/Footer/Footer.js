import React from "react";

import "./Footer.css";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
          </div>
          <div className="motto">
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
          </div>
        </div>
        <div className="footer-col">
          <h4>Our Technologies</h4>
          <ul>React Js</ul>
          <ul>Gatsby</ul>
          <ul>Next Js</ul>
          <ul>Node Js</ul>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>Social Media Marketing</ul>
          <ul>Web and Mobile App Development</ul>
          <ul>Data & Analysis</ul>
        </div>
      </div>

      <hr  />
      
      <div className="footer-bottom">
        <ul className="agreement">
          <li>Privacy Policy </li>
          <li>|</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
