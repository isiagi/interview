import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <h1>LOGO</h1>
        </div>

        <div className="nav__link">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
